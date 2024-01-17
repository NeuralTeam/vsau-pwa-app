import { INavbarItems } from '.'

const NavbarItem = ({ ...arr }: INavbarItems) => {
	return (
		<div>
			<div
				className={`flex w-full h-full pt-2 items-center flex-col justify-center`}
			>
				<div className='flex relative items-center gap-1 justify-start flex-col text-center text-sm'>
					{arr.icon}
					<p>{arr.title}</p>
				</div>
			</div>
		</div>
	)
}

export default NavbarItem
