'use client'

import { FaArrowRotateRight } from "react-icons/fa6";
import useTaskList from "@/hooks/useTaskList.hook";
import TaskCheckbox from "./TaskCheckbox";
import Loading from "./Loading";


type DailyTasksListProps = {
  initialTaskList: Array<StudyTask>,
}

export default ({initialTaskList}: DailyTasksListProps) => {
  /* 
  todo:
  - change the checkbox to be an actual clickable checkbox when not done
  - it should have a X when a day was missed in a summary/freq chart later
  */

  const { isLoading, getTaskList, taskList } = useTaskList(initialTaskList)

  return <div className="flex flex-col gap-2 h-100 shadow-sm p-2 bg-slate-50">
    <div className="flex justify-between">
      <div>Daily tasks</div>
      <button onClick={getTaskList} className="py-1 px-2 rounded-sm">
        <FaArrowRotateRight />
      </button>
    </div>
    <hr />
    <div className="flex flex-col items-center gap-2 h-full px-2 my-2 rounded overflow-auto">
    {
      isLoading ? 
      <Loading className="flex h-full items-center" /> : 
      taskList.map((task, i) => <TaskCheckbox key={i} task={task} />)
    }
    </div>
  </div>
}