import TelegramIcon from '@/entities/icons/TelegramIcon'
import { useState } from 'react'

const Feedback = () => {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<div className='absolute w-screen  h-screen flex items-center text-dark-main justify-center bg-light-light dark:bg-dark-dark bg-opacity-80 z-30 left-0 top-0 p-4'>
			<div className='w-10/12 h-1/3  bg-light-main dark:bg-dark-main rounded-lg shadow-xl p-4 text-center animation-type-changer overflow-hidden transition-all'>
				<p className='text-lg'>У вас возникла проблема? </p>
				<p>Напишите нам в Telegram!</p>
				<div className='bg-light-blue text-white dark:bg-dark-dark w-10/12 mx-auto py-3 rounded-lg flex items-center justify-center gap-3 my-20'>
					<div className='w-[40px] '>
						<TelegramIcon />
					</div>
					<a href='https://t.me/vsau_unofficial' className='text-lg'>
						@vsau_unofficial
					</a>
				</div>
			</div>
		</div>
	)
}

export default Feedback
