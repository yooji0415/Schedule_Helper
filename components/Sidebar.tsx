import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import tw, { styled } from 'twin.macro'
import HomeIcon from './svgs/HomeIcon'
import TodoIcon from './svgs/TodoIcon'
import TimerIcon from './svgs/TimerIcon'
import { useRouter } from 'next/router'

const SideBarWrap = styled.div(({ isOpen }: { isOpen: boolean }) => [
  tw`z-20 pt-4 rounded-r-2xl bg-zinc-400 h-full w-48 fixed top-0 -left-48 ease-in-out duration-300`,
  isOpen && tw`translate-x-full`,
  !isOpen && tw`translate-x-0`,
])

const Menu = styled.li(() => [
  tw`flex gap-4 items-center h-7 py-8 pl-8 hover:bg-zinc-200 duration-500`,
])

export default function Sidebar({
  state,
  setState,
}: {
  state: boolean
  setState: Dispatch<SetStateAction<boolean>>
}) {
  const router = useRouter()

  const handleClick = () => {
    setState(false)
  }

  return (
    <>
      {state && (
        <div tw="fixed top-0 left-0 w-full h-full z-10" onClick={handleClick} />
      )}
      <SideBarWrap isOpen={state}>
        <button
          type="button"
          onClick={handleClick}
          tw="flex text-2xl font-semibold ml-9 mb-8 sm:text-3xl items-center"
        >
          X
        </button>
        <ul tw="text-xl">
          <Menu
            onClick={() => {
              router.push('/')
              setState(false)
            }}
          >
            <HomeIcon />
            <p>Home</p>
          </Menu>
          <Menu
            onClick={() => {
              router.push('/todo')
              setState(false)
            }}
          >
            <TodoIcon />
            <p>TODO</p>
          </Menu>
          <Menu
            onClick={() => {
              router.push('/timer')
              setState(false)
            }}
          >
            <TimerIcon />
            <p>Timer</p>
          </Menu>
        </ul>
      </SideBarWrap>
    </>
  )
}
