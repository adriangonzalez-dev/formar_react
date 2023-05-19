
interface Props {
  checked?: boolean
}

export const DeleteIcon = ({checked}:Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={30}
  >
    <path
      stroke={checked ? '#F05030' : '#fff'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M6 7H5m1 0h2m10 0h1m-1 0h-2m-6 4v5m4-5v5M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 7h8"
    />
  </svg>
)
