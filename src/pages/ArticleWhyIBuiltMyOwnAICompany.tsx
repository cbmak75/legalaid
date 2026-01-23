import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ArticleWhyIBuiltMyOwnAICompany = () => {
  useEffect(() => {
    document.title = "Why I Built My Own AI Company | Legalaid";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 w-full bg-bar text-primary-foreground">
        <nav className="container flex items-center justify-between py-6 text-brand-contrast">
          <Link to="/" className="flex items-center gap-3" aria-label="Legalaid home">
            <img
              src="/lovable-uploads/legalaid-logo.png"
              alt="Legalaid logo - Legal Artificial Intelligence Development"
              className="h-12 md:h-16 w-auto"
              loading="eager"
            />
          </Link>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <Button asChild variant="link" className="text-brand-contrast hover:text-brand-contrast">
              <Link to="/#about">About</Link>
            </Button>
            <Button asChild variant="link" className="text-brand-contrast hover:text-brand-contrast">
              <Link to="/#launch">Launches</Link>
            </Button>
            <Button asChild variant="link" className="text-brand-contrast hover:text-brand-contrast">
              <Link to="/#about">Contact</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-1 bg-background">
        <article className="container max-w-3xl py-12 md:py-20">
          <div className="mb-8">
            <Button asChild variant="outline" size="sm">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </Button>
          </div>

          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground">
              Why I Built My Own AI Company (And Why Every Solicitor Should Consider Doing The Same)
            </h1>
            <p className="mt-4 text-muted-foreground">By Chris Dias, Solicitor</p>
          </header>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="lead text-xl text-muted-foreground">
              I never set out to become a tech entrepreneur. For over two decades I have practised immigration law, watching governments tighten the screws on migrants whilst simultaneously making the rules so labyrinthine that even fellow lawyers struggle to keep pace. When generative AI burst onto the scene, I saw something that the big legal tech companies apparently missed: an opportunity for practitioners to take control of their own destiny.
            </p>

            <p>
              That is why I founded Legal Artificial Intelligence Development Ltd, or Legalaid for short. You can see what we have been building at{" "}
              <a href="https://legalaid.dev" className="text-primary hover:underline">legalaid.dev</a>.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
              The Problem With Big Tech Legal AI
            </h2>

            <p>
              The legal sector has always had a complicated relationship with technology. For years we have been promised revolution by companies selling expensive case management systems and document automation tools, all built by people who have never stepped inside a tribunal or advised a terrified client facing removal. They build for scale; they build for shareholders; they build for the lowest common denominator. What they do not build is for the individual practitioner who knows their area of law inside out and simply needs a tool that does exactly what they need it to do.
            </p>

            <p>
              When ChatGPT arrived, the pattern repeated. Suddenly every legal tech vendor bolted AI onto their existing products and charged premium prices for the privilege. Law firms were told they needed enterprise solutions, comprehensive platforms, and transformation consultants. The message was clear: AI is too complicated for you to handle alone.
            </p>

            <p className="font-semibold text-foreground">I call nonsense on that.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
              A Grassroots Movement, Not a Corporate Takeover
            </h2>

            <p>
              I firmly believe that AI's potential to drive meaningful change in the legal sector should be a grassroots movement, led by practitioners rather than corporate giants. The solicitor who has spent fifteen years navigating the hostile environment knows more about what tools would actually help than any product manager in a tech company boardroom. The immigration adviser who has watched the Rules change four times in a single year understands the pain points that no focus group will ever capture.
            </p>

            <p>So instead of waiting for someone else to build what I needed, I started building it myself.</p>

            <p>
              The first tool was <a href="https://www.ukinnovator.online" target="_blank" rel="noreferrer" className="text-primary hover:underline">ukinnovator.online</a>, a pre-assessment system for potential Innovator Founder visa applicants. It was born from frustration: I had lost count of the number of enquiries from people whose business ideas simply would not meet the endorsement criteria, but who had no way of knowing this before paying for a consultation. The tool uses AI to gauge the strength of business ideas against the actual requirements; not to replace legal advice, but to prepare people for the conversation they need to have with a lawyer.
            </p>

            <p>
              Then came <a href="https://www.sponsorlicence.online" target="_blank" rel="noreferrer" className="text-primary hover:underline">sponsorlicence.online</a>, because I kept seeing employers lose their licences through ignorance rather than malice. The compliance framework for sponsor licence holders is genuinely complex, and mistakes can be catastrophic for both the business and the workers they sponsor. The tool generates tailored action plans based on organisation structure and workforce composition; it helps people stay on the right side of UKVI regulations from day one.
            </p>

            <p>
              Next was <a href="https://www.ukvisit.online" target="_blank" rel="noreferrer" className="text-primary hover:underline">ukvisit.online</a>, addressing one of the most common failure points in immigration applications: the visitor visa. Everyone thinks visitor visas are simple until they get refused. The tool helps applicants and their UK hosts prepare comprehensive documentation packages by working through the relevant circumstances and generating personalised guidance.
            </p>

            <p>
              Most recently, I launched <a href="https://www.uksettlement.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">uksettlement.com</a> in response to the government's proposed Earned Settlement framework. This is personal for me; my wife is Filipino, and our children are mixed heritage. When the government proposes extending settlement from five years to potentially much longer through a merit-based points system, it affects real families. The tool helps people understand the proposed changes, see how they would be personally impacted, and even participate in the consultation process if they wish.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
              AI Should Be Free to End Users
            </h2>

            <p>
              One principle underpins everything Legalaid does: AI tools should be free for the people who need them most. The migrant trying to understand whether the goalposts have moved should not have to pay for that knowledge. The employer trying to avoid compliance failures should not be priced out of help. The person preparing a visit visa application for their elderly parent should not face barriers to getting it right.
            </p>

            <p>
              This is not charity; it is pragmatism. Free tools build trust; trust builds relationships; relationships build a practice. But more than that, it reflects a belief that technology should level playing fields rather than entrench advantages.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
              The Funding Question
            </h2>

            <p>
              I will be honest: keeping AI tools free whilst building a sustainable company is not straightforward. Large language models cost money to run; development takes time; and there are many more applications waiting to be built. The ideas list grows faster than I can code them.
            </p>

            <p>
              So I am actively exploring ways to fund Legalaid whilst keeping the core AI services free for end users. Perhaps that means premium features for professional users; perhaps partnerships with law firms who want bespoke tools; perhaps membership models that offer additional resources; perhaps something else entirely. The shape of it is still forming.
            </p>

            <p>
              What will not change is the fundamental principle. The migrant checking their settlement timeline should never hit a paywall. The small business owner trying to understand sponsor licence compliance should not be charged for basic guidance. The core function of these tools is to democratise access to legal information, and monetisation cannot be allowed to undermine that mission.
            </p>

            <p>
              If you have ideas, or if you want to support what we are building, I am all ears. There is a contact page on <a href="https://legalaid.dev" className="text-primary hover:underline">legalaid.dev</a> for good reason.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
              The Juxtaposition I Live With
            </h2>

            <p>
              There is a fundamental tension in what I do. I hate control, yet I operate entirely within a world of laws and rules and permissions. I help people navigate systems designed to exclude them whilst simultaneously advising them to play by those systems' rules. Some days it feels like teaching people how to win a rigged game.
            </p>

            <p>
              But perhaps that is the point. Immigration law has always been about power: who gets to move, who gets to stay, who gets to belong. The people I represent rarely hold the power; they navigate it; they work around it; they find the cracks in walls that were built to keep them out. AI can be another tool for finding those cracks, for understanding the rules well enough to work within them whilst never pretending they are fair.
            </p>

            <p>
              The big tech approach to legal AI would centralise that power even further. One platform to rule them all, trained on data from every firm, learning from every matter, owned by companies whose interests may not align with those of migrants or practitioners. The grassroots approach distributes it: individual practitioners building individual tools for individual needs, sharing knowledge rather than hoarding it.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
              This Is Just The Beginning
            </h2>

            <p>
              Legalaid is my commitment to proving that practitioners can revolutionise their own landscape, one innovative application at a time. We are open to working with other law firms who want to bring their own legal AI ideas to life, whether through consultation or collaboration. The goal is to empower solicitors with practical, accessible technology that enhances their ability to deliver results.
            </p>

            <p>
              I qualified in 2001. I have worked for firms including Horsfield Menzies, Dias Solicitors, ALT Legal, Gunnercooke and Halebury. I now run Lawyery from our offices in Holborn, and I teach Advanced Immigration Law for Free Movement. None of that experience told me I would end up founding a tech company. But all of it told me what that company needed to build.
            </p>

            <p className="font-semibold text-foreground">
              The tools are out there at <a href="https://legalaid.dev" className="text-primary hover:underline">legalaid.dev</a>. They are free to use. And they are just the start of what practitioners can achieve when we stop waiting for someone else to build our future.
            </p>
          </div>

          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center gap-4">
              <img
                src="/lovable-uploads/chris-portrait-new.png"
                alt="Chris Dias"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <p className="font-semibold text-foreground">Chris Dias</p>
                <p className="text-sm text-muted-foreground">Solicitor & Founder of Legalaid</p>
                <a
                  href="mailto:chris.dias@lawyery.co"
                  className="text-sm text-primary hover:underline"
                >
                  chris.dias@lawyery.co
                </a>
              </div>
            </div>
          </footer>
        </article>
      </main>

      <footer className="border-t border-border bg-bar text-primary-foreground">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-brand-contrast">
          <Link to="/" className="flex items-center gap-4" aria-label="Legalaid home">
            <img
              src="/lovable-uploads/legalaid-logo.png"
              alt="Legalaid logo"
              className="h-12 md:h-16 w-auto"
              loading="lazy"
            />
          </Link>
          <p className="text-sm text-brand-contrast">© {new Date().getFullYear()} Legal Artificial Intelligence Development Ltd</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link className="text-sm text-brand-contrast hover:text-brand-contrast" to="/#about">About</Link>
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
            "@type": "Article",
            headline: "Why I Built My Own AI Company (And Why Every Solicitor Should Consider Doing The Same)",
            author: {
              "@type": "Person",
              name: "Chris Dias",
              jobTitle: "Solicitor",
              url: "https://www.lawyery.co/chris-dias"
            },
            publisher: {
              "@type": "Organization",
              name: "Legal Artificial Intelligence Development (Legalaid) Ltd",
              url: "https://legalaid.dev"
            },
            description: "A solicitor's perspective on building AI tools for legal practitioners, and why the grassroots approach matters more than ever."
          }),
        }}
      />
    </div>
  );
};

export default ArticleWhyIBuiltMyOwnAICompany;
