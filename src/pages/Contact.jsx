import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY } from '../data/mock';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// Step 1: Sign up at https://www.emailjs.com (free plan: 200 emails/month)
// Step 2: Create an Email Service (connect your Gmail/Outlook account)
// Step 3: Create an Email Template with these variables:
//         {{from_name}}, {{from_email}}, {{phone}}, {{service}}, {{message}}
//         Set "To Email" as: info@whitegravity.in
// Step 4: Copy your Service ID, Template ID, and Public Key below
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  // Compute fill percentage
  const fields = [form.name, form.email, form.phone, form.service, form.message];
  const filled = fields.filter(Boolean).length;
  const fillPct = Math.round((filled / fields.length) * 100);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const templateParams = {
      from_name:    form.name,
      from_email:   form.email,
      phone:        form.phone || 'N/A',
      service:      form.service || 'General Inquiry',
      message:      form.message,
      to_email:     'info@whitegravity.in',
      reply_to:     form.email,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMsg('Failed to send message. Please try again or email us directly at info@whitegravity.in');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 8000);
    }
  };

  const inputCls = "w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#009B6C] focus:ring-2 focus:ring-[#009B6C]/10 transition-all";

  return (
    <>
      <section className="bg-[#009B6C] pt-28 pb-10 md:pt-32 lg:pt-36 md:pb-14 text-center px-4">
        <div className="container-x">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#bcf5d6] text-slate-900 font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] mx-auto mb-6">
            <Mail className="w-4 h-4" /> CONTACT US
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold text-white mb-4 tracking-tight">
            Get in Touch with White Gravity Web Solutions
          </h1>
          <p className="text-emerald-50 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Have a project in mind? Let's talk. Book a free strategy call or drop us a message.
          </p>
        </div>
      </section>
      <section className="py-10 md:py-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/60 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* ── LEFT PANEL ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-4 bg-[#e6f7f2] rounded-2xl p-8 md:p-10 flex flex-col gap-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Let's Build Something{' '}
                  <span className="text-[#009B6C]">Exceptional Together</span>
                </h2>
                <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
                  Have a project concept or need custom branding consultation? Drop your message and our expert developers will contact you in under 24 hours.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {/* Call Support */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#009B6C] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#009B6C] text-sm">Call Support</h4>
                    <a href="tel:+919217135322" className="block text-slate-700 text-sm hover:text-[#009B6C] transition-colors">+91-921-713-5322</a>
                    <a href="tel:+918796414339" className="block text-slate-700 text-sm hover:text-[#009B6C] transition-colors">+91-879-641-4339</a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#009B6C] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#009B6C] text-sm">Email Address</h4>
                    <a href="mailto:sales@whitegravity.in" className="block text-slate-700 text-sm hover:text-[#009B6C] transition-colors">sales@whitegravity.in</a>
                    <a href="mailto:info@whitegravity.in" className="block text-slate-700 text-sm hover:text-[#009B6C] transition-colors">info@whitegravity.in</a>
                  </div>
                </div>

                {/* Main Office */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#009B6C] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#009B6C] text-sm">Main Office</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">LG-04, Dallas 1 Business Park<br />H-202, Sector 63, Noida, U.P - 201301</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT PANEL: FORM ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-8 bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_30px_-8px_rgba(0,0,0,0.1)] border border-slate-100"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-slate-900">Send An Enquiry</h2>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{fillPct}% FILLED</span>
              </div>
              <p className="text-slate-500 text-sm mb-8">Complete the details below and we will contact you shortly.</p>

              {/* Progress bar */}
              <div className="w-full h-1 bg-slate-100 rounded-full mb-8">
                <div className="h-1 bg-[#009B6C] rounded-full transition-all duration-500" style={{ width: `${fillPct}%` }} />
              </div>

              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputCls}
                    placeholder="Your Name"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputCls}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputCls}
                      placeholder="e.g., +91 99999 99999"
                    />
                  </div>
                </div>

                {/* Service Required */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service Required</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={inputCls}
                  >
                    <option value="">Website Design &amp; Development</option>
                    <option>Custom Software Development</option>
                    <option>Website Development</option>
                    <option>Ecommerce Development</option>
                    <option>Mobile App Development</option>
                    <option>Web App Development</option>
                    <option>CRM &amp; ERP Development</option>
                    <option>Digital Marketing</option>
                    <option>Meta Ads &amp; Google Ads</option>
                    <option>Zoho Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Message / Requirements</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className={inputCls + ' resize-none'}
                    placeholder="Briefly describe your project details..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl font-bold text-white bg-[#009B6C] hover:bg-[#007d56] active:scale-95 transition-all duration-200 shadow-md disabled:opacity-70 text-base"
                >
                  {status === 'loading' ? 'Sending...' : 'Submit Enquiry'}
                </button>

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-[#009B6C] font-bold bg-[#e6f7f2] px-4 py-3 rounded-lg text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" /> Message sent successfully to info@whitegravity.in! We'll get back to you within 24 hours.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-2 text-red-600 font-semibold bg-red-50 px-4 py-3 rounded-lg text-sm border border-red-100">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" /> {errorMsg}
                  </motion.div>
                )}

              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="container-x pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          <iframe title="map" src="https://www.google.com/maps?q=Sector+63+Noida&output=embed" className="w-full h-[300px] md:h-[420px] border-0" loading="lazy" />
        </motion.div>
      </section>

      {/* Direct Call Box */}
      <section className="container-x pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#009B6C] to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl max-w-4xl mx-auto relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-[50px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black opacity-10 rounded-full blur-[50px] translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Prefer a Direct Call?</h2>
            <p className="text-emerald-100 text-lg mb-1 font-medium">Our team is available Monday through Saturday.</p>
            <p className="text-emerald-100 text-lg mb-8 font-medium">Call us now for an instant consultation.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a href="tel:+919217135322" className="flex items-center gap-3 bg-white text-[#009B6C] px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg w-full sm:w-auto justify-center group">
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" /> +91-9217135322
              </a>
              <a href="mailto:sales@whitegravity.in" className="flex items-center gap-3 bg-[#065b46] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#044a39] transition-colors shadow-lg border border-emerald-500/30 w-full sm:w-auto justify-center group">
                <Mail className="w-6 h-6 group-hover:-rotate-12 transition-transform" /> sales@whitegravity.in
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
