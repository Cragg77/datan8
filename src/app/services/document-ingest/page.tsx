import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from "next/image";
import Link from "next/link";

export default function DocumentIngestPage() {
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
            AI-Powered Document Ingestion & OCR
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Transform paper documents, PDFs, and images into structured, searchable data with advanced AI OCR technology and intelligent document processing.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] px-8 py-4 text-lg rounded shadow-xl" size="lg">
                Start Processing Documents
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
          Unlock the value hidden in your documents with our AI-powered document ingestion platform. From invoices and contracts to handwritten notes and complex forms, our advanced OCR and machine learning technology extracts, structures, and integrates document data seamlessly into your business systems.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8 text-center">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=128&fit=crop&crop=center" width={400} height={128} alt="Intelligent OCR Processing" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">Intelligent OCR Processing</h3>
            <p className="text-zinc-300 text-sm mb-4">
              Advanced optical character recognition that handles multiple languages, handwriting, and complex document layouts with industry-leading accuracy rates.
            </p>
          </div>
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8 text-center">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=128&fit=crop&crop=center" width={400} height={128} alt="Data Extraction & Structure" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">Data Extraction & Structure</h3>
            <p className="text-zinc-300 text-sm mb-4">
              AI-powered field identification and data extraction that understands document context, relationships, and business rules for accurate structured output.
            </p>
          </div>
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8 text-center">
            <div className="w-full h-32 rounded-lg overflow-hidden mx-auto mb-4">
              <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=128&fit=crop&crop=center" width={400} height={128} alt="System Integration" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">Seamless System Integration</h3>
            <p className="text-zinc-300 text-sm mb-4">
              Direct integration with your existing databases, CRM, ERP, and business applications for automated document processing workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#00FFF7]">
          Transform Documents Into Actionable Business Data
        </h2>
        <p className="text-center text-zinc-300 mb-12 max-w-3xl mx-auto">
          Our document ingestion platform goes beyond simple scanning. We combine cutting-edge AI technology with deep business understanding to create intelligent document processing workflows that learn and improve over time, delivering consistent, accurate results at scale.
        </p>

        <div className="bg-[#181924] rounded-2xl border border-[#2b2b35] p-8">
          <p className="text-zinc-300 text-lg leading-relaxed">
            Whether you're processing <span className="text-[#00FFF7] font-semibold">invoices, contracts, forms, or legacy documents</span>, our solution adapts to your specific document types and business requirements. From batch processing historical archives to real-time document ingestion, we provide the flexibility and accuracy your business needs to unlock the full value of your document-based information.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#181924] border-t border-[#23242b] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00FFF7]">Why Choose DataN8 Document Ingestion?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Multi-Format Support</h3>
              <p className="text-zinc-300 mb-4">
                Process PDFs, images, scanned documents, handwritten notes, and complex forms across multiple languages with consistently high accuracy rates.
              </p>
            </div>
            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">AI-Powered Field Recognition</h3>
              <p className="text-zinc-300 mb-4">
                Advanced machine learning algorithms automatically identify and extract relevant fields, understanding document context and business relationships.
              </p>
            </div>
            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Real-Time Processing</h3>
              <p className="text-zinc-300 mb-4">
                Instant document processing with live validation and quality checks, ensuring data accuracy before integration into your business systems.
              </p>
            </div>
            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Secure & Compliant</h3>
              <p className="text-zinc-300 mb-4">
                Enterprise-grade security with encryption, audit trails, and compliance frameworks for sensitive document processing and data protection.
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
              What types of documents can your AI OCR system process?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              Our system handles virtually any document type including PDFs, images (JPG, PNG, TIFF), scanned documents, invoices, contracts, forms, handwritten notes, receipts, and legacy documents. We support multiple languages and can process both structured and unstructured documents.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
              How accurate is the document processing and data extraction?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              Our AI-powered OCR achieves 95-99% accuracy rates depending on document quality and type. The system includes confidence scoring, validation rules, and human-in-the-loop workflows for critical documents, ensuring data integrity while maintaining high automation levels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
              Can the system integrate with our existing business applications?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              Yes, our document ingestion platform integrates with popular CRM, ERP, accounting, and database systems through APIs, webhooks, and direct database connections. We support real-time and batch processing workflows tailored to your business requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
              How do you ensure document security and data privacy?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              We implement enterprise-grade security including end-to-end encryption, secure document storage, access controls, audit trails, and compliance with GDPR, HIPAA, and other regulatory frameworks. Documents can be processed on-premises or in secure cloud environments.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="bg-[#16171e] rounded-xl border border-[#2b2b35] mb-4">
            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
              What's the typical implementation timeline for document ingestion?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-zinc-300">
              Basic document processing can be deployed within 2-4 weeks. Complex implementations with custom field extraction, system integrations, and workflow automation typically take 6-12 weeks. We provide pilot programs and phased rollouts to minimize business disruption.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="bg-gradient-to-r from-[#00FFF7] to-[#00E5DE] rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-black mb-4">Ready to Digitize Your Documents?</h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Transform your document processing with AI-powered OCR and intelligent data extraction. See how much time and cost you can save with automated document ingestion.
          </p>
          <Link href="/contact">
            <Button className="bg-black text-[#00FFF7] font-semibold hover:bg-gray-900 px-10 py-4 text-lg rounded shadow-xl mr-4" size="lg">
              Start Your Document Demo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
