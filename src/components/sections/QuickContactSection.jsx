import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, ShieldCheck, Clock, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY } from '../../data/mock';

export default function QuickContactSection({
  defaultService = 'Website Development',
  title = "Ready to Build Something Exceptional?",
  subtitle = "Discuss your requirements with our senior team. Get a free proposal & estimate within 24 hours."
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (defaultService) {
      setForm(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setErrorMsg('Please fill in your name, email, and phone number.');
      setStatus('error');
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone.trim())) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const submissionTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
      const res = await fetch('https://formsubmit.co/ajax/info@whitegravity.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          'Full Name': form.name,
          'Email Address': form.email,
          'Phone / WhatsApp': form.phone,
          'Service Needed': form.service,
          'Project Requirements': form.message || 'Quick consultation request via website.',
          'Submission Time (IST)': submissionTime,
          _subject: `⚡ Lead Inquiry: ${form.name} - ${form.service}`,
          _replyto: form.email,
          _cc: 'sales@whitegravity.in',
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!res.ok) {
        throw new Error(`Failed to submit: ${res.status}`);
      }

      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'form_submission',
          form_name: 'quick_contact_section',
          form_id: 'quick-contact-form',
          lead_service: form.service
        });
      }

      setStatus('success');
      setForm({
        name: '',
        email: '',
        phone: '',
        service: defaultService,
        message: ''
      });
    } catch (err) {
      console.error('Contact form error:', err);
      setErrorMsg('Submission issue encountered. Please reach us via WhatsApp or phone.');
      setStatus('error');
    }
  };

  const inputCls = "w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#009B6C] focus:ring-2 focus:ring-[#009B6C]/15 transition-all";

  return (
    <section id="contact-form-section" className="py-8 sm:py-12 bg-gradient-to-b from-white via-[#f4fbf8] to-[#e8f7f2] relative overflow-hidden border-b border-[#009B6C]/20">
      <div className="container-x max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#009B6C]/10 text-[#009B6C] border border-[#009B6C]/20 mb-2">
                <Clock className="w-3.5 h-3.5" /> 24h Response SLA
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {title}
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="space-y-2.5 pt-1">
              <a
                href="tel:+919217135322"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-[#009B6C] hover:shadow transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#e6f7f2] text-[#009B6C] flex items-center justify-center shrink-0 group-hover:bg-[#009B6C] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Call Directly</div>
                  <div className="text-sm font-extrabold text-slate-900 group-hover:text-[#009B6C] transition-colors">
                    +91 92171 35322 / +91 87964 14339
                  </div>
                </div>
              </a>

              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-tracking="whatsapp"
                data-action="whatsapp_click"
                onClick={() => {
                  if (window.dataLayer) {
                    window.dataLayer.push({
                      event: 'whatsapp_click',
                      click_location: 'quick_contact_section',
                      destination: 'whatsapp'
                    });
                  }
                }}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-emerald-500 hover:shadow transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">WhatsApp Instant Chat</div>
                  <div className="text-sm font-extrabold text-emerald-600 flex items-center gap-2">
                    <span>Chat with Technical Lead</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@whitegravity.in"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-[#009B6C] hover:shadow transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#e6f7f2] text-[#009B6C] flex items-center justify-center shrink-0 group-hover:bg-[#009B6C] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Us</div>
                  <div className="text-sm font-extrabold text-slate-900 group-hover:text-[#009B6C] transition-colors">
                    info@whitegravity.in
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#009B6C]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Headquarters</div>
                  <div className="text-xs font-semibold text-slate-800 leading-snug">
                    United States
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs font-semibold text-slate-700 pt-1">
              <div className="flex items-center gap-2 bg-white/90 p-2 rounded-xl border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#009B6C] shrink-0" />
                <span>100% NDA Protection</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 p-2 rounded-xl border border-slate-200 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-[#009B6C] shrink-0" />
                <span>Senior Developers</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border border-[#009B6C]/20 relative">

              <div className="mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    Get Free Strategy & Quote
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill the details below for a quick proposal within 24 hours.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#009B6C] flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </div>
              </div>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-emerald-900">Thank you! Inquiry received.</h4>
                      <p className="text-xs text-emerald-700 mt-0.5 leading-relaxed">
                        Our technical team will contact you within 24 hours. For urgent needs, feel free to WhatsApp us directly!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              <form id="quick-contact-form" data-tracking="lead-form" onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      Phone Number (10 Digits) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      minLength={10}
                      pattern="[0-9]{10}"
                      placeholder="e.g. 9876543210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      Service Required
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={inputCls}
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Ecommerce Development">Ecommerce Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Web App Development">Web App Development</option>
                      <option value="CRM & ERP Development">CRM & ERP Development</option>
                      <option value="Digital Marketing">Digital Marketing (SEO & Ads)</option>
                      <option value="Zoho Consultation">Zoho Consultation</option>
                      <option value="Other Technology Service">Other / Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Project Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Briefly describe your project, key features, or budget..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputCls + ' resize-none'}
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 rounded-full font-extrabold text-white bg-[#009B6C] hover:bg-[#00825a] active:scale-[0.99] transition-all duration-200 shadow-md shadow-[#009B6C]/20 disabled:opacity-70 text-sm sm:text-base cursor-pointer flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-slate-400 mt-2">
                    🔒 100% Privacy &amp; NDA protected. Zero spam.
                  </p>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
