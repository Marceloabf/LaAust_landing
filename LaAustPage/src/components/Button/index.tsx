import { Link } from 'react-router-dom'
interface buttonProps {
  text: string
}

export default function Button(props: buttonProps) {
  return (
    <button>
      <Link to="#">{props.text}</Link>
    </button>
  )
}
