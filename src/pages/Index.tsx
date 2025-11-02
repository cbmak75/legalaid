import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.title = "Legalaid | Legal Artificial Intelligence Development";
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroRef.current.style.setProperty("--mouse-x", `${x}px`);
    heroRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="w-full bg-bar text-primary-foreground">
        <nav className="container flex items-center justify-between py-6 text-brand-contrast">
          <a href="#hero" className="hidden md:flex items-center gap-3" aria-label="Legalaid home">
            <img
              src="/lovable-uploads/4e1c48b3-aec9-4b02-afd1-746aeb3caeea.png"
              alt="Legalaid logo - Legal Artificial Intelligence Development"
              className="h-12 md:h-16 w-auto"
              loading="eager"
            />
          </a>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <Button asChild variant="link" className="text-brand-contrast hover:text-brand-contrast">
              <a href="#about">About</a>
            </Button>
            <Button asChild variant="link" className="text-brand-contrast hover:text-brand-contrast">
              <a href="#launch">Launches</a>
            </Button>
            <Button asChild variant="link" className="text-brand-contrast hover:text-brand-contrast">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </nav>
      </header>

      <main id="hero" ref={heroRef} onMouseMove={handleMouseMove} className="bg-hero text-primary-foreground">
        <section className="container py-24 md:py-32">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                A new way for lawyers to evolve with AI
              </h1>
              <p className="mt-4 text-lg text-muted-foreground/90">
                Legal Artificial Intelligence Development (Legalaid) creates simple, pragmatic AI tools for legal practitioners.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                <Button asChild size="lg" variant="hero">
                  <a href="https://www.ukinnovator.online" target="_blank" rel="noreferrer">Explore ukinnovator.online</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-foreground hover:text-foreground">
                  <a href="#about">Learn more</a>
                </Button>
              </div>
            </div>
            <div className="justify-self-center w-full">
              <figure className="w-full">
                <img
                  src="/lovable-uploads/4e1c48b3-aec9-4b02-afd1-746aeb3caeea.png"
                  alt="Legalaid transparent logo"
                  className="w-full h-auto max-w-[280px] sm:max-w-xs md:max-w-md lg:max-w-lg object-contain mx-auto"
                  loading="lazy"
                  sizes="(min-width: 1024px) 640px, (min-width: 768px) 480px, 280px"
                />
              </figure>
            </div>
          </div>
        </section>
      </main>

      <section id="launch" className="bg-section-1 py-20 border-y border-border/50">
        <div className="container">
          <article className="max-w-3xl mx-auto text-center md:text-left animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-brand-2 bg-clip-text text-transparent">
              Beta launch: ukinnovator.online
            </h2>
            <p className="mt-4 text-muted-foreground">
              Legalaid has launched its inaugural beta of ukinnovator.online — a free, AI-powered pre-assessment tool helping potential Innovator Founders gauge the strength of their business ideas for the UK scheme. It offers a quick 5-minute assessment and a more in-depth 20-minute option.
            </p>
          </article>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
            <img
               src="/lovable-uploads/7cbd0e22-9d9d-45f9-a815-6631a1d2713e.png"
               alt="Legalaid beta launch poster for ukinnovator.online"
               className="w-full max-w-md md:max-w-none rounded-lg border-2 border-primary/20 shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300 mx-auto md:mx-0 object-contain animate-slide-in-left"
               loading="lazy"
               sizes="(min-width: 768px) 640px, 320px"
             />
            <div className="text-center md:text-left animate-slide-in-right">
              <div className="space-y-4 text-base text-muted-foreground">
                <p className="p-4 bg-gradient-accent rounded-lg border border-primary/10">
                  The tool uses a unique algorithm to harness AI's analytical power, pre-assessing business ideas for innovation, scalability, and viability. It is intended as a step before seeing a lawyer and does not replace legal advice.
                </p>
                <p>
                  We believe AI should be free to use for end users. This launch demonstrates how practitioners can craft targeted tools that help clients and advance legal practice.
                </p>
              </div>
              <div className="mt-8 flex justify-center md:justify-start">
                <Button asChild size="lg" className="hover:scale-105 transition-transform">
                  <a href="https://www.ukinnovator.online" target="_blank" rel="noreferrer">Use ukinnovator.online</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-2 py-20">
        <div className="container">
          <article className="max-w-3xl mx-auto text-center md:text-left animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-2 to-primary bg-clip-text text-transparent">
              New launch: sponsorlicence.online
            </h2>
            <p className="mt-4 text-muted-foreground">
              As a UK sponsor licence holder, you have strict legal obligations to maintain compliance with UKVI requirements. Failure to meet these obligations can result in serious consequences including licence suspension or revocation, affecting your ability to hire international talent.
            </p>
          </article>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left animate-slide-in-left order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">A comprehensive compliance action plan helps you:</h3>
              <div className="space-y-3 text-base text-muted-foreground">
                <div className="p-3 rounded-lg border-l-4 border-primary bg-card hover:bg-gradient-accent transition-colors">
                  <strong className="text-foreground">Prevent costly mistakes:</strong> Identify potential compliance gaps before they become serious issues
                </div>
                <div className="p-3 rounded-lg border-l-4 border-brand-2 bg-card hover:bg-gradient-accent transition-colors">
                  <strong className="text-foreground">Streamline processes:</strong> Establish clear procedures for Right to Work checks, record-keeping, and reporting
                </div>
                <div className="p-3 rounded-lg border-l-4 border-primary bg-card hover:bg-gradient-accent transition-colors">
                  <strong className="text-foreground">Protect your licence:</strong> Demonstrate proactive compliance management during UKVI audits
                </div>
                <div className="p-3 rounded-lg border-l-4 border-brand-2 bg-card hover:bg-gradient-accent transition-colors">
                  <strong className="text-foreground">Save time and resources:</strong> Avoid the stress and expense of dealing with compliance breaches
                </div>
                <div className="p-3 rounded-lg border-l-4 border-primary bg-card hover:bg-gradient-accent transition-colors">
                  <strong className="text-foreground">Ensure continuity:</strong> Maintain business operations even when key personnel are unavailable
                </div>
              </div>
              <p className="mt-6 p-4 bg-gradient-accent rounded-lg border border-brand-2/20 text-muted-foreground">
                Our AI-powered tool generates a tailored action plan specific to your organisation's structure, workforce composition, and compliance needs - helping you stay on the right side of UKVI regulations from day one.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <Button asChild size="lg" className="hover:scale-105 transition-transform">
                  <a href="https://www.sponsorlicence.online" target="_blank" rel="noreferrer">Use sponsorlicence.online</a>
                </Button>
              </div>
            </div>
            <img
               src="/lovable-uploads/sponsorlicence-online.png"
               alt="sponsorlicence.online - AI-powered sponsor licence compliance tool"
               className="w-full max-w-md md:max-w-none rounded-lg border-2 border-brand-2/20 shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300 mx-auto md:mx-0 object-contain animate-slide-in-right order-1 md:order-2"
               loading="lazy"
               sizes="(min-width: 768px) 640px, 320px"
             />
          </div>
        </div>
      </section>

      <section id="about" className="bg-card py-20 border-t-2 border-primary/10">
        <div className="container grid md:grid-cols-3 gap-10 items-start animate-fade-in">
          <article className="md:col-span-2 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left bg-gradient-to-r from-primary via-brand-2 to-brand-3 bg-clip-text text-transparent">
              About Legalaid
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground text-center md:text-left">
              <p>
                Lawyery founding solicitor, Chris Dias, has started a new venture aimed at changing the way lawyers use AI. The company, Legal Artificial Intelligence Development (Legalaid) Ltd, was formed to bring simple, AI powered tools to the legal sphere.
              </p>
              <p>
                Legalaid has launched it's inaugural beta version of ukinnovator.online, which utilises a unique algorithm to harness the analytical power of AI to pre-assess the business ideas of potential Innovators who want to launch in the UK. The site focusses on pre-assessment and is not intended to replace legal advice, but to show the potential of how lawyers can use AI to develop legal concepts to help clients.
              </p>
              
            </div>

            <h3 className="mt-10 text-2xl font-semibold text-center md:text-left">Founder bio</h3>
            <div className="mt-3 space-y-4 text-muted-foreground text-center md:text-left">
              <p>
                Chris qualified in 2001 and has worked as an expert immigration lawyer for many firms including Horsfield Menzies, Dias Solicitors, ALT Legal, Gunnercooke and Halebury. He is currently Director of Lawyery.co with offices in Holborn. He teaches the Level 2 Advanced Immigration Law course for Free Movement.
              </p>
              <p>
                "Since generative AI emerged, I've been exploring ways to address inefficiencies in legal practice to better serve clients at my firm, Lawyery. I firmly believe that AI's potential to drive meaningful change in the legal sector should be a grassroots movement, led by practitioners rather than corporate giants. Legalaid Ltd is my commitment to empowering solicitors to revolutionise the legal landscape, one innovative application at a time."
              </p>
              <p>
                "Our goal is to empower solicitors with practical, accessible technology that enhances their ability to deliver results. This is just the beginning."
              </p>
              <p className="italic mt-4">— Chris Dias, Solicitor</p>
            </div>
          </article>
          <aside className="space-y-6 animate-slide-in-right">
            <img
               src="/lovable-uploads/13cc4723-2211-4966-996f-d5b01b9b16cb.png"
               alt="Founder portrait"
               className="w-full max-w-xs sm:max-w-sm md:max-w-full rounded-lg border-2 border-primary/20 shadow-glow hover:shadow-elegant hover:scale-105 transition-all duration-300 mx-auto md:mx-0 object-cover"
               loading="lazy"
               sizes="(min-width: 768px) 400px, 280px"
             />
            <div className="p-6 rounded-lg border-2 border-primary/10 bg-gradient-accent shadow-soft hover:shadow-glow transition-all">
              <h4 className="font-semibold">Press & enquiries</h4>
              <p className="text-muted-foreground mt-2">For more information contact:</p>
              <a id="contact" href="mailto:chris.dias@lawyery.co" className="text-primary underline underline-offset-4">chris.dias@lawyery.co</a>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/chrisdias/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                  aria-label="Chris Dias on LinkedIn"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.851-3.036-1.853 0-2.136 1.447-2.136 2.943v5.662H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.37-1.851 3.604 0 4.268 2.372 4.268 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://www.lawyery.co/chris-dias"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Lawyery profile
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="border-t border-border bg-bar text-primary-foreground">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-brand-contrast">
          <img
            src="/lovable-uploads/4e1c48b3-aec9-4b02-afd1-746aeb3caeea.png"
            alt="Legalaid logo"
            className="h-10 md:h-16 w-auto"
            loading="lazy"
          />
          <p className="text-sm text-brand-contrast">© {new Date().getFullYear()} Legal Artificial Intelligence Development Ltd</p>
          <div className="flex gap-4">
            <a className="text-sm text-brand-contrast hover:text-brand-contrast" href="#about">About</a>
            <a className="text-sm text-brand-contrast hover:text-brand-contrast" href="https://www.ukinnovator.online" target="_blank" rel="noreferrer">ukinnovator.online</a>
            <a className="text-sm text-brand-contrast hover:text-brand-contrast" href="https://www.sponsorlicence.online" target="_blank" rel="noreferrer">sponsorlicence.online</a>
          </div>
        </div>
      </footer>

      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Legal Artificial Intelligence Development (Legalaid) Ltd",
            url: "https://legalaid.dev",
            logo: "https://legalaid.dev/lovable-uploads/4be43dfe-c9fa-4767-93be-f0925780e6b1.png",
            sameAs: ["https://www.ukinnovator.online"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "ukinnovator.online",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: 0, priceCurrency: "GBP" },
            url: "https://www.ukinnovator.online",
          }),
        }}
      />
    </div>
  );
};

export default Index;