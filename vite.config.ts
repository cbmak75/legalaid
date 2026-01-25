import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "node:fs/promises";
import { componentTagger } from "lovable-tagger";

type StaticHeadPage = {
  /** Route pathname, e.g. "/article/my-post" */
  route: string;
  title: string;
  description: string;
  canonicalUrl: string;
  ogImageUrl: string;
  ogType?: "website" | "article";
  ogImageWidth?: number;
  ogImageHeight?: number;
};

function escapeAttr(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");
}

function upsertSingleTag(html: string, pattern: RegExp, replacement: string) {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace(/<\/head>/i, `  ${replacement}\n</head>`);
}

function buildStaticHeadHtml(baseHtml: string, page: StaticHeadPage) {
  const ogType = page.ogType ?? "website";
  const ogW = page.ogImageWidth ?? 1200;
  const ogH = page.ogImageHeight ?? 630;

  let html = baseHtml;

  // Title
  html = html.replace(
    /<title>.*?<\/title>/is,
    `<title>${escapeAttr(page.title)}</title>`
  );

  // Canonical
  html = upsertSingleTag(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${escapeAttr(page.canonicalUrl)}" />`
  );

  // Description
  html = upsertSingleTag(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeAttr(page.description)}" />`
  );

  // Remove existing OG/Twitter tags (these are static in index.html and do not change per route)
  // Use very broad regex to ensure ALL og: and twitter: tags are removed
  // Split by lines, filter out OG/Twitter lines, rejoin
  const lines = html.split('\n');
  const filteredLines = lines.filter(line => {
    const lowerLine = line.toLowerCase();
    return !(
      (lowerLine.includes('property="og:') || lowerLine.includes("property='og:")) ||
      (lowerLine.includes('name="twitter:') || lowerLine.includes("name='twitter:"))
    );
  });
  html = filteredLines.join('\n');

  // Insert correct per-route OG/Twitter tags
  const ogBlock = `
    <meta property="og:title" content="${escapeAttr(page.title)}" />
    <meta property="og:description" content="${escapeAttr(page.description)}" />
    <meta property="og:type" content="${escapeAttr(ogType)}" />
    <meta property="og:url" content="${escapeAttr(page.canonicalUrl)}" />
    <meta property="og:image" content="${escapeAttr(page.ogImageUrl)}" />
    <meta property="og:image:width" content="${ogW}" />
    <meta property="og:image:height" content="${ogH}" />
    <meta property="og:site_name" content="Legalaid" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(page.title)}" />
    <meta name="twitter:description" content="${escapeAttr(page.description)}" />
    <meta name="twitter:image" content="${escapeAttr(page.ogImageUrl)}" />
    <meta name="twitter:url" content="${escapeAttr(page.canonicalUrl)}" />
  `.trim();

  html = html.replace(/<\/head>/i, `\n  ${ogBlock}\n</head>`);

  return html;
}

function staticHeadPages(pages: StaticHeadPage[]) {
  let outDir = "dist";

  return {
    name: "lovable-static-head-pages",
    apply: "build" as const,
    configResolved(resolved: any) {
      outDir = resolved.build?.outDir ?? "dist";
    },
    async closeBundle() {
      const indexPath = path.join(outDir, "index.html");
      const baseHtml = await fs.readFile(indexPath, "utf-8");

      await Promise.all(
        pages.map(async (page) => {
          const cleanRoute = page.route.replace(/^\//, "").replace(/\/$/, "");
          const targetDir = path.join(outDir, cleanRoute);
          const targetIndex = path.join(targetDir, "index.html");

          const pageHtml = buildStaticHeadHtml(baseHtml, page);
          await fs.mkdir(targetDir, { recursive: true });
          await fs.writeFile(targetIndex, pageHtml, "utf-8");
        })
      );
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    staticHeadPages([
      {
        route: "/article/why-i-built-my-own-ai-company",
        title: "Why I Built My Own AI Company (And Why Every Solicitor Should Consider Doing The Same) | Legalaid",
        description:
          "A solicitor's perspective on building AI tools for legal practitioners. Chris Dias explains why the grassroots approach to legal AI matters more than ever, and how practitioners can take control of their own destiny.",
        canonicalUrl: "https://legalaid.dev/article/why-i-built-my-own-ai-company",
        ogImageUrl: "https://legalaid.dev/og-article-why-i-built-ai-company.png",
        ogType: "article",
        ogImageWidth: 1200,
        ogImageHeight: 630,
      },
    ]),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
