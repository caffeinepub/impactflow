import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, BookOpen, Heart, Calendar, Store } from 'lucide-react';

const industries = [
  {
    icon: GraduationCap,
    title: 'Schools & Educational Institutions',
    description: 'Reaching students, parents, and staff through trusted campus channels.',
  },
  {
    icon: BookOpen,
    title: 'Colleges & Coaching Centers',
    description: 'Engaging young adults at key decision-making moments in their journey.',
  },
  {
    icon: Heart,
    title: 'Hospitals & Healthcare Providers',
    description: 'Building trust with patients and families in healthcare environments.',
  },
  {
    icon: Calendar,
    title: 'Community Events & Social Campaigns',
    description: 'Amplifying your message at high-footfall public gatherings.',
  },
  {
    icon: Store,
    title: 'Local Businesses & Expanding Brands',
    description: 'Establishing hyperlocal presence and brand recall in target markets.',
  },
];

export default function IndustriesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="industries" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight mb-4">
            Built for Impact-Driven Brands
          </h2>
          <p className="text-brand-slate text-lg max-w-2xl mx-auto">
            We specialize in organizations that serve people across all age groups.
          </p>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="group p-8 bg-white border border-brand-blue/10 rounded-2xl hover:border-brand-green/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-brand-blue/10 to-brand-green/10 rounded-2xl flex items-center justify-center mb-5 group-hover:from-brand-blue/20 group-hover:to-brand-green/20 transition-colors">
                  <Icon className="w-7 h-7 text-brand-blue group-hover:text-brand-green transition-colors" />
                </div>
                <h3 className="text-brand-navy font-bold text-base mb-2 leading-snug">{industry.title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed">{industry.description}</p>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="p-8 bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-2xl text-white flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-5">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-bold text-base mb-2">Your Industry?</h3>
              <p className="text-white/75 text-sm leading-relaxed">
                We work with any organization committed to community impact.
              </p>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 px-5 py-2.5 bg-white text-brand-blue font-semibold text-sm rounded-xl hover:bg-brand-aqua/20 hover:text-white transition-colors"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
