import { ChevronRightIcon, Trash2 } from "lucide-react";

function Tasks({ tasks, onTaskClick, deleteTask }) {
  return (
    <ul
      className="space-y-4 p-6 bg-slate-200 rounded-md shadow
    "
    >
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-1">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${task.isCompleted && "line-through"}`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
