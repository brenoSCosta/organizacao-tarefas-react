import Header from './components/Header'
import Tasks from './components/Tasks'
import React from 'react'
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './pages/About'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
   const [visibilityAdd,setVisibilityAdd] = useState(false)
   const [tasks, setTasks] = useState([])
      
   useEffect(() => {
      const getTasks = async () => {

         const tasksFromServer = await fetchTasks()
         setTasks(tasksFromServer)
      }
      
      getTasks()
   }, [])
   
  // Fetch
   const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      return data
   }
  // Pegar apartir de um id
   const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      return data
   }
   
   // Adicionar tarefa
   const addTask = async (task)=>{
      
      const res = await fetch('http://localhost:5000/tasks',
      {
         method: 'POST',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(task)
      }) 

      const data =  await res.json()

      setTasks([...tasks,data])
   }
   // Deletar uma tarefa
   const deleteTask = async (id)=>{

      await fetch(`http://localhost:5000/tasks/${id}`,
      {
         method:'DELETE'
      }
      )

      setTasks(tasks.filter((task)=> task.id !== id))
   }
   // Adicionar uma tarefa

   // Alterar a lembraça da tarefa (true/false)
   const toggleReminder = async (id)=>{

      const taskToToggle = await fetchTask(id)
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder}

      const res = await fetch(`http://localhost:5000/tasks/${id}`,
      {
         method: 'PUT',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(updTask)
      }) 
  

      const data = await res.json()

      setTasks(
         tasks.map((task) =>
         task.id === id ? { ...task, reminder: data.reminder } : task
         )
       )
   }
   
   const addTaskVisibility =()=>{
      setVisibilityAdd(!visibilityAdd)
   }

   return (
      <Router>
         <div className="container">
            <Header title='Tarefas'
               addTaskVisibility={addTaskVisibility}
               btTxtAdd={visibilityAdd}/>
           
         <Route path='/' exact render={(props)=>
         (  <>
               <AddTask onAdd={addTask}
               visibility={visibilityAdd}></AddTask>
               {tasks.length> 0 ?
               <Tasks tasks = {tasks} 
                  onDelete={deleteTask} 
                  toogle={toggleReminder}/>
               : 'Sem tarefas'
               }
            </>
         )}/>
         <Route path='/about' component={About}/>
         <Footer/>
         </div>
      </Router>
   );
   }

export default App;
