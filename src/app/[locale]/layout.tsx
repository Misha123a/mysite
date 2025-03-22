import type { Metadata } from 'next'
import { Cairo, Geist, Geist_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import Header from '@/components/Header'
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

// 🧩 Шрифты
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
    'Automatically track your CS2 stats, matches and rank. Share your CS2 stats with your friends, or just watch your stats progress over time.',
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
