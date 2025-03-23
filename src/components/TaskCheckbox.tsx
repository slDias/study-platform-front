import { FaCheck, FaArrowUpRightFromSquare, FaX } from "react-icons/fa6";

export default ({ task } : { task: StudyTask }) => {
  
  return (
    <div className="border-solid border-1 rounded-sm bg-white p-2 flex gap-2 items-center">
      <div>
        {task.isFinished ? <FaCheck color="green"/> : <FaX color="red"/>}
      </div>
      <div className="grow">
        {task.title}
      </div>
      <div>
      {task?.url && <FaArrowUpRightFromSquare className="text-gray-400 hover:text-black"/>}
      </div>
    </div>
  );
}
  