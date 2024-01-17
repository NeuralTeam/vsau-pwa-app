'use client'
import { version } from '@/../package.json'
import LogoIcon from '@/entities/icons/LogoIcon'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'

const ProviderLayoutMain = ({ children }: any) => {
	const [mounted, setMounted] = useState(false)
	const [domLoaded, setDomLoaded] = useState(false)

	useEffect(() => {
		setMounted(true)
		if (localStorage.getItem('theme')) {
			console.debug('getLocal', localStorage.getItem('theme'))
		} else {
			localStorage.setItem('theme', 'dark')
			console.debug('set', localStorage.getItem('theme'))
		}

		let timeFunc = setTimeout(() => {
			setDomLoaded(true)
		}, 1500)

		return () => {
			clearTimeout(timeFunc)
		}
	}, [])

	if (!mounted) {
		return null
	}
	return (
		<ThemeProvider attribute='class'>
			{mounted && domLoaded ? (
				<>{children}</>
			) : (
				<div className=' relative w-full h-[100dvh] dark:bg-dark-dark bg-light-light flex items-center justify-center'>
					<div className='absolute bottom-0 left-0 text-white text-sm p-4'>
						Version: v{version}
					</div>
					<div className=' flex items-center flex-col justify-between h-8/12 '>
						<div className='animate-bounce'>
							<LogoIcon
								fill={
									localStorage.getItem('theme') == 'dark' ? 'white' : '#0376b4'
								}
								width={150}
							/>
						</div>
						<p className='dark:text-white text-[#0376b4] px-6 rounded-lg py-3 my-10  font-semibold text-2xl text-center'>
							Загрузка расписания...
						</p>
					</div>
				</div>
			)}
		</ThemeProvider>
	)
}

export default ProviderLayoutMain
