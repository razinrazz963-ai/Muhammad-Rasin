import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  MapPin,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate immediate client-side handling and prepare mailto link
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger user's email client as immediate fallback
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-blue block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4">
            Let's build something meaningful.
          </h2>
          <p className="text-sm sm:text-base text-content-body">
            Open to software development, data analytics, AI and technology opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <a
              href={portfolioData.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 rounded-2xl border border-border-subtle flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-content-muted uppercase tracking-wider block">
                    Instant Messaging
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                    Chat on WhatsApp
                  </h3>
                  <p className="text-xs text-content-muted mt-0.5">
                    {portfolioData.personal.phone}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-content-muted group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="glass-card glass-card-hover p-5 rounded-2xl border border-border-subtle flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-blue shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-content-muted uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-accent-blue transition-colors">
                    Send Email
                  </h3>
                  <p className="text-xs text-content-muted mt-0.5">
                    {portfolioData.personal.email}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-content-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${portfolioData.personal.phoneTel}`}
              className="glass-card glass-card-hover p-5 rounded-2xl border border-border-subtle flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-violet/15 border border-accent-violet/30 flex items-center justify-center text-accent-violet shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-content-muted uppercase tracking-wider block">
                    Phone Call
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-accent-violet transition-colors">
                    Call Directly
                  </h3>
                  <p className="text-xs text-content-muted mt-0.5">
                    {portfolioData.personal.phone}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-content-muted group-hover:text-accent-violet group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* LinkedIn & GitHub Mini Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover p-4 rounded-xl border border-border-subtle flex items-center gap-3 group"
              >
                <Linkedin className="w-5 h-5 text-accent-blue shrink-0 group-hover:scale-110 transition-transform" />
                <div className="overflow-hidden">
                  <span className="text-xs font-bold text-white block group-hover:text-accent-blue transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-[10px] text-content-muted truncate block">
                    Connect
                  </span>
                </div>
              </a>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover p-4 rounded-xl border border-border-subtle flex items-center gap-3 group"
              >
                <Github className="w-5 h-5 text-content-heading shrink-0 group-hover:scale-110 transition-transform" />
                <div className="overflow-hidden">
                  <span className="text-xs font-bold text-white block group-hover:text-white transition-colors">
                    GitHub
                  </span>
                  <span className="text-[10px] text-content-muted truncate block">
                    Repositories
                  </span>
                </div>
              </a>
            </div>

            {/* Location pill */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs text-content-muted">
              <MapPin className="w-4 h-4 text-accent-blue shrink-0" />
              <span>{portfolioData.personal.location}</span>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-border-subtle">
              <h3 className="text-xl font-bold font-display text-white tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-content-muted mb-6">
                Fill out the form below to initiate an inquiry or discuss project opportunities.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">
                    Message Prepared!
                  </h4>
                  <p className="text-xs sm:text-sm text-content-body max-w-md mx-auto">
                    Your email draft has been generated. You can also connect immediately on{' '}
                    <a
                      href={portfolioData.personal.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-semibold underline"
                    >
                      WhatsApp
                    </a>{' '}
                    for the fastest response.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/15 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-content-muted mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-content-muted focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-white/10 focus:border-accent-blue'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-content-muted mb-1.5"
                    >
                      Your Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. sarah@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-content-muted focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-white/10 focus:border-accent-blue'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-content-muted mb-1.5"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Share details about the role, project, or collaboration..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-content-muted focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-white/10 focus:border-accent-blue'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-violet hover:brightness-110 active:scale-98 transition-all shadow-glow-blue disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-content-muted text-center pt-2">
                    Structured for direct email dispatch & compatible with Resend / Formspree endpoints.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
