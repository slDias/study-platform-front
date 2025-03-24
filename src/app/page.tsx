'use client'

import DailyTasksList from "@/components/DailyTasksList"
import useTaskList from '@/hooks/useTaskList.hook'
import { useEffect } from "react"

export default () => {
  /* 
  todo:
  - change the checkbox to be an actual clickable checkbox when not done
  - it should have a X when a day was missed in a summary/freq chart later
  */

  const { getTaskList, taskList } = useTaskList()

  useEffect(() => {getTaskList()}, [taskList])

  return <div className="flex justify-center">
    <div className="flex gap-4 basis-10/12">
      <div className="basis-1/2">
        <DailyTasksList taskList={taskList}/>
      </div>
      <div className="basis-1/2">
        {/* TODO: replace w/ a by topic 5-day streak card */}
        <DailyTasksList taskList={taskList}/>
      </div>
    </div>
  </div>
}
