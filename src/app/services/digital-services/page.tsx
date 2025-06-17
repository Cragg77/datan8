import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from "next/image";
import Link from "next/link";

export default function DigitalServicesPage() {
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
            Digital Services & Data Modernization
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Transform your digital infrastructure with modern data architecture, seamless migrations, intelligent integrations, and powerful analytics solutions.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] px-8 py-4 text-lg rounded shadow-xl" size="lg">
                Start Your Digital Transformation
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
          Modernize your data plumbing with expert migrations, integrations, analytics, and more. From legacy system migrations to cutting-edge cloud architectures, we deliver comprehensive digital transformation solutions that scale with your business growth and evolving technology needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8 text-center">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=128&fit=crop&crop=center" width={400} height={128} alt="Data Migration & Modernization" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">Data Migration & Modernization</h3>
            <p className="text-zinc-300 text-sm mb-4">
              Seamless migration from legacy systems to modern cloud architectures with zero downtime, data integrity assurance, and comprehensive testing protocols.
            </p>
          </div>
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8 text-center">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=128&fit=crop&crop=center" width={400} height={128} alt="System Integration" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">System Integration & APIs</h3>
            <p className="text-zinc-300 text-sm mb-4">
              Connect disparate systems with robust API integrations, real-time data synchronization, and automated workflows that eliminate data silos.
            </p>
          </div>
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8 text-center">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=128&fit=crop&crop=center" width={400} height={128} alt="Analytics & Business Intelligence" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">Analytics & Business Intelligence</h3>
            <p className="text-zinc-300 text-sm mb-4">
              Transform raw data into actionable insights with advanced analytics platforms, real-time dashboards, and intelligent reporting solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#00FFF7]">
          Enterprise-Grade Digital Infrastructure Solutions
        </h2>
        <p className="text-center text-zinc-300 mb-12 max-w-3xl mx-auto">
          Our digital services approach combines deep technical expertise with strategic business understanding. We design and implement scalable, secure, and future-ready digital infrastructure that drives operational efficiency and enables sustainable business growth.
        </p>

        <div className="bg-[#181924] rounded-2xl border border-[#2b2b35] p-8">
          <p className="text-zinc-300 text-lg leading-relaxed">
            Whether you're <span className="text-[#00FFF7] font-semibold">migrating to the cloud, integrating complex systems, or building advanced analytics capabilities</span>, our comprehensive digital services ensure smooth transitions and optimal performance. We handle everything from infrastructure design and data architecture to ongoing optimization and support.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#181924] border-t border-[#23242b] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00FFF7]">Why Choose DataN8 Digital Services?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Zero-Downtime Migrations</h3>
              <p className="text-zinc-300 mb-4">
                Comprehensive migration strategies with rollback capabilities, data validation, and business continuity planning to ensure seamless transitions.
              </p>
            </div>
            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Scalable Cloud Architecture</h3>
              <p className="text-zinc-300 mb-4">
                Modern cloud-native solutions designed for scalability, performance, and cost optimization across AWS, Azure, and Google Cloud platforms.
              </p>
            </div>
            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Real-Time Data Processing</h3>
              <p className="text-zinc-300 mb-4">
                Advanced data pipelines with stream processing, ETL automation, and real-time analytics for immediate business insights and decision-making.
              </p>
            </div>
            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Security & Compliance</h3>
              <p className="text-zinc-300 mb-4">
                Enterprise security frameworks with encryption, access controls, audit trails, and compliance with industry standards and regulations.
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
              How do you ensure zero downtime during data migrations?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              We use proven migration strategies including blue-green deployments, database replication, and phased rollouts. Our process includes comprehensive testing, rollback procedures, and real-time monitoring to ensure business continuity throughout the migration process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
              What cloud platforms do you work with for digital modernization?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              We're platform-agnostic and work with all major cloud providers including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud solutions. We help you choose the best platform based on your specific requirements, budget, and existing infrastructure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
              How do you handle data security during system integrations?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              Security is built into every integration from the ground up. We implement end-to-end encryption, secure API gateways, authentication protocols, and comprehensive access controls. All integrations undergo security audits and compliance validation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
              What types of analytics solutions do you implement?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              We implement comprehensive analytics solutions including real-time dashboards, predictive analytics, data warehousing, business intelligence platforms, and custom reporting tools. Solutions are tailored to your industry and specific business requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
              What ongoing support do you provide after digital transformation?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              We provide comprehensive ongoing support including 24/7 monitoring, performance optimization, security updates, scaling assistance, and technical consultation. Our team ensures your digital infrastructure continues to evolve with your business needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="bg-gradient-to-r from-[#00FFF7] to-[#00E5DE] rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-black mb-4">Ready to Modernize Your Digital Infrastructure?</h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Transform your business with modern data architecture, seamless integrations, and powerful analytics. Let's build the digital foundation for your future growth.
          </p>
          <Link href="/contact">
            <Button className="bg-black text-[#00FFF7] font-semibold hover:bg-gray-900 px-10 py-4 text-lg rounded shadow-xl mr-4" size="lg">
              Start Your Digital Journey
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
