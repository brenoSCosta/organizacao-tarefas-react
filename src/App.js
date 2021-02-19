import Header from './components/Header'
import Tasks from './components/Tasks'
import React from 'react'
import { useState } from 'react'


function App() {
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

   // Deletar uma tarefa
   const deleteTask = (id)=>{
      setTasks(tasks.filter((task)=> task.id !== id))
   }

   // Alterar a lembraça da tarefa (true/false)
   const toggleReminder =(id)=>{
      setTasks(tasks.map((task) => task.id === id ?
      {
         ...task, reminder: !task.reminder
      }
      : task))
   }

  return (
    <div className="container">
      <Header title='Header'/>
      {tasks.length> 0 ?
     <Tasks tasks = {tasks} onDelete={deleteTask} toogle={toggleReminder}/>
     : 'Sem tarefas'
   }
    </div>
    
  );
}

export default App;
