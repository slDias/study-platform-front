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
      <div className="basis-10/12 flex flex-col gap-2">
        <div>Daily tasks</div>
        <hr />
        {taskList.map((task, i) => <TaskCheckbox key={i} task={task} />)}
      </div>
    </div>
  );
}
