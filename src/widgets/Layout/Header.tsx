'use client'
import LogoIcon from '@/entities/icons/LogoIcon'
import SearchIcon from '@/entities/icons/SearchIcon'
import SettingsIcon from '@/entities/icons/SettingsIcon'
import Search from '@/features/Search'
import ThemeSwitcher from '@/features/ThemeSwitcher'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { searchHandler } from '@/store/slices/searchSlice'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
	const open = useAppSelector(store => store.searchReducer.open)
	const dispatch = useAppDispatch()
	const [openSearch, setOpenSearch] = useState(open)

	const groups = useAppSelector(state => state.sheduleReducer.initialState.list)
	const groupId = groups[groups.length - 1]?.groupId
	return (
		<div className='flex items-end w-full z-50 justify-between p-4 text-white rounded-b-lg dark:bg-dark-dark bg-light-blue'>
			<div className='flex items-end gap-3 justify-between w-1/2'>
				<div className='flex items-center justify-start'>
					<LogoIcon fill='white' width={40} />
				</div>

				<div className='text-center text-2xl font-semibold '>Расписание</div>
			</div>
			<div className='flex items-center justify-end w-1/3 gap-4'>
				{groupId == '-1' ? (
					''
				) : (
					<div
						className='flex w-full items-center justify-end relative -top-1'
						onClick={() => dispatch(searchHandler())}
					>
						<SearchIcon fill='white' width={30} />
					</div>
				)}
				<div className='flex items-start justify-center relative -top-1'>
					<ThemeSwitcher place='header' />
				</div>
				<div className='flex items-start justify-center relative -top-1'>
					<Link href='settings'>
						<SettingsIcon fill='white' width={30} />
					</Link>
				</div>
			</div>
			{open ? (
				<div className='absolute transition-all flex items-center justify-center top-0 left-0 w-full h-full bg-black bg-opacity-90 '>
					<div className='dark:bg-dark-main bg-light-light z-50 border-1 z-40 border-white overflow-hidden w-full h-full '>
						<Search />
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	)
}
export default Header
