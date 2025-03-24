import { useState } from "react"

export default () => {
  const [taskList, setTaskList] = useState<Array<StudyTask>>([])

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