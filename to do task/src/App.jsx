import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false }
    setTasks((prev) => [newTask, ...prev])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed
    if (filter === 'active') return !task.completed
    return true
  })

  return (
    <div className="app-card">
      <header>
        <h1>Task Tracker</h1>
        <p>Manage your daily goals easily</p>
      </header>

      <TaskForm onAddTask={addTask} />

      <div className="filter-tabs">
        {['all', 'active', 'completed'].map((type) => {
          const count =
            type === 'all'
              ? tasks.length
              : type === 'active'
              ? tasks.filter((t) => !t.completed).length
              : tasks.filter((t) => t.completed).length

          return (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`filter-btn ${filter === type ? 'active' : ''}`}
            >
              {type} ({count})
            </button>
          )
        })}
      </div>

      <TaskList
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}