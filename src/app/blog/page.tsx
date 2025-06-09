"use client";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Sample blog posts data - structured like the reference design
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business Automation",
    excerpt: "Discover how artificial intelligence is revolutionizing business processes and what it means for your organization's future growth.",
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop&crop=center",
    publishDate: "15 December 2024",
    readTime: "8 minute read",
    category: "AI Strategy",
    author: "DataN8 Team"
  },
  {
    id: 2,
    title: "Building Intelligent Document Processing Systems",
    excerpt: "Learn how AI-powered document ingest can transform your paperwork into actionable business insights.",
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop&crop=center",
    publishDate: "10 December 2024",
    readTime: "12 minute read",
    category: "Document Processing",
    author: "DataN8 Team"
  },
  {
    id: 3,
    title: "Website Performance Optimization with AI",
    excerpt: "Explore how artificial intelligence can automatically optimize your website's performance and user experience.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&crop=center",
    publishDate: "5 December 2024",
    readTime: "10 minute read",
    category: "Web Development",
    author: "DataN8 Team"
  },
  {
    id: 4,
    title: "Data Analytics for Kiwi Businesses",
    excerpt: "Understanding how New Zealand businesses can leverage data analytics to make smarter decisions and drive growth.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&crop=center",
    publishDate: "28 November 2024",
    readTime: "15 minute read",
    category: "Data Analytics",
    author: "DataN8 Team"
  },
  {
    id: 5,
    title: "Implementing AI Agents in Customer Service",
    excerpt: "A comprehensive guide to deploying intelligent AI agents that enhance customer experience and reduce response times.",
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop&crop=center",
    publishDate: "20 November 2024",
    readTime: "11 minute read",
    category: "AI Agents",
    author: "DataN8 Team"
  },
  {
    id: 6,
    title: "Digital Transformation for Auckland Businesses",
    excerpt: "How Auckland-based companies are modernizing their operations with cloud migration, automation, and AI integration.",
    coverImage: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=300&fit=crop&crop=center",
    publishDate: "15 November 2024",
    readTime: "9 minute read",
    category: "Digital Services",
    author: "DataN8 Team"
  }
];

export default function BlogPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const heroSectionRef = useRef<HTMLElement>(null);
  const postsRef = useRef<HTMLElement>(null);

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
    if (postsRef.current) observer.observe(postsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#0e0e0f] min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroSectionRef}
        id="hero"
        className="relative flex flex-col items-center justify-center bg-gradient-to-br from-[#222226] to-[#293148] text-center pt-24 pb-16 px-4 overflow-hidden"
      >
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
          <div className={`transition-all duration-1000 ease-out ${
            visibleSections.has('hero')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              DataN8 Blog
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Stay informed with the latest insights, market updates, and expert advice on AI, automation, and digital transformation for New Zealand businesses.
            </p>
          </div>
        </div>

        {/* Curved bottom transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{transform: 'rotate(180deg)'}}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0e0e0f]"></path>
          </svg>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section
        ref={postsRef}
        id="posts"
        className="max-w-7xl mx-auto py-12 px-4"
      >
        <div className={`transition-all duration-1000 ease-out ${
          visibleSections.has('posts')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            Latest Articles
          </h2>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className={`group transition-all duration-700 ease-out ${
                  visibleSections.has('posts')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#181924] rounded-xl border border-[#2b2b35] overflow-hidden hover:border-[#00FFF7] transition-all duration-300 hover:shadow-lg hover:shadow-[#00FFF7]/10">
                  {/* Cover Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#00FFF7] text-black text-sm font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    {/* Read Time Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/70 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-[#00FFF7] transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-zinc-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#00FFF7] rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-sm">D8</span>
                        </div>
                        <span className="text-sm text-zinc-400">{post.author}</span>
                      </div>
                      <span className="text-sm text-zinc-400">{post.publishDate}</span>
                    </div>

                    {/* Read More Button */}
                    <Link href={`/blog/${post.id}`}>
                      <Button className="w-full bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] transition-colors duration-300 rounded shadow-md">
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>


        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-[#181924] border-t border-[#23242b] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#00FFF7]">Stay Updated</h2>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
            Get the latest AI insights, automation tips, and digital transformation strategies delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#16171e] border border-[#2b2b35] rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-[#00FFF7] transition-colors"
            />
            <Button className="bg-[#00FFF7] text-black font-semibold hover:bg-[#00E5DE] px-6 py-3 rounded-lg whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
