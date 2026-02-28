import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Target, Palette, CheckSquare, Truck, BarChart2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Campaign Planning',
    description: 'We understand your target audience, geographic focus, and campaign objectives to craft a precise strategy.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Custom Branding',
    description: 'We design impactful, compliant label artwork that reflects your brand identity and resonates with communities.',
  },
  {
    number: '03',
    icon: CheckSquare,
    title: 'Production & Quality Check',
    description: 'All materials are professionally manufactured and verified to meet quality and compliance standards.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Targeted Distribution',
    description: 'Strategic on-ground outreach in selected areas ensures your brand reaches the right hands at the right time.',
  },
  {
    number: '05',
    icon: BarChart2,
    title: 'Campaign Report',
    description: 'You receive detailed documentation and coverage insights to measure the real-world impact of your campaign.',
  },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight">
            How It Works
          </h2>
          <p className="text-brand-slate text-lg mt-4 max-w-xl mx-auto">
            A clear, transparent 5-step process from concept to community impact.
          </p>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Desktop: horizontal connector line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue/20 via-brand-green/40 to-brand-blue/20 mx-16" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Step circle */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border-2 border-brand-blue/20 flex items-center justify-center shadow-sm mb-5 group-hover:border-brand-green transition-colors">
                    <Icon className="w-7 h-7 text-brand-blue" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-green rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>

                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-16 left-1/2 w-0.5 h-8 bg-brand-blue/20 -translate-x-1/2" />
                  )}

                  <h3 className="text-brand-navy font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-blue-dark transition-colors shadow-sm"
          >
            Start Your Campaign
          </button>
        </div>
      </div>
    </section>
  );
}
