import react,{useState} from 'react'
function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");
    function handelInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        if(newTask.trim() !== ""){
        setTasks( t => [...t,newTask]);
        setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_element,i) =>  i !== index );
        setTasks(updatedTasks);


    }
    function moveTaskUp(index){
        if(index > 0 ){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index -1 ] ,updatedTasks[index]];
            setTasks(updatedTasks);

        }

    }
    function moveTaskDown(index){
        if(index < tasks.length -1 ){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index +1]] = [updatedTasks[index+1] ,updatedTasks[index ]];
            setTasks(updatedTasks);

        }

    }
    return(
        <>
        <div className='to-do-list'>
            <h1>TO-DO-LIST</h1>
            <div>
                <input type='text' placeholder='enter a task ...' value={newTask} onChange={handelInputChange}/>
                <button className='add-button' onClick={addTask}>add a task</button>
            </div>
            <ol>
                {tasks.map((task, index) =><li key={index}><span className='text'>{task}</span>
                <button className='delete-button' onClick={() =>deleteTask(index)}>Delete</button>
                <button className='move-button' onClick={() =>moveTaskUp(index)}>👆🏿</button>
                <button className='move-button' onClick={() =>moveTaskDown(index)}>👇🏿</button>
                </li>) }
            </ol>
    
        </div>
        </>
    )

}
export default ToDoList