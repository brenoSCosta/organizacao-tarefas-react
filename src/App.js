import Header from './components/Header'
import Tasks from './components/Tasks'
import React from 'react'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [visibilityAdd,setVisibilityAdd] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
           id: 1,
           text: 'Ida para faculdade',
           day: '1 de março as 14h',
           reminder: true,
        },
        {
           id: 2,
           text: 'Ida para festa',
           day: '1 de março as 22h',
           reminder: true,
        },
        {
           id: 3,
           text: 'Caminhada',
           day: '1 de março as 8h',
           reminder: false,
        },
        {
           id: 4,
           text: 'Ida para Igreja',
           day: '12 de março as 10h',
           reminder: false,
        },
        
   ])
   // Adicionar tarefa
   const addTask = (task)=>{
      const id = tasks.length + 1
      const newTask = {id,... task}
      setTasks([...tasks,newTask])
   }
   // Deletar uma tarefa
   const deleteTask = (id)=>{
      setTasks(tasks.filter((task)=> task.id !== id))
   }
   // Adicionar uma tarefa
  
   // Alterar a lembraça da tarefa (true/false)
   const toggleReminder =(id)=>{
      setTasks(tasks.map((task) => task.id === id ?
      {
         ...task, reminder: !task.reminder
      }
      : task))
   }
   
   const addTaskVisibility =()=>{
      setVisibilityAdd(!visibilityAdd)
   }

  return (
    <div className="container">
      <Header title='Header' addTaskVisibility={addTaskVisibility}/>
      <AddTask onAdd={addTask} visibility={visibilityAdd}></AddTask>
      {tasks.length> 0 ?
     <Tasks tasks = {tasks} onDelete={deleteTask} toogle={toggleReminder}/>
     : 'Sem tarefas'
   }
    </div>
    
  );
}

export default App;
