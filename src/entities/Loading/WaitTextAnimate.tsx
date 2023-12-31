const WaitTextAnimate = () => {
	return (
		<div className='w-full h-full flex items-center justify-center mx-auto'>
			<div className='circle-loading-animation aspect-square flex items-center justify-center '>
				<div className='w-11/12 aspect-square rounded-full dark:dark-main dark:bg-dark-main bg-light-main z-10 relative'></div>
			</div>
		</div>
	)
}

export default WaitTextAnimate
