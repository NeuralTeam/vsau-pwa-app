import { facultyTypes } from '@/entities/facultyTypes'
import { lessonTypes } from '@/entities/weekData/lessonTypes'
import { ITeacherGroups } from '../Lessons'

const LessonItem = ({ ...item }: any) => {
	const types = lessonTypes

	const type = typeof window !== 'undefined' && localStorage.getItem('type')

	return (
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
							types.find(i => i.type === item.type)?.color || '#c47929'
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
						{item.groups.map((item: ITeacherGroups, index: any) => (
							<div
								key={index}
								style={{
									borderBottomColor:
										facultyTypes.find(i => i.num == item.group_faculty)
											?.color || 'white',
								}}
								className=' border-b-2 dark:bg-dark-main bg-light-main p-2 rounded-lg '
							>
								{item.group_name}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default LessonItem
