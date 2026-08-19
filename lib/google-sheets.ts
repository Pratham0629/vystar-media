// Google Sheets Webhook Lead Integration for Vystar Media
// 100% Free Forever, Never Pauses, Never Expires!

export const GOOGLE_SHEETS_WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL || '';

export type LeadPayload = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
  created_at?: string;
};

export async function sendLeadToGoogleSheets(lead: LeadPayload) {
  if (!GOOGLE_SHEETS_WEBHOOK_URL) {
    console.warn('Google Sheets Webhook URL not set. Skipping sheet post.');
    return false;
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        company: lead.company || '',
        service: lead.service || '',
        message: lead.message,
      }),
    });
    return true;
  } catch (error) {
    console.warn('Google Sheets post notice:', error);
    return false;
  }
}
