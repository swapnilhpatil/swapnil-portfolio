import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
  slug: string;
}

export default function BlogCard({ title, excerpt, date, image, tags, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-acc/10">
        {/* Banner Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent" />
          
          <div className="absolute bottom-3 left-4 flex gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded-full bg-acc/10 text-acc border border-acc/20 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono text-txt-muted uppercase tracking-widest">{date}</span>
            <div className="h-px flex-1 bg-border-col mx-4" />
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-acc transition-colors line-clamp-2 leading-tight">
            {title}
          </h3>
          
          <p className="text-txt-secondary text-sm line-clamp-3 leading-relaxed mb-4">
            {excerpt}
          </p>
          
          <div className="flex items-center gap-2 text-acc text-sm font-medium">
            <span>Read Article</span>
            <svg 
              width="14" height="14" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
