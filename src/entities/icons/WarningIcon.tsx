const WarningIcon = ({ fill, width }: IIcon) => {
	return (
		<svg
			fill='none'
			height={width}
			viewBox='0 0 24 24'
			width={width}
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle
				cx='12'
				cy='12'
				r='9'
				stroke={fill}
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='2'
			/>
			<path
				d='M12 8V13'
				stroke={fill}
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='2'
			/>
			<path
				d='M12 16V16.0001'
				stroke={fill}
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='2'
			/>
		</svg>
	)
}

export default WarningIcon
