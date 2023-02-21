import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Bathe Momo',
        day: 'Feb 20th at 11:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Give Medication to Momo',
        day: 'Feb 20th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Feed Momo and Yuzu',
        day: 'Feb 20th at 4:00pm',
        reminder: true,
    },
  ])
  
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle = {toggleReminder}/> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
