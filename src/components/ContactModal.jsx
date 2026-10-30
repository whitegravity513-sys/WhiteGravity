import React, { useState, useEffect } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    message: '',
  });

  useEffect(() => {
    const handleOpenModal = (e) => {
      if (e?.detail?.service) {
        setFormData(prev => ({ ...prev, service: e.detail.service }));
      }
      setIsOpen(true);
    };

    window.addEventListener('open-contact-modal', handleOpenModal);
    return () => window.removeEventListener('open-contact-modal', handleOpenModal);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert("Please fill in your Name, Email, and Phone number.");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionTime = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
      const response = await fetch("https://formsubmit.co/ajax/info@whitegravitycrm.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          'Full Name': formData.name,
          'Email Address': formData.email,
          'Phone / WhatsApp': formData.phone,
          'Service Needed': formData.service,
          'Project Requirements': formData.message || "No additional details provided.",
          'Submission Time (CST)': submissionTime,
          _subject: `⚡ Quick Lead: ${formData.name} - ${formData.service}`,
          _replyto: formData.email,
          _cc: 'info@whitegravitycrm.com',
          _template: "table",
          _captcha: "false"
        }),
      });

      if (response.ok) {
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'form_submission',
            form_name: 'contact_modal',
            form_id: 'contact-modal-form',
            lead_service: formData.service
          });
        }

        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: 'Website Development', message: '' });
        setTimeout(() => {
          handleClose();
          setTimeout(() => setSubmitted(false), 500);
        }, 3000);
      } else {
        alert("Failed to send message. Please reach us directly at info@whitegravitycrm.com or +1 (469) 461-4710");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("An error occurred while sending. Please contact us directly at info@whitegravitycrm.com or +1 (469) 461-4710");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10"
          >
            <div className="bg-gradient-to-r from-[#009B6C] to-emerald-700 p-6 text-white relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-3">
                <MessageSquare className="w-3.5 h-3.5" /> Quick Inquiry
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Let's Build Something Great!
              </h3>
              <p className="text-emerald-100 text-xs sm:text-sm mt-1">
                Get a free 30-minute tech strategy consultation & custom quote.
              </p>
            </div>

            {}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-emerald-100 text-[#009B6C] rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-slate-900 mb-2">Thank You!</h4>
                  <p className="text-slate-600 text-sm max-w-xs mx-auto">
                    We have received your message. Our tech lead will get back to you within 2 hours!
                  </p>
                </div>
              ) : (
                <form id="contact-modal-form" data-tracking="lead-form" onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#009B6C] focus:ring-2 focus:ring-[#009B6C]/20 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                        title="Please enter a valid email address"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#009B6C] focus:ring-2 focus:ring-[#009B6C]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        minLength={10}
                        pattern="[0-9]{10}"
                        title="Please enter exactly 10 digits"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#009B6C] focus:ring-2 focus:ring-[#009B6C]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#009B6C] focus:ring-2 focus:ring-[#009B6C]/20 transition-all bg-white"
                    >
                      <option>Website Development</option>
                      <option>Custom Software Development</option>
                      <option>Ecommerce Development</option>
                      <option>Mobile App Development</option>
                      <option>Web App Development</option>
                      <option>CRM & ERP Development</option>
                      <option>Digital Marketing & Ads</option>
                      <option>Zoho Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Project Details (Optional)</label>
                    <textarea
                      rows="2"
                      placeholder="Tell us a little bit about your goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#009B6C] focus:ring-2 focus:ring-[#009B6C]/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-[#009B6C] text-white font-extrabold text-sm hover:bg-[#00825a] disabled:opacity-70 disabled:cursor-not-allowed active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    {isSubmitting ? 'Sending Request...' : 'Get Free Consultation Now'}
                  </button>

                  <div className="pt-3 flex items-center justify-between border-t border-slate-100 text-xs font-medium text-slate-500">
                    <span>Or reach us directly:</span>
                    <a
                      href="https://wa.me/14694614710?text=Hi%20White%20Gravity%20Team!%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      data-tracking="whatsapp"
                      data-action="whatsapp_click"
                      onClick={() => {
                        if (window.dataLayer) {
                          window.dataLayer.push({
                            event: 'whatsapp_click',
                            click_location: 'contact_modal',
                            whatsapp_number: '14694614710'
                          });
                        }
                      }}
                      className="text-[#009B6C] font-bold hover:underline flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" /> +1 (469) 461-4710
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
