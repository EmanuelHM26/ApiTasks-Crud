import { useTasks } from "../context/TasksContext"
import { useEffect } from "react"
import TaskCard from '../components/TaskCard'

function TasksPage() {
  const {getTasks, tasks} = useTasks()

  useEffect(() => {
    getTasks()
  }, [])

  if (tasks.length === 0) return <h1>No tasks</h1>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {
        tasks.map(task => (
          <TaskCard key={task._id} task={task} />
        ))
      }
    </div>
  )
}

export default TasksPage;
