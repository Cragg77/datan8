"use client";
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function WebsiteCreationPage() {
  const reviewsSectionRef = useRef<HTMLElement>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

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
    if (reviewsSectionRef.current) observer.observe(reviewsSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#0e0e0f] min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-[#222226] to-[#293148] text-center pt-24 pb-16 px-4 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/uploads/Vid_small.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#222226]/40 to-[#293148]/40"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          <div className="absolute w-20 h-20 border-2 border-[#00FFF7]/20 rounded-full animate-float-1 floating-shape" style={{top: '10%', left: '10%'}}></div>
          <div className="absolute w-16 h-16 bg-[#00FFF7]/10 rounded-lg animate-float-2 rotate-45 floating-shape" style={{top: '20%', right: '15%'}}></div>
          <div className="absolute w-12 h-12 border-2 border-[#00FFF7]/30 rounded-lg animate-float-3 floating-shape" style={{bottom: '30%', left: '20%'}}></div>
          <div className="absolute w-24 h-24 border border-[#00FFF7]/15 rounded-full animate-float-4 floating-shape" style={{top: '60%', right: '10%'}}></div>
          <div className="absolute w-8 h-8 bg-[#00FFF7]/20 rounded-full animate-float-5 floating-shape" style={{top: '40%', left: '5%'}}></div>
          <div className="absolute w-14 h-14 border-2 border-[#00FFF7]/25 rotate-45 animate-float-6 floating-shape" style={{bottom: '20%', right: '25%'}}></div>
          <div className="absolute w-10 h-10 bg-[#00FFF7]/15 rounded-lg animate-float-1 floating-shape" style={{top: '80%', left: '60%'}}></div>
          <div className="absolute w-18 h-18 border border-[#00FFF7]/20 rounded-full animate-float-2 floating-shape" style={{top: '15%', left: '70%'}}></div>
          <div className="absolute w-6 h-6 bg-[#00FFF7]/30 rounded-full animate-float-3 floating-shape" style={{bottom: '60%', right: '5%'}}></div>
          <div className="absolute w-22 h-22 border-2 border-[#00FFF7]/10 rounded-lg rotate-12 animate-float-4 floating-shape" style={{top: '50%', left: '80%'}}></div>

          {/* Additional smaller particles */}
          <div className="absolute w-3 h-3 bg-[#00FFF7]/40 rounded-full animate-float-5 floating-shape" style={{top: '25%', left: '40%'}}></div>
          <div className="absolute w-4 h-4 border border-[#00FFF7]/25 rounded-full animate-float-6 floating-shape" style={{bottom: '40%', left: '70%'}}></div>
          <div className="absolute w-5 h-5 bg-[#00FFF7]/20 rounded-lg animate-float-1 floating-shape" style={{top: '70%', right: '40%'}}></div>
          <div className="absolute w-2 h-2 bg-[#00FFF7]/50 rounded-full animate-float-2 floating-shape" style={{top: '35%', right: '60%'}}></div>
          <div className="absolute w-7 h-7 border border-[#00FFF7]/30 rounded-lg rotate-45 animate-float-3 floating-shape" style={{bottom: '70%', left: '45%'}}></div>
        </div>

        <div className="max-w-4xl mx-auto z-10 relative w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            NZ's Quickest Website Builds Big Impact, Small Investment
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Go live in days with conversion-focused design and transparent pricing.
          </p>
          <div className="flex justify-center">
            <Link href="/start-website">
              <Button className="bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] px-8 py-4 text-lg rounded shadow-xl" size="lg">
                Start Your Website Today
              </Button>
            </Link>
          </div>
        </div>

        {/* Curved bottom transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{transform: 'rotate(180deg)'}}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0e0e0f]"></path>
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <p className="text-center text-lg text-zinc-300 mb-12 max-w-4xl mx-auto">
         From Kaitaia to Queenstown, we've helped Kiwi businesses turn browsers into buyers. By zeroing in on your unique value, crafting clear calls to action, and combining smart UX with eye catching design, we build sites that not only look great but also grow your bottom line. Let us deliver a website that works as hard as you do.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-6 md:p-8 text-center w-full">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://img1.wsimg.com/cdn/Image/All/All/1/en-US/0dfcc07b-259c-4c0f-8e9f-3ac90e6c46ae/gd-websitebuilder-marquee-desktop.jpg" width={400} height={128} alt="AI Custom Websites" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">AI Powered Custom Websites</h3>
            <p className="text-zinc-300 text-sm mb-4">
              We harness AI to speed up development and deliver a site that's uniquely yours. From initial concept to launch, our AI-driven workflows craft a flexible, user-focused experience that drives leads and makes future updates effortless.
            </p>
          </div>
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-6 md:p-8 text-center w-full">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://cdn.shopify.com/s/files/1/0070/7032/articles/ecommerce_20platforms_ce71dbf3-6d42-4cd3-82e7-31f1ef033880.png?v=1746557174" width={400} height={128} alt="AI Ecommerce Platforms" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">AI-Enhanced Ecommerce Platforms</h3>
            <p className="text-zinc-300 text-sm mb-4">
              Our ecommerce solutions learn from customer behavior to boost product discovery and streamline checkout. We build data-driven stores that adapt over time, increasing conversions and growing your revenue.
            </p>
          </div>
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-6 md:p-8 text-center w-full">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://scalegrid.io/wp-content/uploads/blog-feature-img_ai-in-cloud-computing-scalegrid.jpg" width={400} height={128} alt="AI Hosting and Support" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">AI-Optimized Hosting and Support</h3>
            <p className="text-zinc-300 text-sm mb-4">
              Enjoy intelligent hosting that automatically tunes performance, scales on demand, and runs security scans around the clock. With automated backups and proactive monitoring, your site stays fast, reliable, and secure—no intervention needed.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#00FFF7]">
          AI-First Website Builds in Auckland That Deliver Measurable Impact
        </h2>
        <p className="text-center text-zinc-300 mb-12 max-w-3xl mx-auto">
          At DataN8, we specialise in AI-powered website creation that helps New Zealand businesses grow—no guesswork, just impact. Based in Auckland, we understand your local market inside out and know exactly what turns visitors into customers.
        </p>

        <div className="bg-[#181924] rounded-2xl border border-[#2b2b35] p-6 md:p-8">
          <p className="text-zinc-300 text-lg leading-relaxed">
            Whether you're a startup crafting your first online home or an established brand ready to scale, our custom designs are built around one goal: <span className="text-[#00FFF7] font-semibold">results</span>. We deliver lightning-fast, mobile-optimised sites that convert—powered by an AI-driven process that takes you from brief to launch in half the time and cost of a traditional agency.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#181924] border-t border-[#23242b] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#00FFF7]">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
              <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
                How much does a new website cost?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-zinc-300">
                Thanks to our AI first process we deliver sites at up to 50 percent less than traditional agencies. We keep pricing crystal clear with no hidden fees. Book a free consultation for a personalised quote.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
              <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
                What sets DataN8's web design apart?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-zinc-300">
                We combine AI driven workflows with deep local market knowledge and solid business strategy. The result is faster turnarounds, budget friendly rates and websites engineered to convert visitors into customers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
              <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
                How quickly will my site be live?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-zinc-300">
                With AI accelerated development you will see working prototypes in days or weeks instead of months. We streamline every phase so you launch sooner without sacrificing quality.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
              <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
                Do you support and optimise sites after launch?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-zinc-300">
                Absolutely. Our AI optimised hosting handles performance tuning, security monitoring and automated backups. We also provide regular updates and ongoing UX and conversion improvements so your site is always improving.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* What Our Clients Say - Reviews Section */}
      <section
        ref={reviewsSectionRef}
        id="reviews"
        className="max-w-7xl mx-auto py-16 px-4"
      >
        <div className={`space-y-8 transition-all duration-1000 ease-out ${
          visibleSections.has('reviews')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Review 1 - Aaron Lind */}
            <div className={`relative transition-all duration-700 ease-out delay-200 w-full ${
              visibleSections.has('reviews')
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
            <div className={`relative transition-all duration-700 ease-out delay-400 w-full ${
              visibleSections.has('reviews')
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
            <div className={`relative transition-all duration-700 ease-out delay-600 w-full ${
              visibleSections.has('reviews')
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
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="bg-gradient-to-r from-[#00FFF7] to-[#00E5DE] rounded-2xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-black mb-4">Ready for a Website That Actually Works?</h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Get your free web design consultation with DataN8's AI specialists. Discover how we can transform your online presence and start generating more leads today.
          </p>
          <Link href="/start-website">
            <Button className="bg-black text-[#00FFF7] font-semibold hover:bg-gray-900 px-10 py-4 text-lg rounded shadow-xl mr-4" size="lg">
              Free Web Design Consult
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
