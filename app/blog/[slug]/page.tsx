import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
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
  const filePath = path.join(process.cwd(), "content", `${slug}-blog.md`);
  
  if (!fs.existsSync(filePath)) return null;
  
  const fileContent = fs.readFileSync(filePath, "utf8");
  
  // Basic parsing for Title and Subtitle from metadata/top of file
  const lines = fileContent.split("\n");
  const title = lines[0].replace("# ", "").trim();
  const subtitle = lines[1].replace("### ", "").trim();
  const meta = lines[3].replace("> ", "").replace(/\*/g, "").trim();
  
  // Extract content after the first separator
  const contentStart = fileContent.indexOf("---", fileContent.indexOf("---") + 1) + 3;
  const content = fileContent.slice(contentStart).trim();

  return {
    title,
    subtitle,
    meta,
    content,
    banner: "/images/api-guide-banner.png",
    tags: ["API Design", "Best Practices", "DX"]
  };
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-gray-400 mb-6">Post not found</p>
          <Link href="/" className="text-acc hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative bg-[#0a0a0f]">
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

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
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
              <Share2 size={14} className="text-acc cursor-pointer hover:text-white transition-colors" />
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/40 to-transparent" />
          </div>

          <div className="blog-content text-txt-secondary leading-relaxed space-y-6 text-lg">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-border-col">
          <div className="bg-bg-card border border-border-col rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-2 text-white">Thanks for reading!</h3>
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
