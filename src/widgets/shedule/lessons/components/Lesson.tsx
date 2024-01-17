import { lessonTypes } from '@/entities/weekData/lessonTypes'
import { weekDays } from '@/entities/weekDay/weekDay'
import LessonItem from './LessonItem'

const Lesson = ({ weekday, parity }: any) => {
	const type = localStorage.getItem('type')

	const types = lessonTypes

	const dayLessonsArrayNum = weekDays[weekday - 1]?.lessons?.numerator?.sort(
		function (a, b) {
			return +a.time_start.replace(':', '') - +b.time_start.replace(':', '')
		}
	)
	const dayLessonsArrayDenom = weekDays[
		weekday - 1
	]?.lessons?.denominator?.sort(function (a, b) {
		return +a.time_start.replace(':', '') - +b.time_start.replace(':', '')
	})

	return (
		<div className='flex flex-3 flex-col w-full h-[100%] justify-center   gap-y-2'>
			{weekDays ? (
				parity.activeParity == 'numerator' ? (
					weekDays[weekday - 1].lessons?.numerator != null ? (
						dayLessonsArrayNum?.map((item, index) => (
							<div className='transition-all last:pb-52' key={index}>
								<LessonItem {...item} />
							</div>
						))
					) : (
						<div className='w-full mt-10 justify-center items-center text-center text-4xl'>
							<div className='dark:bg-dark-dark bg-light-light py-3 px-6 rounded-lg w-6/12 mx-auto'>
								Нет пар
							</div>
						</div>
					)
				) : weekDays[weekday - 1].lessons?.denominator != null ? (
					dayLessonsArrayDenom?.map((item, index) => (
						<div className='transition-all last:pb-52' key={index}>
							<LessonItem {...item} />
						</div>
					))
				) : (
					<div className='w-full mt-10 h-[30dvh] absolute bottom-0 justify-center items-center text-center text-4xl'>
						<div className='dark:bg-dark-dark bg-light-light py-3 px-6 rounded-lg w-6/12 mx-auto'>
							Нет пар
						</div>
					</div>
				)
			) : (
				<div className=''>
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

export default Lesson
