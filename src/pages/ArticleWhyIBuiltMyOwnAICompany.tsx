import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ARTICLE_URL = "https://ai-law-ally.lovable.app/article/why-i-built-my-own-ai-company";
const OG_IMAGE_URL = "https://ai-law-ally.lovable.app/og-article-why-i-built-ai-company.jpg";

const ArticleWhyIBuiltMyOwnAICompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleTitle = "Why I Built My Own AI Company (And Why Every Solicitor Should Consider Doing The Same)";
  const articleDescription = "A solicitor's perspective on building AI tools for legal practitioners. Chris Dias explains why the grassroots approach to legal AI matters more than ever, and how practitioners can take control of their own destiny.";
  const authorName = "Chris Dias";
  const publishDate = "2025-01-23";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{articleTitle} | Legalaid</title>
        <meta name="title" content={`${articleTitle} | Legalaid`} />
        <meta name="description" content={articleDescription} />
        <meta name="author" content={authorName} />
        <link rel="canonical" href={ARTICLE_URL} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={ARTICLE_URL} />
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content={articleDescription} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Legalaid" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:author" content={authorName} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={ARTICLE_URL} />
        <meta name="twitter:title" content={articleTitle} />
        <meta name="twitter:description" content={articleDescription} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="legal AI, artificial intelligence, immigration law, legal tech, solicitor, Legalaid, Chris Dias, legal innovation, grassroots legal tech" />
      </Helmet>

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
              {articleTitle}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-muted-foreground">
              <span>By {authorName}, Solicitor</span>
              <span>•</span>
              <time dateTime={publishDate}>
                {new Date(publishDate).toLocaleDateString('en-GB', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            </div>
          </header>

          <div className="max-w-none text-foreground space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I never set out to become a tech entrepreneur. For over two decades I have practised immigration law, watching governments tighten the screws on migrants whilst simultaneously making the rules so labyrinthine that even fellow lawyers struggle to keep pace. When generative AI burst onto the scene, I saw something that the big legal tech companies apparently missed: an opportunity for practitioners to take control of their own destiny.
            </p>

            <p className="text-base leading-relaxed">
              That is why I founded Legal Artificial Intelligence Development Ltd, or Legalaid for short. You can see what we have been building at legalaid.dev.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">
              The Problem With Big Tech Legal AI
            </h2>

            <p className="text-base leading-relaxed">
              The legal sector has always had a complicated relationship with technology. For years we have been promised revolution by companies selling expensive case management systems and document automation tools, all built by people who have never stepped inside a tribunal or advised a terrified client facing removal. They build for scale; they build for shareholders; they build for the lowest common denominator. What they do not build is for the individual practitioner who knows their area of law inside out and simply needs a tool that does exactly what they need it to do.
            </p>

            <p className="text-base leading-relaxed">
              When ChatGPT arrived, the pattern repeated. Suddenly every legal tech vendor bolted AI onto their existing products and charged premium prices for the privilege. Law firms were told they needed enterprise solutions, comprehensive platforms, and transformation consultants. The message was clear: AI is too complicated for you to handle alone.
            </p>

            <p className="text-base leading-relaxed font-semibold">I am here to prove that this is not true.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">
              A Grassroots Movement, Not a Corporate Takeover
            </h2>

            <p className="text-base leading-relaxed">
              I firmly believe that AI's potential to drive meaningful change in the legal sector should be a grassroots movement, led by practitioners rather than corporate giants. The solicitor who has spent fifteen years navigating the hostile environment knows more about what tools would actually help than any product manager in a tech company boardroom. The immigration adviser who has watched the Rules change four times in a single year understands the pain points that no focus group will ever capture.
            </p>

            <p className="text-base leading-relaxed">So instead of waiting for someone else to build what I needed, I started building it myself.</p>

            <p className="text-base leading-relaxed">
              The first tool was ukinnovator.online, a pre-assessment system for potential Innovator Founder visa applicants. It was born from frustration: I had lost count of the number of enquiries from people whose business ideas simply would not meet the endorsement criteria, but who had no way of knowing this before paying for a consultation. The tool uses AI to gauge the strength of business ideas against the actual requirements; not to replace legal advice, but to prepare people for the conversation they need to have with a lawyer.
            </p>

            <p className="text-base leading-relaxed">
              Then came sponsorlicence.online, because I kept seeing employers lose their licences through ignorance rather than malice. The compliance framework for sponsor licence holders is genuinely complex, and mistakes can be catastrophic for both the business and the workers they sponsor. The tool generates tailored action plans based on organisation structure and workforce composition; it helps people stay on the right side of UKVI regulations from day one.
            </p>

            <p className="text-base leading-relaxed">
              Next was ukvisit.online, addressing one of the most common failure points in immigration applications: the visitor visa. Everyone thinks visitor visas are simple until they get refused. The tool helps applicants and their UK hosts prepare comprehensive documentation packages by working through the relevant circumstances and generating personalised guidance.
            </p>

            <p className="text-base leading-relaxed">
              Most recently, I launched uksettlement.com in response to the government's proposed Earned Settlement framework. This is personal for me; my wife is Filipino, and our children are mixed heritage. When the government proposes extending settlement from five years to potentially much longer through a merit-based points system, it affects real families. The tool helps people understand the proposed changes, see how they would be personally impacted, and even participate in the consultation process if they wish.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">
              AI Should Be Free to End Users
            </h2>

            <p className="text-base leading-relaxed">
              One principle underpins everything Legalaid does: AI tools should be free for the people who need them most. The migrant trying to understand whether the goalposts have moved should not have to pay for that knowledge. The employer trying to avoid compliance failures should not be priced out of help. The person preparing a visit visa application for their elderly parent should not face barriers to getting it right.
            </p>

            <p className="text-base leading-relaxed">
              This is not charity; it is pragmatism. Free tools build trust; trust builds relationships; relationships build a practice. But more than that, it reflects a belief that technology should level playing fields rather than entrench advantages.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">
              The Funding Question
            </h2>

            <p className="text-base leading-relaxed">
              I will be honest: keeping AI tools free whilst building a sustainable company is not straightforward. Large language models cost money to run; development takes time; and there are many more applications waiting to be built. The ideas list grows faster than I can code them.
            </p>

            <p className="text-base leading-relaxed">
              So I am actively exploring ways to fund Legalaid whilst keeping the core AI services free for end users. Perhaps that means premium features for professional users; perhaps partnerships with law firms who want bespoke tools; perhaps membership models that offer additional resources; perhaps something else entirely. The shape of it is still forming.
            </p>

            <p className="text-base leading-relaxed">
              What will not change is the fundamental principle. The migrant checking their settlement timeline should never hit a paywall. The small business owner trying to understand sponsor licence compliance should not be charged for basic guidance. The core function of these tools is to democratise access to legal information, and monetisation cannot be allowed to undermine that mission.
            </p>

            <p className="text-base leading-relaxed">
              If you have ideas, or if you want to support what we are building, I am all ears. There is a contact page on legalaid.dev for good reason.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">
              The Juxtaposition I Live With
            </h2>

            <p className="text-base leading-relaxed">
              There is a fundamental tension in what I do. I hate control, yet I operate entirely within a world of laws and rules and permissions. I help people navigate systems designed to exclude them whilst simultaneously advising them to play by those systems' rules. Some days it feels like teaching people how to win a rigged game.
            </p>

            <p className="text-base leading-relaxed">
              But perhaps that is the point. Immigration law has always been about power: who gets to move, who gets to stay, who gets to belong. The people I represent rarely hold the power; they navigate it; they work around it; they find the cracks in walls that were built to keep them out. AI can be another tool for finding those cracks, for understanding the rules well enough to work within them whilst never pretending they are fair.
            </p>

            <p className="text-base leading-relaxed">
              The big tech approach to legal AI would centralise that power even further. One platform to rule them all, trained on data from every firm, learning from every matter, owned by companies whose interests may not align with those of migrants or practitioners. The grassroots approach distributes it: individual practitioners building individual tools for individual needs, sharing knowledge rather than hoarding it.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground">
              This Is Just The Beginning
            </h2>

            <p className="text-base leading-relaxed">
              Legalaid is my commitment to proving that practitioners can revolutionise their own landscape, one innovative application at a time. We are open to working with other law firms who want to bring their own legal AI ideas to life, whether through consultation or collaboration. The goal is to empower solicitors with practical, accessible technology that enhances their ability to deliver results.
            </p>

            <p className="text-base leading-relaxed">
              I qualified in 2001. I have worked for firms including Horsfield Menzies, Dias Solicitors, ALT Legal, Gunnercooke and Halebury. I now run Lawyery from our offices in Holborn, and I teach Advanced Immigration Law for Free Movement. None of that experience told me I would end up founding a tech company. But all of it told me what that company needed to build.
            </p>

            <p className="text-base leading-relaxed font-semibold">
              The tools are out there at legalaid.dev. They are free to use. And they are just the start of what practitioners can achieve when we stop waiting for someone else to build our future.
            </p>
          </div>

          {/* Share buttons */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Share this article</h3>
            <div className="flex gap-3">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(ARTICLE_URL)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006699] transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.851-3.036-1.853 0-2.136 1.447-2.136 2.943v5.662H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.37-1.851 3.604 0 4.268 2.372 4.268 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(ARTICLE_URL)}&text=${encodeURIComponent(articleTitle)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-80 transition-opacity"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X / Twitter
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(ARTICLE_URL);
                  alert('Link copied to clipboard!');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copy link
              </button>
            </div>
          </div>

          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-4">
              <img
                src="/lovable-uploads/chris-portrait-new.png"
                alt="Chris Dias"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <p className="font-semibold text-foreground">{authorName}</p>
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
            headline: articleTitle,
            description: articleDescription,
            image: OG_IMAGE_URL,
            datePublished: publishDate,
            dateModified: publishDate,
            author: {
              "@type": "Person",
              name: authorName,
              jobTitle: "Solicitor",
              url: "https://www.lawyery.co/chris-dias"
            },
            publisher: {
              "@type": "Organization",
              name: "Legal Artificial Intelligence Development (Legalaid) Ltd",
              url: "https://legalaid.dev",
              logo: {
                "@type": "ImageObject",
                url: "https://ai-law-ally.lovable.app/lovable-uploads/legalaid-logo.png"
              }
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": ARTICLE_URL
            }
          }),
        }}
      />
    </div>
  );
};

export default ArticleWhyIBuiltMyOwnAICompany;
