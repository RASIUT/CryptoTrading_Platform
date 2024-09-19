import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { AvatarImage } from '@radix-ui/react-avatar'
import { AvatarIcon, DragHandleHorizontalIcon } from '@radix-ui/react-icons'
import React from 'react'

const Navbar = () => {
  return (
	<div className='px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 rigth-0 flex justify-between item-center'>
		<div className='flex item-center gap-3'>
			<Sheet>
				<SheetTrigger>
					<Button variant="ghost" size="icon" className="rounded-full h-11 w-11">
						<DragHandleHorizontalIcon className="h-7 w-7"/>
					</Button>
				</SheetTrigger>
				<SheetContent className="w-72 border-r-0 flex felx-col justify-center" side="left">
					<SheetHeader>
						<SheetTitle>
							<div className="text-3xl flex justify-center items-center gap-1">
								<Avatar>
									<AvatarIcon src="https://www.cdnlogo.com/logos/c/21/coinbene.svg"/>
								</Avatar>
							</div>
						</SheetTitle>
						
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	</div>
  )
}

export default Navbar