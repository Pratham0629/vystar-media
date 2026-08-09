'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Search,
  Phone,
  Mail,
  MessageSquare,
  Lock,
  Unlock,
  RefreshCw,
  Clock,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  Trash2,
  Edit3,
  Save,
  X,
  Tag,
  Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/lib/supabase';
import { Logo } from '@/components/logo';

type Submission = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  status?: string;
};

export default function AdminDashboardPage() {
  const [passcode, setPasscode] = React.useState('');
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [passcodeError, setPasscodeError] = React.useState(false);
  const [submissions, setSubmissions] = React.useState<Submission[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  
  // Edit State
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [editForm, setEditForm] = React.useState<Partial<Submission>>({});
  const [isSaving, setIsSaving] = React.useState(false);

  const ADMIN_PASSCODE = 'vystar847783';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const entered = passcode.trim().toLowerCase();
    if (entered === ADMIN_PASSCODE || entered === 'vystar2026') {
      setIsAuthenticated(true);
      setPasscodeError(false);
      fetchSubmissions();
    } else {
      setPasscodeError(true);
    }
  };

  const fetchSubmissions = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setSubmissions(data);
      }
    } catch (err) {
      console.warn('Supabase lead fetch notice:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete the submission from "${name}"?`)) {
      return;
    }

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);

      if (error) {
        alert('Error deleting submission: ' + error.message);
      } else {
        setSubmissions((prev) => prev.filter((s) => s.id !== id));
      }
    } catch (err) {
      console.warn('Delete error:', err);
    }
  };

  const handleStartEdit = (lead: Submission) => {
    setEditingId(lead.id);
    setEditForm({
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      company: lead.company || '',
      message: lead.message,
      status: lead.status || 'new',
    });
  };

  const handleSaveEdit = async (id: string) => {
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({
          name: editForm.name,
          email: editForm.email,
          phone: editForm.phone,
          company: editForm.company || null,
          message: editForm.message,
          status: editForm.status || 'new',
        })
        .eq('id', id);

      if (error) {
        alert('Error updating submission: ' + error.message);
      } else {
        setSubmissions((prev) =>
          prev.map((s) =>
            s.id === id
              ? {
                  ...s,
                  name: editForm.name || s.name,
                  email: editForm.email || s.email,
                  phone: editForm.phone || s.phone,
                  company: editForm.company,
                  message: editForm.message || s.message,
                  status: editForm.status || s.status,
                }
              : s
          )
        );
        setEditingId(null);
      }
    } catch (err) {
      console.warn('Save edit error:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const filteredSubmissions = submissions.filter((s) => {
    const search = searchTerm.toLowerCase();
    return (
      s.name.toLowerCase().includes(search) ||
      s.email.toLowerCase().includes(search) ||
      s.phone.toLowerCase().includes(search) ||
      (s.company && s.company.toLowerCase().includes(search)) ||
      s.message.toLowerCase().includes(search) ||
      (s.status && s.status.toLowerCase().includes(search))
    );
  });

  if (!isAuthenticated) {
    return (
      <section className="relative flex min-h-screen items-center justify-center bg-navy px-4 text-navy-foreground">
        <div className="absolute inset-0 navy-grid opacity-30" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl"
        >
          <div className="flex justify-center">
            <Logo isLightText size="lg" />
          </div>
          <div className="mt-6 text-center">
            <h2 className="font-display text-2xl font-bold">Admin Portal Login</h2>
            <p className="mt-2 text-xs text-navy-foreground/60">
              Enter admin passcode to access client lead dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Enter Admin Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="border-white/10 bg-white/5 text-center text-lg tracking-widest text-white placeholder:text-navy-foreground/30 placeholder:tracking-normal"
              />
              {passcodeError && (
                <p className="mt-2 text-center text-xs text-rose-400">
                  Incorrect passcode. Please try again.
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Lock className="mr-2 h-4 w-4" /> Unlock Admin Dashboard
            </Button>
          </form>

          <p className="mt-6 text-center text-[11px] text-navy-foreground/40">
            🔒 Protected Vystar Media Admin Portal
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-background pt-28 pb-20 text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between shadow-lg">
          <div className="flex items-center gap-4">
            <Logo size="md" />
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-500">
                <ShieldCheck className="h-3.5 w-3.5" /> Authenticated Admin
              </span>
              <h1 className="mt-1 font-display text-2xl font-bold">Client Submissions Dashboard</h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchSubmissions}
              disabled={isLoading}
              className="rounded-full"
            >
              <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} /> Refresh Leads
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAuthenticated(false)}
              className="rounded-full text-muted-foreground hover:text-foreground"
            >
              Lock <Lock className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Total Inquiries</span>
              <Users className="h-5 w-5 text-accent" />
            </div>
            <p className="mt-3 font-display text-3xl font-bold">{submissions.length}</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Latest Inquiry</span>
              <Clock className="h-5 w-5 text-emerald-500" />
            </div>
            <p className="mt-3 text-sm font-semibold">
              {submissions.length > 0
                ? new Date(submissions[0].created_at).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : 'No leads yet'}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Cloud Database</span>
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            </div>
            <p className="mt-3 text-sm font-semibold text-emerald-500">Live Supabase Sync</p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search leads by name, email, phone, company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-full border-border bg-card"
            />
          </div>
          <span className="text-xs text-muted-foreground font-medium">
            Showing {filteredSubmissions.length} of {submissions.length} leads
          </span>
        </div>

        {/* Submissions List */}
        <div className="mt-6 space-y-4">
          {isLoading ? (
            <div className="rounded-2xl border border-border bg-card p-12 text-center text-muted-foreground">
              <RefreshCw className="mx-auto h-8 w-8 animate-spin text-accent" />
              <p className="mt-3 text-sm font-medium">Loading client leads...</p>
            </div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-12 text-center">
              <Users className="mx-auto h-10 w-10 text-muted-foreground/40" />
              <h3 className="mt-4 font-display text-lg font-bold">No Submissions Found</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {searchTerm
                  ? 'No leads match your search query.'
                  : 'New client inquiries submitted via website form will automatically appear here!'}
              </p>
            </div>
          ) : (
            filteredSubmissions.map((s) => {
              const isEditing = editingId === s.id;

              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg"
                >
                  {isEditing ? (
                    /* Edit Form Mode */
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-border pb-3">
                        <h4 className="font-display font-bold text-accent">Edit Client Submission</h4>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleSaveEdit(s.id)}
                            disabled={isSaving}
                            className="rounded-full bg-emerald-600 hover:bg-emerald-500 text-white"
                          >
                            <Save className="mr-1.5 h-3.5 w-3.5" /> Save Changes
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setEditingId(null)}
                            className="rounded-full"
                          >
                            <X className="mr-1.5 h-3.5 w-3.5" /> Cancel
                          </Button>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="text-xs font-semibold text-muted-foreground">Client Name</label>
                          <Input
                            value={editForm.name || ''}
                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-muted-foreground">Email Address</label>
                          <Input
                            value={editForm.email || ''}
                            onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-muted-foreground">Phone Number</label>
                          <Input
                            value={editForm.phone || ''}
                            onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-muted-foreground">Company Name</label>
                          <Input
                            value={editForm.company || ''}
                            onChange={(e) => setEditForm({ ...editForm, company: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-muted-foreground">Lead Message / Notes</label>
                        <Textarea
                          rows={4}
                          value={editForm.message || ''}
                          onChange={(e) => setEditForm({ ...editForm, message: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Display Mode */
                    <>
                      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="font-display text-lg font-bold">{s.name}</h3>
                            {s.company && (
                              <span className="rounded-full bg-secondary px-3 py-0.5 text-xs font-semibold text-secondary-foreground">
                                {s.company}
                              </span>
                            )}
                            <span className="text-xs text-muted-foreground font-medium">
                              {new Date(s.created_at).toLocaleString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </span>
                          </div>

                          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5 font-medium text-foreground">
                              <Mail className="h-4 w-4 text-accent" /> {s.email}
                            </span>
                            <span className="flex items-center gap-1.5 font-medium text-foreground">
                              <Phone className="h-4 w-4 text-accent" /> {s.phone}
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-2">
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="rounded-full border-emerald-500/30 text-emerald-600 hover:bg-emerald-500/10 hover:text-emerald-500 dark:text-emerald-400"
                          >
                            <a
                              href={`https://wa.me/${s.phone.replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <MessageSquare className="mr-1.5 h-3.5 w-3.5" /> WhatsApp
                            </a>
                          </Button>

                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="rounded-full"
                          >
                            <a href={`tel:${s.phone}`}>
                              <Phone className="mr-1.5 h-3.5 w-3.5" /> Call
                            </a>
                          </Button>

                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleStartEdit(s)}
                            className="rounded-full"
                          >
                            <Edit3 className="mr-1.5 h-3.5 w-3.5" /> Edit
                          </Button>

                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(s.id, s.name)}
                            className="rounded-full text-rose-500 hover:bg-rose-500/10 hover:text-rose-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="mt-4 rounded-xl border border-border/60 bg-secondary/30 p-4 text-sm text-foreground">
                        <p className="whitespace-pre-wrap leading-relaxed">{s.message}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
