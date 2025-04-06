import type { Metadata } from 'next'
import { Cairo, Geist, Geist_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import Header from '@/components/Header'
import Script from 'next/script'
import SubNav from '@/components/SubNav'
import '../globals.css'

// 🔤 Импорт всех переводов
import messagesEn from '../../messages/en.json'
import messagesRu from '../../messages/ru.json'
import messagesZh from '../../messages/zh.json'
import messagesEs from '../../messages/es.json'
import messagesDe from '../../messages/de.json'
import messagesPt from '../../messages/pt.json'
import messagesUk from '../../messages/uk.json'
import messagesJa from '../../messages/ja.json'
import messagesFr from '../../messages/fr.json'
import messagesPl from '../../messages/pl.json'

// 🧠 Словарь всех переводов
const MESSAGES = {
  en: messagesEn,
  ru: messagesRu,
  zh: messagesZh,
  es: messagesEs,
  de: messagesDe,
  pt: messagesPt,
  uk: messagesUk,
  ja: messagesJa,
  fr: messagesFr,
  pl: messagesPl
}

// 🧩 Шрифтn
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const cairo = Cairo({
  weight: ['400', '500', '600', '700'],
  variable: '--font-cairo',
  subsets: ['latin'],
})

// 📄 SEO
export const metadata: Metadata = {
  title: 'CS2 Stats - The Ultimate CS2 Stat Tracker - csstat.com',
  description:
    'Track your CS2 performance with detailed statistics, match history, and rank progression. Get insights into your gameplay, compare with friends, and improve your skills with comprehensive CS2 analytics.',
  metadataBase: new URL('https://csstat.com'),
  openGraph: {
    title: 'CS2 Stats - The Ultimate CS2 Stat Tracker',
    description: 'Track your CS2 performance with detailed statistics, match history, and rank progression. Get insights into your gameplay, compare with friends, and improve your skills with comprehensive CS2 analytics.',
    url: 'https://csstat.com',
    siteName: 'CS2 Stats',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'CS2 Stats Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CS2 Stats - The Ultimate CS2 Stat Tracker',
    description: 'Track your CS2 performance with detailed statistics, match history, and rank progression. Get insights into your gameplay, compare with friends, and improve your skills with comprehensive CS2 analytics.',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/apple-icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
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
}

// 📦 Пропсы
interface RootLayoutProps {
	children: React.ReactNode
	params: Promise<{ locale: string }>
  }

// 🧠 Асинхронный layout с правильной структурой
export default async function RootLayout({ children, params }: RootLayoutProps) {
	const { locale } = await params

  if (!hasLocale(Object.keys(MESSAGES), locale)) {
    notFound()
  }

  const messages = MESSAGES[locale as keyof typeof MESSAGES]

  return (
<html lang={locale}>
  <head>
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "csstat.com",
      url: "https://csstat.com",
      logo: "https://csstat.com/logo.png"
    }),
  }}
/>
    {/* Global Google tag (gtag.js) */}
    <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16945154777" strategy="afterInteractive" />
    <Script id="gtag-init" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16945154777');
      `}
    </Script>

    {/* Conversion event — вставляем сразу после глобального тега */}
    <Script id="gtag-conversion" strategy="afterInteractive">
      {`
        gtag('event', 'conversion', {
          'send_to': 'AW-16945154777/NSQhCM36hq4aENmVipA_',
          'value': 1.0,
          'currency': 'EUR'
        });
      `}
    </Script>
  </head>
  <body className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}>
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <SubNav />
      <main>{children}</main>
    </NextIntlClientProvider>
  </body>
</html>
  )
}
