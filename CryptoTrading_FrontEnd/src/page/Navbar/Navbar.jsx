import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { AvatarImage } from '@radix-ui/react-avatar'
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
// import { CoinDasher } from './CoinDasher.jpg'
import React from 'react'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
	const navigate = useNavigate()

	const { auth } = useSelector(store => store)
	console.log(auth);
	return (
		<div className='px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center'>
			<div className='flex items-center gap-3'>
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon" className="rounded-full h-11 w-11">
							<DragHandleHorizontalIcon className="h-7 w-7" />
						</Button>
					</SheetTrigger>
					<SheetContent className="w-72 border-r-0 flex flex-col justify-center" side="left">
						<SheetHeader>
							<SheetTitle>
								<div className="text-3xl flex justify-center items-center gap-1">
									<Avatar>
										<AvatarImage src="./image/mainIcon/CoinDasher.jpg" alt="Image" />
										{/* <svg viewBox="0 0 125.54 126.19" xmlns="http://www.w3.org/2000/svg"><path d="m5.85 48.26 44-43a18.27 18.27 0 0 1 25.83.27l45.15 46.13a16.54 16.54 0 0 1 -.25 23.4l-47.58 46.47a16.28 16.28 0 0 1 -23-.24l-44.41-45.37a19.58 19.58 0 0 1 .26-27.66z" fill="#0031d2" /><path d="m12.28 31.49 55-27.61a18.26 18.26 0 0 1 24.48 8.12l28.95 57.63a16.56 16.56 0 0 1 -7.38 22.18l-59.41 29.9a16.3 16.3 0 0 1 -21.85-7.21l-28.5-56.74a19.57 19.57 0 0 1 8.71-26.27z" fill="#bff" /><path d="m121.47 74.05.57-.71a16.56 16.56 0 0 0 -1.31-3.67l-18.65-37.13-27.38-27.96a18.39 18.39 0 0 0 -3.11-2.23 18.15 18.15 0 0 0 -4.35 1.53l-32.95 16.55-5.78 5.66-26.51 27.36a19.43 19.43 0 0 0 1.54 4.31l16.67 33.11 29.68 30.31.13.12s.87.87 1.53 1.39a17.23 17.23 0 0 0 2.39-1l38.65-19.42 28.88-28.27z" fill="#006ee3" /><path d="m75.8 60.28v21.07h-26.75v-37.08h26.75v8.84l10.5-6.06v-4.9a8.31 8.31 0 0 0 -8.3-8.3h-30.7a8.75 8.75 0 0 0 -8.75 8.75v41.21a8.9 8.9 0 0 0 8.88 8.88h28.79a10.08 10.08 0 0 0 10.08-10.08v-28.39z" fill="#fff" /></svg> */}
									</Avatar>
									<div>
										<span className='font-bold text-amber-700'> Cryp</span>
										<span>T!fy</span>
									</div>
								</div>
							</SheetTitle>
						</SheetHeader>
						<Sidebar />
					</SheetContent>
				</Sheet>
				<p className='text-lg lg:text-xl font-bold cursor-pointer' onClick={() => navigate('/')}>
					CrypT!fy
				</p>
				<div className='p-0 ml-9'>
					<Button variant="outline" className="flex items-center gap-3">
						<MagnifyingGlassIcon />
						<span>Search</span>
					</Button>
				</div>
			</div>
			<div>
				<Avatar>
					<AvatarFallback>
						{auth.user?.fullName?.[0]?.toUpperCase() || '?'}
					</AvatarFallback>
				</Avatar>
			</div>
		</div>
	)
}

export default Navbar
