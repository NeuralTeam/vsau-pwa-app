import Moon from '@/entities/icons/Moon'
import Sunny from '@/entities/icons/Sunny'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

const ThemeSwitcher = ({ place }: any) => {
	const { theme, setTheme } = useTheme()
	useEffect(() => {
		setTheme(localStorage.getItem('theme') || 'dark')
	}, [])
	return (
		<div className='flex items-center justify-center'>
			{place == 'settings' ? (
				<div className=' dark:bg-dark-dark bg-light-light py-2 rounded-lg flex items-center justify-center '>
					<select
						className='dark:text-white focus-within:outline-none dark:bg-dark-dark bg-light-light  focus-within:border-none relative text-dark-dark border-0'
						value={theme}
						onChange={e => setTheme(e.target.value)}
					>
						<option value='dark'>Темная</option>
						<option value='light'>Светлая</option>
					</select>
				</div>
			) : (
				<div>
					{theme == 'dark' ? (
						<div className='text-red' onClick={() => setTheme('light')}>
							<Moon fill='white' width={25} />
						</div>
					) : (
						<div className='text-red' onClick={() => setTheme('dark')}>
							<Sunny fill='white' width={30} />
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default ThemeSwitcher
