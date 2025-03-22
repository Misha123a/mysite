'use client'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
	{ href: '/', labelKey: 'overview', external: false }, // Главная страница
	{ href: '/leaderboards', labelKey: 'leaderboards', external: false },
	{ href: '/spray', labelKey: 'about', external: false },
	{
		href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3070389038',
		labelKey: 'faq',
		external: true
	}, // Внешняя ссылка на Steam
]

const SubNav = () => {
	const t = useTranslations('SubNav')
	const locale = useLocale()
	const pathname = usePathname()

	return (
		<nav className='w-full bg-[#141621] shadow-md'>
			<div className='flex items-center gap-7 px-4 sm:px-6 md:px-8 lg:px-12 h-12 overflow-x-auto whitespace-nowrap'>
				{NAV_LINKS.map(link => {
					const fullPath = link.external ? link.href : `/${locale}${link.href}`
					const isActive = !link.external && pathname === fullPath

					const baseClass = `relative text-sm uppercase transition-all duration-200 pb-0 px-1
						${isActive ? 'text-white' : 'text-white/70 hover:text-white'}
						hover:scale-[1.05] group`

					const underlineClass = `absolute left-0 -bottom-0.5 h-[2px] w-full bg-[#3872FC] rounded transform transition-transform duration-300 ease-out origin-center
						${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`

					// Внешняя ссылка (открыть в новой вкладке)
					if (link.external) {
						return (
							<a
								key={link.href}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className={baseClass}
							>
								<span>{t(link.labelKey)}</span>
								<span className={underlineClass} />
							</a>
						)
					}

					// Внутренняя ссылка
					return (
						<Link key={link.href} href={fullPath} className={baseClass}>
							<span>{t(link.labelKey)}</span>
							<span className={underlineClass} />
						</Link>
					)
				})}
			</div>
		</nav>
	)
}

export default SubNav
