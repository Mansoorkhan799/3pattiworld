import Image from "next/image";
import Link from 'next/link';
import { DOWNLOAD_APP_URL } from '@/lib/constants';
import Script from 'next/script';
import { Metadata } from 'next';

import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: "3 Patti World Pakistan v1.168 Free Download Official APK",
  description: "Download 3 Patti World APK – Pakistan's top Teen Patti platform. Play Teen Patti, Rummy, Dragon vs Tiger. Real cash via JazzCash & EasyPaisa.",
  keywords: [
    "3 Patti World",
    "Teen Patti World",
    "3 Patti World APK",
    "3 Patti World download",
    "3 Patti World Pakistan",
    "3Patti World game",
    "Teen Patti Pakistan",
    "3 Patti earning game",
    "3 Patti World 2026"
  ],
  openGraph: {
    title: '3 Patti World Pakistan v1.168 Free Download Official APK',
    description: "Pakistan's Most Trusted 3 Patti Gaming Platform 2026. Download APK, earn real cash, daily rewards. JazzCash & EasyPaisa withdrawals.",
    images: [
      { url: 'https://3pattiworldapp.com.pk/feature/og-image.webp', width: 1200, height: 630, alt: '3 Patti World - Teen Patti Earning Game' },
      { url: 'https://3pattiworldapp.com.pk/feature/og-image-square.webp', width: 800, height: 800, alt: '3 Patti World - Teen Patti Earning Game' },
      { url: 'https://3pattiworldapp.com.pk/3-patti-world.webp', width: 1000, height: 1000, alt: '3 Patti World – Official Teen Patti APK Download Pakistan 2026' }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 Patti World Pakistan v1.168 Free Download Official APK',
    description: "Pakistan's Most Trusted 3 Patti Gaming Platform 2026.",
    images: ['https://3pattiworldapp.com.pk/feature/og-image.webp']
  }
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://3pattiworldapp.com.pk/#website",
        "url": "https://3pattiworldapp.com.pk/",
        "name": "3 Patti World",
        "description": "Pakistan's Most Trusted 3 Patti Gaming Platform with real cash rewards",
        "inLanguage": "en-US",
        "areaServed": { "@type": "Country", "name": "Pakistan", "alternateName": "PK" }
      },
      {
        "@type": "Organization",
        "@id": "https://3pattiworldapp.com.pk/#organization",
        "name": "3 Patti World",
        "url": "https://3pattiworldapp.com.pk/",
        "logo": { "@type": "ImageObject", "url": "https://3pattiworldapp.com.pk/3-patti-world-logo.webp", "width": 512, "height": 512 },
        "contactPoint": { "@type": "ContactPoint", "email": "support@3pattiworldapp.com.pk", "contactType": "Customer Support", "areaServed": { "@type": "Country", "name": "Pakistan" } },
        "areaServed": { "@type": "Country", "name": "Pakistan", "alternateName": "PK" }
      },
      {
        "@type": "ImageObject",
        "@id": "https://3pattiworldapp.com.pk/#app-icon",
        "url": "https://3pattiworldapp.com.pk/3-patti-world.webp",
        "contentUrl": "https://3pattiworldapp.com.pk/3-patti-world.webp",
        "name": "3 Patti World – Official Teen Patti APK Download Pakistan 2026",
        "description": "Official image of 3 Patti World – Pakistan's top Teen Patti gaming platform. Download free APK for Android. Play Teen Patti, Dragon vs Tiger, Rummy and earn real cash via JazzCash and EasyPaisa.",
        "caption": "3 Patti World – Official Teen Patti APK for Pakistan. Free download, real cash rewards.",
        "keywords": "3 Patti World, 3Patti World, Teen Patti APK Pakistan, 3 Patti World download, 3 Patti World APK",
        "width": 1000,
        "height": 1000,
        "encodingFormat": "image/webp",
        "inLanguage": "en-US",
        "representativeOfPage": true,
        "datePublished": "2026-01-01",
        "dateModified": "2026-03-25",
        "author": { "@id": "https://3pattiworldapp.com.pk/#organization" },
        "creator": { "@id": "https://3pattiworldapp.com.pk/#organization" },
        "copyrightHolder": { "@id": "https://3pattiworldapp.com.pk/#organization" },
        "copyrightNotice": "© 2026 3 Patti World. All rights reserved.",
        "creditText": "3 Patti World – 3pattiworldapp.com.pk",
        "license": "https://3pattiworldapp.com.pk/terms-and-conditions",
        "acquireLicensePage": "https://3pattiworldapp.com.pk/contact-us",
        "isPartOf": { "@id": "https://3pattiworldapp.com.pk/#website" },
        "primaryImageOfPage": { "@id": "https://3pattiworldapp.com.pk/#webpage" }
      },
      {
        "@type": "WebPage",
        "@id": "https://3pattiworldapp.com.pk/#webpage",
        "url": "https://3pattiworldapp.com.pk/",
        "name": "3 Patti World – Official Teen Patti APK Download Pakistan 2026",
        "description": "Download 3 Patti World APK for Android. Play Teen Patti, Dragon vs Tiger, Rummy. Real cash rewards via JazzCash and EasyPaisa in Pakistan.",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://3pattiworldapp.com.pk/#website" },
        "about": { "@id": "https://3pattiworldapp.com.pk/#organization" },
        "primaryImageOfPage": { "@id": "https://3pattiworldapp.com.pk/#app-icon" },
        "image": { "@id": "https://3pattiworldapp.com.pk/#app-icon" }
      },
      {
        "@type": "SoftwareApplication",
        "name": "3 Patti World",
        "operatingSystem": "Android 4.1+",
        "applicationCategory": "GameApplication",
        "image": { "@id": "https://3pattiworldapp.com.pk/#app-icon" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.5", "ratingCount": "300000" },
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PKR" },
        "downloadUrl": "https://3pattiworldapp.com.pk/download-3-patti-world",
        "softwareVersion": "V1.168(1)",
        "fileSize": "49MB",
        "description": "Play Teen Patti, Dragon vs Tiger, Rummy, Poker, Slots, and more. Earn real money with JazzCash & EasyPaisa."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Can users play 3 Patti World without depositing money?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can play as a guest or use free chips and daily login bonuses to start without depositing." } },
          { "@type": "Question", "name": "How do users contact customer support?", "acceptedAnswer": { "@type": "Answer", "text": "Through in-app live chat, WhatsApp, or the FAQs section on the official 3 Patti World website." } },
          { "@type": "Question", "name": "What makes 3 Patti World different from other card games?", "acceptedAnswer": { "@type": "Answer", "text": "It offers multiple game modes, local payment methods (JazzCash, EasyPaisa), daily bonuses, referral rewards, and a user-friendly interface designed for Pakistan players." } },
          { "@type": "Question", "name": "Is 3 Patti World safe and legal to use?", "acceptedAnswer": { "@type": "Answer", "text": "The app uses encryption and secure payment methods. Always download from official sources. Legal status may vary by region." } },
          { "@type": "Question", "name": "Can users lose money while playing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, as with any real-money gaming, there is a risk of loss. Play responsibly and only with money you can afford to lose." } },
          { "@type": "Question", "name": "Is it possible to change the language of 3 Patti World?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the app supports English and Urdu." } },
          { "@type": "Question", "name": "How do referral rewards work?", "acceptedAnswer": { "@type": "Answer", "text": "Share your referral link with friends. When they join and play, you earn commission automatically." } },
          { "@type": "Question", "name": "Is 3 Patti World available on iPhone (iOS)?", "acceptedAnswer": { "@type": "Answer", "text": "No, the APK is for Android only. iOS users can play via the browser." } }
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Download and Install 3 Patti World APK on Android",
        "description": "Step-by-step guide to download and install the official 3 Patti World APK for Android in Pakistan. Uses JazzCash and EasyPaisa for deposits and withdrawals.",
        "totalTime": "PT5M",
        "url": "https://3pattiworldapp.com.pk/#download",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Open browser and visit official site", "text": "Open the browser on your Android device, go to the official 3 Patti World website (3pattiworldapp.com.pk), and click the Download button." },
          { "@type": "HowToStep", "position": 2, "name": "Download the APK file", "text": "Wait for the APK file to finish downloading. It will be saved in your device's Download folder." },
          { "@type": "HowToStep", "position": 3, "name": "Allow install from unknown sources", "text": "Go to Settings, then Security, and enable Install from Unknown Sources (or Install Unknown Apps) for your browser or file manager." },
          { "@type": "HowToStep", "position": 4, "name": "Open the APK and install", "text": "Open File Manager, go to the Download folder, tap the downloaded 3 Patti World APK file, and follow the installation prompts." },
          { "@type": "HowToStep", "position": 5, "name": "Launch the app", "text": "Once installation completes, tap Open or find the 3 Patti World icon on your home screen and open the app to register or log in." }
        ]
      }
    ]
  };

  return (
    <>
      <Script id="homepage-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: '400px' }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">3 Patti World</span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-[#FFA500]">Pakistan&apos;s Most Trusted 3 Patti Gaming Platform 2026</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              ​3 Patti World brings Teen Patti, Dragon vs Tiger, Rummy, and more to your phone with a clean layout and quick payouts via JazzCash and EasyPaisa. Use the button below to get the official APK and start playing.
            </p>

            <div className="flex justify-center my-8">
              <DownloadButton />
            </div>

            <div className="flex flex-row gap-4 justify-center mt-8 mb-4" style={{ minHeight: '120px' }}>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                <div className="text-white text-2xl font-bold mb-1">600K+</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/></svg>
                <div className="text-white text-2xl font-bold mb-1">300K+</div>
                <div className="text-gray-400 text-sm">Ratings</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                <div className="text-white text-2xl font-bold mb-1">49MB</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center italic">*Available for Android devices only</p>
          </div>

          <div className="hidden md:block md:w-1/2 md:mt-8">
            <figure className="ml-auto text-center" style={{ width: '320px', maxWidth: '100%' }}>
              <div style={{ width: '320px', height: '320px' }}>
                <Image src="/3-patti-world.webp" alt="3 Patti World – Official Teen Patti APK Download Pakistan 2026" title="3 Patti World" width={320} height={320} className="object-contain drop-shadow-2xl" priority={true} fetchPriority="high" quality={90} sizes="320px" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <figcaption className="text-gray-400 text-xs mt-2">3 Patti World – Official Teen Patti APK for Pakistan</figcaption>
            </figure>
          </div>
          <div className="mt-8 md:hidden">
            <figure className="mx-auto text-center" style={{ width: '280px', maxWidth: '100%' }}>
              <div style={{ width: '280px', height: '280px' }}>
                <Image src="/3-patti-world.webp" alt="3 Patti World – Official Teen Patti APK Download Pakistan 2026" title="3 Patti World" width={280} height={280} className="object-contain drop-shadow-2xl" priority={true} fetchPriority="high" quality={90} sizes="280px" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <figcaption className="text-gray-400 text-xs mt-2">3 Patti World – Official Teen Patti APK for Pakistan</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Download Info Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Download Info Table</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 text-left font-medium text-white">App Name</td><td className="py-4 px-6 text-left text-white">3Patti World</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-4 px-6 text-left font-medium text-white">Developer</td><td className="py-4 px-6 text-left text-white">3Patti World dev</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 text-left font-medium text-white">Category</td><td className="py-4 px-6 text-left text-white">Cards, Game</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-4 px-6 text-left font-medium text-white">Size</td><td className="py-4 px-6 text-left text-white">49MB</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 text-left font-medium text-white">Latest Version</td><td className="py-4 px-6 text-left text-white">V1.168(1)</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-4 px-6 text-left font-medium text-white">Required OS</td><td className="py-4 px-6 text-left text-white">Android 5.0+</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 text-left font-medium text-white">Update</td><td className="py-4 px-6 text-left text-white">5th January 2026</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-4 px-6 text-left font-medium text-white">Downloads</td><td className="py-4 px-6 text-left text-white">600k+</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 text-left font-medium text-white">Rating Count</td><td className="py-4 px-6 text-left text-white">300000+</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 text-left font-medium text-white">Language</td><td className="py-4 px-6 text-left text-white">English, Urdu</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 text-left font-medium text-white">Price</td><td className="py-4 px-6 text-left text-white">Free (0$)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Overview</h2>
          <p className="text-gray-300 leading-relaxed">The app groups games into card tables, slots, and poker so you can jump straight into what you like. Graphics and controls are straightforward, so new and regular players can focus on the game. You can top up with a small amount and still access real-money tables, and free chips plus daily bonuses let you try games without depositing. Download and pick your first table to get started.</p>
        </div>
      </section>

      {/* What is 3Patti World Game */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">What is 3Patti World Game?</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">3 Patti World is a mobile card and casino app built around Teen Patti and other popular titles. You choose from multiple games, add funds with JazzCash or EasyPaisa, and cash out winnings to the same methods. New players get a deposit bonus; daily login and referral rewards add extra value.</p>
            <p className="text-gray-300 leading-relaxed">The interface keeps things simple: clear menus, familiar themes, and quick access to tables. Whether you prefer skill-based Teen Patti and Rummy or faster games like Dragon vs Tiger, the app is built for both casual play and real-money action.</p>
          </div>
        </div>
      </section>

      {/* Why 3Patti World Game so Popular */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Why 3Patti World Game so Popular?</h2>
          <p className="text-gray-300 leading-relaxed">Players in Pakistan like 3 Patti World for real-money payouts, local payments (JazzCash, EasyPaisa), and straightforward rules. The app feels like a focused card room rather than a cluttered casino, so beginners can learn quickly.</p>
          <p className="text-gray-300 leading-relaxed mt-4">Teen Patti, Dragon vs Tiger, Rummy, Poker, and slots are all in one place. Daily bonuses and referral rewards keep the action going, and the app stays light so it runs well on most Android phones. Withdrawals and deposits are handled through familiar local methods.</p>
        </div>
      </section>

      {/* How Can We Start with 3Patti World */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">How Can We Start with 3Patti World?</h2>
          <p className="text-gray-300 mb-6">To start the 3 Patti World game, follow the given steps:</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Firstly, open the official website of 3 Patti World and download the APK file to your device.</li>
            <li>Once downloaded then click on the downloaded APK file to start the installation by allowing the Unknown Sources.</li>
            <li>Once installation is complete, click on it to open the 3 Patti World app.</li>
            <li>When the app opens then log in with your mobile number or just play as a guest.</li>
            <li>When you log in, you will get free chips or welcome bonuses to start playing the game.</li>
            <li>Choose a table or game that you want to play, and start enjoying the game.</li>
          </ol>
        </div>
      </section>

      {/* 3Patti World App Screenshots */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#06091F] rounded-xl p-8">
          <h2 className="text-4xl font-bold mb-12 text-[#FFA500] text-center">3Patti World App Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src="/3-patti-world-game-pakistan.webp" alt="3Patti World Game Interface" width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <p className="text-center text-gray-300 mt-3 font-medium">Game Interface</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src="/3-patti-world-pakistan.webp" alt="3Patti World Games Collection" width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <p className="text-center text-gray-300 mt-3 font-medium">Dragon Tiger Game</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src="/3-patti-world-bonuses-and-rewards.webp" alt="3Patti World Bonuses & Rewards" width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <p className="text-center text-gray-300 mt-3 font-medium">Free Bonuses & Rewards</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src="/3-patti-world-deposit-money.webp" alt="3Patti World Deposit Money" width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <p className="text-center text-gray-300 mt-3 font-medium">Deposit Money</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src="/3-patti-world-create-account.webp" alt="3Patti World App Overview" width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <p className="text-center text-gray-300 mt-3 font-medium">App Overview</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src="/3-patti-world-refer-and-earn.webp" alt="3Patti World Referral Bonus" width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <p className="text-center text-gray-300 mt-3 font-medium">Referral & Win Bonus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Features of 3Patti World */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Top Features of 3Patti World</h2>
          <div className="space-y-6">
            <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-[#FFA500]">
              <h3 className="text-xl font-bold mb-3 text-[#FFA500]">1: Real Money Earning</h3>
              <p className="text-gray-300">Winnings from Teen Patti, poker, rummy, and other games are paid out as real cash. You choose the game and table; the app handles payouts through JazzCash and EasyPaisa so you get your money without extra steps. For many users it’s both entertainment and a side income.</p>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-[#4ade80]">
              <h3 className="text-xl font-bold mb-3 text-[#4ade80]">2: Easy Withdraw & Deposit</h3>
              <p className="text-gray-300">Top-ups and withdrawals use JazzCash or EasyPaisa in a few taps. The flow is simple: choose amount, confirm, and complete the step in your wallet app. Transactions are processed quickly so you can get back to playing or cash out when you want.</p>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold mb-3 text-[#60a5fa]">3: Attractive Interface</h3>
              <p className="text-gray-300">The UI is bright and easy to scan: game categories, wallet, and promotions are clearly laid out. Sound and animations add atmosphere without getting in the way, and you can reach your favourite game in one or two taps.</p>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-[#f97316]">
              <h3 className="text-xl font-bold mb-3 text-[#f97316]">4: Popular Games</h3>
              <p className="text-gray-300">Dragon vs Tiger, poker, slots, Teen Patti, and Rummy sit in one app with clear rules and table limits. Whether you want a quick round or a longer session, there’s a game and stake level that fits.</p>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-[#FFA500]">
              <h3 className="text-xl font-bold mb-3 text-[#FFA500]">5: Daily Bonus</h3>
              <p className="text-gray-300">Daily login gives you free chips or spins; weekly and seasonal promos add more. If you’d rather not deposit right away, these rewards still let you join tables and learn the games.</p>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-[#4ade80]">
              <h3 className="text-xl font-bold mb-3 text-[#4ade80]">6: Referral Earning</h3>
              <p className="text-gray-300">Share your referral link; when friends sign up and play, you earn a cut of their activity. No extra gameplay required—your commission is credited automatically as they use the app.</p>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold mb-3 text-[#60a5fa]">7: Fast Performance</h3>
              <p className="text-gray-300">The APK is optimised for a wide range of Android devices. Load times are short, and the app uses limited storage so it stays responsive even on older or lower-spec phones.</p>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-[#f97316]">
              <h3 className="text-xl font-bold mb-3 text-[#f97316]">8: Safe & Secure Platform</h3>
              <p className="text-gray-300">Payments go through established channels (JazzCash, EasyPaisa), and account data is protected. Always download from the official site to avoid fake copies and keep your details safe.</p>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-[#FFA500]">
              <h3 className="text-xl font-bold mb-3 text-[#FFA500]">9: Free to Play</h3>
              <p className="text-gray-300">No download or sign-up fee. New users get free chips to try games before adding real money—ideal if you’re testing the app or learning the rules.</p>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-[#4ade80]">
              <h3 className="text-xl font-bold mb-3 text-[#4ade80]">10: 24/7 Support</h3>
              <p className="text-gray-300">Support is available in-app (live chat) and via WhatsApp. For deposit, withdrawal, or technical issues, the team can walk you through the fix so you’re not stuck.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Games to Play on 3Patti World */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Best Games to Play on 3Patti World</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">1: Multiplayer Games</h3>
              <ul className="space-y-2 text-gray-300">
                {['Tiger Dragon (Hot)', '7 UP Down (Hot)', 'Zoo Roulette (Hot)', 'Crash', 'Car Roulette', 'Andar Bahar', 'Teenpatti 20-20', 'Best of Five'].map((game, i) => (
                  <li key={i}>• {game}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">2: Skill Base Games</h3>
              <ul className="space-y-2 text-gray-300">
                {['Domino (Hot)', 'Rummy (Hot)', 'Teen Patti', 'Fishing Rush', '10 Cards', 'Poker', 'Ludo', 'Black Jack'].map((game, i) => (
                  <li key={i}>• {game}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">3: Slots</h3>
              <ul className="space-y-2 text-gray-300">
                {['Mines (Hot)', 'Fruit Line', '777 Bingo', 'Rattling GEMS', 'Video Poker 1, 2', 'Wild Energy', 'WoW Slot', 'God of Fortune'].map((game, i) => (
                  <li key={i}>• {game}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for New Players */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Benefits for New Players by Joining 3Patti World</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-accent">1: New Player Welcome Bonus</h3>
            <p className="text-gray-300 mb-4">3Patti World offers 100% recharge bonus for all new fresh users on their first deposit in this game.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-[#0a1029]"><tr><th className="py-3 px-6 text-left text-white font-semibold">Deposit Amount (PKR)</th><th className="py-3 px-6 text-left text-white font-semibold">Bonus Amount (PKR)</th></tr></thead>
                <tbody className="divide-y divide-gray-800">
                  {[[100,100],[1000,1000],[5000,5000],[10000,10000],[20000,20000],[100000,100000]].map(([dep,bonus],i) => (
                    <tr key={i} className={i%2?'bg-[#0a1029]/50':'bg-[#06091F]/50'}><td className="py-3 px-6 text-gray-300">{dep.toLocaleString()}</td><td className="py-3 px-6 text-gray-300">{bonus.toLocaleString()}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-accent">2: Recharge Rebate</h3>
            <p className="text-gray-300 mb-4">3Patti World game is also offering huge recharge rebate bonuses for every player when they deposit amount.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-[#0a1029]"><tr><th className="py-3 px-6 text-left text-white font-semibold">Rebate</th><th className="py-3 px-6 text-left text-white font-semibold">Recharge Required</th><th className="py-3 px-6 text-left text-white font-semibold">Required Wager</th></tr></thead>
                <tbody className="divide-y divide-gray-800">
                  {[['5%','3000 PKR','2x'],['10%','5000','3x'],['15%','8000','4x'],['20%','10,000','5x'],['25%','20,000','6x'],['30%','50,000','7x']].map((row,i) => (
                    <tr key={i} className={i%2?'bg-[#0a1029]/50':'bg-[#06091F]/50'}><td className="py-3 px-6 text-gray-300">{row[0]}</td><td className="py-3 px-6 text-gray-300">{row[1]}</td><td className="py-3 px-6 text-gray-300">{row[2]}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">3: Big Rebate on Recharge</h3>
            <p className="text-gray-300 mb-4">This type of reward is only available for deposit of minimum 3000PKR or more than it. It also depends upon VIP Level with increasing rebate bonus. It can be claimed every day.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-[#0a1029]"><tr><th className="py-3 px-6 text-left text-white font-semibold">VIP Level</th><th className="py-3 px-6 text-left text-white font-semibold">Rebate</th></tr></thead>
                <tbody className="divide-y divide-gray-800">
                  {[['V1-V2','1% rebate'],['V3-V4','2% rebate'],['V5-V6','3% rebate'],['V7-V8','4% rebate'],['V9-V10','5% rebate'],['V11-V12','6% rebate'],['V13-V14','7% rebate'],['V15-V16','8% rebate'],['V17-V18','9% rebate'],['V19-V20','10% rebate']].map((row,i) => (
                    <tr key={i} className={i%2?'bg-[#0a1029]/50':'bg-[#06091F]/50'}><td className="py-3 px-6 text-gray-300">{row[0]}</td><td className="py-3 px-6 text-gray-300">{row[1]}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Download & Installation Guide */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Download 3Patti World APK Latest Version For Android</h2>
          <p className="text-gray-300 mb-4">To download the latest version of 3 Patti World APK for Android devices, follow the given steps:</p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-300 mb-8">
            <li>First, you open the browser on your Android device and click on the search bar.</li>
            <li>In the search bar, type the latest version of 3 Patti World and visit the trusted website.</li>
            <li>On the trusted website, click on the Download button to start downloading.</li>
            <li>Now wait a few seconds to complete the downloading process.</li>
            <li>Once complete, that file will be saved in the Download Folder of the device.</li>
          </ol>
          <h3 className="text-xl font-bold mb-4 text-accent">Installation Guide for 3Patti World APK</h3>
          <p className="text-gray-300 mb-4">After downloading to installing the 3 Patti World APK, follow the given steps:</p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-300 mb-8">
            <li>To start installation, your device grants permission to install unknown sources.</li>
            <li>Open the Settings &lt; Security and enable the Install Unknown Apps.</li>
            <li>After this, open the File Manager and go to the Download Folder.</li>
            <li>Click on the download APK file, and the installation process will start.</li>
            <li>Wait until the installation completes successfully on your device.</li>
            <li>Once complete then the app icon will show on your device.</li>
            <li>Click on it to launch the app and start playing the games that you want.</li>
          </ol>
          <div className="flex justify-center">
            <DownloadButton />
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">System Requirement to Download & install 3Patti World App</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#0a1029]">
                <tr><th className="py-3 px-6 text-left text-white font-semibold">System</th><th className="py-3 px-6 text-left text-white font-semibold">Minimum</th><th className="py-3 px-6 text-left text-white font-semibold">Recommended</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-white font-medium">Operating System</td><td className="py-3 px-6 text-gray-300">Android 4.1</td><td className="py-3 px-6 text-gray-300">Android 8.0 or above</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-white font-medium">RAM</td><td className="py-3 px-6 text-gray-300">2GB or more</td><td className="py-3 px-6 text-gray-300">4GB or more</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-white font-medium">Storage Space</td><td className="py-3 px-6 text-gray-300">At least 500 MB free</td><td className="py-3 px-6 text-gray-300">1GB free space</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-white font-medium">Processor</td><td className="py-3 px-6 text-gray-300">Quad-core 1.5 GHz</td><td className="py-3 px-6 text-gray-300">Octa-core 2.0 GHz</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-white font-medium">Internet</td><td className="py-3 px-6 text-gray-300">Stable 3G or WiFi</td><td className="py-3 px-6 text-gray-300">Fast &amp; stable 4G or WiFi</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's New in the Latest Version */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">What&apos;s New in the Latest Version of the 3Patti World?</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>In the latest version, the game looks better with improved graphics and smooth animations.</li>
            <li>Provide fast performance so that the app opens quickly and runs smoothly without lag.</li>
            <li>Its menu and layout are simple, which makes it very easy, especially for new users.</li>
            <li>In the latest versions, more games are added, such as Dragon vs Tiger, Rummy, and others.</li>
            <li>The withdrawal or deposit options work faster and smoothly in the latest version.</li>
            <li>In the latest version, better security measures can be used that can protect your account and money.</li>
            <li>New bonuses and referral rewards provide you with more chances to earn money.</li>
            <li>Old Errors or app issues are removed to offer a smooth gaming experience.</li>
            <li>The background music or game sounds improve the app and provide more fun.</li>
            <li>The new VIP system gives you extra prizes and benefits that help you stay active.</li>
          </ul>
        </div>
      </section>

      {/* How to Register & Login */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">How to Register &amp; Login on 3Patti World?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">1: Register Method</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Firstly, open the 3 Patti World app on your device.</li>
                <li>On the homescreen, click on the Register or Sign Up option.</li>
                <li>Now, enter your valid mobile number or email address.</li>
                <li>Set a strong password that can never be accessed easily.</li>
                <li>Enter the OTP that you can receive through phone or email for verification.</li>
                <li>Once verification is complete then your account will be created successfully.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">2: Login Method</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Open the 3 Patti World app on your device.</li>
                <li>Click on the Login button on the homescreen.</li>
                <li>Enter your registered mobile number, email, or password.</li>
                <li>Make sure that your entered details are correct.</li>
                <li>Once confirmed, tap on the Sign in or Login option.</li>
                <li>If you forget your password, then use Forgot Password to reset it.</li>
                <li>Once logging is complete then you can start playing games.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Deposit & Withdraw */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Ways to Deposit &amp; Withdraw Money in 3Patti World</h2>
          <div className="space-y-6 mb-8">
            <div className="bg-[#0A1029] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-accent">1: JazzCash</h3>
              <p className="text-gray-300">JazzCash is one of the most trusted and secure mobile banking services that allows you to deposit money quickly into your gaming account and start playing games quickly. It&apos;s a fast and safe transaction system that allows you to withdraw your winnings directly into your account wallet. The best part of this method is that you do not wait a long time because the transactions are completed within seconds.</p>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-accent">2: EasyPaisa</h3>
              <p className="text-gray-300">EasyPaisa is another secure and most commonly used payment method that is similar to the JazzCash method. It allows you to deposit or withdraw money without any difficulty. Through this method, you can add funds to your game account and transfer winnings to your EasyPaisa wallet in just a few steps. The process of this method is very safe, reliable, and suitable for all types of users.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">How to Deposit Money in the 3Patti World App?</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>First, open the 3 Patti World app on your device and log in.</li>
                <li>Now, click on the Wallet option that is available on the homescreen.</li>
                <li>In this wallet section, click on the Deposit option.</li>
                <li>Choose a payment method that you want to use.</li>
                <li>Enter the amount that you want to deposit.</li>
                <li>Click on the confirm option and wait to complete it.</li>
                <li>Once complete, the balance will show in your game wallet.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">How to Withdraw Money in 3Patti World?</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Open the 3 Patti World app and log in to your account.</li>
                <li>Click on the Wallet option that is available on the main screen.</li>
                <li>In the wallet section, click on the Withdrawal option.</li>
                <li>Choose your payment method, like JazzCash or EasyPaisa.</li>
                <li>Now enter the amount that you want to withdraw.</li>
                <li>Enter some required details, like the account number.</li>
                <li>Double-check all entered details and click on Confirm.</li>
                <li>Wait a few seconds to complete the withdrawal process.</li>
                <li>Once complete, that money will be shown in your selected payment method.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">About the Safety &amp; Security of the 3Patti World</h2>
          <p className="text-gray-300 leading-relaxed">3 Patti World is an online gaming platform that provides you with a safe and secure environment. It uses basic security features such as data encryption or SSL certificates that can protect your information. This app also supports local payment options such as JazzCash or Easy Paisa, which can make the transactions safer and secure. However, this app is not officially available on the Google Play Store and may come with some risks, such as malware or scams. So, it is important to make sure that you can download it from official, safe, and secure sources. Always avoid sharing your sensitive personal information or banking details.</p>
        </div>
      </section>

      {/* Latest Guides & Blog */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Latest Guides &amp; Blog</h2>
          <p className="text-gray-300 mb-8">Explore our comprehensive guides to learn everything about 3Patti World:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/blog/is-3-patti-world-real-or-fake" className="bg-[#0A1029] p-5 rounded-lg hover:border-accent border border-gray-700 transition-colors">
              <h3 className="text-white font-semibold mb-2">Is 3Patti World Real or Fake?</h3>
              <p className="text-gray-400 text-sm">Discover the truth about legitimacy and payment methods</p>
            </Link>
            <Link href="/blog/how-to-use-3-patti-world-app-pakistan-guide-2026" className="bg-[#0A1029] p-5 rounded-lg hover:border-accent border border-gray-700 transition-colors">
              <h3 className="text-white font-semibold mb-2">How to Play 3Patti World</h3>
              <p className="text-gray-400 text-sm">Complete beginner guide with rules and tips</p>
            </Link>
            <Link href="/blog/ways-to-earn-money-with-3-patti-world-2026" className="bg-[#0A1029] p-5 rounded-lg hover:border-accent border border-gray-700 transition-colors">
              <h3 className="text-white font-semibold mb-2">How to Earn Money in 3Patti World</h3>
              <p className="text-gray-400 text-sm">Earning methods, bonuses, and withdrawal guide</p>
            </Link>
            <Link href="/blog/create-3-patti-world-account-and-login" className="bg-[#0A1029] p-5 rounded-lg hover:border-accent border border-gray-700 transition-colors">
              <h3 className="text-white font-semibold mb-2">How to Create Account and Login</h3>
              <p className="text-gray-400 text-sm">Step-by-step registration and login guide</p>
            </Link>
            <Link href="/deposit-money-in-3-patti-world" className="bg-[#0A1029] p-5 rounded-lg hover:border-accent border border-gray-700 transition-colors">
              <h3 className="text-white font-semibold mb-2">Payment Methods - JazzCash &amp; EasyPaisa</h3>
              <p className="text-gray-400 text-sm">Complete guide on deposits and withdrawals</p>
            </Link>
            <Link href="/blog/tips-to-win-big-in-3-patti-world" className="bg-[#0A1029] p-5 rounded-lg hover:border-accent border border-gray-700 transition-colors">
              <h3 className="text-white font-semibold mb-2">Tips to Win in 3Patti World</h3>
              <p className="text-gray-400 text-sm">Expert strategies and winning techniques</p>
            </Link>
          </div>
          <div className="text-center mt-6">
            <Link href="/blog" className="text-accent hover:underline font-semibold">View All Blog Posts →</Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">How Can We Contact the 3Patti World?</h2>
          <p className="text-gray-300 mb-6">To contact the customer support team of 3 Patti World, you can use the given methods:</p>
          <div className="space-y-6">
            <div className="bg-[#0A1029] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-accent">Live Chat</h3>
              <p className="text-gray-300">3 Patti World provides you with a live chat feature inside the app so that you can directly talk to the support team if you face any problems. Whether you face any issue like playing or using the app, this team responds to you quickly and helps you to solve your issues in real time. Live chat is the fastest way to get support without leaving the app.</p>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-accent">WhatsApp</h3>
              <p className="text-gray-300">You can also contact the support team through WhatsApp. You can simply use the number that is provided in the app to send your problem. This support team replies to you with instructions or solutions that make it easy to fix any problem. This WhatsApp support is very convenient because this is a simple and easy way to get help.</p>
            </div>
            <div className="bg-[#0A1029] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-accent">FAQs</h3>
              <p className="text-gray-300">This app also dedicates a FAQs section where common questions are given with their answers. You can check this section before contacting the customer support team to save time. These FAQs mostly cover all topics such as registration, deposit, withdrawals, bonuses, and game rules. So, this is quick and easy to find the solution without waiting long.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Tricks */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Tips &amp; Tricks to Earn Maximum on 3Patti World Game</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Start with Small Bets:</strong> Always start a game with a small investment because it will help you to understand the game rules and overcome the risk of losing money. When you become confident, then increase your bet.</li>
            <li><strong>Use Bonuses Wisely:</strong> 3 Patti World offers you daily login bonuses, referral bonuses, or deposit rewards. It helps you to play more games without spending your own money or earning extra money.</li>
            <li><strong>Play Popular Games:</strong> Focus on high-earning games such as Dragon vs Tiger or Teen Patti Classic that provide you with higher winning chances, and also attract players with better opportunities to earn.</li>
            <li><strong>Invite Friends:</strong> Use the referral link system to invite friends every time your friends join, and then you can earn commission. The more friends you invite, the higher you can become.</li>
            <li><strong>Stay Active Daily:</strong> Regularly log in to the app to collect the daily rewards or spin bonuses. Always stay active because it will increase your bonus balance or improve your chances of winning big.</li>
            <li><strong>Withdraw on Time:</strong> When you earn a good amount then do not delay withdrawal. Always transfer your winnings as soon as possible through JazzCash or EasyPaisa to keep your money safe.</li>
            <li><strong>Learn from Practice Mode:</strong> Before playing games with real money, try the free or demo mode as practice. This helps you to understand the gameplay easily and develop the winning strategies without any risk.</li>
            <li><strong>Keep the Emotions in Control:</strong> Never play games with frustration or greed. Always stay calm or make smart decisions during the game because it helps you to avoid unnecessary losses.</li>
            <li><strong>Watch Expert Players:</strong> Observe how other players make the moves. Through this, you can learn new techniques or strategies and timing from them to improve your skills.</li>
            <li><strong>Avoid Fake Apps:</strong> Always download the original 3 Patti World app through official or trusted sources because fake links or websites can steal your personal data or money.</li>
          </ul>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Pros &amp; Cons of using 3Patti World</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#4ade80]">Pros</h3>
              <ul className="space-y-2 text-gray-300">
                {['Very simple and fun to play','Earn money with a small investment','JazzCash and EasyPaisa make payment easy','Many different games for enjoyment','Fast withdrawal of your money','Very easy to use and quick to start','Daily rewards and bonuses'].map((item,i)=>(<li key={i}>✓ {item}</li>))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#f87171]">Cons</h3>
              <ul className="space-y-2 text-gray-300">
                {['Risk of losing money','Sometimes withdrawals take time','Gameplay can be addictive','Run slow on weak phones','No legal Support','No Financial Freedom','Gameplay can be complicated'].map((item,i)=>(<li key={i}>✗ {item}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Can users play 3 Patti World without depositing money?", a: "Yes, you can play as a guest or use free chips and daily login bonuses to start without depositing." },
              { q: "How do users contact customer support?", a: "Through in-app live chat, WhatsApp, or the FAQs section on the official 3 Patti World website." },
              { q: "What makes 3 Patti World different from other card games?", a: "It offers multiple game modes, local payment methods (JazzCash, EasyPaisa), daily bonuses, referral rewards, and a user-friendly interface designed for Pakistan players." },
              { q: "Is 3 Patti World safe and legal to use?", a: "The app uses encryption and secure payment methods. Always download from official sources. Legal status may vary by region." },
              { q: "Can users lose money while playing?", a: "Yes, as with any real-money gaming, there is a risk of loss. Play responsibly and only with money you can afford to lose." },
              { q: "Is it possible to change the language of 3 Patti World?", a: "Yes, the app supports English and Urdu." },
              { q: "How do referral rewards work?", a: "Share your referral link with friends. When they join and play, you earn commission automatically." },
              { q: "Is 3 Patti World available on iPhone (iOS)?", a: "No, the APK is for Android only. iOS users can play via the browser." }
            ].map((faq, i) => (
              <details key={i} className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
                <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">{faq.q}
                  <span className="transition group-open:rotate-180"><svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                </summary>
                <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500]">Final Thoughts</h2>
          <p className="text-gray-300 leading-relaxed mb-4">3 Patti World is one of the most popular online card games in the world. It not only provides you with fun or entertainment but also provides you with a great chance to earn money if you play games wisely. This app provides you with a simple and user-friendly interface that can make it easy, especially for beginners, to play games. The deposit or withdrawal system through JazzCash or EasyPaisa is very convenient, which makes this platform very easy to use.</p>
          <p className="text-gray-300 leading-relaxed">If you play responsibly, make plans with smart strategies, and focus on your skill rather than luck, 3 Patti World can become a more exciting or rewarding gaming experience. <a href={DOWNLOAD_APP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Download 3 Patti World</a> today and start playing!</p>
        </div>
      </section>
    </>
  );
}
