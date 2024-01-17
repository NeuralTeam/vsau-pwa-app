const SearchIcon = ({ width, fill, opacity }: IIcon) => {
	return (
		<div style={{ opacity }} className='transition-all'>
			<svg
				viewBox='0 0 24 24'
				height={width}
				fill='none'
				width={width}
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M20 20L15.9497 15.9497M15.9497 15.9497C17.2165 14.683 18 12.933 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.933 18 14.683 17.2165 15.9497 15.9497Z'
					stroke={fill}
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
				/>
			</svg>
		</div>
	)
}
export default SearchIcon
