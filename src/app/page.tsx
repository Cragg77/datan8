"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const partnerSectionRef = useRef<HTMLElement>(null);
  const solutionsSectionRef = useRef<HTMLElement>(null);

  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (videoRef.current && heroSectionRef.current) {
            const scrolled = window.pageYOffset;
            const sectionHeight = heroSectionRef.current.offsetHeight;

            // Only apply parallax when within the video section
            if (scrolled < sectionHeight) {
              // Parallax effect - video moves slower than scroll
              const parallaxSpeed = 0.5;
              const yPos = scrolled * parallaxSpeed;

              // Apply parallax transformation
              videoRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check if device supports parallax (not mobile)
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set(prev).add(entry.target.id));
        }
      });
    }, observerOptions);

    // Observe sections
    if (heroSectionRef.current) observer.observe(heroSectionRef.current);
    if (partnerSectionRef.current) observer.observe(partnerSectionRef.current);
    if (solutionsSectionRef.current) observer.observe(solutionsSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-[#0e0e0f] text-white font-sans overflow-x-hidden">
      {/* COMBINED VIDEO-PARALLAX SECTION */}
      <section
        ref={heroSectionRef}
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      >
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
        >
          <source src="/uploads/AI_vid_v1.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-20 h-20 border-2 border-[#00FFF7]/20 rounded-full animate-float-1 floating-shape" style={{top: '10%', left: '10%'}}></div>
          <div className="absolute w-16 h-16 bg-[#00FFF7]/10 rounded-lg animate-float-2 rotate-45 floating-shape" style={{top: '20%', right: '15%'}}></div>
          <div className="absolute w-12 h-12 border-2 border-[#00FFF7]/30 rounded-lg animate-float-3 floating-shape" style={{bottom: '30%', left: '20%'}}></div>
          <div className="absolute w-24 h-24 border border-[#00FFF7]/15 rounded-full animate-float-4 floating-shape" style={{top: '60%', right: '10%'}}></div>
          <div className="absolute w-8 h-8 bg-[#00FFF7]/20 rounded-full animate-float-5 floating-shape" style={{top: '40%', left: '5%'}}></div>
          <div className="absolute w-14 h-14 border-2 border-[#00FFF7]/25 rotate-45 animate-float-6 floating-shape" style={{bottom: '20%', right: '25%'}}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Hero Content */}
          <div className={`mb-20 transition-all duration-1000 ease-out ${
            visibleSections.has('hero')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Managed AI, Data, & Automation Services
            </h1>
            <p className="text-xl md:text-2xl text-[#00FFF7] mb-8 max-w-3xl mx-auto font-serif italic">
              IT That Revolves Around You
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] px-8 py-4 text-lg rounded shadow-xl" size="lg">
                  Plot Your Course to Success
                </Button>
              </Link>
            </div>
          </div>

          {/* Partner Text Block */}
          <div className={`mb-20 transition-all duration-1000 ease-out delay-300 ${
            visibleSections.has('hero')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-black/30 backdrop-blur-md rounded-xl border border-[#00FFF7]/20 p-6 md:p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                Your Partner In Technology – Delivering Customised AI & Automation Services
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                In this fast-paced modern world, you need a partner that understands your business. A technology and AI provider that supports you through challenging times, is there for you when things get tough, and has the results to back it up.
              </p>
              <Link href="/contact">
                <Button className="bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] px-6 py-3 text-lg rounded shadow-xl">
                  Get in Touch With Our Team Today
                </Button>
              </Link>
            </div>
          </div>

          {/* Our Solutions - Six Cards */}
          <div className={`space-y-8 transition-all duration-1000 ease-out delay-500 ${
            visibleSections.has('hero')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
              Our Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Website Creation */}
              <div className={`relative transition-all duration-700 ease-out delay-700 w-full ${
                visibleSections.has('hero')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}>
                <div className="absolute inset-0 rounded-xl blur-xl opacity-40" style={{background: 'radial-gradient(circle, #FF00AA 0%, rgba(255, 0, 170, 0.3) 60%, transparent 80%)', transform: 'scale(1.2)'}}></div>
                <div className="relative bg-[#16171e]/90 backdrop-blur-md rounded-xl border border-[#FF00AA] shadow overflow-hidden h-full">
                  <div className="w-full h-48 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center"
                      width={400}
                      height={200}
                      alt="Website Creation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-[#00FFF7]">Website Creation</h3>
                    <p className="mb-6 text-zinc-300 flex-grow">Using AI first, we build websites at half the cost & time of standard companies.</p>
                    <Link href="/services/website-creation">
                      <Button className="bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] w-full">
                        Learn More →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* AI Automation Strategy */}
              <div className={`relative transition-all duration-700 ease-out delay-800 w-full ${
                visibleSections.has('hero')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}>
                <div className="absolute inset-0 rounded-xl blur-xl opacity-40" style={{background: 'radial-gradient(circle, #FF00AA 0%, rgba(255, 0, 170, 0.3) 60%, transparent 80%)', transform: 'scale(1.2)'}}></div>
                <div className="relative bg-[#16171e]/90 backdrop-blur-md rounded-xl border border-[#FF00AA] shadow overflow-hidden h-full">
                  <div className="w-full h-48 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center"
                      width={400}
                      height={200}
                      alt="AI Automation Strategy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-[#00FFF7]">AI Automation Strategy</h3>
                    <p className="mb-6 text-zinc-300 flex-grow">Start with your vision—end with a live solution your team truly uses.</p>
                    <Link href="/services/ai-automation-strategy">
                      <Button className="bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] w-full">
                        Learn More →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* AI Agents */}
              <div className={`relative transition-all duration-700 ease-out delay-900 w-full ${
                visibleSections.has('hero')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}>
                <div className="absolute inset-0 rounded-xl blur-xl opacity-40" style={{background: 'radial-gradient(circle, #FF00AA 0%, rgba(255, 0, 170, 0.3) 60%, transparent 80%)', transform: 'scale(1.2)'}}></div>
                <div className="relative bg-[#16171e]/90 backdrop-blur-md rounded-xl border border-[#FF00AA] shadow overflow-hidden h-full">
                  <div className="w-full h-48 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop&crop=center"
                      width={400}
                      height={200}
                      alt="AI Agents"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-[#00FFF7]">AI Agents</h3>
                    <p className="mb-6 text-zinc-300 flex-grow">Intelligent AI agents that automate complex tasks and enhance your business workflows.</p>
                    <Link href="/services/ai-agents">
                      <Button className="bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] w-full">
                        Learn More →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Document Ingest */}
              <div className={`relative transition-all duration-700 ease-out delay-1000 w-full ${
                visibleSections.has('hero')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}>
                <div className="absolute inset-0 rounded-xl blur-xl opacity-40" style={{background: 'radial-gradient(circle, #FF00AA 0%, rgba(255, 0, 170, 0.3) 60%, transparent 80%)', transform: 'scale(1.2)'}}></div>
                <div className="relative bg-[#16171e]/90 backdrop-blur-md rounded-xl border border-[#FF00AA] shadow overflow-hidden h-full">
                  <div className="w-full h-48 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop&crop=center"
                      width={400}
                      height={200}
                      alt="Document Ingest"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-[#00FFF7]">Document Ingest</h3>
                    <p className="mb-6 text-zinc-300 flex-grow">Transform your documents into actionable insights with AI-powered processing and analysis.</p>
                    <Link href="/services/document-ingest">
                      <Button className="bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] w-full">
                        Learn More →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Digital Services */}
              <div className={`relative transition-all duration-700 ease-out delay-1100 w-full ${
                visibleSections.has('hero')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}>
                <div className="absolute inset-0 rounded-xl blur-xl opacity-40" style={{background: 'radial-gradient(circle, #FF00AA 0%, rgba(255, 0, 170, 0.3) 60%, transparent 80%)', transform: 'scale(1.2)'}}></div>
                <div className="relative bg-[#16171e]/90 backdrop-blur-md rounded-xl border border-[#FF00AA] shadow overflow-hidden h-full">
                  <div className="w-full h-48 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop&crop=center"
                      width={400}
                      height={200}
                      alt="Digital Services"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-[#00FFF7]">Digital Services</h3>
                    <p className="mb-6 text-zinc-300 flex-grow">Modernize your data plumbing—migrations, integrations, analytics & more.</p>
                    <Link href="/services/digital-services">
                      <Button className="bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] w-full">
                        Learn More →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hosting */}
              <div className={`relative transition-all duration-700 ease-out delay-1200 w-full ${
                visibleSections.has('hero')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}>
                <div className="absolute inset-0 rounded-xl blur-xl opacity-40" style={{background: 'radial-gradient(circle, #FF00AA 0%, rgba(255, 0, 170, 0.3) 60%, transparent 80%)', transform: 'scale(1.2)'}}></div>
                <div className="relative bg-[#16171e]/90 backdrop-blur-md rounded-xl border border-[#FF00AA] shadow overflow-hidden h-full">
                  <div className="w-full h-48 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop&crop=center"
                      width={400}
                      height={200}
                      alt="Hosting Services"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-[#00FFF7]">Hosting</h3>
                    <p className="mb-6 text-zinc-300 flex-grow">Reliable, secure, and scalable hosting solutions optimized for performance and uptime.</p>
                    <Link href="/contact">
                      <Button className="bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] w-full">
                        Learn More →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Our Clients Say - Reviews Section */}
        <div className={`space-y-8 transition-all duration-1000 ease-out delay-1500 mt-16 pb-16 max-w-7xl mx-auto w-full px-4 ${
          visibleSections.has('hero')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Review 1 - Aaron Lind */}
            <div className={`relative transition-all duration-700 ease-out delay-1700 w-full ${
              visibleSections.has('hero')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}>
              <div className="absolute inset-0 rounded-xl blur-xl opacity-40" style={{background: 'radial-gradient(circle, #FF00AA 0%, rgba(255, 0, 170, 0.3) 60%, transparent 80%)', transform: 'scale(1.2)'}}></div>
              <div className="relative bg-[#16171e]/90 backdrop-blur-md rounded-xl border border-[#FF00AA] shadow overflow-hidden h-full">
                <div className="p-6 flex flex-col">
                  <p className="text-xl font-semibold text-[#00FFF7] text-center mb-3">Aaron Lind</p>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-zinc-300 italic mb-4 flex-grow">
                    "Datan8 built a powerful data warehouse for Fortress that centralized our data and enhanced our decision-making capabilities. Their custom integrations streamlined our marketing and analytics efforts, while John's guidance and experimentation with AI proved invaluable as we explored the early stages of AI adoption."
                  </p>
                </div>
              </div>
            </div>

            {/* Review 2 - Beau Morin */}
            <div className={`relative transition-all duration-700 ease-out delay-1900 w-full ${
              visibleSections.has('hero')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}>
              <div className="absolute inset-0 rounded-xl blur-xl opacity-40" style={{background: 'radial-gradient(circle, #FF00AA 0%, rgba(255, 0, 170, 0.3) 60%, transparent 80%)', transform: 'scale(1.2)'}}></div>
              <div className="relative bg-[#16171e]/90 backdrop-blur-md rounded-xl border border-[#FF00AA] shadow overflow-hidden h-full">
                <div className="p-6 flex flex-col">
                  <p className="text-xl font-semibold text-[#00FFF7] text-center mb-3">Beau Morin</p>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-zinc-300 italic mb-4 flex-grow">
                    "These guys are geniuses. I've never worked with anyone as efficient, fast, competent, and clear in their communication. It's been a big pleasure to work with them."
                  </p>
                </div>
              </div>
            </div>

            {/* Review 3 - Dominic Elliott */}
            <div className={`relative transition-all duration-700 ease-out delay-2100 w-full ${
              visibleSections.has('hero')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}>
              <div className="absolute inset-0 rounded-xl blur-xl opacity-40" style={{background: 'radial-gradient(circle, #FF00AA 0%, rgba(255, 0, 170, 0.3) 60%, transparent 80%)', transform: 'scale(1.2)'}}></div>
              <div className="relative bg-[#16171e]/90 backdrop-blur-md rounded-xl border border-[#FF00AA] shadow overflow-hidden h-full">
                <div className="p-6 flex flex-col">
                  <p className="text-xl font-semibold text-[#00FFF7] text-center mb-3">Dominic Elliott</p>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-zinc-300 italic mb-4 flex-grow">
                    "Datan8 built my Panda Financial Services Group website cheaply and quickly—exactly what I needed to launch on time and budget."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curved bottom transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{transform: 'rotate(180deg)'}}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0e0e0f]"></path>
          </svg>
        </div>
      </section>
    </main>
  );
}
