'use client'
import store from '@/store'
import Header from '@/widgets/Layout/Header'
import MobileNavbar from '@/widgets/Layout/MobileNavbar/MobileNavbar'
import ProviderLayoutMain from '@/widgets/Layout/ProviderLayoutMain'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import './globals.scss'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [domLoaded, setDomLoaded] = useState(false)

	useEffect(() => {
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
	return (
		<html lang='ru'>
			<head>
				<link rel='manifest' href='/manifest.json' />
				<title>Расписание</title>
				<link rel='apple-touch-icon' href='/logo192.png' />
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Расписание ВГАУ' />
				<meta property='og:url' content='https://schedule.neuralteam.ru/' />
				<meta
					property='og:image'
					content='https://sun9-19.userapi.com/impg/0Qm0NMqt1f7sq-Dg-EkBgLKXnFSBlvYdlx7r5w/20aEnT_4XuI.jpg?size=807x571&quality=95&sign=0f2c513e3c0abea62d639d5d0649375c&c_uniq_tag=Kzr1oGpxrXQQ-QtUvohYe0urwxRycpDW7kwBuqhcNp4&type=album'
				/>
				<meta
					property='og:description'
					content='Официальное расписание Воронежского Государственного Аграрного Университета. Разработанное студентами для студентов и преподавателей'
				></meta>
				<meta
					name='theme-color'
					media='(prefers-color-scheme: light)'
					content='#0091DF'
				/>
				<meta
					name='theme-color'
					media='(prefers-color-scheme: dark)'
					content='#212121'
				/>
				<meta name='msapplication-TileColor' content='#212121' />
				<meta name='description' content='Расписание ВГАУ' />
				<meta name='msapplication-navbutton-color' content='#212121' />
				<meta name='apple-mobile-web-app-status-bar-style' content='#212121' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@' />
				<meta name='twitter:title' content='Расписание ВГАУ' />
				<meta
					name='twitter:description'
					content='Официальное расписание Воронежского Государственного Аграрного Университета. Разработанное студентами для студентов и преподавателей'
				/>
				<meta
					name='twitter:image'
					content='https://sun9-19.userapi.com/impg/0Qm0NMqt1f7sq-Dg-EkBgLKXnFSBlvYdlx7r5w/20aEnT_4XuI.jpg?size=807x571&quality=95&sign=0f2c513e3c0abea62d639d5d0649375c&c_uniq_tag=Kzr1oGpxrXQQ-QtUvohYe0urwxRycpDW7kwBuqhcNp4&type=album'
				/>
			</head>
			<body className=' left-0 top-0  mx-auto  dark:bg-dark-main bg-light-light'>
				<Provider store={store}>
					<ProviderLayoutMain>
						<Header />
						{children}
						<MobileNavbar />
					</ProviderLayoutMain>
				</Provider>
			</body>
		</html>
	)
}
