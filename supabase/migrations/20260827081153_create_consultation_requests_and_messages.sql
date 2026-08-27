/*
# Create enquiry tables for Bilpam Shield Security website

1. New Tables
- `consultation_requests`: stores security consultation enquiry submissions from the website form.
  Fields: id, name, organisation, phone, email, service_required, location_area, preferred_contact, 
  security_requirement, preferred_time, urgency, status, assigned_to, notes, created_at, updated_at.
  Status values: new, contacted, qualified, consultation, proposal, won, lost.
- `contact_messages`: stores general contact form messages (shorter, non-service-specific).
  Fields: id, name, email, phone, message, created_at.

2. Security
- Enable RLS on both tables.
- Allow anon + authenticated INSERT only (public can submit enquiries but cannot read them).
- No SELECT/UPDATE/DELETE for anon (enquiries are private to Bilpam Shield staff).
- Authenticated users (admin) can SELECT/UPDATE all enquiries for lead management.

3. Notes
- This is a public-facing enquiry form, so anon INSERT is required.
- Enquiry data is private — only authenticated admin staff can read or manage leads.
- No sensitive operational security information is collected (per PRD requirement).
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  organisation text,
  phone text NOT NULL,
  email text NOT NULL,
  service_required text NOT NULL,
  location_area text,
  preferred_contact text DEFAULT 'phone',
  security_requirement text,
  preferred_time text,
  urgency text DEFAULT 'normal',
  status text NOT NULL DEFAULT 'new',
  assigned_to text,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Public can INSERT consultation requests (no read access)
DROP POLICY IF EXISTS "anon_insert_consultation_requests" ON consultation_requests;
CREATE POLICY "anon_insert_consultation_requests"
ON consultation_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Authenticated admin staff can SELECT all consultation requests
DROP POLICY IF EXISTS "auth_select_consultation_requests" ON consultation_requests;
CREATE POLICY "auth_select_consultation_requests"
ON consultation_requests FOR SELECT
TO authenticated USING (true);

-- Authenticated admin staff can UPDATE consultation requests (lead management)
DROP POLICY IF EXISTS "auth_update_consultation_requests" ON consultation_requests;
CREATE POLICY "auth_update_consultation_requests"
ON consultation_requests FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

-- Public can INSERT contact messages (no read access)
DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Authenticated admin staff can SELECT contact messages
DROP POLICY IF EXISTS "auth_select_contact_messages" ON contact_messages;
CREATE POLICY "auth_select_contact_messages"
ON contact_messages FOR SELECT
TO authenticated USING (true);

-- Authenticated admin staff can DELETE contact messages
DROP POLICY IF EXISTS "auth_delete_contact_messages" ON contact_messages;
CREATE POLICY "auth_delete_contact_messages"
ON contact_messages FOR DELETE
TO authenticated USING (true);

-- Index for sorting enquiries by most recent
CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at ON consultation_requests (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_status ON consultation_requests (status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages (created_at DESC);
