import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  Clock,
  Shield,
  Linkedin,
  Twitter,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-column footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-navy-800/80">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-sm">
                <GraduationCap className="w-6 h-6 text-amber-400" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white font-display">
                Scholar<span className="text-teal-400">Bridge</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{siteConfig.links.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{siteConfig.links.workingHours}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Certified Child Safety & POCSO Compliant Delivery</span>
              </div>
            </div>

            {/* Social media links as placeholders */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-teal-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-navy-800"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-teal-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-navy-800"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-teal-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-navy-800"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: School Programs */}
          <div>
            <h3 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-4">
              School Programs
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerNav.schools.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: College Programs */}
          <div>
            <h3 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-4">
              Higher Education
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerNav.colleges.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Institutional Enquiries */}
          <div>
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
              Organization & Action
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerNav.organization.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white hover:underline transition-colors flex items-center justify-between py-0.5"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-teal-400 opacity-60" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/programs"
                  className="text-slate-400 hover:text-white hover:underline transition-colors block py-0.5"
                >
                  Workshops & Bootcamps
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal disclosures */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {currentYear} {siteConfig.legalName}. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>Serving Educational Institutions Across India</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/about#safety-charter" className="hover:text-slate-300 transition-colors">
              Safety Charter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
