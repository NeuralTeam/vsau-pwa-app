'use client'
import SearchIcon from '@/entities/icons/SearchIcon'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useModalSearchHandler } from '@/store/zustand.store'
import SheduleWidget from '@/widgets/shedule/SheduleWidget'

const SheduleMainWidget = () => {
	const dispatch = useAppDispatch()
	const groups = useAppSelector(state => state.sheduleReducer.initialState.list)
	const groupId = groups[groups.length - 1]?.groupId
	const theme = localStorage.getItem('theme')
	const { openM: openSearchModal } = useModalSearchHandler()

	return (
		<div>
			{groupId == '-1' ? (
				<div className='className="w-full h-[90dvh] font-semibold text-2xl flex items-center justify-center'>
					<div className='px-4 '>
						<div className='font-normal'>Выберете группу</div>
						<div
							onClick={() => openSearchModal()}
							className='flex flex-col gap-2 items-center  w-6/12 justify-between py-3 px-5 dark:bg-dark-dark bg-light-light bg-opacity-70 rounded-lg mx-auto my-4 font-normal text-xl '
						>
							<div className='flex items-start aspect-square justify-center'>
								<SearchIcon
									fill={theme !== 'white' ? 'white' : 'rgb(33 33 33)'}
									width={30}
								/>
							</div>
							<p>Поиск</p>
						</div>
					</div>
				</div>
			) : (
				<div className='h-full'>
					<SheduleWidget />
				</div>
			)}
		</div>
	)
}
export default SheduleMainWidget
