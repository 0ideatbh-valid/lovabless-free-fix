-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  business_name VARCHAR,
  full_name VARCHAR,
  email VARCHAR NOT NULL,
  website_social VARCHAR,
  message TEXT
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" 
ON public.contact_submissions 
FOR INSERT 
TO anon 
WITH CHECK (true);