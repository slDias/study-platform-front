import DailyTasksList from "@/components/DailyTasksList";
import TaskCheckbox from "@/components/TaskCheckbox";

export default function Home() {
  /* 
  todo:
  - move this list to a mock api
  - change the checkbox to be an actual clickable checkbox when not done
  - it should have a X when a day was missed in a summary/freq chart later
  */
  let taskList: Array<StudyTask> = [
    {
      title: "A task title",
      isFinished: true,
      url: "http://localhost:3000/asdf"
    },
    {
      title: "A 2nd task title",
      isFinished: false,
      url: "http://localhost:3000/dfed"
    },
    {
      title: "A 3rd and final task title",
      isFinished: true,
    },
  ]
  return (
    <div className="flex justify-center">
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
  );
}
