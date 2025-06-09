import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from "next/image";
import Link from "next/link";

export default function AiAgentsPage() {
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
            Intelligent AI Agents That Work 24/7
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Custom AI chatbots and virtual assistants that deliver exceptional customer experiences while reducing operational costs.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] px-8 py-4 text-lg rounded shadow-xl" size="lg">
                Get Your AI Agent Demo
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
          Transform your customer service and business operations with intelligent AI agents. From sophisticated chatbots to advanced virtual assistants, our custom AI solutions provide instant, accurate responses while learning and improving from every interaction.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8 text-center">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=128&fit=crop&crop=center" width={400} height={128} alt="Customer Service AI" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">Customer Service Agents</h3>
            <p className="text-zinc-300 text-sm mb-4">
              Intelligent chatbots that handle inquiries, bookings, and support requests with human-like conversation and instant response times across all channels.
            </p>
          </div>
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8 text-center">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=128&fit=crop&crop=center" width={400} height={128} alt="Sales Assistant AI" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">Sales Assistant Agents</h3>
            <p className="text-zinc-300 text-sm mb-4">
              AI-powered sales assistants that qualify leads, provide product recommendations, and guide customers through the buying process with personalized interactions.
            </p>
          </div>
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8 text-center">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=128&fit=crop&crop=center" width={400} height={128} alt="Internal Operations AI" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">Internal Operations Agents</h3>
            <p className="text-zinc-300 text-sm mb-4">
              Streamline internal processes with AI agents that handle HR queries, IT support, data analysis, and workflow automation for maximum efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#00FFF7]">
          AI Agents That Understand Your Business Context
        </h2>
        <p className="text-center text-zinc-300 mb-12 max-w-3xl mx-auto">
          Our AI agents go beyond simple chatbots. They're trained on your business knowledge, integrate with your systems, and continuously learn to provide increasingly valuable interactions that drive real business results.
        </p>

        <div className="bg-[#181924] rounded-2xl border border-[#2b2b35] p-8">
          <p className="text-zinc-300 text-lg leading-relaxed">
            Whether you need customer support automation, lead qualification, or internal process optimization, our AI agents are designed for <span className="text-[#00FFF7] font-semibold">intelligent conversation and seamless integration</span>. We build custom solutions that understand your brand voice, business rules, and customer needs—delivering consistent, professional interactions that scale with your growth.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#181924] border-t border-[#23242b] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00FFF7]">Why Choose DataN8 AI Agents?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Multi-Channel Integration</h3>
              <p className="text-zinc-300 mb-4">
                Deploy across websites, WhatsApp, Facebook Messenger, email, and internal systems for consistent experiences everywhere your customers interact.
              </p>
            </div>
            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Advanced Natural Language</h3>
              <p className="text-zinc-300 mb-4">
                Powered by latest language models with custom training on your business context, ensuring accurate and contextually relevant responses.
              </p>
            </div>
            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Seamless Handoffs</h3>
              <p className="text-zinc-300 mb-4">
                Smart escalation to human agents when needed, with full conversation context and customer history preserved for smooth transitions.
              </p>
            </div>
            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Real-Time Analytics</h3>
              <p className="text-zinc-300 mb-4">
                Comprehensive insights into customer interactions, agent performance, and business impact with actionable reporting dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#00FFF7]">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
              How quickly can you deploy an AI agent for our business?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              Depending on complexity, we can deploy a basic AI agent within 2-4 weeks. More sophisticated agents with custom integrations typically take 6-8 weeks. We provide working prototypes early in the process for testing and feedback.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
              What makes your AI agents different from standard chatbots?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              Our AI agents use advanced language models with custom training on your business knowledge. They understand context, handle complex conversations, integrate with your systems, and continuously learn from interactions—far beyond simple rule-based chatbots.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
              Can AI agents integrate with our existing systems?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              Yes, our AI agents can integrate with CRM systems, databases, booking platforms, payment processors, and most business applications through APIs. This enables them to access real-time information and perform actions on behalf of customers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
              How do you ensure the AI agent maintains our brand voice?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              We train the AI agent on your brand guidelines, tone of voice, and existing customer communications. Through custom prompting and fine-tuning, we ensure consistent brand representation across all interactions with ongoing monitoring and refinement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
              What level of support do you provide after deployment?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              We provide comprehensive ongoing support including performance monitoring, regular updates, content training, and technical maintenance. Our team continuously optimizes the agent's performance based on real-world interactions and feedback.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="bg-gradient-to-r from-[#00FFF7] to-[#00E5DE] rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-black mb-4">Ready to Deploy Your AI Agent?</h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            See how intelligent AI agents can transform your customer service and business operations. Get a personalized demo and discover the possibilities for your business.
          </p>
          <Link href="/contact">
            <Button className="bg-black text-[#00FFF7] font-semibold hover:bg-gray-900 px-10 py-4 text-lg rounded shadow-xl mr-4" size="lg">
              Get Your AI Agent Demo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
