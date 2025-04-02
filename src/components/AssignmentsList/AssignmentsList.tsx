'use client'

import { FaArrowRotateRight } from "react-icons/fa6";
import useAssignmentsList from "./useAssignmentsList.hook";
import AssignmentRow from "./AssignmentRow";
import Loading from "../Loading";
import { Assignment } from "@/lib/interfaces";


type DailyTasksListProps = {
  initialAssignmentList: Array<Assignment>,
  hook: typeof useAssignmentsList
}

export default ({initialAssignmentList, hook}: DailyTasksListProps) => {
  /* 
  todo:
  - This can be a server component, and the assigmentrow a client component
  - change the checkbox to be an actual clickable checkbox when not done
  - it should have a X when a day was missed in a summary/freq chart later
  */

  const { isLoading, getTaskList, taskList } = useAssignmentsList(initialAssignmentList)

  return <div className="flex flex-col gap-2 h-100 shadow-sm p-2 bg-slate-50">
    <div className="flex justify-between">
      <div>Assignments</div> {/* TODO: Add a dynamic date so it should show e.g. 'Assignments March 27th 2025' */}
      <button onClick={getTaskList} className="py-1 px-2 rounded-sm">
        <FaArrowRotateRight />
      </button>
    </div>
    <hr />
    <div className="flex flex-col items-center gap-2 h-full px-2 my-2 rounded overflow-auto">
    {
      isLoading ? 
      <Loading className="flex h-full items-center" /> : 
      taskList.map((task, i) => <AssignmentRow key={i} task={task} />)
    }
    </div>
  </div>
}