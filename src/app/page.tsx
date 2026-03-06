import Image from "next/image";
import Link from 'next/link';
import { DOWNLOAD_APP_URL } from '@/lib/constants';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "3 Patti World Pakistan v1.152 Free Download Official APK",
    template: "%s | 3 Patti World"
  },
  description: "3 Patti World 2026 - Download Teen Patti World APK for Android. Play with friends, earn real cash, enjoy smooth gameplay. Millions of players love 3Patti World for daily rewards. JazzCash & EasyPaisa withdrawals.",
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
    "Teen Patti World download",
    "3 Patti World 2026",
    "Teen Patti APK",
    "3 Patti No 1",
    "3PattiWorld",
    "TeenPatti World",
    "card game Pakistan",
    "earn money 3 Patti",
    "JazzCash gaming",
    "EasyPaisa gaming"
  ],
  openGraph: {
    title: '3 Patti World Pakistan v1.152 Free Download Official APK',
    description: 'Enjoy the fun of 3 Patti World APK. Play Teen Patti, earn real cash, daily rewards. Download for Android. JazzCash & EasyPaisa withdrawals.',
    images: [
      { url: 'https://3pattiworldapp.com.pk/feature/og-image.webp', width: 1200, height: 630, alt: '3 Patti World - Teen Patti Earning Game' },
      { url: 'https://3pattiworldapp.com.pk/feature/og-image-square.webp', width: 800, height: 800, alt: '3 Patti World - Teen Patti Earning Game' }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 Patti World Pakistan v1.152 Free Download Official APK',
    description: 'Enjoy the fun of 3 Patti World APK. Play Teen Patti, earn real cash, daily rewards. Download for Android.',
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
        "description": "Pakistan's premier Teen Patti gaming platform with real cash rewards",
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://3pattiworldapp.com.pk/#organization",
        "name": "3 Patti World",
        "url": "https://3pattiworldapp.com.pk/",
        "logo": { "@type": "ImageObject", "url": "https://3pattiworldapp.com.pk/3-patti-world-logo.webp", "width": 512, "height": 512 },
        "contactPoint": { "@type": "ContactPoint", "email": "support@3pattiworldapp.com.pk", "contactType": "Customer Support", "areaServed": "PK" }
      },
      {
        "@type": "SoftwareApplication",
        "name": "3 Patti World",
        "operatingSystem": "Android 5.0+",
        "applicationCategory": "GameApplication",
        "image": "https://3pattiworldapp.com.pk/3-patti-world-logo.webp",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.5", "ratingCount": "500000" },
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PKR" },
        "downloadUrl": "https://3pattiworldapp.com.pk/download-3-patti-world",
        "softwareVersion": "V1.152(1)",
        "fileSize": "49MB",
        "description": "Play Teen Patti, 10 Cards, Ludo, Tiger vs Dragon, Mines and more. Earn real money with JazzCash & EasyPaisa."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How can I download the 3 Patti World app?", "acceptedAnswer": { "@type": "Answer", "text": "You can download the app directly from the official website 3pattiworldapp.com.pk. It is currently available only for Android devices." } },
          { "@type": "Question", "name": "Is 3 Patti World safe to use?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's safe as long as you download it from the official source and use secure payment options like JazzCash, Easypaisa, or bank transfer." } },
          { "@type": "Question", "name": "How do I register for an account?", "acceptedAnswer": { "@type": "Answer", "text": "Open the app, tap on the Register option, fill in your details like username, password, and mobile number, then verify with the OTP sent to your phone or email." } },
          { "@type": "Question", "name": "How can I deposit money in the 3Patti World app?", "acceptedAnswer": { "@type": "Answer", "text": "Go to the deposit section in the main menu, choose a payment method (JazzCash, Easypaisa, or Bank Transfer), enter the amount, and submit." } },
          { "@type": "Question", "name": "How do I withdraw my earnings?", "acceptedAnswer": { "@type": "Answer", "text": "Open the withdrawal section, select your preferred payment option, enter the amount, and click submit. The money will be sent to your selected account once verified." } },
          { "@type": "Question", "name": "What is the welcome bonus?", "acceptedAnswer": { "@type": "Answer", "text": "New users receive a 120 PKR welcome recharge bonus after their first deposit in the app." } },
          { "@type": "Question", "name": "Can I earn by referring friends?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can share your referral link on platforms like Facebook, Instagram, or Telegram to earn up to 30% commission when your friends join and play." } },
          { "@type": "Question", "name": "What games are available in 3 Patti World?", "acceptedAnswer": { "@type": "Answer", "text": "You can enjoy popular games such as 10 Cards, Ludo, Tiger vs Dragon, Mines, Zoo Roulette, and BlackJack." } },
          { "@type": "Question", "name": "How can I contact customer support?", "acceptedAnswer": { "@type": "Answer", "text": "You can reach out through the in-app support option or by visiting the contact page on the official 3 Patti World website for quick assistance." } }
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
                <span className="text-[#FFA500]">Download APK & Play</span>{' '}
                <span className="text-white">Real Money Games in Pakistan 2026</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-accent hover:underline font-semibold">3 Patti World</Link> is Pakistan&apos;s premier online card game platform, where you can play more than 30+ exciting casino games. 3 Patti World offers the best card gaming experience with attractive graphics, smooth gameplay, and real cash rewards. So download now, start playing, and win real money with fast withdrawals via JazzCash and Easy Paisa.
            </p>

            <div className="flex justify-center my-8">
              <a href={DOWNLOAD_APP_URL} target="_blank" rel="noopener noreferrer" className="relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group">
                <span>DOWNLOAD NOW</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </div>
              </a>
            </div>

            <div className="flex flex-row gap-4 justify-center mt-8 mb-4" style={{ minHeight: '120px' }}>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                <div className="text-white text-2xl font-bold mb-1">500K+</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/></svg>
                <div className="text-white text-2xl font-bold mb-1">200K+</div>
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
            <div className="relative ml-auto" style={{ width: '320px', height: '320px', maxWidth: '100%' }}>
              <Image src="/3-patti-world-logo.webp" alt="3 Patti World Logo" width={320} height={320} className="object-contain drop-shadow-2xl" priority={true} fetchPriority="high" quality={90} sizes="320px" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>
          <div className="mt-8 md:hidden">
            <div className="relative mx-auto" style={{ width: '280px', height: '280px', maxWidth: '100%' }}>
              <Image src="/3-patti-world-logo.webp" alt="3 Patti World Logo" width={280} height={280} className="object-contain drop-shadow-2xl" priority={true} fetchPriority="high" quality={90} sizes="280px" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
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
                <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 text-left font-medium text-white">App Name</td><td className="py-4 px-6 text-left text-white">3 Patti World</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-4 px-6 text-left font-medium text-white">Developer</td><td className="py-4 px-6 text-left text-white">3 Patti World dev</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 text-left font-medium text-white">Category</td><td className="py-4 px-6 text-left text-white">Cards, Game</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-4 px-6 text-left font-medium text-white">Size</td><td className="py-4 px-6 text-left text-white">49MB</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 text-left font-medium text-white">Latest Version</td><td className="py-4 px-6 text-left text-white">V1.152(1)</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-4 px-6 text-left font-medium text-white">Required OS</td><td className="py-4 px-6 text-left text-white">Android 5.0+</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 text-left font-medium text-white">Update</td><td className="py-4 px-6 text-left text-white">20th-FEB-2026</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-4 px-6 text-left font-medium text-white">Downloads</td><td className="py-4 px-6 text-left text-white">500k+</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-4 px-6 text-left font-medium text-white">Rating Count</td><td className="py-4 px-6 text-left text-white">200000+</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-4 px-6 text-left font-medium text-white">Language</td><td className="py-4 px-6 text-left text-white">English, Urdu</td></tr>
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
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">Welcome to the Official 3 Patti World, your trusted place to download, play, and Win. Enjoy a variety of exclusive game modes offering high stakes and greater rewards. With daily bonuses, free chips, and exciting opportunities to win real rewards, 3Patti World has become one of the most trending casino-style games. Even if you play for fun or to test your skills, 3Patti game delivers a good and engaging experience with multiple game options and real-time challenges.</p>
            <p className="text-gray-300 leading-relaxed">Teen Patti World APK is an Android application widely recognized for its seamless performance and real-time reward opportunities. It provides a complete Teen Patti experience through smooth gameplay, attractive graphics, and diverse game modes. Players can explore exciting features such as VIP lounges, elite tables, live winning feeds, and more.</p>
            <p className="text-gray-300 leading-relaxed">The app also includes special offers like daily TeenPatti World login bonuses, referral rewards, and secure withdrawals through convenient local payment methods. With its regularly updated system, easy-to-use interface, and reliable functionality, 3Patti game APK is the official destination for players who seek both entertainment and genuine reward opportunities.</p>
          </div>
        </div>
      </section>

      {/* What is 3 Patti World */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">What is 3 Patti World?</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">3 Patti World is a popular gaming application in Pakistan that offers both entertainment and the chance to earn real rewards. The app provides several earning options, including a referral system where users can share their invite link with friends and family through Facebook, Instagram, or Telegram. By doing so, players can earn up to a 30% commission. Additionally, new users receive a welcome bonus of 100 rupees after installing the app. Currently, 3 Patti World is available only for Android devices and is not yet supported on iOS.</p>
            <p className="text-gray-300 leading-relaxed">The 3Patti World features a wide collection of exciting games that players can enjoy and earn from, such as 10 Cards, Ludo, Tiger vs Dragon, Mines, Zoo Roulette, and BlackJack. You don&apos;t need a large investment to get started. By depositing as little as 100 rupees, players can start earning daily or weekly rewards. Those who invest higher amounts can unlock VIP bonuses and additional perks. With each deposit, users can spin the reward wheel to increase their balance. Deposits and withdrawals can be made easily through JazzCash, Easypaisa, or bank transfer, making it convenient and user-friendly for everyone.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">About Us</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">We are a fast-growing and easy-to-use online gaming platform that gives players many chances to win real rewards. People from all parts of Pakistan can join and try their luck in different games. The app has a big collection of popular games, and new ones are added regularly. It also gives great bonuses and rewards, so players can play more games without spending much. These bonuses help increase your chances of winning. Teen Patti World offers daily check-in rewards, deposit bonuses, referral prizes, and more. The developers keep improving the game to make it smoother, more fun, and better for mobile users.</p>
            <p className="text-gray-300 leading-relaxed">Teen Patti World has become very popular in online gaming because it offers many casino-style games and live gameplay. Many users enjoy it because of its simple design, colorful display, and big rewards. The best part of the game is how enjoyable it is once you start playing; it&apos;s hard to stop!</p>
            <p className="text-gray-300 leading-relaxed">The app keeps the traditional Teen Patti style, which adds more fun and quality to the experience. It&apos;s loved by players across the country and is one of the most played online card games.</p>
            <p className="text-gray-300 leading-relaxed">The benefits are great, you can learn, have fun, and win rewards from home with just an internet connection. 3Patti World also gives special prizes and lets you connect with new friends online. It&apos;s a perfect place for both new and regular players to enjoy card gaming, win rewards, and experience exciting social play.</p>
          </div>
        </div>
      </section>

      {/* 3 Patti World APP Screenshots */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#06091F] rounded-xl p-8">
          <h2 className="text-4xl font-bold mb-12 text-[#FFA500] text-center">3 Patti World APP Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src="/3-patti-world-bonuses-and-rewards.webp" alt="3 Patti World Bonuses and Rewards" width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <p className="text-center text-gray-300 mt-3 font-medium">Bonuses & Rewards</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src="/3-patti-world-game-pakistan.webp" alt="3 Patti World Game Pakistan" width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <p className="text-center text-gray-300 mt-3 font-medium">Game Interface</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src="/3-patti-world-deposit-money.webp" alt="3 Patti World Deposit Money" width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <p className="text-center text-gray-300 mt-3 font-medium">Deposit Money</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src="/3-patti-world-withdraw-money.webp" alt="3 Patti World Withdraw Money" width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <p className="text-center text-gray-300 mt-3 font-medium">Withdraw Money</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src="/3-patti-world-refer-and-earn.webp" alt="3 Patti World Refer and Earn" width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <p className="text-center text-gray-300 mt-3 font-medium">Refer & Earn</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src="/3-patti-world-create-account.webp" alt="3 Patti World Create Account" width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <p className="text-center text-gray-300 mt-3 font-medium">Create Account</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image src="/3-patti-world-pakistan.webp" alt="3 Patti World Pakistan" width={400} height={711} className="w-full h-auto" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <p className="text-center text-gray-300 mt-3 font-medium">3 Patti World Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3Patti World – The Official 3 Patti Experience */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">3Patti World – The Official 3 Patti Experience</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">Teen Patti World APK is becoming one of the most popular card games in Pakistan. It gives players a fun online place to enjoy casino-style games right from their homes. With smooth graphics and simple controls, it feels just like playing real 3 Patti, which makes it loved by both new and experienced players.</p>
            <p className="text-gray-300 leading-relaxed">Anyone with an Android phone can easily download TeenPatti World APK Pakistan for free. The setup is quick, and new players get many bonuses that make the game even more enjoyable. From live tables to fast matches, everything is designed to keep players excited and entertained.</p>
            <p className="text-gray-300 leading-relaxed">More than just a fun game, 3PattiWorld also lets players earn real rewards while playing. With offers like referral bonuses and first deposit gifts, users can use their skills to win prizes. This mix of fun and reward is why the game is becoming so popular across Pakistan.</p>
          </div>
        </div>
      </section>

      {/* Join Teen Patti World and Enjoy Our New User Offers */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Join Teen Patti World and Enjoy Our New User Offers</h2>
          <div className="space-y-6">
            <div><h3 className="text-xl font-semibold mb-2 text-[#FFA500]">Offer 1:</h3><p className="text-gray-300">New users receive a welcome recharge bonus of 120 PKR after their first deposit.</p></div>
            <div><h3 className="text-xl font-semibold mb-2 text-[#FFA500]">Offer 2:</h3><p className="text-gray-300">Bind your mobile number and instantly get 10 free chips as a reward.</p></div>
            <div><h3 className="text-xl font-semibold mb-2 text-[#FFA500]">Offer 3:</h3><p className="text-gray-300 mb-4">Enjoy daily first deposit bonuses based on your recharge amount:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Recharge between PKR 500–1,999 to get a 3% bonus</li>
                <li>Recharge between PKR 2,000–4,999 to get a 4% bonus</li>
                <li>Recharge between PKR 5,000–9,999 to get a 5% bonus</li>
                <li>Recharge between PKR 10,000–29,999 to get a 6% bonus</li>
                <li>Recharge between PKR 30,000–49,999 to get a 7% bonus</li>
                <li>Recharge between PKR 50,000–99,999 to get an 8% bonus</li>
                <li>Deposit PKR 100,000 or more to enjoy a 10% bonus</li>
              </ul>
            </div>
            <div><h3 className="text-xl font-semibold mb-2 text-[#FFA500]">Offer 4:</h3><p className="text-gray-300">Players who experience continuous losses in a day can receive loss compensation, which depends on the total betting amount.</p></div>
          </div>
        </div>
      </section>

      {/* Benefits for New Players */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Benefits for New Players by Joining 3 Patti World</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">1: New Player Welcome Bonus</h3>
            <p className="text-gray-300 mb-4">3Patti offers a 100% recharge bonus for all new, fresh users on their first deposit in this game.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-[#0a1029]"><tr><th className="py-3 px-6 text-left text-white font-semibold">Deposit Amount (PKR)</th><th className="py-3 px-6 text-left text-white font-semibold">Bonus Amount (PKR)</th></tr></thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">100</td><td className="py-3 px-6 text-gray-300">100</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">1000</td><td className="py-3 px-6 text-gray-300">1000</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">5000</td><td className="py-3 px-6 text-gray-300">5000</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">10,000</td><td className="py-3 px-6 text-gray-300">10,000</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">20,000</td><td className="py-3 px-6 text-gray-300">20,000</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">100,000</td><td className="py-3 px-6 text-gray-300">100,000</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">2: Recharge Rebate</h3>
            <p className="text-gray-300 mb-4">3 Patti World game is also offering huge recharge rebate bonuses for every player when they deposit an amount.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-[#0a1029]"><tr><th className="py-3 px-6 text-left text-white font-semibold">Rebate</th><th className="py-3 px-6 text-left text-white font-semibold">Recharge Required</th><th className="py-3 px-6 text-left text-white font-semibold">Wager</th></tr></thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">5%</td><td className="py-3 px-6 text-gray-300">3000 PKR</td><td className="py-3 px-6 text-gray-300">2x</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">10%</td><td className="py-3 px-6 text-gray-300">5000</td><td className="py-3 px-6 text-gray-300">3x</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">15%</td><td className="py-3 px-6 text-gray-300">8000</td><td className="py-3 px-6 text-gray-300">4x</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">20%</td><td className="py-3 px-6 text-gray-300">10,000</td><td className="py-3 px-6 text-gray-300">5x</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">25%</td><td className="py-3 px-6 text-gray-300">20,000</td><td className="py-3 px-6 text-gray-300">6x</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">30%</td><td className="py-3 px-6 text-gray-300">50,000</td><td className="py-3 px-6 text-gray-300">7x</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">3: Big Rebate on Recharge</h3>
            <p className="text-gray-300 mb-4">This type of reward is only available for deposit of a minimum of 3000PKR or more. It also depends upon VIP Level with increasing rebate bonus. It can be claimed every day.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-[#0a1029]"><tr><th className="py-3 px-6 text-left text-white font-semibold">VIP Level</th><th className="py-3 px-6 text-left text-white font-semibold">Rebate</th></tr></thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">V1-V2</td><td className="py-3 px-6 text-gray-300">1% rebate</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">V3-V4</td><td className="py-3 px-6 text-gray-300">2% rebate</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">V5-V6</td><td className="py-3 px-6 text-gray-300">3% rebate</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">V7-V8</td><td className="py-3 px-6 text-gray-300">4% rebate</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">V9-V10</td><td className="py-3 px-6 text-gray-300">5% rebate</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">V11-V12</td><td className="py-3 px-6 text-gray-300">6% rebate</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">V13-V14</td><td className="py-3 px-6 text-gray-300">7% rebate</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">V15-V16</td><td className="py-3 px-6 text-gray-300">8% rebate</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">V17-V18</td><td className="py-3 px-6 text-gray-300">9% rebate</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">V19-V20</td><td className="py-3 px-6 text-gray-300">10% rebate</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Patti World Agent Network Growth Bonus */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">3 Patti World Agent Network Growth Bonus</h2>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">In 3 Patti World Apk, active members can unlock exciting bonuses based on their total engagement. When you have 5 active members, you receive a 3,000 PKR bonus. With 10 active members, the bonus increases to 6,500 PKR, while 30 active members bring a reward of 18,500 PKR. Growing your network further earns you even more 31,000 PKR for 50 members, 62,000 PKR for 100 members, and 186,000 PKR for 300 active users.</p>
            <p className="text-gray-300 leading-relaxed">As your community expands, the bonuses continue to rise: 310,000 PKR for 500 members, 620,000 PKR for 1,000 members, 1,250,000 PKR for 2,000 members, and an impressive 6,250,000 PKR when you reach 10,000 active members. The more active users you bring in, the greater your rewards, making 3 Patti 1 a truly rewarding platform for dedicated players.</p>
          </div>
        </div>
      </section>

      {/* Features That Define Teen Patti World */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">3Patti World Apk Latest Version - Features That Define Teen Patti World</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow"><h3 className="text-xl font-semibold mb-3 text-accent">Easy-to-Use Design</h3><p className="text-gray-300">The 3PattiWorld Game has a simple and clear design that&apos;s easy for everyone to use. Whether you&apos;re new or already experienced, the smooth layout helps you find and play your favorite games without confusion. Everything is organized so you can enjoy the fun right away.</p></div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow"><h3 className="text-xl font-semibold mb-3 text-accent">Safe and Trustworthy Platform</h3><p className="text-gray-300">3Patti World APK puts your safety first. It uses strong security systems and encrypted technology to keep your personal and financial details protected. The app also includes fair play tools and anti-cheat measures, making sure every player gets an equal and honest chance to win.</p></div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow"><h3 className="text-xl font-semibold mb-3 text-accent">Variety of Game Modes</h3><p className="text-gray-300">The app offers many exciting game types to keep the fun going. You can play classic Teen Patti, Joker, Muflis, AK47, Hukam, and several others. Each mode comes with its own style and rules, giving you new challenges and keeping the gameplay fresh and entertaining.</p></div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow"><h3 className="text-xl font-semibold mb-3 text-accent">VIP Access and Special Tables</h3><p className="text-gray-300">When you reach advanced levels in Teenpatti game, you can unlock VIP areas and elite tables. These high-level rooms are made for skilled players who want to play with bigger stakes and win exclusive rewards. This adds a premium and thrilling touch to the overall gaming experience.</p></div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow"><h3 className="text-xl font-semibold mb-3 text-accent">Real-Time Multiplayer Play</h3><p className="text-gray-300">3Patti World Download lets you play live with your friends and other players. You can compete in real time, chat, and enjoy the same excitement as sitting at a real Teen Patti table. It&apos;s a great way to have fun and connect with people while showing off your card skills.</p></div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow"><h3 className="text-xl font-semibold mb-3 text-accent">Daily Rewards and Bonuses</h3><p className="text-gray-300">To make the experience even more fun, Teen Patti World APK offers regular bonuses and prizes. New users get a welcome gift when they sign up, while regular players can earn rewards through daily logins, referrals, and deposits. These offers make every day more exciting and give you more chances to win.</p></div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow md:col-span-2 lg:col-span-1"><h3 className="text-xl font-semibold mb-3 text-accent">Easy Withdrawals with JazzCash & EasyPaisa</h3><p className="text-gray-300">Collecting your winnings is fast and convenient. You can withdraw your money through trusted local payment methods like JazzCash and EasyPaisa, ensuring smooth and secure transactions directly to your mobile wallet or bank account.</p></div>
          </div>
        </div>
      </section>

      {/* Our Top Trending Games */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Our Top Trending Games</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Royal Patti: A premium version with higher stakes and royal themes.', 'Golden Joker: A variation where gold jokers double your winning power.', 'Low Card Battle: Similar to Muflis, but focused on strategic low-hand wins.', 'Power Ace Mode: Where all Aces act as wildcards.', 'Lucky Draw Mode: A random card becomes your wildcard each round (replacement for Hukam).', 'Pro Player Table: For skilled users, similar to VIP tables but more competitive.', 'Diamond Patti: Deluxe tables with bigger chips and elite players.'].map((game, i) => (
              <div key={i} className="bg-[#0A1029] p-4 rounded-lg"><p className="text-white font-medium">{game.split(':')[0]}</p><p className="text-gray-400 text-sm mt-1">{game.split(':')[1]}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Download 3Patti World APK */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">3 Patti World game Pakistan - How to Download 3Patti World APK Latest Version?</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>To download Teen Patti World APK, open your browser and visit <Link href="/" className="text-accent hover:underline">3pattiworldapp.com.pk</Link>.</li>
            <li>Find and tap the APK Download button. Wait for it to finish.</li>
            <li>Go to Settings, then Security, then Install Unknown Apps and allow unknown sources.</li>
            <li>Open your File Manager, find the downloaded file, and install it.</li>
            <li>Once done, the app icon will appear on your screen.</li>
            <li>Open it, sign up, and start playing your favorite games!</li>
          </ol>
        </div>
      </section>

      {/* How to Download for iOS */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Download & Install 3Patti World Game APK for iOS?</h2>
          <p className="text-gray-300 mb-4">No APK available for iOS (only for Android).</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Open Safari on your iPhone.</li>
            <li>Visit the official 3 Patti World website.</li>
            <li>Tap Play Now or Play in Browser.</li>
            <li>(Optional) Tap Share and Add to Home screen.</li>
            <li>Open the shortcut and start playing directly.</li>
          </ol>
        </div>
      </section>

      {/* 3PattiWorld Game Buzz */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Exciting Teen Patti World gameplay on mobile - 3PattiWorld Game Buzz</h2>
          <p className="text-gray-300 mb-4">Here are some key game buzz details that new players should know:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>It&apos;s a mobile gaming app where users can place bets and earn rewards.</li>
            <li>3Patti World is built with fairness in mind, giving every player an equal opportunity to win.</li>
            <li>Along with luck, smart decisions and accurate predictions play an important role in success.</li>
            <li>Every bet carries the same chance of winning or losing.</li>
            <li>Players who bet more than 1000 PKR may increase their chances of getting better results in the game.</li>
          </ul>
        </div>
      </section>

      {/* How to Transfer and Withdraw Funds */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Transfer and Withdraw Funds?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">Deposit Method:</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Open the 3Patti World app on your device and go to the main menu.</li>
                <li>From the menu, select the deposit option.</li>
                <li>You will find several payment choices such as JazzCash, Easypaisa, or bank transfer.</li>
                <li>Choose the method that suits you best and click to continue.</li>
                <li>Enter the amount you wish to deposit and tap on submit to confirm.</li>
                <li>The deposited amount will appear in your Teen Patti World account within the given time.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">Withdrawal Method:</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Launch the 3Patti World app and open the main menu.</li>
                <li>Select the withdrawal section to begin the process.</li>
                <li>Pick your preferred payment option and make sure you meet the withdrawal requirements.</li>
                <li>Type the amount you want to withdraw and review all the information carefully.</li>
                <li>Click submit to complete the request.</li>
                <li>After verification, the money will be sent to your selected payment account.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* What's New in the 2026 Version */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Teen Patti Pakistan - What&apos;s New in the 2026 Version?</h2>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">As you all know, in any game, if updates are not released regularly, the game can start falling behind. Updates are essential to fix bugs, introduce new features, and ensure that users continue to have a fun and smooth experience. Similarly, the 2026 version of 3Patti World Game brings exciting updates and improvements to make your gameplay even better.</p>
            <p className="text-gray-300 leading-relaxed">Players will now enjoy faster loading times, enhanced security to keep personal information safe, and better compatibility across all Android devices. Minor updates to the Rewards system have also been made, offering more opportunities to earn real cash while playing. Additionally, the user interface has been optimized for a cleaner, more intuitive experience, making it easier than ever to navigate tables, join games, and enjoy seamless gameplay.</p>
            <p className="text-gray-300 leading-relaxed">Even if you are a beginner or an experienced player, the 2026 version of Teen Patti World APK ensures an upgraded, fun, and safe card game experience for everyone.</p>
          </div>
        </div>
      </section>

      {/* How to Login on 3Patti game */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Login on 3Patti game?</h2>
          <p className="text-gray-300 mb-4">To create an account on 3 Patti World, follow these simple steps:</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Open the app and tap on Sign Up or Register.</li>
            <li>After clicking Register, a form will appear asking for your information.</li>
            <li>Fill in your username, password, email, and mobile number in the required fields.</li>
            <li>Double-check that all your details are correct, then tap Submit.</li>
            <li>Verify your account by entering the OTP sent to your registered phone number or email.</li>
            <li>Once verified, your account will be activated, and you can start playing and earning rewards.</li>
          </ol>
        </div>
      </section>

      {/* Is 3Patti World Game Safe */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Is 3Patti World Game Safe?</h2>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">If you are new to this game, you might be wondering if 3Patti World Game is safe to play. The answer is yes, the game is designed to provide a secure and fair environment for all players. Your personal information is protected with strong security measures, and all gameplay is monitored for fairness to ensure no cheating occurs.</p>
            <p className="text-gray-300 leading-relaxed">For beginners, the game is very easy to start: the interface is simple, the menus are clear, and the instructions are easy to follow. You can play safely on your Android device without worrying about technical issues. The app also supports responsible gaming, so you can enjoy real cash games while staying in control of your spending.</p>
            <p className="text-gray-300 leading-relaxed">It doesn&apos;t matter that you are playing for fun or trying to earn small rewards, 3 Patti World ensures a safe, beginner-friendly experience for everyone.</p>
          </div>
        </div>
      </section>

      {/* Responsible Game Reminder */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Responsible Game Reminder</h2>
          <p className="text-gray-300 mb-4">Follow these tips to play wisely and stay away from negative effects:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Set a fixed number of hours for gameplay, as spending too much time on such games can reduce your social interactions. Keep a healthy balance between gaming and real-life activities.</li>
            <li>Always read the app&apos;s details and user reviews carefully before downloading it.</li>
            <li>Seek advice from experienced players or family members before investing, since there&apos;s always a risk of loss.</li>
            <li>Provide correct personal details and use trusted payment options for quick and secure withdrawals.</li>
            <li>To prevent addiction, take breaks, stay active, and maintain a balanced daily routine.</li>
          </ul>
        </div>
      </section>

      {/* End Note */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">End Note: Don&apos;t Miss Out – Join Now</h2>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">3Patti World Apk is a thrilling card game app that lets you enjoy multiple versions of the classic Teen Patti experience. It comes with exciting features like daily rewards, live multiplayer matches, VIP rooms, and special bonuses. While playing, it&apos;s important to set a spending limit and focus on having fun to avoid unnecessary losses. Always download the app from its official source to keep your account secure.</p>
            <p className="text-gray-300 leading-relaxed">In Pakistan, 3 Patti World also serves as a platform where players can enjoy games like Ludo, Mines, and Roulette while earning real rewards. You can earn bonuses by inviting friends or by depositing a small amount, starting from 200 PKR, which can grow as you play. Withdrawals are quick and easy through Easypaisa, JazzCash, or a bank account. So, <a href={DOWNLOAD_APP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Download Teen Patti World App</a> today, invite your friends, and start enjoying the fun-filled world of 3 Patti World.</p>
          </div>
        </div>
      </section>

      {/* Helpful Guides */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Helpful Guides for 3 Patti World Players</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/blog/is-3-patti-world-real-or-fake" className="bg-[#0A1029] p-5 rounded-lg hover:border-accent border border-gray-700 transition-colors">
              <h3 className="text-white font-semibold mb-2">Is 3 Patti World Real or Fake?</h3>
              <p className="text-gray-400 text-sm">Find out the truth about legitimacy and payments.</p>
            </Link>
            <Link href="/blog/ways-to-earn-money-with-3-patti-world-2026" className="bg-[#0A1029] p-5 rounded-lg hover:border-accent border border-gray-700 transition-colors">
              <h3 className="text-white font-semibold mb-2">Ways to Earn Money in 2026</h3>
              <p className="text-gray-400 text-sm">Games, referrals, bonuses, VIP – all earning methods.</p>
            </Link>
            <Link href="/blog/tips-to-win-big-in-3-patti-world" className="bg-[#0A1029] p-5 rounded-lg hover:border-accent border border-gray-700 transition-colors">
              <h3 className="text-white font-semibold mb-2">Tips to Win Big</h3>
              <p className="text-gray-400 text-sm">Expert strategies for Teen Patti, Rummy, and more.</p>
            </Link>
            <Link href="/blog/3patti-world-login-problems-solutions-2026-guide" className="bg-[#0A1029] p-5 rounded-lg hover:border-accent border border-gray-700 transition-colors">
              <h3 className="text-white font-semibold mb-2">Login Problems & Solutions</h3>
              <p className="text-gray-400 text-sm">Fix wrong password, OTP, and IPS exceed errors.</p>
            </Link>
            <Link href="/blog/ips-exceed-issue-3-patti-world-how-to-fix" className="bg-[#0A1029] p-5 rounded-lg hover:border-accent border border-gray-700 transition-colors">
              <h3 className="text-white font-semibold mb-2">IPS Exceed Issue – How to Fix</h3>
              <p className="text-gray-400 text-sm">Quick fixes for IP limit exceeded error.</p>
            </Link>
            <Link href="/blog/3patti-world-latest-version-new-features-2026-updates" className="bg-[#0A1029] p-5 rounded-lg hover:border-accent border border-gray-700 transition-colors">
              <h3 className="text-white font-semibold mb-2">Latest Version & 2026 Updates</h3>
              <p className="text-gray-400 text-sm">New features in v1.152 and what changed.</p>
            </Link>
          </div>
          <div className="text-center mt-6">
            <Link href="/blog" className="text-accent hover:underline font-semibold">View All Blog Posts →</Link>
          </div>
        </div>
      </section>

      {/* FAQs & Support */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Learn More: FAQs & Support</h2>
          <p className="text-gray-300 mb-8">If you&apos;re new to 3 Patti World or just need some quick help, this section covers the most common questions players ask. From account setup to deposits, withdrawals, and bonuses, you&apos;ll find all the key details here. Use this guide to get quick answers and enjoy a smooth gaming experience with 3 Patti World.</p>
          
          <div className="space-y-4">
            {[
              { q: "How can I download the 3 Patti World app?", a: "You can download the app directly from the official website. It is currently available only for Android devices and not for iOS users." },
              { q: "Is 3 Patti World safe to use?", a: "Yes, it's safe as long as you download it from the official source and use secure payment options like JazzCash, Easypaisa, or bank transfer." },
              { q: "How do I register for an account?", a: "Open the app, tap on the Register option, fill in your details like username, password, and mobile number, then verify with the OTP sent to your phone or email." },
              { q: "How can I deposit money in the 3Patti World app?", a: "Go to the deposit section in the main menu, choose a payment method (JazzCash, Easypaisa, or Bank Transfer), enter the amount, and submit." },
              { q: "How do I withdraw my earnings?", a: "Open the withdrawal section, select your preferred payment option, enter the amount, and click submit. The money will be sent to your selected account once verified." },
              { q: "What is the welcome bonus?", a: "New users receive a 120 PKR welcome recharge bonus after their first deposit in the app." },
              { q: "Can I earn by referring friends?", a: "Yes, you can share your referral link on platforms like Facebook, Instagram, or Telegram to earn up to 30% commission when your friends join and play." },
              { q: "What games are available in 3 Patti World?", a: "You can enjoy popular games such as 10 Cards, Ludo, Tiger vs Dragon, Mines, Zoo Roulette, and BlackJack." },
              { q: "How can I contact customer support?", a: "You can reach out through the in-app support option or by visiting the contact page on the official 3 Patti World website for quick assistance." },
              { q: "Is there any limit on withdrawals?", a: "Yes, withdrawal limits may vary depending on your account level or the payment method you choose. Always check the app for updated withdrawal policies." }
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
    </>
  );
}
