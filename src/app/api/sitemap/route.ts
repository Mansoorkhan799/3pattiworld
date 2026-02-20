import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://3pattiworldapp.com.pk';
  
  // Define page type
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{
      loc: string;
      title: string;
      caption: string;
    }>;
  };
  
  // Main pages with high priority
  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: new Date().toISOString(),
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/3-patti-world-logo.webp',
          title: '3 Patti World Logo',
          caption: 'The official logo of 3 Patti World gaming platform'
        },
        {
          loc: '/3-patti-world-logo.webp',
          title: '3 Patti World Hero Image',
          caption: '3 Patti World gaming platform showcase'
        }
      ]
    },
    {
      url: '/download-3-patti-world',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/3-patti-world-logo.webp',
          title: 'Download 3 Patti World',
          caption: 'Download 3 Patti World APK for Android'
        }
      ]
    },
    {
      url: '/deposit-money-in-3-patti-world',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/withdraw-money-from-3-patti-world',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/3-patti-world-for-pc',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/3-patti-world-logo.webp',
          title: '3 Patti World for PC',
          caption: 'Play 3 Patti World on PC using Android Emulator'
        }
      ]
    },
    {
      url: '/about-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/3-patti-world-logo.webp',
          title: 'About 3 Patti World',
          caption: 'Learn about 3 Patti World gaming platform'
        }
      ]
    },
    {
      url: '/blog',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/3-patti-world-logo.webp',
          title: '3 Patti World Blog',
          caption: 'Guides and tutorials for 3 Patti World gaming platform'
        }
      ]
    },
    {
      url: '/contact-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7
    },
    {
      url: '/privacy',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    },
    {
      url: '/disclaimer',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    }
  ];

  // Blog posts
  const blogPosts: PageType[] = [
    {
      url: '/blog/is-3-patti-world-real-or-fake',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/blog/create-3-patti-world-account-and-login',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/blog/tips-to-win-big-in-3-patti-world',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    }
  ];

  // Only include existing pages
  const allPages = [...mainPages, ...blogPosts];
  
  // Generate XML with mobile and image extensions
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${page.images?.map(img => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('') || ''}
  </url>
  `).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
} 