import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
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
            About DataN8
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Empowering New Zealand businesses to thrive in the digital era through innovative AI solutions, automation strategies, and cutting-edge web design.
          </p>

        </div>

        {/* Curved bottom transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{transform: 'rotate(180deg)'}}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0e0e0f]"></path>
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00FFF7]">Our Story</h2>
          <p className="text-lg text-zinc-300 max-w-4xl mx-auto">
            DataN8 was founded with a single purpose: to empower New Zealand businesses to thrive in the digital era. We saw a gap where technology, AI, automation, and real business understanding could work together—so we built a team with the expertise, heart, and vision to deliver it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#00FFF7]">Passion for Technology</h3>
            <p className="text-zinc-300 mb-6">
              From the beginning, DataN8 believed technology should work for people, not the other way around. Our founders started the company after seeing too many businesses let down by templated solutions and "one-size-fits-all" offerings.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-[#00FFF7]">A People-First Approach</h3>
            <p className="text-zinc-300">
              We built DataN8 as a remote-first, family-friendly business—focused on outcomes, not office hours. We value our team, our clients, and the balance that allows us to do great work for all.
            </p>
          </div>

          <div className="bg-[#181924] rounded-xl border border-[#2b2b35] p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#00FFF7]">Our Mission</h3>
            <p className="text-zinc-300 mb-6">
              To deliver real results from AI, automation, and digital solutions. We help companies communicate their worth, streamline their operations, and grow—using every digital advantage possible.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-[#00FFF7]">Still 100% Local</h3>
            <p className="text-zinc-300">
              We're based in Auckland, but serve organisations NZ-wide and internationally. Our remote team brings together senior engineers, AI specialists, designers, QA, and business strategists under one collaborative roof.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#181924] border-t border-[#23242b] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00FFF7]">Our Values</h2>
            <p className="text-lg text-zinc-300 max-w-4xl mx-auto">
              The principles that guide everything we do at DataN8, from client relationships to innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8 text-center">
              <div className="w-16 h-16 bg-[#00FFF7]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-[#00FFF7] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Innovation First</h3>
              <p className="text-zinc-300">
                We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.
              </p>
            </div>

            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8 text-center">
              <div className="w-16 h-16 bg-[#00FFF7]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-[#00FFF7] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Client Success</h3>
              <p className="text-zinc-300">
                Your success is our success. We measure our achievements by the growth and satisfaction of our clients.
              </p>
            </div>

            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8 text-center">
              <div className="w-16 h-16 bg-[#00FFF7]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-[#00FFF7] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Quality Excellence</h3>
              <p className="text-zinc-300">
                We deliver solutions that work reliably, perform exceptionally, and exceed expectations every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="bg-gradient-to-r from-[#00FFF7] to-[#00E5DE] rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-black mb-4">Ready for Digital Growth?</h2>
          <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's explore your AI, automation, or digital roadmap—no obligation. DataN8 can help you stand out and scale.
          </p>
          <Link href="/contact">
            <Button className="bg-black text-[#00FFF7] font-semibold hover:bg-gray-900 px-10 py-4 text-lg rounded shadow-xl" size="lg">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
