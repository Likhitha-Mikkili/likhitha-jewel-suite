import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, order_id } = await req.json();
    
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "The Fashion Edit.in <onboarding@resend.dev>",
        to: [email],
        subject: "Order Confirmation - The Fashion Edit.in",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #B98856;">Thank you for your order!</h1>
            <p>Your order has been confirmed and is being processed.</p>
            <p><strong>Order ID:</strong> ${order_id}</p>
            <p>You will receive another email once your order has been shipped.</p>
            <hr style="border: 1px solid #e5e5e5; margin: 20px 0;">
            <p style="color: #666; font-size: 14px;">
              If you have any questions, please contact us at mikkililikhitha4353@gmail.com
            </p>
          </div>
        `,
      }),
    });

    const emailData = await emailResponse.json();
    
    if (!emailResponse.ok) {
      throw new Error(`Failed to send email: ${JSON.stringify(emailData)}`);
    }

    console.log("Order confirmation email sent:", emailData);

    return new Response(JSON.stringify({ success: true }), { 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    });
  } catch (error: any) {
    console.error("Error sending order confirmation:", error);
    return new Response(
      JSON.stringify({ error: error.message }), 
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
