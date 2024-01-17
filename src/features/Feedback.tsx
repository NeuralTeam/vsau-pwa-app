import Delete from '@/entities/icons/Delete'
import Link from 'next/link'
import { useState } from 'react'

const Feedback = () => {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<div className='  transition-all p-0 text-center text-white'>
			{!open ? (
				<div
					style={{ boxShadow: '0px 0px 10px 5px #bd352e' }}
					className='w-10 h-10 flex items-center  bg-red  mb-1 rounded-full justify-center transition-all text-2xl aspect-square text-center'
					onClick={() => setOpen(true)}
				>
					!
				</div>
			) : (
				<div>
					<div className='w-72 h-10 mb-1 rounded-lg flex items-center transition-all justify-center gap-2'>
						<Link
							style={{ boxShadow: '0px 0px 10px 3px #bd352e' }}
							className='bg-red px-6 py-2 rounded-lg'
							href='https://t.me/vsau_unofficial/4 '
						>
							Сообщить о проблеме
						</Link>
						<p className='ml-2' onClick={() => setOpen(false)}>
							<Delete fill='#bd352e' width={30} />
						</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default Feedback
