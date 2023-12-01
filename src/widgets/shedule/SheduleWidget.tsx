import weekInit from '@/features/functions/weekInit'
import { useAppSelector } from '@/hooks'
import groupss from '@/testArrays/groups.json'
import Week from '@/widgets/shedule/Week'
import moment from 'moment'
import { useState } from 'react'

const SheduleWidget = () => {
	const [activeParity, setActiveParity] = useState<string>(weekInit.parityEng)

	const Groups = groupss

	const groups = useAppSelector(state => state.sheduleReducer.initialState.list)

	const currentArray = groups.length - 1

	const WeekCarousel = () => <Week activeParity={activeParity} />

	const groupName = localStorage.getItem('groupName')

	const weekParityHandler = (parity: string) => {
		setActiveParity(parity)
	}
	moment().locale('ru')
	const weekData = weekInit
	return (
		<div className=' h-full'>
			<div className='flex items-start mx-2 -mt-1 gap-1 text-center justify-center font-semibold text'>
				<div className='dark:bg-dark-dark bg-light-blue text-white  rounded-b-lg  px-3 w-1/2 py-2'>
					{weekData.day}
				</div>
			</div>

			<div className='my-5 text-center'>
				<span className='text-3xl font-semibold'>{groupName}</span>
			</div>
			<div className='w-10/12 mx-auto  my-5 py-1  relative '>
				{/* <div className='absolute w-full h-[36px] dark:bg-dark-dark bg-light-light left-0 top-0 opacity-25'></div> */}
				<div
					className={`absolute rounded-lg w-1/2 h-full top-0 ${
						activeParity === 'numerator' ? 'left-[0%]' : 'left-[50%]'
					}   text-center dark:bg-dark-dark bg-light-light transition-all duration-200 d`}
				></div>
				<div className=' w-full z-20 flex  items-center text-center relative gap-0 justify-between h-full'>
					<div
						onClick={() => weekParityHandler('numerator')}
						className='w-full h-full relative py-1 px-3 text-center rounded-lg '
					>
						<div
							className={
								weekData.parityRu == 'Числитель'
									? 'py-1 z-20 border-t-2 border-azure rounded-lg'
									: ''
							}
						>
							Числитель
						</div>
					</div>

					<div
						onClick={() => weekParityHandler('denominator')}
						className={`w-full h-full py-1 px-3 relative text-center`}
					>
						<div
							className={
								weekData.parityRu == 'Знаменатель'
									? ' py-1 z-20 border-t-2 border-azure rounded-lg'
									: ''
							}
						>
							Знаменатель
						</div>
					</div>
				</div>
			</div>
			<div className='w-full transition-all h-full flex items-center justify-center'>
				<WeekCarousel />
			</div>
		</div>
	)
}
export default SheduleWidget
