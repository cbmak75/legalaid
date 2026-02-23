import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

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
      <header className="sticky top-0 z-50 w-full bg-bar text-primary-foreground">
        <nav className="container flex items-center justify-between py-6 text-brand-contrast">
          <a href="#hero" className="flex items-center gap-3" aria-label="Legalaid home">
            <img
              src="/lovable-uploads/legalaid-logo.png"
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
              <a href="/article/why-i-built-my-own-ai-company">Article</a>
            </Button>
            <Button asChild variant="link" className="text-brand-contrast hover:text-brand-contrast">
              <a href="#about">Contact</a>
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
              <p className="mt-4 text-lg text-white">
                Legal Artificial Intelligence Development (Legalaid) creates simple, pragmatic AI tools for legal practitioners.
              </p>
              <div className="mt-8">
                <p className="text-lg text-white font-semibold mb-4">Find out more about our AI tools:</p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 md:gap-4 max-w-2xl mx-auto md:mx-0">
                  <a href="#uksettlement" className="block">
                    <img
                      src="/lovable-uploads/uksettlement-logo.png"
                      alt="uksettlement.com logo"
                      className="h-16 md:h-20 w-auto border-2 border-white rounded-lg hover:scale-105 hover:opacity-70 transition-all cursor-pointer animate-jiggle mx-auto"
                      loading="lazy"
                    />
                  </a>
                  <a href="#launch" className="block">
                    <img
                      src="/lovable-uploads/io-logo.png"
                      alt="ukinnovator.online logo"
                      className="h-16 md:h-20 w-auto border-2 border-white rounded-lg hover:scale-105 hover:opacity-70 transition-all cursor-pointer animate-jiggle mx-auto"
                      loading="lazy"
                    />
                  </a>
                  <a href="#sponsorlicence" className="block">
                    <img
                      src="/lovable-uploads/so-logo.png"
                      alt="sponsorlicence.online logo"
                      className="h-16 md:h-20 w-auto border-2 border-white rounded-lg hover:scale-105 hover:opacity-70 transition-all cursor-pointer animate-jiggle mx-auto"
                      loading="lazy"
                    />
                  </a>
                  <a href="#ukvisit" className="block">
                    <img
                      src="/lovable-uploads/uk-logo-new.png"
                      alt="ukvisit.online logo"
                      className="h-16 md:h-20 w-auto border-2 border-white rounded-lg hover:scale-105 hover:opacity-70 transition-all cursor-pointer animate-jiggle mx-auto"
                      loading="lazy"
                    />
                  </a>
                  <a href="#manda" className="block">
                    <img
                      src="/lovable-uploads/manda-logo-v2.png"
                      alt="manda.work logo"
                      className="h-16 md:h-20 w-auto border-2 border-white rounded-lg hover:scale-105 hover:opacity-70 transition-all cursor-pointer animate-jiggle mx-auto"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="justify-self-center w-full">
              <figure className="w-full">
                <img
                  src="/lovable-uploads/hero-logo.png"
                  alt="AI doorlight logo"
                  className="w-full h-auto max-w-[280px] sm:max-w-xs md:max-w-md lg:max-w-lg object-contain mx-auto"
                  loading="lazy"
                  sizes="(min-width: 1024px) 640px, (min-width: 768px) 480px, 280px"
                />
              </figure>
            </div>
          </div>
        </section>
      </main>

      <section id="uksettlement" className="bg-section-uksettlement py-20 text-white">
        <div className="container">
          <div className="mb-4">
            <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <a href="#hero" className="flex items-center gap-2">
                <ArrowUp className="h-4 w-4" />
                Back to top
              </a>
            </Button>
          </div>
          <div className="flex justify-center mb-8">
            <img
              src="/lovable-uploads/uksettlement-logo.png"
              alt="uksettlement.com logo"
              className="h-32 w-auto border-2 border-white rounded-lg"
              loading="lazy"
            />
          </div>
          <article className="max-w-3xl mx-auto text-center md:text-left animate-fade-in p-6 bg-black/40 rounded-lg backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              uksettlement.com
            </h2>
            <p className="mt-4 text-white/95 drop-shadow-md text-lg">
              The UK government is proposing major changes to settlement rules. This free AI-powered tool helps you understand the proposed changes, see how they will directly impact your own route to settlement, and have your voice heard in the consultation process.
            </p>
          </article>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
            <a href="https://www.uksettlement.com" target="_blank" rel="noreferrer" className="block">
              <img
                 src="/lovable-uploads/uksettlement-hero.png"
                 alt="uksettlement.com - UK Settlement consultation tool"
                 className="w-full max-w-md md:max-w-none rounded-lg border-2 border-white/20 shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300 mx-auto md:mx-0 object-contain animate-slide-in-left cursor-pointer"
                 loading="lazy"
                 sizes="(min-width: 768px) 640px, 320px"
               />
            </a>
            <div className="text-center md:text-left animate-slide-in-right">
              <div className="space-y-4 text-base">
                <p className="p-4 bg-black/50 rounded-lg border border-white/20 text-white/95 drop-shadow-md backdrop-blur-sm">
                  Whether you're on a work visa, family visa, or any other settlement route, this tool provides personalised insights into how the proposed changes could affect your journey to permanent residence in the UK.
                </p>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg border-l-4 border-white/30 bg-black/50 hover:bg-black/60 transition-colors backdrop-blur-sm">
                    <strong className="text-white drop-shadow-md">Understand the changes:</strong> <span className="text-white/95 drop-shadow-sm">Clear explanations of proposed settlement rule modifications</span>
                  </div>
                  <div className="p-3 rounded-lg border-l-4 border-white/30 bg-black/50 hover:bg-black/60 transition-colors backdrop-blur-sm">
                    <strong className="text-white drop-shadow-md">Personal impact analysis:</strong> <span className="text-white/95 drop-shadow-sm">See how changes affect your specific settlement route</span>
                  </div>
                  <div className="p-3 rounded-lg border-l-4 border-white/30 bg-black/50 hover:bg-black/60 transition-colors backdrop-blur-sm">
                    <strong className="text-white drop-shadow-md">Expert resources:</strong> <span className="text-white/95 drop-shadow-sm">Access major resources and select commentaries on the proposals</span>
                  </div>
                  <div className="p-3 rounded-lg border-l-4 border-white/30 bg-black/50 hover:bg-black/60 transition-colors backdrop-blur-sm">
                    <strong className="text-white drop-shadow-md">Submit your voice:</strong> <span className="text-white/95 drop-shadow-sm">Participate in the consultation process if you wish</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center md:justify-start">
                <Button asChild size="lg" variant="hero" className="hover:scale-105 transition-transform shadow-lg">
                  <a href="https://www.uksettlement.com" target="_blank" rel="noreferrer">Visit uksettlement.com</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="launch" className="bg-section-ukinnovator py-20 border-y border-border/50 text-white">
        <div className="container">
          <div className="mb-4">
            <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <a href="#hero" className="flex items-center gap-2">
                <ArrowUp className="h-4 w-4" />
                Back to top
              </a>
            </Button>
          </div>
          <div className="flex justify-center mb-8">
            <img
              src="/lovable-uploads/io-logo.png"
              alt="ukinnovator.online logo"
              className="h-32 w-auto border-2 border-white rounded-lg"
              loading="lazy"
            />
          </div>
          <article className="max-w-3xl mx-auto text-center md:text-left animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              ukinnovator.online
            </h2>
            <p className="mt-4 text-white/90">
              Legalaid has launched its inaugural beta of ukinnovator.online — a free, AI-powered pre-assessment tool helping potential Innovator Founders gauge the strength of their business ideas for the UK scheme. It offers a quick 5-minute assessment and a more in-depth 20-minute option.
            </p>
          </article>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
            <a href="https://www.ukinnovator.online" target="_blank" rel="noreferrer" className="block">
              <img
                 src="/lovable-uploads/ukinnovator-hero-v4.png"
                 alt="Legalaid beta launch poster for ukinnovator.online"
                 className="w-full max-w-md md:max-w-none rounded-lg border-2 border-white/20 shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300 mx-auto md:mx-0 object-contain animate-slide-in-left cursor-pointer"
                 loading="lazy"
                 sizes="(min-width: 768px) 640px, 320px"
               />
            </a>
            <div className="text-center md:text-left animate-slide-in-right">
              <div className="space-y-4 text-base text-white/90">
                <p className="p-4 bg-white/10 rounded-lg border border-white/20">
                  The tool uses a unique algorithm to harness AI's analytical power, pre-assessing business ideas for innovation, scalability, and viability. It is intended as a step before seeing a lawyer and does not replace legal advice.
                </p>
                <p>
                  We believe AI should be free to use for end users. This launch demonstrates how practitioners can craft targeted tools that help clients and advance legal practice.
                </p>
              </div>
              <div className="mt-8 flex justify-center md:justify-start">
                <Button asChild size="lg" variant="hero" className="hover:scale-105 transition-transform">
                  <a href="https://www.ukinnovator.online" target="_blank" rel="noreferrer">Visit ukinnovator.online</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sponsorlicence" className="bg-section-sponsorlicence py-20 text-white">
        <div className="container">
          <div className="mb-4">
            <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <a href="#hero" className="flex items-center gap-2">
                <ArrowUp className="h-4 w-4" />
                Back to top
              </a>
            </Button>
          </div>
          <div className="flex justify-center mb-8">
            <img
              src="/lovable-uploads/so-logo.png"
              alt="sponsorlicence.online logo"
              className="h-32 w-auto border-2 border-white rounded-lg"
              loading="lazy"
            />
          </div>
          <article className="max-w-3xl mx-auto text-center md:text-left animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              sponsorlicence.online
            </h2>
            <p className="mt-4 text-white/90">
              As a UK sponsor licence holder, you have strict legal obligations to maintain compliance with UKVI requirements. Failure to meet these obligations can result in serious consequences including licence suspension or revocation, affecting your ability to hire international talent.
            </p>
          </article>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left animate-slide-in-left order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4 text-white">A comprehensive compliance action plan helps you:</h3>
              <div className="space-y-3 text-base text-white/90">
                <div className="p-3 rounded-lg border-l-4 border-white/30 bg-white/20 hover:bg-white/30 transition-colors">
                  <strong className="text-white">Prevent costly mistakes:</strong> Identify potential compliance gaps before they become serious issues
                </div>
                <div className="p-3 rounded-lg border-l-4 border-white/30 bg-white/20 hover:bg-white/30 transition-colors">
                  <strong className="text-white">Streamline processes:</strong> Establish clear procedures for Right to Work checks, record-keeping, and reporting
                </div>
                <div className="p-3 rounded-lg border-l-4 border-white/30 bg-white/20 hover:bg-white/30 transition-colors">
                  <strong className="text-white">Protect your licence:</strong> Demonstrate proactive compliance management during UKVI audits
                </div>
                <div className="p-3 rounded-lg border-l-4 border-white/30 bg-white/20 hover:bg-white/30 transition-colors">
                  <strong className="text-white">Save time and resources:</strong> Avoid the stress and expense of dealing with compliance breaches
                </div>
                <div className="p-3 rounded-lg border-l-4 border-white/30 bg-white/20 hover:bg-white/30 transition-colors">
                  <strong className="text-white">Ensure continuity:</strong> Maintain business operations even when key personnel are unavailable
                </div>
              </div>
              <p className="mt-6 p-4 bg-white/20 rounded-lg border border-white/20 text-white/90">
                Our AI-powered tool generates a tailored action plan specific to your organisation's structure, workforce composition, and compliance needs - helping you stay on the right side of UKVI regulations from day one.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <Button asChild size="lg" variant="hero" className="hover:scale-105 transition-transform">
                  <a href="https://www.sponsorlicence.online" target="_blank" rel="noreferrer">Visit sponsorlicence.online</a>
                </Button>
              </div>
            </div>
            <a href="https://www.sponsorlicence.online" target="_blank" rel="noreferrer" className="block order-1 md:order-2">
              <img
                 src="/lovable-uploads/sponsorlicence-hero-v3.png"
                 alt="sponsorlicence.online - AI-powered sponsor licence compliance tool"
                 className="w-full max-w-md md:max-w-none rounded-lg border-2 border-brand-2/20 shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300 mx-auto md:mx-0 object-contain animate-slide-in-right cursor-pointer"
                 loading="lazy"
                 sizes="(min-width: 768px) 640px, 320px"
               />
            </a>
          </div>
        </div>
      </section>

      <section id="ukvisit" className="bg-section-ukvisit py-20 border-y border-border/50 text-white">
        <div className="container">
          <div className="mb-4">
            <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <a href="#hero" className="flex items-center gap-2">
                <ArrowUp className="h-4 w-4" />
                Back to top
              </a>
            </Button>
          </div>
          <div className="flex justify-center mb-8">
            <img
              src="/lovable-uploads/uk-logo-new.png"
              alt="ukvisit.online logo"
              className="h-32 w-auto border-2 border-white rounded-lg"
              loading="lazy"
            />
          </div>
          <article className="max-w-3xl mx-auto text-center md:text-left animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              ukvisit.online
            </h2>
            <p className="mt-4 text-white/90">
              This tool helps UK visit visa applicants and their UK hosts prepare comprehensive documentation packages. By answering detailed questions about your circumstances, travel plans, and financial situation, you will receive personalised guidance to strengthen your visa application.
            </p>
          </article>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
            <a href="https://www.ukvisit.online" target="_blank" rel="noreferrer" className="block">
              <img
                 src="/lovable-uploads/ukvisit-hero-v3.png"
                 alt="ukvisit.online - UK visit visa documentation preparation tool"
                 className="w-full max-w-md md:max-w-none rounded-lg border-2 border-brand-3/20 shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300 mx-auto md:mx-0 object-contain animate-slide-in-left cursor-pointer"
                 loading="lazy"
                 sizes="(min-width: 768px) 640px, 320px"
               />
            </a>
            <div className="text-center md:text-left animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-4 text-white">What you'll receive:</h3>
              <div className="space-y-3 text-base text-white/90">
                <div className="p-3 rounded-lg border-l-4 border-white/30 bg-white/20 hover:bg-white/30 transition-colors">
                  <strong className="text-white">Document checklists:</strong> Comprehensive lists of required and recommended documents for your specific situation
                </div>
                <div className="p-3 rounded-lg border-l-4 border-white/30 bg-white/20 hover:bg-white/30 transition-colors">
                  <strong className="text-white">Sample itineraries:</strong> Template travel plans that demonstrate clear visit intentions
                </div>
                <div className="p-3 rounded-lg border-l-4 border-white/30 bg-white/20 hover:bg-white/30 transition-colors">
                  <strong className="text-white">Invitation letter templates:</strong> Professional templates for UK hosts to support applications
                </div>
                <div className="p-3 rounded-lg border-l-4 border-white/30 bg-white/20 hover:bg-white/30 transition-colors">
                  <strong className="text-white">Risk assessments:</strong> Identification of potential application weaknesses and how to address them
                </div>
              </div>
              <p className="mt-6 p-4 bg-white/20 rounded-lg border border-white/20 text-white/90">
                Get personalised guidance tailored to your circumstances, ensuring you submit the strongest possible application.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <Button asChild size="lg" variant="hero" className="hover:scale-105 transition-transform">
                  <a href="https://www.ukvisit.online" target="_blank" rel="noreferrer">Visit ukvisit.online</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="manda" className="bg-section-manda py-20 border-y border-border/50 text-white">
        <div className="container">
          <div className="mb-4">
            <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <a href="#hero" className="flex items-center gap-2">
                <ArrowUp className="h-4 w-4" />
                Back to top
              </a>
            </Button>
          </div>
          <div className="flex justify-center mb-8">
            <img
              src="/lovable-uploads/manda-logo-v2.png"
              alt="manda.work logo"
              className="h-32 w-auto border-2 border-white rounded-lg"
              loading="lazy"
            />
          </div>
          <article className="max-w-3xl mx-auto text-center md:text-left animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              m<span className="text-white/60">&</span>a.work
            </h2>
            <p className="mt-4 text-white/90">
              The M&A Immigration Checker is a beta tool designed to help assess immigration risks in UK mergers and acquisitions transactions. Enter your deal parameters and workforce data to receive a comprehensive risk assessment.
            </p>
          </article>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
            <a href="https://www.manda.work" target="_blank" rel="noreferrer" className="block">
              <img
                src="/lovable-uploads/manda-hero.jpg"
                alt="manda.work - M&A Immigration Checker showing business professionals collaborating"
                className="w-full max-w-md md:max-w-none rounded-lg border-2 border-white/20 shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300 mx-auto md:mx-0 object-contain animate-slide-in-left cursor-pointer"
                loading="lazy"
                sizes="(min-width: 768px) 640px, 320px"
              />
            </a>
            <div className="text-center md:text-left animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-4 text-white">What the M&A Immigration Checker offers:</h3>
              <div className="space-y-3 text-base text-white/90">
                <div className="p-3 rounded-lg border-l-4 border-white/30 bg-white/20 hover:bg-white/30 transition-colors">
                  <strong className="text-white">Risk scoping:</strong> Preliminary immigration risk assessment for M&A transactions
                </div>
                <div className="p-3 rounded-lg border-l-4 border-white/30 bg-white/20 hover:bg-white/30 transition-colors">
                  <strong className="text-white">Deal analysis:</strong> Enter deal parameters for tailored workforce immigration insights
                </div>
                <div className="p-3 rounded-lg border-l-4 border-white/30 bg-white/20 hover:bg-white/30 transition-colors">
                  <strong className="text-white">Workforce review:</strong> Assess immigration implications for existing sponsored workers
                </div>
                <div className="p-3 rounded-lg border-l-4 border-white/30 bg-white/20 hover:bg-white/30 transition-colors">
                  <strong className="text-white">Professional use:</strong> Designed for lawyers and corporate advisors handling M&A deals
                </div>
              </div>
              <p className="mt-6 p-4 bg-white/20 rounded-lg border border-white/20 text-white/90">
                This tool provides preliminary risk scoping and does not constitute formal legal advice. Always consult qualified immigration lawyers before making decisions based on this assessment.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <Button asChild size="lg" variant="hero" className="hover:scale-105 transition-transform">
                  <a href="https://www.manda.work" target="_blank" rel="noreferrer">Visit manda.work</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-card py-20 border-t-2 border-primary/10">
        <div className="container">
          <div className="mb-4">
            <Button asChild variant="outline" size="sm">
              <a href="#hero" className="flex items-center gap-2">
                <ArrowUp className="h-4 w-4" />
                Back to top
              </a>
            </Button>
          </div>
          <div className="flex justify-center mb-8">
            <img
              src="/lovable-uploads/reverse_of_ai_doorlight.png"
              alt="Legalaid logo"
              className="h-64 w-auto rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-10 items-start animate-fade-in">
          <article className="md:col-span-2 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-foreground">
              About Legalaid
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground text-center md:text-left">
              <p>
                Lawyery founding solicitor, Chris Dias, has started a new venture aimed at changing the way lawyers use AI. The company, Legal Artificial Intelligence Development (Legalaid) Ltd, was formed to bring simple, AI powered tools to the legal sphere.
              </p>
              <p>
                Since founding the company and launching its inaugural beta of ukinnovator.online, Legalaid has gone on to launch two more innovative products in the immigration law space: sponsorlicence.online and ukvisit.online. The company champions innovative ways for Legal AI to assist clients and lawyers in all spheres of law, but has naturally focused on immigration law due to the Founder's background and expertise.
              </p>
              <p>
                We are open to working with other law firms who are looking for consultation or collaboration to bring new legal AI ideas to life.
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
               src="/lovable-uploads/chris-portrait-new.png"
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
            <div className="p-6 rounded-lg border-2 border-primary/10 bg-gradient-accent shadow-soft hover:shadow-glow transition-all">
              <h4 className="font-semibold">Featured Article</h4>
              <p className="text-muted-foreground mt-2">Why I Built My Own AI Company</p>
              <a 
                href="/article/why-i-built-my-own-ai-company" 
                className="inline-flex items-center gap-2 text-primary hover:underline mt-2"
              >
                Read the full article →
              </a>
            </div>
          </aside>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-bar text-primary-foreground">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-brand-contrast">
          <a href="#hero" className="flex items-center gap-4" aria-label="Legalaid home">
            <img
              src="/lovable-uploads/legalaid-logo.png"
              alt="Legalaid logo"
              className="h-12 md:h-16 w-auto"
              loading="lazy"
            />
          </a>
          <p className="text-sm text-brand-contrast">© {new Date().getFullYear()} Legal Artificial Intelligence Development Ltd</p>
          <div className="flex gap-4">
            <a className="text-sm text-brand-contrast hover:text-brand-contrast" href="#about">About</a>
            <a className="text-sm text-brand-contrast hover:text-brand-contrast font-bold" href="https://www.uksettlement.com" target="_blank" rel="noreferrer">uksettlement.com 🔥</a>
            <a className="text-sm text-brand-contrast hover:text-brand-contrast" href="https://www.ukinnovator.online" target="_blank" rel="noreferrer">ukinnovator.online</a>
            <a className="text-sm text-brand-contrast hover:text-brand-contrast" href="https://www.sponsorlicence.online" target="_blank" rel="noreferrer">sponsorlicence.online</a>
            <a className="text-sm text-brand-contrast hover:text-brand-contrast" href="https://www.ukvisit.online" target="_blank" rel="noreferrer">ukvisit.online</a>
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