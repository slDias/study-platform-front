import { useState } from "react"

export default (initialData: Array<StudyTask>) => {
  const [taskList, setTaskList] = useState(initialData)

  const getTaskList = async () => {
    const res = await fetch("/api/task")
    const data = await res.json()
    setTaskList(data)
  }

  return {
    getTaskList,
    taskList
  }
}