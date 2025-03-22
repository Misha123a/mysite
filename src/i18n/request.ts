import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import messagesEn from '../messages/en.json'
import messagesRu from '../messages/ru.json'
import messagesZh from '../messages/zh.json'
import messagesEs from '../messages/es.json'
import messagesDe from '../messages/de.json'
import messagesPt from '../messages/pt.json'
import messagesUk from '../messages/uk.json'
import messagesJa from '../messages/ja.json'
import messagesFr from '../messages/fr.json'
import messagesPl from '../messages/pl.json'

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

export function getRequestMessages(locale: string) {
  return {
    locale,
    messages: MESSAGES[locale as keyof typeof MESSAGES]
  }
}


export default getRequestConfig(async ({ requestLocale }) => {
	// This typically corresponds to the `[locale]` segment
	let locale = await requestLocale

	
	// Ensure that a valid locale is used
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	if (!locale || !routing.locales.includes(locale as any)) {
		locale = routing.defaultLocale
	}

	return {
		locale,
	}
})
