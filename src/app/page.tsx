'use client'
import LogoIcon from '@/entities/icons/LogoIcon'
import Feedback from '@/features/Feedback'
import store from '@/store'
import MainPage from '@/widgets/MainPage'
import 'moment/locale/ru'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import packages from '../../package.json'
import '../font/stylesheet.css'

export default function Home() {
	const [domLoaded, setDomLoaded] = useState(false)
	const version = packages.version

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
		<Provider store={store}>
			{domLoaded ? (
				<main className='w-[524px] h-[100dvh] relative dark:bg-dark-main bg-light-main text-black  dark:text-white overflow-hidden '>
					<MainPage />

					<div className='absolute p-4 bottom-5 right-0'>
						<Feedback />
					</div>
				</main>
			) : (
				<div className='w-[524px] relative h-[100dvh] dark:bg-dark-dark bg-light-light flex items-center justify-center'>
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
		</Provider>
	)
}
