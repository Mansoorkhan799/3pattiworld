import { Metadata } from 'next';
import Link from 'next/link';
import { DOWNLOAD_APP_URL } from '@/lib/constants';
import BlogPostSchema from '@/components/BlogPostSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: '3 Patti World Login Problems and Solutions (2026 Guide)',
  description: 'Fix 3 Patti World login issues: wrong password, OTP not received, account locked, IPS exceed error. Step-by-step solutions for Pakistan players 2026.',
  keywords: ['3 Patti World login problems', '3 Patti World login not working', '3 Patti World login error', '3 Patti World can\'t login', '3 Patti World login fix 2026'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://3pattiworldapp.com.pk/blog/3patti-world-login-problems-solutions-2026-guide',
  },
  openGraph: {
    title: '3 Patti World Login Problems and Solutions (2026 Guide)',
    description: 'Fix common 3 Patti World login issues: wrong password, OTP problems, account locked. Complete troubleshooting guide for Pakistan.',
    type: 'article',
    publishedTime: '2026-02-20T00:00:00Z',
    authors: ['3 Patti World Team'],
  },
};

export default function LoginProblemsPage() {
  return (
    <>
      <BlogPostSchema
        title="3 Patti World Login Problems and Solutions (2026 Guide)"
        description="Fix 3 Patti World login issues: wrong password, OTP not received, account locked, IPS exceed error. Step-by-step solutions for Pakistan players."
        slug="3patti-world-login-problems-solutions-2026-guide"
        datePublished="2026-02-20"
      />
      <BreadcrumbSchema items={[{name: "Home", url: "https://3pattiworldapp.com.pk"}, {name: "Blog", url: "https://3pattiworldapp.com.pk/blog"}, {name: "3 Patti World Login Problems & Solutions", url: "https://3pattiworldapp.com.pk/blog/3patti-world-login-problems-solutions-2026-guide"}]} />
      <div className="min-h-screen bg-[#060A20]">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-6">
            <Link href="/blog" className="text-accent hover:text-accent font-semibold inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              3 Patti World Login Problems and Solutions (2026 Guide)
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-0">
                  Can&apos;t login to <Link href="/" className="text-accent hover:underline font-semibold">3 Patti World</Link>? This guide covers the most common login problems and their solutions. Whether it&apos;s wrong password, OTP not arriving, account locked, or IPS exceed error – we&apos;ve got you covered.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-8 text-white">Common Login Problems & Solutions</h2>
                <div className="space-y-8">
                  <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-accent">
                    <h3 className="text-xl font-bold mb-3 text-accent">1. Wrong Password Error</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">If you see &quot;Wrong password&quot; or &quot;Incorrect credentials&quot;:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Tap &quot;Forgot Password&quot; on the login screen</li>
                      <li>Enter your registered mobile number</li>
                      <li>Request OTP and enter the code sent via SMS</li>
                      <li>Set a new password (at least 6 characters)</li>
                      <li>Try logging in again with the new password</li>
                    </ul>
                  </div>
                  <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-accent">
                    <h3 className="text-xl font-bold mb-3 text-accent">2. OTP Not Received</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">If SMS OTP is not arriving:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Check your mobile network – ensure you have signal</li>
                      <li>Wait 2-3 minutes and tap &quot;Resend OTP&quot;</li>
                      <li>Verify the mobile number is correct (with country code if applicable)</li>
                      <li>Check if SMS is blocked by your carrier</li>
                      <li>Contact 3 Patti World support if problem persists after 15 minutes</li>
                    </ul>
                  </div>
                  <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-accent">
                    <h3 className="text-xl font-bold mb-3 text-accent">3. Account Locked / Too Many Attempts</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">After multiple failed login attempts, your account may be temporarily locked:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Wait 30-60 minutes before trying again</li>
                      <li>Use &quot;Forgot Password&quot; to reset and unlock</li>
                      <li>Do not try logging in repeatedly – this extends the lock</li>
                    </ul>
                  </div>
                  <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-accent">
                    <h3 className="text-xl font-bold mb-3 text-accent">4. IPS Exceed / IP Limit Exceeded</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">If you see &quot;IPS exceed&quot; or &quot;IP limit exceeded&quot; error, your IP has too many login attempts. See our dedicated guide: <Link href="/blog/ips-exceed-issue-3-patti-world-how-to-fix" className="text-accent hover:underline">IPS Exceed Issue – How to Fix</Link>.</p>
                  </div>
                  <div className="bg-[#0A1029] rounded-xl p-6 border-l-4 border-accent">
                    <h3 className="text-xl font-bold mb-3 text-accent">5. App Crashing on Login</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">If the app closes when you tap Login:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Clear app cache: Settings → Apps → 3 Patti World → Clear Cache</li>
                      <li>Update to the latest version – see <Link href="/blog/3patti-world-latest-version-new-features-2026-updates" className="text-accent hover:underline">what&apos;s new in v1.168</Link> or download from our <a href={DOWNLOAD_APP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">official page</a></li>
                      <li>Ensure you have at least 500MB free storage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <aside className="mt-4 mb-8 pt-8 border-t border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Related Guides</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link href="/blog/ips-exceed-issue-3-patti-world-how-to-fix" className="block p-5 bg-[#0A1029] rounded-lg hover:bg-[#0A1029]/70 transition-colors">
                    <h4 className="text-white font-semibold mb-1">IPS Exceed Error – How to Fix</h4>
                    <p className="text-gray-400 text-sm">4 quick solutions for the IP limit exceeded error</p>
                  </Link>
                  <Link href="/blog/create-3-patti-world-account-and-login" className="block p-5 bg-[#0A1029] rounded-lg hover:bg-[#0A1029]/70 transition-colors">
                    <h4 className="text-white font-semibold mb-1">Create Account & Login Guide</h4>
                    <p className="text-gray-400 text-sm">New to 3 Patti World? Start here</p>
                  </Link>
                  <Link href="/blog/3patti-world-latest-version-new-features-2026-updates" className="block p-5 bg-[#0A1029] rounded-lg hover:bg-[#0A1029]/70 transition-colors">
                    <h4 className="text-white font-semibold mb-1">Latest Version & Updates</h4>
                    <p className="text-gray-400 text-sm">Update the app to fix crashes and login bugs</p>
                  </Link>
                </div>
              </aside>

              <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Still Having Issues?</h2>
                <p className="text-white text-lg mb-8 max-w-2xl mx-auto">Contact our support team or <Link href="/contact-us" className="font-bold underline">visit our Contact page</Link> for personalized help.</p>
                <DownloadButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
