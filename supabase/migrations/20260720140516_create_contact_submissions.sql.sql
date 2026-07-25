/*
# Create contact_submissions table (single-tenant, no auth)

1. Purpose
   Stores every enquiry submitted through the website contact form so the
   Vystar Media team can review leads, follow up, and track volume over time.

2. New Tables
   - `contact_submissions`
     - `id` (uuid, primary key, auto-generated)
     - `name` (text, not null) — full name of the enquirer
     - `email` (text, not null) — contact email
     - `phone` (text, not null) — contact phone number
     - `company` (text, nullable) — optional company name
     - `message` (text, not null) — the enquiry body
     - `status` (text, default 'new') — lead status for internal tracking
     - `created_at` (timestamptz, default now()) — submission timestamp

3. Indexes
   - `contact_submissions_created_at_idx` on `created_at` for chronological queries
   - `contact_submissions_status_idx` on `status` for filtering by lead status

4. Security
   - Enable RLS on `contact_submissions`.
   - INSERT policy for `anon, authenticated` so the public site (anon key) can
     submit the contact form without signing in. The data is intentionally
     public-write (a lead form) — documented here.
   - No SELECT / UPDATE / DELETE policies for anon: only backend/service-role
     access can read or manage submissions, so visitor data stays private.

5. Notes
   - Single-tenant app, no sign-in screen, so anon must be able to INSERT.
   - The service role key (server-side only) bypasses RLS for admin reads.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
  ON contact_submissions (created_at DESC);

CREATE INDEX IF NOT EXISTS contact_submissions_status_idx
  ON contact_submissions (status);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
