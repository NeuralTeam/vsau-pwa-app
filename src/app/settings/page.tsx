'use client'
import ResetIcon from '@/entities/icons/ResetIcon'
import ThemeSwitcher from '@/features/ThemeSwitcher'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Settings = () => {
	const [resetAlert, setResetAlert] = useState(false)
	const router = useRouter()
	const resetApp = () => {
		router.back()
		localStorage.clear()
	}

	const resetPopup = (bool: boolean) => {
		setResetAlert(bool)
	}
	return (
		<div className='w-[524px] h-[100dvh] dark:bg-dark-main bg-light-main light:bg-white  text-white overflow-hidden p-5'>
			<div className=''>
				<div className='px-0  py-2 w-1/3 dark:text-white text-dark-dark text-left font-semibold rounded-lg'>
					<Link href='/'>&#8592; Назад</Link>
				</div>

				<p className='mt-14 mb-4 text-center text-dark-dark dark:text-white text-3xl'>
					Настройки
				</p>
				<div className='mx-3'>
					<div className=''>
						<div className='rounded-lg w-full overflow-hidden bg-light-light dark:bg-dark-dark px-2 '>
							<div
								style={{ gridTemplateColumns: '70% 30%' }}
								className='text-lg border-b-[0.5px]  overflow-hidden dark:border-y-[#f0f0f0] border-y-dark-dark h-[70px] font-semibold text-dark-dark dark:text-white grid items-center justify-start text-left py-2 '
							>
								<p>Сброс приложения</p>
								<div
									className='bg-red text-white rounded-lg p-2 mx-4 flex items-center justify-center'
									onClick={() => resetPopup(true)}
								>
									<ResetIcon fill={`white`} width={20} />
								</div>
							</div>
							<div className='absolute bottom-10 w-full flex items-center justify-center'>
								<Link
									href='https://t.me/vsau_unofficial'
									className='mx-auto text-center  bg-red rounded-lg px-6 py-2'
								>
									Сообщить о проблеме
								</Link>
							</div>
							<div
								className='w-full grid  h-[70px]  dark:border-b-white border-y-dark-dark'
								style={{ gridTemplateColumns: '70% 30%' }}
							>
								<div className='flex items-center text-left dark:text-white text-dark-dark text-lg justify-start'>
									Тема
								</div>
								<ThemeSwitcher place='settings' />
							</div>
						</div>
					</div>
				</div>
				{resetAlert ? (
					<div className='absolute bg-black bg-opacity-30 top-0 left-0 w-full h-full flex items-center justify-center '>
						<div className='w-11/12 h-1/4 dark:bg-dark-dark bg-light-light text-lg  rounded-lg relative overflow-hidden'>
							<div className=''></div>
							<p className='w-full h-full text-center flex items-center justify-center dark:text-white text-dark-dark'>
								Вы уверены что хотите полностью сбросить данные приложения?
							</p>

							<div className='absolute w-full text-center bottom-0 h-10 grid grid-cols-2'>
								<div
									className='text-red font-semibold h-full flex items-center justify-center'
									onClick={resetApp}
								>
									Да
								</div>

								<div
									className='text-green font-semibold h-full flex items-center justify-center'
									onClick={() => resetPopup(false)}
								>
									Нет
								</div>
							</div>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	)
}
export default Settings
