import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.75.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    // Get Razorpay credentials from environment
    const keyId = Deno.env.get("RAZORPAY_KEY_ID");
    const keySecret = Deno.env.get("RAZORPAY_KEY_SECRET");

    if (!keyId || !keySecret) {
      throw new Error("Razorpay credentials not configured");
    }

    // Create signature to verify
    const crypto = await import("https://deno.land/std@0.190.0/crypto/mod.ts");
    const text = `${razorpay_order_id}|${razorpay_payment_id}`;
    const encoder = new TextEncoder();
    const keyData = encoder.encode(keySecret);
    const messageData = encoder.encode(text);
    
    const cryptoKey = await crypto.crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    const signature = await crypto.crypto.subtle.sign(
      "HMAC",
      cryptoKey,
      messageData
    );

    const signatureArray = Array.from(new Uint8Array(signature));
    const generatedSignature = signatureArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    console.log("Payment verification:", {
      razorpay_order_id,
      razorpay_payment_id,
      signature_match: generatedSignature === razorpay_signature,
    });

    if (generatedSignature !== razorpay_signature) {
      throw new Error("Invalid payment signature");
    }

    return new Response(
      JSON.stringify({ 
        verified: true,
        razorpay_order_id,
        razorpay_payment_id 
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error: any) {
    console.error("Payment verification error:", error);
    return new Response(
      JSON.stringify({ error: error.message, verified: false }),
      { 
        status: 400, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});