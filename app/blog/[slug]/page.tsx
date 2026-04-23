import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import CodeBlock from "@/components/CodeBlock";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import JsonLd from "@/components/JsonLd";

interface BlogPost {
  title: string;
  subtitle: string;
  meta: string;
  content: string;
  banner: string;
  tags: string[];
  date: string;
  readTime: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Try several path variations
  const contentDir = path.join(process.cwd(), "content");
  const possiblePaths = [
    path.join(contentDir, `${slug}-blog.md`),
    path.join(contentDir, `${slug}.md`),
    path.join(contentDir, slug.endsWith('.md') ? slug : `${slug}.md`),
  ];
  
  let filePath = "";
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      filePath = p;
      break;
    }
  }
  
  if (!filePath) return null;
  
  const fileContent = fs.readFileSync(filePath, "utf8");
  const lines = fileContent.split("\n");

  // Extract Title
  const titleLine = lines.find(l => l.startsWith("# "));
  const title = titleLine ? titleLine.replace("# ", "").trim() : "Untitled Post";

  // Extract Subtitle (###)
  const subtitleLine = lines.find(l => l.startsWith("### "));
  const subtitle = subtitleLine ? subtitleLine.replace("### ", "").trim() : "";

  // Extract Metadata Line (often starts with > and contains "Published" or "By")
  const metaLine = lines.find(l => l.startsWith("> ") && (l.includes("Published") || l.includes("By") || l.includes("read")));
  const metaText = metaLine ? metaLine.replace("> ", "").replace(/\*/g, "").replace(/__/g, "").trim() : "";

  // Extract Tags from metaLine or looking for "Tags:"
  let tags: string[] = [];
  if (metaText.toLowerCase().includes("tags:")) {
    const tagsPart = metaText.split(/tags:/i)[1].split("·")[0].trim();
    tags = tagsPart.split(",").map(t => t.trim());
  } else if (slug === "api-guide") {
    tags = ["API Design", "Best Practices", "DX"];
  }

  // Extract date and read time from metaLine
  const dateMatch = metaText.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}/);
  const date = dateMatch ? dateMatch[0] : "March 2026";

  const readTimeMatch = metaText.match(/(\d+)\s*min\s*read/i);
  const readTime = readTimeMatch ? `${readTimeMatch[1]} min read` : "10 min read";
  
  // Content extraction - find where the actual content starts (after the second --- or after the header)
  const separators = [];
  let pIndex = -1;
  while ((pIndex = fileContent.indexOf("---", pIndex + 1)) !== -1) {
    separators.push(pIndex);
  }
  
  const contentStart = separators.length >= 2 ? separators[1] + 3 : (separators.length === 1 ? separators[0] + 3 : 0);
  const content = fileContent.slice(contentStart).trim();

  // Use dynamic banner based on slug
  const banner = slug === "publish-npm-package" 
    ? "/images/publish-npm-banner.png" 
    : "/images/api-guide-banner.png";

  return {
    title,
    subtitle: subtitle || (metaText.length < 100 ? metaText : ""), 
    meta: metaText, 
    content,
    banner,
    tags: tags.length > 0 ? tags : ["Tech", "Engineering"],
    date,
    readTime
  };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Swapnil Patil`,
    description: post.subtitle,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      type: "article",
      url: `https://swapnil-portfolio-kappa.vercel.app/blog/${slug}`,
      images: [
        {
          url: post.banner,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle,
      images: [post.banner],
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  const jsonLd = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.subtitle,
    image: `https://swapnil-portfolio-kappa.vercel.app${post.banner}`,
    author: {
      "@type": "Person",
      name: "Swapnil Patil",
      url: "https://swapnil-portfolio-kappa.vercel.app/",
    },
    datePublished: post.date ? new Date(post.date).toISOString().split('T')[0] : "2026-03-01",
  } : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-primary)] text-[var(--txt-primary)] p-6">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
          <p className="text-xl text-txt-secondary mb-2">Post Not Found</p>
          <p className="text-txt-muted mb-8 text-sm font-mono">
            Could not find content for slug: <span className="text-acc">{slug}</span>
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-acc/10 text-acc border border-acc/20 px-6 py-3 rounded-full hover:bg-acc/20 transition-all group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative bg-[var(--bg-primary)]">
      <Background />
      <Navbar />

      {jsonLd && <JsonLd data={jsonLd} />}

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Back Link */}
        <Link 
          href="/#blog" 
          className="inline-flex items-center gap-2 text-sm font-mono text-txt-muted hover:text-acc transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          BACK TO ARTICLES
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-border-col" />
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-widest font-mono text-acc border border-acc/30 bg-acc/5 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <div className="h-px flex-1 bg-border-col" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--txt-primary)] mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-txt-secondary mb-8 font-light italic leading-relaxed">
            {post.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-txt-muted border-y border-border-col py-6">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-acc" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-acc" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Share2 size={14} className="text-acc cursor-pointer hover:text-[var(--txt-primary)] transition-colors" />
              <span>Share</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="max-w-none">
          <div className="relative aspect-video w-full mb-12 rounded-2xl overflow-hidden border border-border-col shadow-2xl">
            <Image 
              src={post.banner} 
              alt={post.title} 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/40 to-transparent" />
          </div>

          <div className="blog-content text-[var(--txt-secondary)] leading-relaxed space-y-6 text-lg">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                code({ className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  return match ? (
                    <CodeBlock
                      language={match[1]}
                      value={String(children).replace(/\n$/, '')}
                    />
                  ) : (
                    <code className="bg-[var(--bg-card2)] text-acc px-1.5 py-0.5 rounded font-mono text-[0.9em]" {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-border-col">
          <div className="bg-bg-card border border-border-col rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-2 text-[var(--txt-primary)]">Thanks for reading!</h3>
            <p className="text-txt-secondary mb-6">If you enjoyed this article, feel free to share it or reach out via Twitter.</p>
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-2 bg-acc text-black font-semibold px-6 py-3 rounded-full hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
