import Task from './Task'
const Tasks = ({tasks, onDelete, toogle}) => {
    


    return (
        <>
            {tasks.map((task)=>(
                <Task key={task.id} task={task}
                onDelete= {onDelete}
                toogle={toogle}
                />
                
                ))}
        </>
    )
}

export default Tasks
