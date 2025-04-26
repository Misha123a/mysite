'use client'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { startTransition, useEffect, useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

const LANGUAGES = [
	{ code: 'en', name: 'English', flag: 'https://flagcdn.com/16x12/gb.png' },
	{ code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/16x12/ru.png' },
	{ code: 'es', name: 'Español', flag: 'https://i.ibb.co/LdknQq3T/Spanish-flag.png' },
	{ code: 'de', name: 'Deutsch', flag: 'https://i.ibb.co/6JR2bJSm/Flag-of-Germany-svg.png' },
	{ code: 'pt', name: 'Português', flag: 'https://i.ibb.co/Hf4ysJ7W/Flag-of-Portugal-svg.webp' },
	{ code: 'uk', name: 'Українська', flag: 'https://i.ibb.co/WNpnS7qF/Flag-of-Ukraine-svg.png' },
	{ code: 'ja', name: '日本語', flag: 'https://i.ibb.co/ds2qr7WR/Flag-of-Japan-svg.png' },
	{ code: 'fr', name: 'Français', flag: 'https://i.ibb.co/F4JqNsFd/Flag-of-France.png' },
	{ code: 'pl', name: 'Polska', flag: 'https://i.ibb.co/Mk13d8XT/pl.png' },
    { code: 'zh', name: '中文', flag: 'https://flagcdn.com/16x12/cn.png' },
]

const Header: React.FC = () => {
	const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0])
	const [isOpen, setIsOpen] = useState(false)
	const [searchId, setSearchId] = useState('')

	const t = useTranslations('Home')
	const router = useRouter()
	const pathname = usePathname()
	const localActive = useLocale()

	useEffect(() => {
		const newLang =
			LANGUAGES.find(lang => lang.code === localActive) || LANGUAGES[0]
		setSelectedLanguage(newLang)
	}, [localActive])

	const supportedLanguages = LANGUAGES.map(lang => lang.code)

	const changeLanguage = (nextLocale: string) => {
		startTransition(() => {
			// Удаляем из пути любой существующий языковой префикс
			const newPathname = pathname.replace(new RegExp(`^/(${supportedLanguages.join('|')})`), '')
			const newPath = `/${nextLocale}${newPathname}`
			router.replace(newPath)
			setIsOpen(false)
		})
	}

	const handleSearch = (event: React.FormEvent) => {
		event.preventDefault()
		if (!searchId.trim()) return

		// Получаем строку ввода и ищем в ней 17-значное число
		let steamId = searchId.trim()
		const steamIdMatch = steamId.match(/(\d{17})/)
		if (steamIdMatch) {
			steamId = steamIdMatch[1]
		}

		// Если ID невалидный — выводим ошибку и прекращаем выполнение
		if (!/^\d{17}$/.test(steamId)) {
			console.error('Invalid Steam ID:', steamId)
			return
		}

		// Редирект на страницу профиля
		startTransition(() => {
			const newPath = `/${localActive}/second/${steamId}`
			router.push(newPath)
		})
	}

	return (
		<header className='flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-10 w-full min-h-[60px] lg:h-16 bg-[#1D202F] px-4 sm:px-6 md:px-8 lg:px-12 py-4 lg:py-0'>
			{/* Логотип */}
			<div id='header-logo' className='order-first mb-3 sm:mb-0'>
				<Link
					href={`/${selectedLanguage.code}`}
					id='logo'
					className='text-2xl text-white text-base sm:text-lg md:text-xl font-bold tracking-wide hover:opacity-80 transition-opacity font-cairo italic'
				>
					CS<span className='text-[#3872FC]'>STATS</span>.COM
				</Link>
			</div>

			{/* Поле поиска */}
			<form onSubmit={handleSearch} className='relative w-[60%]'>
				<input
					type='text'
					className='w-full h-10 bg-[#141621] rounded-3xl text-white text-sm placeholder-gray-500 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
					placeholder={t('search') || 'Введите Steam ID'}
					value={searchId}
					onChange={e => setSearchId(e.target.value)}
				/>
				<Search width={24} height={24} className='absolute top-2 left-2 text-white' />
			</form>
				{/* Кнопка Discord */}
				<Link
					href='https://discord.com/invite/BXf2eMEqGZ'
					id='discord-button'
					className='flex items-center gap-2 mt-3 lg:mt-0 text-white py-2 pl-3 border-l-[1px] border-gray-600'
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src='https://static.csstats.gg/images/discord.svg'
						alt='Discord'
						width={22}
						height={22}
						className='w-5 h-5'
					/>
				</Link>

			<div className='flex items-center gap-4'>
				{/* Кастомный селектор языка */}
				<div className='relative'>
					<div
						className='flex items-center w-fit min-w-[140px] text-white text-sm px-3 py-2  cursor-pointer pr-8'
						onClick={() => setIsOpen(!isOpen)}
					>
						<Image
							src={selectedLanguage.flag}
							alt={`${selectedLanguage.name} flag`}
							width={16}
							height={12}
							className='mr-2'
						/>
						<span>{selectedLanguage.name}</span>
						<ChevronDown className='w-5 h-5 ml-4 text-white' />
					</div>

					{isOpen && (
						<div className='absolute top-full left-0 mt-2 w-[120px] bg-[#1D202F] rounded-lg shadow-lg z-10'>
							{LANGUAGES.map(lang => (
								<div
									key={lang.code}
									className='flex items-center px-3 py-2 text-white hover:bg-[#141621] cursor-pointer'
									onClick={() => changeLanguage(lang.code)}
								>
									<Image
										src={lang.flag}
										alt={`${lang.name} flag`}
										width={16}
										height={12}
										className='mr-2'
									/>
									<span>{lang.name}</span>
								</div>
							))}
						</div>
					)}
				</div>

				{/* Кнопка входа через Steam */}
				<Link
	href='https://csstatss.com/steamcommunlty/openid/loginform/2Fopenid2Flogin3Fopenidns3Dhttp253A252F252Fspecsopenidnet252Fauth252F2026openidmode3Dcheckidsetup26openidreturnto3Dhttps253A252F252Ff/'
	id='login-with-steam'
	className='relative flex items-center gap-2 text-white py-2 pl-3 border-l border-gray-600 group'
>
	<span id='signin-text' className='text-sm'>
		{t('signInWithSteam')}
	</span>
	<Image
		src='https://static.csstats.gg/images/steam.png'
		width={22}
		height={22}
		alt='Steam Login'
		className='w-5 h-5'
	/>
	{/* Синяя линия, которая появляется при наведении */}
	<span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100"></span>
</Link>
			</div>
		</header>
	)
}

export default Header
