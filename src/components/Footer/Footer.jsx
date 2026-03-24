import { Link } from "react-router";
import { Vault, Twitter, Linkedin, Facebook, Heart } from "lucide-react";
import Logo from '../../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src={Logo} alt="Logo" />
              </div>
              <span className="font-display font-bold text-lg">
                <span className="text-white">App</span><span className="text-primary">Vault</span>
              </span>
            </Link>
            <p className="text-base text-neutral-content/60 leading-relaxed tracking-wide">
              AppVault  —{" "}
              <span className="text-neutral-content/90">
                smarter apps for everyday life.
              </span>
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-neutral-content/70 text-xs uppercase tracking-wider font-semibold mb-3">Pages</p>
              <ul className="space-y-2">
                {[["Home", "/"], ["Apps", "/apps"], ["Installation", "/installation"]].map(([label, to]) => (
                  <li key={to}>
                    <Link to={to} className="text-neutral-content/50 hover:text-white text-sm transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-neutral-content/70 text-xs uppercase tracking-wider font-semibold mb-3">Social</p>
              <div className="flex flex-col gap-2">
                {[
                  { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                  { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-content/50 hover:text-white text-sm transition-colors"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-content/10 mt-8 pt-6 flex flex-col sm:flex-row justify-center items-center gap-2">
          <p className="text-neutral-content/40 text-xs">
            Copyright © 2025 AppVault — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
