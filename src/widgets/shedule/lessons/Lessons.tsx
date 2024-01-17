import { useEffect, useState } from 'react'
import Lesson from './components/Lesson'

interface ILessons {
	weekday: number
	numerator: any[]
	denominator: any[]
}
interface ISchedule {
	id: number
	lessons: ILessons[]
}
export type Root = Root2[]

export interface Root2 {
	weekday: number
	numerator: IWeekType[]
	denominator: IWeekType[]
}

export interface IWeekType {
	time_start: string
	time_end: string
	name: string
	type: number
	teacher: string
	room: string
	groups?: ITeacherGroups[]
}

export interface ITeacherGroups {
	group_name: string
	group_faculty: number
}

const Lessons = ({ weekday, parity }: any) => {
	const [isRender, setIsRender] = useState<boolean>(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsRender(true)
		}, 500)
		return () => clearTimeout(timer)
	})

	return (
		<div className='w-full flex items-center jc'>
			{isRender ? (
				<div className='w-full'>
					<Lesson weekday={weekday} parity={parity} />
				</div>
			) : (
				<div className='w-full'>
					<div className='w-[90%] mx-auto mb-3 h-32 rounded-lg dark:bg-dark-dark bg-light-light animation-skeleton'>
						<div className='animation-skeleton-line'></div>
					</div>
					<div className='w-[90%] mx-auto h-32 rounded-lg dark:bg-dark-dark bg-light-light animation-skeleton'>
						<div className='animation-skeleton-line  bg-light-blue'></div>
					</div>
				</div>
			)}
		</div>
	)
}
export default Lessons
