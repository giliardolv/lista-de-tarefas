import { ChevronRightIcon, Trash2, Check, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";

function Tasks({ tasks, onTaskClick, deleteTask }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.length === 0 ? (
        <li className="flex flex-col items-center justify-center text-gray-500 py-6 gap-2">
          <ClipboardList size={32} />
          <span>Nenhuma tarefa ainda</span>
        </li>
      ) : (
        tasks.map((task) => (
          <li key={task.id} className="flex gap-1">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-white p-2 rounded-md w-full text-left flex items-center gap-2 ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && <Check />}
              {task.title}
            </button>

            <Button onClick={() => onSeeDetailsClick(task)}>
              <ChevronRightIcon />
            </Button>

            <Button onClick={() => deleteTask(task.id)}>
              <Trash2 />
            </Button>
          </li>
        ))
      )}
    </ul>
  );
}

export default Tasks;
