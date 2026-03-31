"use client";
import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  language: string;
  value: string;
}

export default function CodeBlock({ language, value }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains('light'));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative group my-8 rounded-xl overflow-hidden border border-[var(--border-col)] bg-[var(--bg-card2)] shadow-2xl transition-all duration-300">
      {/* Header / Language Label */}
      <div className="flex items-center justify-between px-5 py-2.5 bg-[var(--bg-card)] border-b border-[var(--border-col)]">
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500 font-bold">
          {language || 'code'}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-mono font-bold text-slate-500 hover:text-acc transition-colors "
        >
          {copied ? (
            <>
              <Check size={12} className="text-acc" />
              <span className="text-acc">COPIED!</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>COPY</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="overflow-x-auto custom-scrollbar">
        <SyntaxHighlighter
          language={language}
          style={isLight ? oneLight : vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            background: 'transparent',
            fontFamily: "'DM Mono', monospace",
          }}
          codeTagProps={{
            style: {
              fontFamily: "'DM Mono', monospace",
            }
          }}
        >
          {value}
        </SyntaxHighlighter>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--border-col);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--border-hover);
        }
        pre {
          background: transparent !important;
        }
      `}</style>
    </div>
  );
}
