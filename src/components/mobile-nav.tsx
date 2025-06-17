"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#181924] border-l border-[#23242b] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#23242b]">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center text-white hover:text-[#00FFF7] transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-6">
            <nav className="space-y-2 px-6">
              {/* Home */}
              <Link
                href="/"
                onClick={closeMenu}
                className={`block py-4 px-4 rounded-lg text-lg font-semibold transition-colors ${
                  isActive("/")
                    ? "text-[#00FFF7] bg-[#00FFF7]/10"
                    : "text-white hover:text-[#00FFF7] hover:bg-[#23242b]"
                }`}
              >
                Home
              </Link>

              {/* Services with submenu */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`w-full flex items-center justify-between py-4 px-4 rounded-lg text-lg font-semibold transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-[#00FFF7] bg-[#00FFF7]/10"
                      : "text-white hover:text-[#00FFF7] hover:bg-[#23242b]"
                  }`}
                >
                  Services
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 8.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </button>

                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link
                      href="/services/website-creation"
                      onClick={closeMenu}
                      className={`block py-3 px-4 rounded-lg text-base transition-colors ${
                        isActive("/services/website-creation")
                          ? "text-[#00FFF7] bg-[#00FFF7]/10"
                          : "text-gray-300 hover:text-[#00FFF7] hover:bg-[#23242b]"
                      }`}
                    >
                      Website Creation
                    </Link>
                    <Link
                      href="/services/ai-automation-strategy"
                      onClick={closeMenu}
                      className={`block py-3 px-4 rounded-lg text-base transition-colors ${
                        isActive("/services/ai-automation-strategy")
                          ? "text-[#00FFF7] bg-[#00FFF7]/10"
                          : "text-gray-300 hover:text-[#00FFF7] hover:bg-[#23242b]"
                      }`}
                    >
                      AI Automation Strategy
                    </Link>
                    <Link
                      href="/services/ai-agents"
                      onClick={closeMenu}
                      className={`block py-3 px-4 rounded-lg text-base transition-colors ${
                        isActive("/services/ai-agents")
                          ? "text-[#00FFF7] bg-[#00FFF7]/10"
                          : "text-gray-300 hover:text-[#00FFF7] hover:bg-[#23242b]"
                      }`}
                    >
                      AI Agents
                    </Link>
                    <Link
                      href="/services/document-ingest"
                      onClick={closeMenu}
                      className={`block py-3 px-4 rounded-lg text-base transition-colors ${
                        isActive("/services/document-ingest")
                          ? "text-[#00FFF7] bg-[#00FFF7]/10"
                          : "text-gray-300 hover:text-[#00FFF7] hover:bg-[#23242b]"
                      }`}
                    >
                      Document Ingest
                    </Link>
                    <Link
                      href="/services/digital-services"
                      onClick={closeMenu}
                      className={`block py-3 px-4 rounded-lg text-base transition-colors ${
                        isActive("/services/digital-services")
                          ? "text-[#00FFF7] bg-[#00FFF7]/10"
                          : "text-gray-300 hover:text-[#00FFF7] hover:bg-[#23242b]"
                      }`}
                    >
                      Digital Services
                    </Link>
                    <Link
                      href="/start-website"
                      onClick={closeMenu}
                      className={`block py-3 px-4 rounded-lg text-base transition-colors ${
                        isActive("/start-website")
                          ? "text-[#00FFF7] bg-[#00FFF7]/10"
                          : "text-gray-300 hover:text-[#00FFF7] hover:bg-[#23242b]"
                      }`}
                    >
                      Start Your Website
                    </Link>
                  </div>
                )}
              </div>

              {/* About */}
              <Link
                href="/about"
                onClick={closeMenu}
                className={`block py-4 px-4 rounded-lg text-lg font-semibold transition-colors ${
                  isActive("/about")
                    ? "text-[#00FFF7] bg-[#00FFF7]/10"
                    : "text-white hover:text-[#00FFF7] hover:bg-[#23242b]"
                }`}
              >
                About
              </Link>

              {/* Blog */}
              <Link
                href="/blog"
                onClick={closeMenu}
                className={`block py-4 px-4 rounded-lg text-lg font-semibold transition-colors ${
                  isActive("/blog")
                    ? "text-[#00FFF7] bg-[#00FFF7]/10"
                    : "text-white hover:text-[#00FFF7] hover:bg-[#23242b]"
                }`}
              >
                Blog
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className={`block py-4 px-4 rounded-lg text-lg font-semibold transition-colors ${
                  isActive("/contact")
                    ? "text-[#00FFF7] bg-[#00FFF7]/10"
                    : "text-white hover:text-[#00FFF7] hover:bg-[#23242b]"
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* CTA Button */}
          <div className="p-6 border-t border-[#23242b]">
            <Link href="/contact" onClick={closeMenu}>
              <Button className="w-full py-4 bg-[#00FFF7] hover:bg-[#00E5DE] text-black font-semibold uppercase tracking-wide rounded shadow-lg text-base">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
