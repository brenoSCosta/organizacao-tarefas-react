import Task from './Task'
const Tasks = ({tasks, onDelete, toogle}) => {
    


    return (
        <>
            {tasks.map((task, index)=>(
                <Task key={index} task={task}
                onDelete= {onDelete}
                toogle={toogle}
                />
                
                ))}
        </>
    )
}

export default Tasks
