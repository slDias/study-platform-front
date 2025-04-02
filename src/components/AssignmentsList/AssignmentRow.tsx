import { Assignment } from '@/lib/interfaces'
import { FaCheck, FaArrowUpRightFromSquare } from 'react-icons/fa6'

export default ({ task } : { task: Assignment }) => (
  <div 
    className="border-1 rounded-sm bg-white p-2 flex gap-2 items-center w-full"
  >
    <div>
      {
        task.isFinished ? 
        <FaCheck color="green"/> : 
        <input type="checkbox" />
      }
    </div>
    <div className="grow">
      {task.title}
    </div>
    <div>
      {
        task?.url && 
        <FaArrowUpRightFromSquare className="text-gray-400 hover:text-black"/>
      }
    </div>
  </div>
)
