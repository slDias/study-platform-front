'use client'

type NavButtonProps = {
  label: String,
  route: String,
}

// TODO: is it possible to have onclick on a server component?
const NavButton = ({label, route}: NavButtonProps) => (
  <div 
    className="hover:bg-slate-200 hover:cursor-pointer px-2 rounded"
    onClick={() => console.log(route)}
  >
    {label}
  </div>
)

export default () => {
  return (<div className="flex gap-2">
    <NavButton label='Tasks' route='/tasks'/>
    <NavButton label='Topics' route='/topics'/>
    <NavButton label='Schedule' route='/schedule'/>
  </div>)
}