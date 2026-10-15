"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  ArrowRight,
  BookOpen,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 w-full",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80"
          : "bg-white border-b border-slate-100"
      )}
    >
      {/* Top institutional notification / accessibility bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-900 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span>Institutional Partner Portal for K-12 Schools, Colleges & Universities</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <Link
              href="/contact"
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Program Enquiry Desk</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Placeholder */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-700 to-navy-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-navy-950 font-display">
                Scholar<span className="text-teal-700">Bridge</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 -mt-1">
                Educational Development
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.mainNav.map((item) => {
              const hasDropdown = item.children && item.children.length > 0;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : Boolean(pathname?.startsWith(item.href));

              if (hasDropdown) {
                return (
                  <div
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.title)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                        isActive
                          ? "text-teal-800 bg-teal-50/80 font-semibold"
                          : "text-slate-700 hover:text-navy-900 hover:bg-slate-100/70"
                      )}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          openDropdown === item.title ? "rotate-180 text-teal-700" : "text-slate-400"
                        )}
                      />
                    </Link>

                    {/* Desktop Dropdown Menu */}
                    <div
                      className={cn(
                        "absolute top-full left-0 w-80 pt-2 transition-all duration-200 origin-top-left z-50",
                        openDropdown === item.title
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                      )}
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3 overflow-hidden">
                        <div className="px-3 py-2 border-b border-slate-100 mb-2">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            Institutional Offerings
                          </p>
                          <p className="text-xs text-slate-600 mt-0.5">
                            {item.description}
                          </p>
                        </div>
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="group/item flex flex-col p-2.5 rounded-xl hover:bg-teal-50/60 transition-colors"
                            >
                              <span className="text-sm font-semibold text-slate-800 group-hover/item:text-teal-800 flex items-center justify-between">
                                {child.title}
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-teal-700" />
                              </span>
                              <span className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                {child.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "text-teal-800 bg-teal-50/80 font-semibold"
                      : "text-slate-700 hover:text-navy-900 hover:bg-slate-100/70"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="text-xs py-2 px-3"
            >
              Partner
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-navy-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-700"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
            {siteConfig.mainNav.map((item) => {
              const hasDropdown = item.children && item.children.length > 0;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : Boolean(pathname?.startsWith(item.href));

              if (hasDropdown) {
                return (
                  <div key={item.title} className="rounded-xl border border-slate-200/80 p-3 bg-slate-50/50">
                    <div className="flex items-center justify-between mb-2">
                      <Link
                        href={item.href}
                        className={cn(
                          "text-sm font-bold",
                          isActive ? "text-teal-800" : "text-navy-950"
                        )}
                      >
                        {item.title}
                      </Link>
                      <Link
                        href={item.href}
                        className="text-xs text-teal-700 font-semibold underline"
                      >
                        View All
                      </Link>
                    </div>
                    <div className="pl-2 space-y-1.5 border-l-2 border-teal-200">
                      {item.children?.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block text-xs font-medium text-slate-700 hover:text-teal-800 py-1"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors",
                    isActive
                      ? "text-teal-800 bg-teal-50"
                      : "text-slate-700 hover:bg-slate-100"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-200 space-y-2">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Partner With Us
              </Button>
              <Button
                href="/programs"
                variant="outline"
                size="md"
                className="w-full justify-center"
              >
                Explore All Workshops
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
