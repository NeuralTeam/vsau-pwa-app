const ScheduleIcon = ({ fill, width, opacity }: IIcon) => {
	return (
		<div style={{ opacity }} className='transition-all'>
			<svg
				fill='none'
				height={width}
				viewBox='0 0 24 24'
				width={width}
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M11 5H21'
					stroke={fill}
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
				/>
				<path
					d='M11 9H16'
					stroke={fill}
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
				/>
				<rect
					height='4'
					rx='1'
					stroke={fill}
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
					width='4'
					x='3'
					y='5'
				/>
				<path
					d='M11 15H21'
					stroke={fill}
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
				/>
				<path
					d='M11 19H16'
					stroke={fill}
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
				/>
				<rect
					height='4'
					rx='1'
					stroke={fill}
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
					width='4'
					x='3'
					y='15'
				/>
			</svg>
		</div>
	)
}

export default ScheduleIcon
