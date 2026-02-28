import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  organization: string;
  phone: string;
  email: string;
  objective: string;
}

const initialForm: FormData = {
  name: '',
  organization: '',
  phone: '',
  email: '',
  objective: '',
};

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // REPLACE THE URL BELOW WITH YOUR FORMSPREE ENDPOINT
      // Sign up at https://formspree.io and create a new form to get your endpoint
      // Example: https://formspree.io/f/YOUR_FORM_ID
      const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          organization: form.organization,
          phone: form.phone,
          email: form.email,
          campaign_objective: form.objective,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setForm(initialForm);
      } else {
        setError('Something went wrong. Please try again or contact us directly.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight">
            Let's Build Impact Together
          </h2>
          <p className="text-brand-slate text-lg mt-4 max-w-xl mx-auto">
            Tell us about your campaign goals and we'll craft a strategy that delivers real community impact.
          </p>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid lg:grid-cols-5 gap-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-brand-navy font-bold text-xl mb-4">Ready to make an impact?</h3>
              <p className="text-brand-slate leading-relaxed">
                Whether you're a school, hospital, or growing brand — we're here to help you connect with communities in meaningful ways.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: Phone, label: 'Call Us', value: '+91 98765 43210' },
                { icon: Mail, label: 'Email Us', value: 'hello@impactflow.in' },
                { icon: MapPin, label: 'Based In', value: 'India — Serving Nationwide' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="text-brand-slate text-xs font-semibold uppercase tracking-wide">{label}</div>
                    <div className="text-brand-navy font-medium mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-brand-blue/5 to-brand-green/10 rounded-2xl border border-brand-blue/10">
              <div className="text-brand-navy font-bold mb-2">Campaign Turnaround</div>
              <div className="text-brand-slate text-sm leading-relaxed">
                From brief to first distribution, most campaigns are live within <span className="text-brand-blue font-semibold">2–3 weeks</span>.
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8 bg-brand-surface rounded-3xl border border-brand-green/20">
                <div className="w-16 h-16 bg-brand-green/15 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-brand-navy font-bold text-2xl mb-3">Message Sent!</h3>
                <p className="text-brand-slate text-base max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours to discuss your campaign.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 px-6 py-3 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-blue-dark transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-surface rounded-3xl p-8 border border-brand-blue/10 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-brand-navy text-sm font-semibold mb-2">
                      Full Name <span className="text-brand-green">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-white border border-brand-blue/15 rounded-xl text-brand-navy placeholder:text-brand-slate/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-brand-navy text-sm font-semibold mb-2">
                      Organization <span className="text-brand-green">*</span>
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      required
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="School, hospital, brand..."
                      className="w-full px-4 py-3 bg-white border border-brand-blue/15 rounded-xl text-brand-navy placeholder:text-brand-slate/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-brand-navy text-sm font-semibold mb-2">
                      Phone Number <span className="text-brand-green">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 bg-white border border-brand-blue/15 rounded-xl text-brand-navy placeholder:text-brand-slate/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-brand-navy text-sm font-semibold mb-2">
                      Email Address <span className="text-brand-green">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@organization.com"
                      className="w-full px-4 py-3 bg-white border border-brand-blue/15 rounded-xl text-brand-navy placeholder:text-brand-slate/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="objective" className="block text-brand-navy text-sm font-semibold mb-2">
                    Campaign Objective <span className="text-brand-green">*</span>
                  </label>
                  <textarea
                    id="objective"
                    name="objective"
                    required
                    rows={4}
                    value={form.objective}
                    onChange={handleChange}
                    placeholder="Describe your campaign goals, target audience, and any specific requirements..."
                    className="w-full px-4 py-3 bg-white border border-brand-blue/15 rounded-xl text-brand-navy placeholder:text-brand-slate/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/40 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-blue-dark disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
