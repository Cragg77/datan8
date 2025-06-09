import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from "next/image";
import Link from "next/link";

export default function AiAutomationStrategyPage() {
  return (
    <main className="bg-[#0e0e0f] min-h-screen text-white">
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

        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            AI Strategy That Transforms Your Business
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            From vision to value with secure AI automation and strategic implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] px-8 py-4 text-lg rounded shadow-xl" size="lg">
                100% FREE AI Strategy Consult
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
          Unlock your business growth with secure AI, automation and strategy. Turn your biggest ideas into real business results—faster, safer and more strategically than ever before. With DataN8's proven three-phase approach, you don't just get AI—you gain a competitive edge.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8 text-center">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=128&fit=crop&crop=center" width={400} height={128} alt="AI Strategy Vision" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">Strategy & Vision</h3>
            <p className="text-zinc-300 text-sm mb-4">
              High-impact stakeholder workshops to clarify business value and AI potential. Transparent risk assessment and compliance checks—peace of mind from day one.
            </p>
          </div>
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8 text-center">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=128&fit=crop&crop=center" width={400} height={128} alt="AI Prototyping" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">Enablement & Early Wins</h3>
            <p className="text-zinc-300 text-sm mb-4">
              Interactive prototypes—get feedback and excitement early, not later. Privacy reviews, threat modeling, and secure workshops ensure robust, trustworthy solutions.
            </p>
          </div>
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8 text-center">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=128&fit=crop&crop=center" width={400} height={128} alt="AI Implementation" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">Rock-Solid Delivery</h3>
            <p className="text-zinc-300 text-sm mb-4">
              Modern CI/CD, role-based access, end-to-end encryption, and hardened build pipelines. Zero-stress launches—our experts walk you through every step.
            </p>
          </div>
        </div>
      </section>



      {/* Our Process */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#00FFF7]">
          AI-First Strategy That Delivers Measurable Business Impact
        </h2>
        <p className="text-center text-zinc-300 mb-12 max-w-3xl mx-auto">
          At DataN8, we specialise in AI automation and strategy that transforms New Zealand businesses—no hype, just results. Our proven three-phase approach ensures secure, scalable AI implementation that your team will actually use.
        </p>

        <div className="bg-[#181924] rounded-2xl border border-[#2b2b35] p-8">
          <p className="text-zinc-300 text-lg leading-relaxed">
            Whether you're exploring AI possibilities or ready to scale existing automation, our strategic approach is built around one goal: <span className="text-[#00FFF7] font-semibold">sustainable business transformation</span>. We deliver secure, compliant AI solutions with built-in user adoption strategies—powered by a methodology that takes you from vision to value faster than traditional consultancies.
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
                How much does AI strategy consulting cost?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-zinc-300">
                Our AI strategy engagements are tailored to your business size and complexity. We offer transparent pricing with clear deliverables at each phase. Book a free consultation to discuss your specific needs and get a customised proposal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
              <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
                What makes DataN8's AI approach different?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-zinc-300">
                We combine strategic business consulting with hands-on technical implementation and security-first design. Our three-phase methodology ensures both technical excellence and user adoption, delivering sustainable transformation rather than just technology.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
              <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
                How quickly will we see results?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-zinc-300">
                With our milestone-based approach, you'll see early wins within weeks of starting. Our interactive prototyping phase generates excitement and feedback quickly, while our strategic roadmap ensures long-term sustainable value.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
              <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
                How do you ensure security and compliance?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-zinc-300">
                Security isn't an afterthought—it's built into every phase. We conduct privacy impact assessments, threat modeling, and compliance reviews from day one. Our implementations include encryption, role-based access controls, and audit trails as standard.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="bg-gradient-to-r from-[#00FFF7] to-[#00E5DE] rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-black mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Get your free AI strategy consultation with DataN8's specialists. Discover how we can unlock your business potential and accelerate growth with secure, strategic AI implementation.
          </p>
          <Link href="/contact">
            <Button className="bg-black text-[#00FFF7] font-semibold hover:bg-gray-900 px-10 py-4 text-lg rounded shadow-xl mr-4" size="lg">
              Free AI Strategy Consult
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
