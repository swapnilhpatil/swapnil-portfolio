import React from 'react';

interface JsonLdProps {
  data: any;
}

/**
 * A secure component to render JSON-LD structured data.
 * It prevents XSS by escaping the '<' character to its Unicode equivalent (\u003c),
 * which prevents breaking out of the <script> tag.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
