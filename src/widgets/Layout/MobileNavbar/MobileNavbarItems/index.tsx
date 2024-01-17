import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useState } from 'react'

import ScheduleIcon from '@/entities/icons/ScheduleIcon'
import SearchIcon from '@/entities/icons/SearchIcon'
import SettingsIcon from '@/entities/icons/SettingsIcon'
import WarningIcon from '@/entities/icons/WarningIcon'
import SearchTypeChanger from '@/features/SearchTypeChanger'
import { useModalFeedback, useModalSearchHandler } from '@/store/zustand.store'
import NavbarItem from './NavbarItem'

export interface INavbarItems {
	title: string
	icon: ReactNode
	isActive: boolean
}

const MobileNavbarItems = () => {
	const pathname = usePathname()
	const default_opacity = 0.7
	const active_opacity = 1
	const [openChanger, setOpenChanger] = useState(false)

	const {
		openM: openSearchModal,
		isOpen: isOpenSearch,
		closeM: closeSearchModal,
	} = useModalSearchHandler()
	const {
		openM: openFeedbackModal,
		isOpen: isOpenFeedback,
		closeM: closeFeedbackModal,
	} = useModalFeedback()

	const TypeChanger = () => <SearchTypeChanger isOpen={isOpenSearch} />

	const openSearchChanger = () => {
		setOpenChanger(!openChanger)
	}

	const openFeedbackHandler = () => {
		console.log('work')
		closeSearchModal()
		openFeedbackModal()
	}
	const openSearchHandler = () => {
		console.log('work')
		closeFeedbackModal()
		openSearchModal()
	}
	const closeAllModal = () => {
		closeFeedbackModal()
		closeSearchModal()
	}
	const navbarItemsData: INavbarItems[] = [
		{
			title: 'Расписание',
			icon: (
				<Link
					href='/'
					onClick={() =>
						(isOpenSearch || isOpenFeedback) &&
						setTimeout(() => {
							closeAllModal()
						}, 200)
					}
				>
					<ScheduleIcon
						opacity={
							pathname === '/' && !isOpenFeedback && !isOpenSearch
								? active_opacity
								: default_opacity
						}
						fill={'white'}
						width={30}
					/>
				</Link>
			),
			isActive:
				pathname === '/' && !isOpenSearch && !isOpenFeedback ? true : false,
		},
		{
			title: 'Поиск',
			icon: (
				<div className='relative' onClick={() => openSearchHandler()}>
					<SearchIcon
						opacity={isOpenSearch ? active_opacity : default_opacity}
						fill={'white'}
						width={30}
					/>
				</div>
			),
			isActive: isOpenSearch,
		},
		{
			title: 'Настройки',
			icon: (
				<Link
					href='/settings'
					onClick={() =>
						(isOpenSearch || isOpenFeedback) &&
						setTimeout(() => {
							closeAllModal()
						}, 300)
					}
				>
					<SettingsIcon
						opacity={
							pathname === '/settings' && !isOpenSearch && !isOpenFeedback
								? active_opacity
								: default_opacity
						}
						fill={'white'}
						width={30}
					/>
				</Link>
			),
			isActive:
				pathname === '/settings' && !isOpenSearch && !isOpenFeedback
					? true
					: false,
		},
		{
			title: 'Проблема',
			icon: (
				<div className='' onClick={openFeedbackHandler}>
					<WarningIcon
						opacity={isOpenFeedback ? active_opacity : default_opacity}
						fill={'white'}
						width={30}
					/>
				</div>
			),
			isActive: isOpenFeedback,
		},
	]

	return (
		<div className={`flex items-start justify-between gap-0 px-2 relative`}>
			{navbarItemsData.map((item, index) => (
				<div
					className='transition-all text-white'
					key={index}
					style={{
						opacity: +item.isActive ? active_opacity : default_opacity,
					}}
				>
					<NavbarItem {...item} />
				</div>
			))}
		</div>
	)
}

export default MobileNavbarItems
