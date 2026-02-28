import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Tag, MapPin, Camera, FileText } from 'lucide-react';

function WaterBottleMockup() {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative">
        {/* Bottle shadow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-brand-blue/15 rounded-full blur-md" />

        <svg
          viewBox="0 0 120 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-40 h-auto drop-shadow-xl"
        >
          {/* Cap */}
          <rect x="42" y="8" width="36" height="22" rx="6" fill="oklch(0.35 0.12 250)" />
          <rect x="44" y="10" width="32" height="18" rx="5" fill="oklch(0.42 0.14 250)" />

          {/* Neck */}
          <path d="M42 30 L38 52 L82 52 L78 30 Z" fill="oklch(0.88 0.02 220)" />

          {/* Body */}
          <path
            d="M34 52 Q28 60 26 80 L24 200 Q24 220 30 228 L90 228 Q96 220 96 200 L94 80 Q92 60 86 52 Z"
            fill="oklch(0.92 0.02 215)"
          />

          {/* Water fill */}
          <path
            d="M26 120 L26 200 Q26 218 32 224 L88 224 Q94 218 94 200 L94 120 Z"
            fill="oklch(0.72 0.08 220)"
            opacity="0.35"
          />

          {/* Label area */}
          <rect x="28" y="90" width="64" height="100" rx="4" fill="white" />
          <rect x="28" y="90" width="64" height="100" rx="4" fill="oklch(0.97 0.02 240)" stroke="oklch(0.75 0.06 240)" strokeWidth="1" />

          {/* Label content */}
          <rect x="32" y="96" width="56" height="8" rx="2" fill="oklch(0.30 0.12 250)" />
          <rect x="36" y="108" width="48" height="4" rx="1.5" fill="oklch(0.50 0.14 160)" />
          <rect x="38" y="116" width="44" height="3" rx="1.5" fill="oklch(0.75 0.04 240)" />
          <rect x="38" y="122" width="36" height="3" rx="1.5" fill="oklch(0.75 0.04 240)" />

          {/* Brand logo placeholder on label */}
          <circle cx="60" cy="148" r="16" fill="oklch(0.30 0.12 250)" opacity="0.08" />
          <text x="60" y="153" textAnchor="middle" fontSize="8" fill="oklch(0.30 0.12 250)" fontWeight="bold" fontFamily="sans-serif">BRAND</text>

          <rect x="32" y="172" width="56" height="14" rx="2" fill="oklch(0.50 0.14 160)" opacity="0.15" />
          <text x="60" y="182" textAnchor="middle" fontSize="6" fill="oklch(0.30 0.14 160)" fontWeight="600" fontFamily="sans-serif">YOUR LOGO HERE</text>

          {/* Bottle highlights */}
          <path d="M30 80 Q28 120 28 160" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <path d="M34 70 Q32 100 32 130" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

          {/* Bottom */}
          <ellipse cx="60" cy="226" rx="30" ry="6" fill="oklch(0.80 0.04 220)" />
        </svg>

        {/* Customizable label badge */}
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-brand-green text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
          Custom Label
        </div>
      </div>
    </div>
  );
}

const inclusions = [
  { icon: Tag, text: 'Custom printed brand labels' },
  { icon: MapPin, text: 'Wide-area targeted distribution' },
  { icon: Camera, text: 'Community-focused engagement' },
  { icon: FileText, text: 'Full campaign documentation' },
];

export default function WaterSolutionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="solutions" className="py-24 lg:py-32 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Our Flagship Solution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight">
            Branded Water Distribution Campaigns
          </h2>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left: Bottle mockup */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-brand-blue/8">
            <WaterBottleMockup />
            <p className="text-center text-brand-slate text-sm mt-4 font-medium">
              Fully customizable label with your brand identity
            </p>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-brand-slate text-lg leading-relaxed mb-8">
              Our flagship solution enables brands to place their message directly into the hands of communities through custom-branded mineral water bottles.
            </p>

            <h3 className="text-brand-navy font-bold text-lg mb-5">Each campaign includes:</h3>
            <ul className="space-y-4 mb-10">
              {inclusions.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-brand-blue/8 shadow-xs">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <span className="text-brand-slate font-medium">{text}</span>
                </li>
              ))}
            </ul>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4 text-white/90">Campaign Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-extrabold">25,000</div>
                  <div className="text-white/70 text-sm mt-1">Minimum Order Quantity</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-extrabold">₹8<span className="text-base font-semibold">/bottle</span></div>
                  <div className="text-white/70 text-sm mt-1">Per branded bottle</div>
                </div>
              </div>
              <p className="text-white/60 text-xs mt-4">
                * Excluding campaign customization services. Contact us for a tailored quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
