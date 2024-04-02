import { useState } from "react"
import LIst from "./TaskList.js"
import "./TaskInput.css"
function Go(){ 
    const [task,setTask] = useState("")
    const [todos,setodos] = useState([]);
    const submit = e =>{
        e.preventDefault();
        const newTodos = [...todos,task];
        setodos(newTodos)
        setTask("");
    }
    const delet = (indexValue)=>{
        const newTodos = todos.filter((todos,index) => index !== indexValue);
        setodos(newTodos);
    }
    
    return(
        <>
        <h3 class="fi">TODO APPLICATION</h3>
        <div className="container mt-5  w-50">

            
                <form onSubmit={submit}>
                <div className="input-group">
                <input  className = "form-control" value = {task} type="text"onChange={(e)=>
                {
                    let hi =e.target.value
                    setTask(hi)
                }}></input> 
                <button className = "btn btn-primary" onClick={()=>
                {
                    
                }}> ADD</button>
                </div>
                </form>
                <LIst todos = {todos}  de = {delet}/>
            </div>
            </>
        
    )
}
export default Go