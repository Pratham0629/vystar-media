-- Complete Vystar Media Database Schema & Initial Seed Data

-- 1. Contact Form Submissions Table
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

-- 2. AI Audit Tool Submissions Table
CREATE TABLE IF NOT EXISTS ai_audit_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name text NOT NULL,
  website_url text,
  industry text NOT NULL,
  goal text NOT NULL,
  overall_score integer NOT NULL,
  seo_score integer NOT NULL,
  brand_score integer NOT NULL,
  ad_roas_score integer NOT NULL,
  ai_readiness_score integer NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

-- 3. AI Chatbot Leads Table
CREATE TABLE IF NOT EXISTS chat_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_info text NOT NULL,
  last_query text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- 4. Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  quote text NOT NULL,
  avatar text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- 5. Team Members Table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  avatar text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- INDEXES
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS ai_audit_submissions_created_at_idx ON ai_audit_submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS chat_leads_created_at_idx ON chat_leads (created_at DESC);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_audit_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Allow Public (anon) to insert submissions into lead tables
DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions" ON contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_insert_ai_audit_submissions" ON ai_audit_submissions;
CREATE POLICY "anon_insert_ai_audit_submissions" ON ai_audit_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_insert_chat_leads" ON chat_leads;
CREATE POLICY "anon_insert_chat_leads" ON chat_leads FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Allow Public (anon) to read testimonials & team members
DROP POLICY IF EXISTS "anon_read_testimonials" ON testimonials;
CREATE POLICY "anon_read_testimonials" ON testimonials FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_read_team_members" ON team_members;
CREATE POLICY "anon_read_team_members" ON team_members FOR SELECT TO anon, authenticated USING (true);

-- SEED DATA: Insert Initial Team & Testimonials
INSERT INTO team_members (name, role, avatar, order_index) VALUES
  ('Pratham Rana', 'Founder & Chief Strategist', '/images/team/WhatsApp_Image_2026-07-22_at_10.41.32_AM.jpeg', 1),
  ('Mayank Rana', 'Digital Marketing Consultant', '/images/team/WhatsApp_Image_2026-07-22_at_9.54.58_AM.jpeg', 2),
  ('Dhurba Sikdar', 'Creative Director', '/images/team/WhatsApp_Image_2026-07-22_at_9.58.45_AM.jpeg', 3)
ON CONFLICT DO NOTHING;

INSERT INTO testimonials (name, role, quote, avatar) VALUES
  ('Pratham Rana', 'Founder & Chief Strategist', 'Our mission at Vystar Media is to blend data-driven marketing with world-class design, ensuring every client achieves measurable and transformational growth.', '/images/team/WhatsApp_Image_2026-07-22_at_10.41.32_AM.jpeg'),
  ('Mayank Rana', 'Digital Marketing Consultant', 'By combining performance PPC, SEO, and AI automation, we turn traffic into predictable revenue streams for scaling enterprises.', '/images/team/WhatsApp_Image_2026-07-22_at_9.54.58_AM.jpeg'),
  ('Dhurba Sikdar', 'Creative Director', 'Crafting distinct visual identities and high-converting creative assets is what makes our partner brands stand out in crowded markets.', '/images/team/WhatsApp_Image_2026-07-22_at_9.58.45_AM.jpeg')
ON CONFLICT DO NOTHING;
