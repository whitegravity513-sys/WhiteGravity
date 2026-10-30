import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Design & Development',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const fields = [form.name, form.email, form.phone, form.service, form.message];
  const filled = fields.filter(Boolean).length;
  const fillPct = Math.round((filled / fields.length) * 100);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setErrorMsg('Please fill in all required fields.');
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

    const isEmailJSConfigured =
      EMAILJS_SERVICE_ID && !EMAILJS_SERVICE_ID.includes('YOUR_') && !EMAILJS_SERVICE_ID.includes('your_') &&
      EMAILJS_TEMPLATE_ID && !EMAILJS_TEMPLATE_ID.includes('YOUR_') && !EMAILJS_TEMPLATE_ID.includes('your_') &&
      EMAILJS_PUBLIC_KEY && !EMAILJS_PUBLIC_KEY.includes('YOUR_') && !EMAILJS_PUBLIC_KEY.includes('your_');

    try {
      if (isEmailJSConfigured) {
        const templateParams = {
          from_name:  form.name,
          from_email: form.email,
          phone:      form.phone || 'N/A',
          service:    form.service || 'Website Design & Development',
          message:    form.message,
          to_email:   'info@whitegravitycrm.com',
          reply_to:   form.email,
        };

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      } else {
        const submissionTime = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
        const res = await fetch('https://formsubmit.co/ajax/info@whitegravitycrm.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            'Full Name': form.name,
            'Email Address': form.email,
            'Phone Number': form.phone,
            'Service Required': form.service || 'Website Design & Development',
            'Message / Requirements': form.message || 'No additional details provided.',
            'Submission Time (CST)': submissionTime,
            _subject: `New Contact Enquiry: ${form.name} - ${form.service || 'Website Design & Development'}`,
            _replyto: form.email,
            _cc: 'info@whitegravitycrm.com',
            _template: 'table',
            _captcha: 'false',
          }),
        });

        if (!res.ok) {
          throw new Error(`Failed to send with status ${res.status}`);
        }
      }

      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'form_submission',
          form_name: 'contact_page',
          form_id: 'contact-page-form',
          lead_service: form.service
        });
      }

      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: 'Website Design & Development', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('Email send error:', err);
      if (isEmailJSConfigured) {
        try {
          const submissionTime = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
          await fetch('https://formsubmit.co/ajax/info@whitegravitycrm.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              'Full Name': form.name,
              'Email Address': form.email,
              'Phone Number': form.phone,
              'Service Required': form.service || 'Website Design & Development',
              'Message / Requirements': form.message || 'No additional details provided.',
              'Submission Time (CST)': submissionTime,
              _subject: `New Contact Enquiry: ${form.name} - ${form.service || 'Website Design & Development'}`,
              _replyto: form.email,
              _cc: 'info@whitegravitycrm.com',
              _template: 'table',
              _captcha: 'false',
            }),
          });

          if (window.dataLayer) {
            window.dataLayer.push({
              event: 'form_submission',
              form_name: 'contact_page',
              form_id: 'contact-page-form',
              lead_service: form.service
            });
          }

          setStatus('success');
          setForm({ name: '', email: '', phone: '', service: 'Website Design & Development', message: '' });
          setTimeout(() => setStatus('idle'), 6000);
          return;
        } catch (fallbackErr) {
          console.error('Fallback error:', fallbackErr);
        }
      }
      setErrorMsg('Failed to send message. Please try again or email us directly at info@whitegravitycrm.com');
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

            {}
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
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#009B6C] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#009B6C] text-sm">Call Support</h4>
                    <a href="tel:+14694614710" className="block text-slate-700 text-sm hover:text-[#009B6C] transition-colors">+1 (469) 461-4710</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#009B6C] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#009B6C] text-sm">Email Address</h4>
                    <a href="mailto:info@whitegravitycrm.com" className="block text-slate-700 text-sm hover:text-[#009B6C] transition-colors">info@whitegravitycrm.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#009B6C] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#009B6C] text-sm">Main Office</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">Dallas, TX<br />United States (CST / UTC-6)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-8 bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_30px_-8px_rgba(0,0,0,0.1)] border border-slate-100"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-slate-900">Send An Enquiry</h2>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{fillPct}% FILLED</span>
              </div>
              <p className="text-slate-500 text-sm mb-8">Complete the details below and we will contact you shortly.</p>

              <div className="w-full h-1 bg-slate-100 rounded-full mb-8">
                <div className="h-1 bg-[#009B6C] rounded-full transition-all duration-500" style={{ width: `${fillPct}%` }} />
              </div>

              <form id="contact-page-form" data-tracking="lead-form" onSubmit={onSubmit} className="flex flex-col gap-5">
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
                      required
                      type="tel"
                      maxLength={10}
                      minLength={10}
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                      className={inputCls}
                      placeholder="e.g., 9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service Required</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={inputCls}
                  >
                    <option value="Website Design & Development">Website Design &amp; Development</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Ecommerce Development">Ecommerce Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Web App Development">Web App Development</option>
                    <option value="CRM & ERP Development">CRM &amp; ERP Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Meta Ads & Google Ads">Meta Ads &amp; Google Ads</option>
                    <option value="Zoho Consultation">Zoho Consultation</option>
                  </select>
                </div>

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

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl font-bold text-white bg-[#009B6C] hover:bg-[#007d56] active:scale-95 transition-all duration-200 shadow-md disabled:opacity-70 text-base cursor-pointer"
                >
                  {status === 'loading' ? 'Sending...' : 'Submit Enquiry'}
                </button>

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-[#009B6C] font-bold bg-[#e6f7f2] px-4 py-3 rounded-lg text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" /> Message sent successfully to info@whitegravitycrm.com! We'll get back to you within 24 hours.
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

      {}
      <section className="container-x pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          <iframe title="map" src="https://www.google.com/maps?q=Dallas,+TX,+USA&output=embed" className="w-full h-[300px] md:h-[420px] border-0" loading="lazy" />
        </motion.div>
      </section>

      {}
      <section className="container-x pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#009B6C] to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl max-w-4xl mx-auto relative overflow-hidden">
          {}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-[50px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black opacity-10 rounded-full blur-[50px] translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Prefer a Direct Call?</h2>
            <p className="text-emerald-100 text-lg mb-1 font-medium">Our team is available Monday through Saturday (CST).</p>
            <p className="text-emerald-100 text-lg mb-8 font-medium">Call us now for an instant consultation.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a href="tel:+14694614710" className="flex items-center gap-3 bg-white text-[#009B6C] px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg w-full sm:w-auto justify-center group">
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" /> +1 (469) 461-4710
              </a>
              <a href="mailto:info@whitegravitycrm.com" className="flex items-center gap-3 bg-[#065b46] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#044a39] transition-colors shadow-lg border border-emerald-500/30 w-full sm:w-auto justify-center group">
                <Mail className="w-6 h-6 group-hover:-rotate-12 transition-transform" /> info@whitegravitycrm.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
