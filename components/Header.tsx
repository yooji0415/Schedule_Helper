import 'twin.macro'
import MenuIcon from './svgs/MenuIcon'
import UserIcon from './svgs/UserIcon'

export default function Header() {
  return (
    <div tw="w-full h-12 px-8 flex items-center">
      <MenuIcon />
      <p tw="font-semibold text-2xl pl-4">Schedule Helper</p>
      <span tw="m-auto" />
      <UserIcon />
    </div>
  )
}
