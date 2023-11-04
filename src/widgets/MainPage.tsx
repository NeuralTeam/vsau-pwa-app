'use client'

import { useAppDispatch } from '@/hooks'
import { getGroup } from '@/store/slices/sheduleCurrentSlice'
import Header from '@/widgets/Layout/Header'
import SheduleMainWidget from '@/widgets/shedule/SheduleMainWidget'

const MainPage = () => {
	const dispatch = useAppDispatch()

	const groupId: any = localStorage.getItem('groupId')
	const groupName: any = localStorage.getItem('groupName')
	if (typeof window !== 'undefined') {
		if (groupId !== null) {
			const groupId: any = window.localStorage.getItem('groupId')
			const groupName: any = localStorage.getItem('groupName')
			const type: any = localStorage.getItem('type')
			console.log(groupId)
			dispatch(
				getGroup({
					groupId: groupId,
					groupName: groupName,
					type: type,
				})
			)
			console.log('Get in local')
		} else {
			console.log('SET in local')
			localStorage.setItem('groupId', '-1')
			localStorage.setItem('groupName', 'None')
			localStorage.setItem('type', '-1')
			const groupId: any = window.localStorage.getItem('groupId')
			const type: any = window.localStorage.getItem('type')

			dispatch(
				getGroup({
					groupId: groupId,
					groupName: groupName,
					type: type,
				})
			)
		}
	} else {
	}
	return (
		<div>
			<div className=''>
				<Header />
			</div>
			<div className=''></div>
			<div className='z-10 h-full'>
				<SheduleMainWidget />
			</div>
		</div>
	)
}
export default MainPage
