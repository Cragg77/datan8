"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Button } from "@/components/ui/button";

export function NavItem({
  href,
  text,
  dropdown,
}: {
  href?: string;
  text: string;
  dropdown?: boolean;
}) {
  const pathname = usePathname();
  const active = href ? (href === "/" ? pathname === "/" : pathname.startsWith(href)) : false;

  // Always call hooks at the top level - use them unconditionally
  const [open, setOpen] = React.useState(false);
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

  if (dropdown) {
    // Popover/dropdown for Services

    const handlePointerEnter = () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
      setOpen(true);
    };
    const handlePointerLeave = () => {
      closeTimeout.current = setTimeout(() => setOpen(false), 120);
    };

    return (
      <div
        className="relative group"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <Button
          variant="ghost"
          className={`relative px-4 py-3 rounded font-bold transition-colors bg-transparent shadow-none hover:bg-[#23242b] ${
            active ? "text-[#00FFF7]" : "text-white hover:text-[#00FFF7]"
          } flex items-center gap-1 text-lg h-auto`}
          tabIndex={0}
          aria-haspopup="menu"
          aria-expanded={open}
        >
          {text}
          <svg
            className="w-4 h-4 ml-1 text-inherit"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 8.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
          {active && (
            <span className="absolute left-0 right-0 -bottom-1 h-1 bg-[#00FFF7] rounded" />
          )}
        </Button>
        {open && (
          <div
            className="absolute left-0 mt-3 w-64 bg-[#1a1a23] rounded-xl border border-[#45454e] shadow-lg z-30 animate-fade-in"
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
          >
            <ul className="divide-y divide-[#23242b]">
              <li>
                <Link
                  className="block px-5 py-4 text-white hover:bg-[#23242b] hover:text-[#00FFF7] transition text-base text-left"
                  href="/services/website-creation"
                >
                  Website Creation
                </Link>
              </li>
              <li>
                <Link
                  className="block px-5 py-4 text-white hover:bg-[#23242b] hover:text-[#00FFF7] transition text-base text-left"
                  href="/services/ai-automation-strategy"
                >
                  AI Automation Strategy
                </Link>
              </li>
              <li>
                <Link
                  className="block px-5 py-4 text-white hover:bg-[#23242b] hover:text-[#00FFF7] transition text-base text-left"
                  href="/services/ai-agents"
                >
                  AI Agents
                </Link>
              </li>
              <li>
                <Link
                  className="block px-5 py-4 text-white hover:bg-[#23242b] hover:text-[#00FFF7] transition text-base text-left"
                  href="/services/document-ingest"
                >
                  Document Ingest
                </Link>
              </li>
              <li>
                <Link
                  className="block px-5 py-4 text-white hover:bg-[#23242b] hover:text-[#00FFF7] transition text-base text-left"
                  href="/services/digital-services"
                >
                  Digital Services
                </Link>
              </li>
              <li>
                <Link
                  className="block px-5 py-4 text-white hover:bg-[#23242b] hover:text-[#00FFF7] transition text-base text-left"
                  href="/start-website"
                >
                  Start Your Website
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={href || "/"}
      className={`relative px-4 py-3 rounded font-bold transition-colors duration-100 text-lg ${
        active ? "text-[#00FFF7]" : "text-white hover:text-[#00FFF7]"
      }`}
    >
      {text}
      {active && (
        <span className="absolute left-0 right-0 -bottom-1 h-1 bg-[#00FFF7] rounded" />
      )}
    </Link>
  );
}
