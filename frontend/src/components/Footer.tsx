import { Droplets } from 'lucide-react';
import { SiLinkedin, SiInstagram, SiFacebook, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: SiInstagram, href: '#', label: 'Instagram' },
  { icon: SiFacebook, href: '#', label: 'Facebook' },
  { icon: SiX, href: '#', label: 'X (Twitter)' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'impactflow');

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-white">Impact</span>
                <span className="text-brand-aqua">Flow</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              A purpose-driven marketing agency delivering real-world brand visibility through community-first distribution campaigns.
            </p>
            <p className="text-brand-aqua font-semibold text-sm italic">
              Strategic Marketing. Community Impact.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/60 text-sm hover:text-brand-aqua transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Connect</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-green/30 hover:text-brand-aqua transition-colors text-white/70"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="text-white/60 text-sm space-y-1">
              <div>hello@impactflow.in</div>
              <div>+91 98765 43210</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} ImpactFlow. All rights reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3 h-3 text-brand-aqua fill-brand-aqua" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-aqua hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
