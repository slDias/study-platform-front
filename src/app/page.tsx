import DailyTasksList from "@/components/DailyTasksList"
import useTaskList from "@/hooks/useTaskList.hook"
import "./globals.css"
import { getData } from "./apimock/task/route"

export default async () => {

  const initialTaskList = await getData()

  return <div className="flex justify-center">
    <div className="flex gap-4 basis-10/12">
      <div className="basis-1/2">
        <DailyTasksList initialTaskList={initialTaskList}/>
      </div>
      <div className="basis-1/2">
        {/* TODO: replace w/ a by topic 5-day streak card */}
        <DailyTasksList initialTaskList={initialTaskList}/>
      </div>
    </div>
  </div>
}
