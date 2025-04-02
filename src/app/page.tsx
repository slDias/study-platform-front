import "./globals.css"
import { getData } from "./apimock/task/route"
import { AssignmentsList, useAssignmentsList } from "@/components"

export default async () => {

  const initialAssignmentList = await getData()

  return <div className="flex justify-center">
    <div className="flex gap-4 basis-10/12">
      <div className="basis-1/2">
        <AssignmentsList initialAssignmentList={initialAssignmentList} hook={useAssignmentsList}/>
      </div>
      <div className="basis-1/2">
        {/* TODO: replace w/ a by topic 5-day streak card */}
        <AssignmentsList initialAssignmentList={initialAssignmentList}/>
      </div>
    </div>
  </div>
}
