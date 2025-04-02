import { Assignment } from "@/lib/interfaces"
import { useState } from "react"

export default (initialAssignmentList: Array<Assignment>) => {
  const [taskList, setTaskList] = useState<Array<Assignment>>(initialAssignmentList)
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