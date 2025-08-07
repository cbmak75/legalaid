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
      <header className="w-full">
        <nav className="container flex items-center justify-between py-6">
          <a href="#hero" className="flex items-center gap-3" aria-label="Legalaid home">
            <img
              src="/lovable-uploads/4be43dfe-c9fa-4767-93be-f0925780e6b1.png"
              alt="Legalaid logo - Legal Artificial Intelligence Development"
              className="h-8 w-auto"
              loading="eager"
            />
          </a>
          <div className="flex items-center gap-3">
            <Button asChild variant="link">
              <a href="#about">About</a>
            </Button>
            <Button asChild variant="link">
              <a href="#launch">Launch</a>
            </Button>
            <Button asChild variant="link">
              <a href="#contact">Contact</a>
            </Button>
            <Button asChild variant="hero">
              <a href="https://ukinnovator.online" target="_blank" rel="noreferrer">Try the tool</a>
            </Button>
          </div>
        </nav>
      </header>

      <main id="hero" ref={heroRef} onMouseMove={handleMouseMove} className="hero-split text-primary-foreground">
        <section className="container py-24 md:py-32">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                A new way for lawyers to build with AI
              </h1>
              <p className="mt-4 text-lg text-muted-foreground/90">
                Legal Artificial Intelligence Development (Legalaid) creates simple, pragmatic AI tools for legal practitioners.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="hero">
                  <a href="https://ukinnovator.online" target="_blank" rel="noreferrer">Explore ukinnovator.online</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#about">Learn more</a>
                </Button>
              </div>
            </div>
            <div className="justify-self-center w-full">
              <div className="w-full p-6 md:p-10 bg-brand-dark">
                <img
                  src="/lovable-uploads/4be43dfe-c9fa-4767-93be-f0925780e6b1.png"
                  alt="Legalaid brand logo"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <section id="launch" className="container py-20">
        <article className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">Beta launch: ukinnovator.online</h2>
          <p className="mt-4 text-muted-foreground">
            Legalaid has launched its inaugural beta of ukinnovator.online — a free, AI-powered pre-assessment tool helping potential Innovator Founders gauge the strength of their business ideas for the UK scheme. It offers a quick 5-minute assessment and a more in-depth 20-minute option.
          </p>
        </article>
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/lovable-uploads/7cbd0e22-9d9d-45f9-a815-6631a1d2713e.png"
            alt="Legalaid beta launch poster for ukinnovator.online"
            className="w-full rounded-lg border border-border"
            loading="lazy"
          />
          <div>
            <div className="space-y-4 text-base text-muted-foreground">
              <p>
                The tool uses a unique algorithm to harness AI's analytical power, pre-assessing business ideas for innovation, scalability, and viability. It is intended as a step before seeing a lawyer and does not replace legal advice.
              </p>
              <p>
                We believe AI should be free to use for end users. This launch demonstrates how practitioners can craft targeted tools that help clients and advance legal practice.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <a href="https://ukinnovator.online" target="_blank" rel="noreferrer">Use ukinnovator.online</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-card py-20">
        <div className="container grid md:grid-cols-3 gap-10 items-start">
          <article className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold">About Legalaid</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Lawyery founding solicitor, Chris Dias, has started a new venture aimed at changing the way lawyers use AI. The company, Legal Artificial Intelligence Development (Legalaid) Ltd, was formed to bring simple, AI powered tools to the legal sphere.
              </p>
              <p>
                Legalaid has launched it’s inaugural beta version of ukinnovator.online, which utilises a unique algorithm to harness the analytical power of AI to pre-assess the business ideas of potential Innovators who want to launch in the UK. The site focusses on pre-assessment and is not intended to replace legal advice, but to show the potential of how lawyers can use AI to develop legal concepts to help clients.
              </p>
              <p className="italic">— Chris Dias, Solicitor</p>
            </div>

            <h3 className="mt-10 text-2xl font-semibold">Founder bio</h3>
            <div className="mt-3 space-y-4 text-muted-foreground">
              <p>
                Chris qualified in 2001 and has worked as an expert immigration lawyer for many firms including Horsfield Menzies, Dias Solicitors, ALT Legal, Gunnercooke and Halebury. He is currently Director of Lawyery.co with offices in Holborn. He teaches the Level 2 Advanced Immigration Law course for Free Movement.
              </p>
              <p>
                “Ever since generative AI was launched, I have been coming up with ideas on how I could help my Team at Lawyery fix pain points to enable us to serve our clients better. I believe that the potential of AI to effect real change should be a grassroots revolution, led by practitioners not by billionaire CEO’s. That’s why I launched Legalaid, to help lawyers revolutionise the legal sphere, one small App at a time.”
              </p>
              <p>
                “I have been getting more and more enquiries from potential Innovators who were completely confused about whether their business idea would be acceptable for the UK’s Innovator Founder scheme, and so I thought that there must be some way to pre-assess these ideas before the Endorsement application which costs the applicant £1000. I intended this site as a step before seeing a lawyer, to give Innovators an idea of what is important to the assessment process before they need to spend any money. The site is free to use and offers two options to the user; a quick 5 minute assessment and a more in-depth 20 minute assessment. I believe it is essential for AI to be free to use for the end user, and I think this is increasingly the expectation.”
              </p>
            </div>
          </article>
          <aside className="space-y-6">
            <img
              src="/lovable-uploads/13cc4723-2211-4966-996f-d5b01b9b16cb.png"
              alt="Founder portrait"
              className="w-full rounded-lg border border-border shadow-glow"
              loading="lazy"
            />
            <div className="p-6 rounded-lg border border-border shadow-sm">
              <h4 className="font-semibold">Press & enquiries</h4>
              <p className="text-muted-foreground mt-2">For more information contact:</p>
              <a id="contact" href="mailto:chris.dias@lawyery.co" className="text-primary underline underline-offset-4">chris.dias@lawyery.co</a>
            </div>
          </aside>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src="/lovable-uploads/4be43dfe-c9fa-4767-93be-f0925780e6b1.png"
            alt="Legalaid logo"
            className="h-6 w-auto"
            loading="lazy"
          />
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Legal Artificial Intelligence Development Ltd</p>
          <div className="flex gap-4">
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#about">About</a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="https://ukinnovator.online" target="_blank" rel="noreferrer">ukinnovator.online</a>
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
            sameAs: ["https://ukinnovator.online"],
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
            url: "https://ukinnovator.online",
          }),
        }}
      />
    </div>
  );
};

export default Index;
