import { FaBookOpen } from 'react-icons/fa6'
import Link from 'next/link'

type NavButtonProps = {
  label: string,
  route: string,
}

const NavButton = ({label, route}: NavButtonProps) => (
  <Link className="sp-button px-2 rounded-xs" href={{pathname: route}}>
    {label}
  </Link>
)

export default () => <div className="border-b-1 p-4 flex bg-white justify-center">
  <div className="flex basis-10/12 justify-between">
    <Link href={{pathname: "/"}} className="flex items-center gap-2">
      <FaBookOpen />
      <span className="font-medium">Ultimate study tracker</span>
    </Link>
    <div className="flex gap-2">
      <NavButton label='Tasks' route='/tasks'/>
      <NavButton label='Topics' route='/topics'/>
      <NavButton label='Schedule' route='/schedule'/>
    </div>
  </div>
</div>
