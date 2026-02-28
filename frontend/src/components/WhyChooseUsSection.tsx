import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Shield, MapPin, Award, Users, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Transparent Campaign Structure',
    description: 'Clear timelines, deliverables, and reporting at every stage. No hidden costs, no surprises.',
  },
  {
    icon: MapPin,
    title: 'Hyperlocal Targeting Expertise',
    description: 'Deep knowledge of local markets enables precise, high-impact distribution in your target zones.',
  },
  {
    icon: Award,
    title: 'Clean & Compliant Branding',
    description: 'All label designs and distribution methods adhere to regulatory and ethical standards.',
  },
  {
    icon: Users,
    title: 'Strong Community Engagement',
    description: 'Our on-ground teams build genuine connections that amplify your brand\'s community presence.',
  },
  {
    icon: TrendingUp,
    title: 'Designed for Trust-Building',
    description: 'Every element of our campaigns is crafted to foster long-term brand trust and recall.',
  },
];

export default function WhyChooseUsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Why ImpactFlow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight">
            Why Choose Us
          </h2>
          <p className="text-brand-slate text-lg mt-4 max-w-xl mx-auto">
            We combine strategic precision with genuine community care to deliver campaigns that matter.
          </p>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="p-8 bg-white rounded-2xl border border-brand-blue/10 hover:border-brand-blue/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue/10 to-brand-green/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-brand-navy font-bold text-base mb-3">{reason.title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}

          {/* Highlight card */}
          <div className="p-8 bg-gradient-to-br from-brand-green to-brand-green-dark rounded-2xl text-white">
            <div className="text-4xl font-extrabold mb-2">100%</div>
            <div className="text-white/80 font-semibold text-lg mb-3">Community-First Approach</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Every decision we make prioritizes the well-being of the communities we serve, ensuring your brand is associated with genuine positive impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
