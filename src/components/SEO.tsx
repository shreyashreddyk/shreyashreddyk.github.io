import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
};

const SITE_NAME = 'Shreyash Kondakindi';
const SITE_ORIGIN = 'https://shreyashreddyk.github.io';
const DEFAULT_IMAGE = `${SITE_ORIGIN}/og-preview.svg`;

function ensureMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }

  return element;
}

function ensureLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }

  return element;
}

function normalizePath(path: string) {
  if (!path || path === '/') {
    return '/';
  }

  return path.startsWith('/') ? path : `/${path}`;
}

function buildCanonicalUrl(path?: string) {
  if (path) {
    const normalizedPath = normalizePath(path);
    return normalizedPath === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}/#${normalizedPath}`;
  }

  const hash = window.location.hash.replace(/^#/, '');
  const normalizedHash = normalizePath(hash || '/');
  return normalizedHash === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}/#${normalizedHash}`;
}

function resolveImage(image?: string) {
  if (!image) {
    return DEFAULT_IMAGE;
  }

  if (/^https?:\/\//.test(image)) {
    return image;
  }

  return new URL(image, SITE_ORIGIN).toString();
}

export function SEO({ title, description, path, image, type = 'website' }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;
    const canonicalUrl = buildCanonicalUrl(path);
    const imageUrl = resolveImage(image);

    const descriptionMeta = ensureMeta('meta[name="description"]', { name: 'description' });
    const ogTitle = ensureMeta('meta[property="og:title"]', { property: 'og:title' });
    const ogDescription = ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
    });
    const ogType = ensureMeta('meta[property="og:type"]', { property: 'og:type' });
    const ogUrl = ensureMeta('meta[property="og:url"]', { property: 'og:url' });
    const ogImage = ensureMeta('meta[property="og:image"]', { property: 'og:image' });
    const ogSiteName = ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name' });
    const twitterTitle = ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' });
    const twitterDescription = ensureMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
    });
    const twitterCard = ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card' });
    const twitterImage = ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image' });
    const canonicalLink = ensureLink('link[rel="canonical"]', { rel: 'canonical' });

    descriptionMeta?.setAttribute('content', description);
    ogTitle?.setAttribute('content', `${title} | ${SITE_NAME}`);
    ogDescription?.setAttribute('content', description);
    ogType?.setAttribute('content', type);
    ogUrl?.setAttribute('content', canonicalUrl);
    ogImage?.setAttribute('content', imageUrl);
    ogSiteName?.setAttribute('content', SITE_NAME);
    twitterTitle?.setAttribute('content', `${title} | ${SITE_NAME}`);
    twitterDescription?.setAttribute('content', description);
    twitterCard?.setAttribute('content', 'summary_large_image');
    twitterImage?.setAttribute('content', imageUrl);
    canonicalLink?.setAttribute('href', canonicalUrl);
  }, [description, image, path, title, type]);

  return null;
}
