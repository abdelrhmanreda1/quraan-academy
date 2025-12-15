import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  Globe,
  MessageCircle,
  Instagram,
  Youtube,
  Twitter,
  Facebook,
} from "lucide-react";
import { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/teachers", label: "Teachers" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary/20">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm hidden md:flex justify-between items-center z-50 relative border-b border-white/10">
        <div className="flex gap-6">
          <span className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer">
            <Phone className="w-4 h-4 text-secondary" /> +1 (555) 123-4567
          </span>
          <span className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer">
            <Globe className="w-4 h-4 text-secondary" /> Multi-language Support
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4 border-r border-white/10 pr-6">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-secondary transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-secondary transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-secondary transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-secondary transition-colors font-medium"
            >
              Login
            </a>
            <a
              href="#"
              className="hover:text-secondary transition-colors font-medium"
            >
              Register
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-primary/95 backdrop-blur-md shadow-lg border-white/10 py-2"
            : "bg-primary py-4"
        )}
      >
        <div className="container mx-auto  flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary font-serif font-bold text-2xl border border-white/20 group-hover:scale-105 transition-transform backdrop-blur-sm">
              QA
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none text-white tracking-wide">
                Quraan
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-medium mt-1">
                Academy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-secondary relative py-1",
                  location === link.href
                    ? "text-secondary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary"
                    : "text-white/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/placement-test">
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors font-serif bg-transparent"
              >
                Placement Test
              </Button>
            </Link>
            <Link href="/free-trial">
              <Button className="bg-secondary text-primary hover:bg-secondary/90 font-bold shadow-lg shadow-secondary/20 hover:scale-105 transition-transform">
                Free Trial
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-primary border-b border-white/10 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 z-50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-3 hover:bg-white/10 rounded-md text-white font-medium border-b border-white/5 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-white/10">
              <Link href="/placement-test">
                <Button
                  variant="outline"
                  className="w-full justify-start border-secondary text-secondary bg-transparent"
                >
                  Placement Test
                </Button>
              </Link>
              <Link href="/free-trial">
                <Button className="w-full bg-secondary text-primary font-bold">
                  Free Trial
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-20 pb-8 relative overflow-hidden border-t border-white/10">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary font-serif font-bold text-lg">
                  QA
                </div>
                <span className="font-serif font-bold text-2xl tracking-tight">
                  Quraan Academy
                </span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                Dedicated to providing authentic Islamic education with modern
                teaching methodologies. Learn Quran, Arabic, and Islamic Studies
                from expert tutors.
              </p>
              <div className="flex gap-4">
                <a
                  href={SOCIAL_LINKS.facebook}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary hover:text-primary flex items-center justify-center transition-all duration-300 border border-white/10"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary hover:text-primary flex items-center justify-center transition-all duration-300 border border-white/10"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.youtube}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary hover:text-primary flex items-center justify-center transition-all duration-300 border border-white/10"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.tiktok}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary hover:text-primary flex items-center justify-center transition-all duration-300 border border-white/10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif font-bold text-lg mb-6 text-secondary">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <Link
                    href="/courses"
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    All Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teachers"
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    Our Teachers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-bold text-lg mb-6 text-secondary">
                Courses
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <Link
                    href="/courses/online-hadith-course"
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    Hadith Course
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/quranic-arabic-course"
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    Quranic Arabic
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/seerah-course-online"
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    Seerah Course
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/tawheed-course-online"
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    Tawheed Course
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-bold text-lg mb-6 text-secondary">
                Contact Us
              </h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-secondary" />
                  </div>
                  <span>
                    123 Islamic Center Dr,
                    <br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-secondary" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-secondary" />
                  </div>
                  <span>support@quraan-academy.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>
              &copy; {new Date().getFullYear()} Quraan Academy. All rights
              reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp Float Button */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#168a40] text-white p-2 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center ring-4 ring-[#25D366]/30"
          aria-label="Chat on WhatsApp"
        >
        <img src="/images/whatsapp.png" alt="whatsapp icon" className="w-12 h-12"/>
        </a>
      </footer>
    </div>
  );
}
