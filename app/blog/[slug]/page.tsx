import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import CodeBlock from "@/components/CodeBlock";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";

interface BlogPost {
  title: string;
  subtitle: string;
  meta: string;
  content: string;
  banner: string;
  tags: string[];
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
  
  // Basic parsing for Title and Subtitle from metadata/top of file
  const lines = fileContent.split("\n");
  const title = lines[0].replace("# ", "").trim();
  const subtitle = lines[1].replace("### ", "").trim();
  
  // Content extraction - more robust separator check
  const separatorIndex = fileContent.indexOf("---");
  const contentStart = separatorIndex !== -1 ? fileContent.indexOf("---", separatorIndex + 1) + 3 : 0;
  const content = contentStart > 3 ? fileContent.slice(contentStart).trim() : fileContent.trim();

  return {
    title,
    subtitle,
    meta: "", 
    content,
    banner: "/images/api-guide-banner.png",
    tags: ["API Design", "Best Practices", "DX"]
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

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
              <span>March 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-acc" />
              <span>10 min read</span>
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
