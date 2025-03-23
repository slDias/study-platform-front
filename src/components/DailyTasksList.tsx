import TaskCheckbox from "./TaskCheckbox";


type DailyTasksListProps = {
  taskList: Array<StudyTask>,
}

export default ({taskList}: DailyTasksListProps) => {
  return (<div className="flex flex-col gap-2">
    <div>Daily tasks</div>
    <hr />
    {taskList.map((task, i) => <TaskCheckbox key={i} task={task} />)}
  </div>)
}