export default function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span className="task-text">{task.text}</span>
      </label>
      <button onClick={() => onDeleteTask(task.id)} className="delete-btn">
        Delete
      </button>
    </li>
  )
}