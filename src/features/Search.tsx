'use client'
import { useAppDispatch } from '@/hooks'
import { closeSearch } from '@/store/slices/searchSlice'
import { getGroup } from '@/store/slices/sheduleCurrentSlice'
import axios from 'axios'
import { useState } from 'react'

import { facultyTypes } from '@/entities/facultyTypes'
import Delete from '@/entities/icons/Delete'
import { dayScheduleConstructor } from './functions/getApi/scheduleArrayMiddleware'

export interface IGroup {
	id: number
	name: string
	faculty: number
}

const Search = () => {
	const [changeGroup, setChangeGroup] = useState(false)
	const dispatch = useAppDispatch()
	const [textInInput, setTextInInput] = useState('')
	const [groupId, setGroupId] = useState<string>()
	const [search, setSearch] = useState<string>('')
	const [group, setGroup] = useState<IGroup[]>()
	const [groupName, setGroupName] = useState<string>()

	const mode = process.env.NODE_ENV
	const localURL = 'http://localhost:8000/api/v1/schedule/groups?search='
	const prodURL =
		'https://schedule.neuralteam.ru/api/v1/schedule/groups?search='

	const groupHandler = (id: string, name: string) => {
		setGroupId(id)
		dayScheduleConstructor(id)

		dispatch(closeSearch())
		dispatch(
			getGroup({
				groupId: id,
				groupName: name,
			})
		)
	}

	const setHandler = async (text: string) => {
		setSearch(text)
		console.log(text)

		if (text.length >= 1) {
			setGroup(
				await axios
					.get(mode === 'development' ? localURL + text : prodURL + text)
					.then(data => data.data)
			)
		}

		setChangeGroup(true)
		setTextInInput(text)
	}

	return (
		<div className='flex items-center dark:bg-dark-main h-screen bg-light-main text-black overflow-hidden max-h-screen justify-center w-full p-4'>
			<div
				className='absolute cursor-pointer right-3 top-3 font-semibold text-red text-3xl'
				onClick={() => dispatch(closeSearch())}
			>
				<Delete width={40} fill='#E4473F' />
			</div>
			<div className='w-full'>
				<div className='mx-auto dark:border-b-white border-b-dark-dark  border-b-2 mt-16  text-xl w-11/12'>
					<input
						type='text'
						onChange={event => setHandler(event.target.value)}
						placeholder='Пример: Тэ2-5'
						className='focus-within:outline-0 w-full capitalize  py-2 px-3 focus-within: focus-within:border-b-2 focus:outline-0 focus-within:border-0 dark:bg-dark-main bg-light-main bg-opacity-100 dark:text-white text-dark-dark'
					/>
				</div>
				<div className='w-11/12 mx-auto mt-10 h-[60dvh] overflow-y-auto'>
					{search?.length !== 0 ? (
						<div>
							{group?.length !== 0 ? (
								group?.map(item => (
									<div className=''>
										<div
											style={{
												borderBottomColor:
													facultyTypes.find(i => i.num == item.faculty)
														?.color || 'white',
											}}
											key={item.id}
											onClick={() =>
												groupHandler(item.id.toString(), item.name)
											}
											className='cursor-pointer  rounded-lg mb-4 border-b-4 border-ai dark:bg-dark-dark bg-light-light w-full dark:text-white text-dark-dark p-4 text-xl'
										>
											{item.name}
										</div>
									</div>
								))
							) : (
								<div className='w-full justify-center text-left items-center  '>
									<div className=' py-3 px-6 dark:text-white text-dark-dark rounded-lg text-xl mx-auto'>
										Не найдено
									</div>
								</div>
							)}
						</div>
					) : (
						<div className='w-full justify-center text-left items-center  '>
							<div className=' py-3 px-6 rounded-lg text-lg mx-auto dark:text-white text-dark-dark'>
								Введите название группы <br /> Например: Тэ2-5
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
export default Search
