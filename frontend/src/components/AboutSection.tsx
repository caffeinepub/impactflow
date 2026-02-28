import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle2 } from 'lucide-react';

const points = [
  'Strategic local outreach',
  'Free community giveaways',
  'Responsible brand messaging',
  'High-trust public engagement',
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left: Text */}
          <div>
            <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight mb-6">
              Redefining Grassroots Marketing
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-8">
              We are a purpose-driven marketing agency focused on delivering real-world brand visibility through community-first distribution campaigns.
            </p>
            <p className="text-brand-slate text-base leading-relaxed mb-8">
              Our approach combines:
            </p>
            <ul className="space-y-4 mb-10">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green mt-0.5 shrink-0" />
                  <span className="text-brand-slate font-medium">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-brand-blue font-semibold text-lg italic border-l-4 border-brand-green pl-4">
              "We believe marketing works best when it benefits both brands and people."
            </p>
          </div>

          {/* Right: Visual card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-green/10 rounded-3xl p-10 border border-brand-blue/10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '10+', label: 'Years of Experience', color: 'text-brand-blue' },
                  { number: '200+', label: 'Campaigns Delivered', color: 'text-brand-green' },
                  { number: '50+', label: 'Cities Covered', color: 'text-brand-green' },
                  { number: '1M+', label: 'People Reached', color: 'text-brand-blue' },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-2xl p-6 shadow-sm border border-brand-blue/8 text-center">
                    <div className={`text-3xl font-extrabold ${item.color} mb-1`}>{item.number}</div>
                    <div className="text-brand-slate text-sm font-medium leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-green/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
