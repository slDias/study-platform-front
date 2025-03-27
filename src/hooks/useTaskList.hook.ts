import { useState } from "react"

export default function useTaskList(initialTaskList: Array<StudyTask>){
  const [taskList, setTaskList] = useState<Array<StudyTask>>(initialTaskList)
  const [isLoading, setLoading] = useState(false)

  const getTaskList = async () => {
    setLoading(true)
    const res = await fetch("/api/task")
    const data = await res.json()
    setTaskList(data)
    setLoading(false)
  }

  return {
    getTaskList,
    taskList,
    isLoading
  }
}