import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://3pattiworldapp.com.pk'),
  title: {
    default: "3 Patti World Pakistan v1.199 Free Download Official APK",
    template: "%s | 3 Patti World"
  },
  description: "3 Patti World 2026 - Download Teen Patti World APK for Android. Play with friends, earn real cash, daily rewards. JazzCash & EasyPaisa withdrawals.",
  keywords: [
    "3 Patti World",
    "Teen Patti World",
    "3 Patti World APK",
    "3 Patti World download",
    "Teen Patti World APK",
    "3 Patti World Pakistan",
    "3Patti World game",
    "Teen Patti Pakistan",
    "3 Patti earning game",
    "3 Patti World 2026"
  ],
  authors: [{ name: "3 Patti World Team" }],
  creator: "3 Patti World",
  publisher: "3 Patti World",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/3-patti-world-logo.webp', type: 'image/webp', sizes: '192x192' },
      { url: '/3-patti-world.webp', type: 'image/webp', sizes: '1000x1000' }
    ],
    apple: [
      { url: '/3-patti-world-logo.webp', sizes: '180x180' }
    ],
    shortcut: [
      { url: '/3-patti-world-logo.webp', type: 'image/webp' }
    ]
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://3pattiworldapp.com.pk",
  },
  openGraph: {
    title: "3 Patti World Pakistan v1.199 Free Download Official APK",
    description: "3 Patti World 2026 - Download Teen Patti World APK. Play with friends, earn real cash, daily rewards. JazzCash & EasyPaisa withdrawals.",
    url: "https://3pattiworldapp.com.pk",
    siteName: "3 Patti World",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://3pattiworldapp.com.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "3 Patti World - Teen Patti Earning Game",
      },
      {
        url: "https://3pattiworldapp.com.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "3 Patti World - Teen Patti Earning Game",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Patti World Pakistan v1.199 Free Download Official APK",
    description: "3 Patti World 2026 - Download Teen Patti World APK. Play with friends, earn real cash, daily rewards.",
    creator: "@3pattiworld",
    images: [
      {
        url: "https://3pattiworldapp.com.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "3 Patti World - Teen Patti Earning Game",
      }
    ],
  },
  applicationName: "3 Patti World",
  category: "Gaming",
  classification: "Teen Patti Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        {/* GEO: geographic targeting for Pakistan (AEO/GEO) */}
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <link rel="icon" href="/3-patti-world-logo.webp" type="image/webp" sizes="192x192" />
        <link rel="icon" href="/3-patti-world.webp" type="image/webp" sizes="1000x1000" />
        <link rel="shortcut icon" href="/3-patti-world-logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/3-patti-world-logo.webp" sizes="180x180" />

        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Defer manifest to avoid critical path (374ms latency) - load after page interactive */}
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {/* Google Analytics - only load if GA ID is set in env (use NEXT_PUBLIC_GA_MEASUREMENT_ID) */}
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <Header />
        <main className="flex-grow relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
        
        {/* Organization schema – sitewide signal for Google */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://3pattiworldapp.com.pk/#organization",
              "name": "3 Patti World",
              "url": "https://3pattiworldapp.com.pk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://3pattiworldapp.com.pk/3-patti-world-logo.webp",
                "width": 192,
                "height": 192
              },
              "description": "3 Patti World is Pakistan's premier Teen Patti gaming platform with real cash rewards. Download APK, play Teen Patti, Rummy, Dragon vs Tiger. JazzCash and EasyPaisa deposits and withdrawals.",
              "areaServed": { "@type": "Country", "name": "Pakistan", "alternateName": "PK" },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "support@3pattiworldapp.com.pk",
                "areaServed": "PK",
                "availableLanguage": ["English", "Urdu"]
              },
              "sameAs": [
                "https://facebook.com/3pattiworldapp",
                "https://twitter.com/3pattiworldapp"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
