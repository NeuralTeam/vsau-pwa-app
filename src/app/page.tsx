'use client'
import MainPage from '@/widgets/MainPage'
import 'moment/locale/ru'
import '../font/stylesheet.css'

export default function Home() {
	return (
		<main className='h-[100dvh] relative dark:bg-dark-main bg-light-main text-black  dark:text-white overflow-hidden '>
			<MainPage />
		</main>
	)
}
