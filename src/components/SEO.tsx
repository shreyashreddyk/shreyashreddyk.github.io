import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
};

const SITE_NAME = 'Shreyash Kondakindi';

function ensureMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }

  return element;
}

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    const descriptionMeta = ensureMeta('meta[name="description"]', { name: 'description' });
    const ogTitle = ensureMeta('meta[property="og:title"]', { property: 'og:title' });
    const ogDescription = ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
    });
    const ogType = ensureMeta('meta[property="og:type"]', { property: 'og:type' });
    const twitterTitle = ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' });
    const twitterDescription = ensureMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
    });

    descriptionMeta?.setAttribute('content', description);
    ogTitle?.setAttribute('content', `${title} | ${SITE_NAME}`);
    ogDescription?.setAttribute('content', description);
    ogType?.setAttribute('content', 'website');
    twitterTitle?.setAttribute('content', `${title} | ${SITE_NAME}`);
    twitterDescription?.setAttribute('content', description);
  }, [description, title]);

  return null;
}
