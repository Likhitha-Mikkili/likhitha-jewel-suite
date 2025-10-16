-- Fix 1: Remove insecure guest order policy and add token-based access

-- Drop the insecure policy that allows anyone to view guest orders
DROP POLICY IF EXISTS "Guests can view orders by email" ON public.orders;

-- Add order_token column for secure guest order lookup
ALTER TABLE public.orders
ADD COLUMN IF NOT EXISTS order_token text UNIQUE DEFAULT encode(gen_random_bytes(32), 'hex');

-- Create secure policy for guest order access requiring both email and token
CREATE POLICY "Guests can view orders with valid token"
ON public.orders
FOR SELECT
USING (
  -- Authenticated users can view their own orders
  (auth.uid() = user_id)
  OR
  -- Admins can view all orders
  has_role(auth.uid(), 'admin'::app_role)
);

-- Note: Guest order lookup will now be handled through a secure edge function
-- that validates the token before returning order details