import React, {useState} from "react";

const MyComponent = () => {

	const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")
    
	


    function handleInputChange(event){
		setNewTask(event.target.value)
	}

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")   
        }
		
	}

    function deleteTask(index){
		const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
	}

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index -1]] = [updatedTasks[index -1], updatedTasks[index]];

            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }
	



	return (
	    <div className="todo-list">
            <h1>to do list</h1>

            <div>
                 <input type="text" onChange={handleInputChange} value={newTask} placeholder="enter a task..." />
                 <button className="add-btn" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>delete</button>
                        <button className="move-btn" onClick={() => moveTaskUp(index)}>☝️</button>
                        <button className="move-btn" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                )}
                
            </ol>

            
        </div>
	)
}

export default MyComponent
