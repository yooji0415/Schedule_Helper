import 'twin.macro'
import MenuIcon from './svgs/MenuIcon'
import UserIcon from './svgs/UserIcon'
import { useState } from 'react'
import Sidebar from './Sidebar'

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const handleMenuClick = () => {
    setIsSidebarOpen(true)
  }

  return (
    <header tw="w-full h-16 px-8 py-4 flex items-center">
      <MenuIcon onClick={handleMenuClick} />
      <p tw="font-semibold text-2xl pl-4">Schedule Helper</p>
      <span tw="m-auto" />
      <UserIcon />
      <Sidebar state={isSidebarOpen} setState={setIsSidebarOpen} />
    </header>
  )
}
