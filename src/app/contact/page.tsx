import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function ContactPage() {
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
            Get in Touch with DataN8
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with AI-powered solutions? Let's discuss how we can help you achieve your technology and automation goals.
          </p>
        </div>

        {/* Curved bottom transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{transform: 'rotate(180deg)'}}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0e0e0f]"></path>
          </svg>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <p className="text-center text-lg text-zinc-300 mb-12 max-w-4xl mx-auto">
          Connect with our team of AI specialists and web design experts. Whether you need a new website, AI automation strategy, or ongoing support, we're here to help your New Zealand business thrive in the digital landscape.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#00FFF7]">Send Us a Message</h2>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name<span className="text-[#00FFF7]"> *</span></label>
                <input id="name" name="name" required className="w-full bg-[#0e0e0f] border border-[#2b2b35] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#00FFF7] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email<span className="text-[#00FFF7]"> *</span></label>
                <input id="email" name="email" type="email" required className="w-full bg-[#0e0e0f] border border-[#2b2b35] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#00FFF7] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" className="w-full bg-[#0e0e0f] border border-[#2b2b35] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#00FFF7] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message<span className="text-[#00FFF7]"> *</span></label>
                <textarea id="message" name="message" required rows={5} className="w-full bg-[#0e0e0f] border border-[#2b2b35] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#00FFF7] transition-colors resize-vertical" />
              </div>
              <Button className="mt-4 bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] px-6 py-3">Send Message</Button>
            </form>
          </div>

          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#00FFF7]">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <div className="font-semibold text-[#00FFF7] mb-2">Phone</div>
                <a href="tel:+64278802333" className="text-zinc-300 hover:text-[#00FFF7] transition-colors text-lg">+64 27 880 2333</a>
              </div>
              <div>
                <div className="font-semibold text-[#00FFF7] mb-2">Email</div>
                <a href="mailto:Admin@datan8.com" className="text-zinc-300 hover:text-[#00FFF7] transition-colors">Admin@datan8.com</a>
              </div>

              <div>
                <div className="font-semibold text-[#00FFF7] mb-2">Business Hours</div>
                <div className="text-zinc-300 leading-relaxed">Monday - Friday: 9am - 5pm<br />Saturday: By appointment<br />Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#181924] border-t border-[#23242b] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#00FFF7]">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="bg-[#0e0e0f] rounded-xl border border-[#2b2b35] mb-4">
                <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
                  Do you work with all industries and business sizes?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-zinc-300">
                  We support New Zealand businesses of all types, with tailored solutions for corporates, SMBs, startups and non-profits.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-[#0e0e0f] rounded-xl border border-[#2b2b35] mb-4">
                <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
                  How much does a consultation cost?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-zinc-300">
                  Initial consultations are free. We believe in offering advice without obligation, and only recommend what's best for your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-[#0e0e0f] rounded-xl border border-[#2b2b35] mb-4">
                <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
                  How soon can DataN8 deliver results?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-zinc-300">
                  Most strategy, website or automation projects start delivering value within days or weeks, not months.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-[#0e0e0f] rounded-xl border border-[#2b2b35] mb-4">
                <AccordionTrigger className="px-6 py-4 text-lg font-bold text-white hover:text-[#00FFF7] hover:no-underline">
                  What locations do you serve?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-zinc-300">
                  We work with organisations NZ-wide and internationally, 100% remote or hybrid as needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="bg-gradient-to-r from-[#00FFF7] to-[#00E5DE] rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-black mb-4">Ready to Start Your AI Journey?</h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Book your free consultation with DataN8's AI and web design specialists. Let's discuss how we can transform your business and accelerate your growth.
          </p>
        </div>
      </section>
    </main>
  );
}
