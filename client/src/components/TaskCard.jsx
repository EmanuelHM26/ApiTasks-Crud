import { useTasks } from "../context/TasksContext";
import {Link} from 'react-router-dom'
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  return (
    <div className="bg-zinc-800 w-full max-w-md rounded-md p-10 my-2">
      <header className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold my-2">Title: {task.title}</h1>
      </header>
      <p className="text-slate-300 my-2">Description: {task.description}</p>
      <p>
        {dayjs(task.date).utc().format("DD/MM/YYYY")}
      </p>
      <div className="flex justify-between mt-4">
        <button
          className="bg-red-500 text-white px-8 py-2 rounded"
          onClick={() => {
            deleteTask(task._id);
          }}
        >
          Delete
        </button>
        <Link
          className="bg-blue-500 text-white px-10 py-2 rounded"
          to={`/tasks/${task._id}`}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default TaskCard;
