'use client'
import LogoIcon from '@/entities/icons/LogoIcon'
import Feedback from '@/features/Feedback'
import Search from '@/features/Search'
import ThemeSwitcher from '@/features/ThemeSwitcher'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useModalFeedback, useModalSearchHandler } from '@/store/zustand.store'
import { useState } from 'react'

const Header = () => {
	const open = useAppSelector(store => store.searchReducer.open)
	const dispatch = useAppDispatch()
	const [openSearch, setOpenSearch] = useState(open)

	const { isOpen } = useModalSearchHandler()

	const { isOpen: isOpenFeedback } = useModalFeedback()

	console.info(isOpenFeedback)

	const groups = useAppSelector(state => state.sheduleReducer.initialState.list)
	const groupId = groups[groups.length - 1]?.groupId
	return (
		<header className=' flex items-end w-screen z-50 justify-between p-4 text-white rounded-b-lg dark:bg-dark-dark bg-light-blue'>
			<div className='flex items-end gap-3 justify-start w-1/2'>
				<div className='flex items-center justify-start'>
					<LogoIcon fill='white' width={40} />
				</div>

				<div className='text-center text-2xl font-semibold '>Расписание</div>
			</div>
			<div className='flex items-center justify-end w-1/3 gap-4'>
				<div className='flex items-start justify-center relative -top-1'>
					<ThemeSwitcher place='header' />
				</div>
			</div>
			<div className='absolute w-full bg-dark-dark left-0 top-0'>
				{isOpenFeedback && <Feedback />}
			</div>

			{isOpen ? (
				<div className='absolute transition-all flex items-center justify-center top-0 left-0 w-full h-full bg-black bg-opacity-90 '>
					<div className='dark:bg-dark-main bg-light-light z-50 border-1 border-white overflow-hidden w-full h-full '>
						<Search />
					</div>
				</div>
			) : (
				<></>
			)}
		</header>
	)
}
export default Header
