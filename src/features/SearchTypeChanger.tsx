import { useModalSearchHandler } from '@/store/zustand.store'

export interface IScheduleTypes {
	type: number
	name: string
}

type TCurrentProps = {
	isOpen: boolean
}

const SearchTypeChanger = (isOpen: TCurrentProps) => {
	const { openM: openSearch } = useModalSearchHandler()

	const searchTypes: IScheduleTypes[] = [
		{
			type: 0,
			name: 'Группы',
		},
		{
			type: 1,
			name: 'Преподаватели',
		},
	]

	const typeChangeHandler = (type: string) => {
		localStorage.setItem('type', type)
		openSearch()
	}
	return (
		<div className='absolute bottom-5  w-full left-auto'>
			{/* <Fade duration={500}> */}
			<div className='rounded-lg bg-light-blue w-[350px] text-dark-dark dark:text-white dark:bg-dark-dark p-4 text-center flex flex-col gap-4 text-lg transition-all relative  bottom-auto right-auto '>
				{searchTypes.map((item, index) => (
					<div
						className=' bg-light-main border-white shadow-xl dark:bg-dark-main px-4 py-2 rounded-lg'
						key={index}
						onClick={() => typeChangeHandler(item.type.toString())}
					>
						{item.name}
					</div>
				))}
			</div>
			<div className='flex items-center justify-center'>
				<div className='border-t-[20px] mx-auto border-t-light-blue dark:border-t-dark-dark border-[transparent] rounded-b-lg  w-0 h-0 border-[10px]'></div>
			</div>

			{/* </Fade> */}
		</div>
	)
}

export default SearchTypeChanger
