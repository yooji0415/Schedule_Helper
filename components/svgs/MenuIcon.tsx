import 'twin.macro'

const MenuIcon = ({ onClick }: { onClick: () => void }) => (
  <button tw="sm:w-8 sm:h-8 w-6 h-6 cursor-pointer" onClick={onClick}>
    <svg
      fill="#000000"
      viewBox="0 0 1920 1920"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M1920 1411.412v225.882H0v-225.882h1920Zm0-564.706v225.882H0V846.706h1920ZM1920 282v225.882H0V282h1920Z"
          fillRule="evenodd"
        ></path>
      </g>
    </svg>
  </button>
)

export default MenuIcon
