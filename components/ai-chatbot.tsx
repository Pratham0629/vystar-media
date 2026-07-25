'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  X,
  Send,
  Sparkles,
  RefreshCw,
  User,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabase';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: string[];
  timestamp: string;
  isLeadForm?: boolean;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: "Hello! I'm Vystar AI, your digital growth assistant. How can I help expand your brand today?",
    options: [
      '⚡ Free Marketing Audit',
      '🎯 Explore Services & Pricing',
      '📈 How can AI grow my revenue?',
      '📞 Book a 1-on-1 Consultation',
    ],
    timestamp: 'Just now',
  },
];

export function AIChatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const [leadCaptured, setLeadCaptured] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      generateBotResponse(query);
      setIsTyping(false);
    }, 900);
  };

  const generateBotResponse = (userQuery: string) => {
    const q = userQuery.toLowerCase();
    let replyText = '';
    let replyOptions: string[] | undefined = undefined;

    if (q.includes('audit') || q.includes('free marketing audit')) {
      replyText =
        'Great choice! You can run our interactive AI Marketing Audit right on this page! Enter your business details above to get instant scores for SEO, PPC, and Brand Strength.';
      replyOptions = ['Take me to AI Audit Tool', 'What services do you offer?', 'Book Consultation'];
    } else if (q.includes('service') || q.includes('pricing') || q.includes('explore services')) {
      replyText =
        'Vystar Media provides 5 core pillars: Digital Marketing (SEO/PPC/Social), Traditional Advertising, Brand Identity, Creative Studio (Video/Motion/Design), and AI Business Automation.';
      replyOptions = ['Tell me about AI Automation', 'See Pricing Plans', 'Talk to Pratham & Team'];
    } else if (q.includes('ai') || q.includes('revenue') || q.includes('grow')) {
      replyText =
        'Our AI solutions automate lead response from hours to seconds, create high-converting copy, and optimize ad targeting in real-time. Clients see up to 3.5x higher conversions!';
      replyOptions = ['Get AI Marketing Audit', 'Schedule Strategy Call'];
    } else if (q.includes('book') || q.includes('consultation') || q.includes('talk') || q.includes('call')) {
      replyText =
        "Awesome! Our Chief Strategist Pratham Rana and Digital Marketing Lead Mayank Rana are ready to map out your growth strategy. Leave your email or phone below so we can reach out directly!";
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isLeadForm: true,
        },
      ]);
      return;
    } else {
      replyText =
        `Thank you for your message! Vystar Media specializes in scaling brands with data-driven strategy and high-impact design. Would you like a free consultation or an AI audit?`;
      replyOptions = ['⚡ Free Marketing Audit', '📞 Book Consultation', 'Explore Services'];
    }

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      sender: 'bot',
      text: replyText,
      options: replyOptions,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, botMsg]);
  };

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const contactInfo = formData.get('contactInfo') as string;
    if (!contactInfo) return;

    setLeadCaptured(true);
    const lastQuery = messages[messages.length - 1]?.text || 'General Inquiry';

    try {
      await supabase.from('chat_leads').insert({
        contact_info: contactInfo,
        last_query: lastQuery,
      });
    } catch (err) {
      console.error('Database chat lead error:', err);
    }

    const botMsg: Message = {
      id: Date.now().toString(),
      sender: 'bot',
      text: `🎉 Thank you! We have received your contact detail (${contactInfo}). Pratham Rana or Mayank Rana will get back to you within 2 hours!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'relative flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300',
              isOpen
                ? 'bg-destructive text-destructive-foreground rotate-90'
                : 'bg-gradient-to-r from-accent via-amber-500 to-accent text-accent-foreground ring-4 ring-accent/20'
            )}
            aria-label="Toggle Vystar AI Chatbot"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <>
                <Bot className="h-7 w-7" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-background"></span>
                </span>
              </>
            )}
          </Button>
        </motion.div>
      </div>

      {/* Chat Window Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 z-50 w-[92vw] max-w-[400px] overflow-hidden rounded-2xl border border-white/15 bg-navy-950/95 text-foreground shadow-2xl backdrop-blur-xl sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-navy-900/80 px-4 py-3.5">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-amber-500 text-navy-950 font-bold shadow-inner">
                  <Bot className="h-5 w-5" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-navy-900" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-display font-bold text-sm text-navy-foreground">Vystar AI</h3>
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold text-accent border border-accent/30">
                      ONLINE
                    </span>
                  </div>
                  <p className="text-[11px] text-navy-foreground/60">Digital Marketing & Growth Assistant</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMessages(INITIAL_MESSAGES)}
                  title="Reset conversation"
                  className="h-8 w-8 text-navy-foreground/60 hover:text-navy-foreground hover:bg-white/10"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-navy-foreground/60 hover:text-navy-foreground hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-[360px] overflow-y-auto p-4 space-y-4 text-sm bg-navy-950/60">
              {messages.map((m) => (
                <div key={m.id} className={cn('flex flex-col gap-1', m.sender === 'user' ? 'items-end' : 'items-start')}>
                  <div
                    className={cn(
                      'max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed shadow-sm',
                      m.sender === 'user'
                        ? 'bg-accent text-accent-foreground font-medium rounded-br-none'
                        : 'bg-navy-900/90 text-navy-foreground border border-white/10 rounded-bl-none'
                    )}
                  >
                    {m.text}
                  </div>

                  {m.isLeadForm && !leadCaptured && (
                    <form onSubmit={handleLeadSubmit} className="mt-2 w-full max-w-[88%] space-y-2 rounded-xl border border-accent/40 bg-navy-900 p-3 shadow-lg">
                      <p className="text-xs font-semibold text-accent">Leave your details for immediate response:</p>
                      <Input
                        name="contactInfo"
                        placeholder="Email or Phone Number"
                        required
                        className="h-8 text-xs bg-navy-950 border-white/15 text-navy-foreground"
                      />
                      <Button type="submit" size="sm" className="w-full h-8 text-xs bg-accent text-navy-950 font-bold hover:bg-accent/90">
                        Submit & Request Call
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </form>
                  )}

                  {m.options && m.options.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                      {m.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            if (opt.includes('Take me to AI Audit Tool')) {
                              window.location.href = '/ai-audit';
                              setIsOpen(false);
                              return;
                            }
                            handleSend(opt);
                          }}
                          className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-all hover:bg-accent hover:text-navy-950"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="text-[10px] text-navy-foreground/40 px-1">{m.timestamp}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-navy-foreground/60 text-xs py-1">
                  <Bot className="h-4 w-4 animate-bounce text-accent" />
                  <span>Vystar AI is typing...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="border-t border-white/10 bg-navy-900/90 p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Vystar AI anything..."
                  className="h-9 text-xs bg-navy-950 border-white/15 text-navy-foreground placeholder:text-navy-foreground/40 focus-visible:ring-accent"
                />
                <Button type="submit" size="icon" className="h-9 w-9 bg-accent text-navy-950 hover:bg-accent/90 shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
