import WaitTextAnimate from '@/entities/Loading/WaitTextAnimate'
import { facultyTypes } from '@/entities/facultyTypes'
import { lessonTypes } from '@/entities/weekData/lessonTypes'
import { weekDays } from '@/entities/weekDay/weekDay'
import { useEffect, useState } from 'react'

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
	numerator: Numerator[]
	denominator: Denominator[]
}

export interface Numerator {
	time_start: string
	time_end: string
	name: string
	type: number
	teacher: string
	room: string
	groups?: ITeacherGroups[]
}

export interface Denominator {
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
		<div className='w-full '>
			{isRender ? (
				<div className='flex flex-col w-full h-[100%]   gap-y-2'>
					{weekDays ? (
						parity.activeParity == 'numerator' ? (
							weekDays[weekday - 1].lessons !== null ? (
								dayLessonsArrayNum?.map((item, index) => (
									<div className='transition-all last:pb-52' key={index}>
										<div className='p-2 dark:bg-dark-dark bg-light-light relative rounded-lg w-[90%] mx-auto'>
											<div className=' w-full text-left text-sm '>
												<div className=''>
													{item.time_start} - {item.time_end}
												</div>
											</div>
											<div className=''>
												<div className='mt-5 flex items-center w-full justify-start'>
													<div className=''>{item.name}</div>

													{item.room === 'NONE' ? (
														''
													) : (
														<div className='mx-3 px-2 py-1 dark:bg-dark-main bg-light-main rounded-lg'>
															{item.room}
														</div>
													)}
												</div>
												<div
													style={{
														background: `${
															types.find(i => i.type === item.type)?.color ||
															'#c47929'
														}`,
													}}
													className={`absolute  text-white font-semibold text-sm top-1 right-1 flex items-center justify-center bg-[] w-14 h-6 rounded-lg`}
												>
													{types.find(i => i.type === item.type)?.name || 'Общ'}
												</div>

												<div className='mt-2'>
													{item.teacher === 'NONE' ? '' : item.teacher}
												</div>
												{type == '1' && (
													<div className='w-full flex items-center justify-start gap-1 text-sm flex-wrap'>
														{item.groups.map(
															(item: ITeacherGroups, index: any) => (
																<div
																	key={index}
																	style={{
																		borderBottomColor:
																			facultyTypes.find(
																				i => i.num == item.group_faculty
																			)?.color || 'white',
																	}}
																	className=' border-b-2 dark:bg-dark-main bg-light-main p-2 rounded-lg '
																>
																	{item.group_name}
																</div>
															)
														)}
													</div>
												)}
											</div>
										</div>
									</div>
								))
							) : (
								<div className='w-full h-[30dvh] absolute bottom-0 justify-center items-center text-center text-4xl'>
									<div className='dark:bg-dark-dark bg-light-light py-3 px-6 rounded-lg w-6/12 mx-auto'>
										Нет пар
									</div>
								</div>
							)
						) : weekDays[weekday - 1].lessons !== null ? (
							dayLessonsArrayDenom?.map((item, index) => (
								<div className='transition-all last:pb-52' key={index}>
									<div className='p-2 dark:bg-dark-dark bg-light-light relative rounded-lg w-[90%] mx-auto'>
										<div className=' w-full text-left text-sm '>
											<div className=''>
												{item.time_start} - {item.time_end}
											</div>
										</div>
										<div className=''>
											<div className='mt-5 flex items-center w-full justify-start'>
												<div className=''>{item.name}</div>
												{item.room === 'NONE' ? (
													''
												) : (
													<div className='mx-3 px-2 py-1 dark:bg-dark-main bg-light-main rounded-lg'>
														{item.room}
													</div>
												)}
											</div>
											<div
												style={{
													background: `${
														types.find(i => i.type === item.type)?.color ||
														'#c47929'
													}`,
												}}
												className={`absolute text-white  font-semibold text-sm top-1 right-1 flex items-center justify-center bg-[] w-14 h-6 rounded-lg`}
											>
												{types.find(i => i.type === item.type)?.name || 'Общ'}
											</div>
											<div className='mt-2'>
												{item.teacher === 'NONE' ? '' : item.teacher}
											</div>
											{type == '1' && (
												<div className='w-full flex items-center justify-start gap-1 text-sm flex-wrap'>
													{item.groups.map(
														(item: ITeacherGroups, index: any) => (
															<div
																key={index}
																style={{
																	borderBottomColor:
																		facultyTypes.find(
																			i => i.num == item.group_faculty
																		)?.color || 'white',
																}}
																className=' border-b-2 dark:bg-dark-main bg-light-main p-2 rounded-lg '
															>
																{item.group_name}
															</div>
														)
													)}
												</div>
											)}
										</div>
									</div>
								</div>
							))
						) : (
							<div className='w-full h-[30dvh] absolute bottom-0 justify-center items-center text-center text-4xl'>
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
			) : (
				<div className='w-full h-[40dvh] flex items-center justify-center'>
					<WaitTextAnimate />
				</div>
			)}
		</div>
	)
}
export default Lessons
