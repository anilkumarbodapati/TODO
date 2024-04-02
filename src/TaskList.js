import "./TaskList.css"
function AP({todos,de}){
    return(
        <div>
            
            <ul className = "list-group mt-4">
            {
            todos.map((todo,index) =>
            <div key = {index}>
                            <li className= "list-group-item">
                
            
                <p class="as">{todo}</p>
    
                <button class="sd" className = "btn" onClick={()=>de(index)}><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="30px" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></button>
                </li>
            
                

            
           </div> )}
            </ul>
            
        </div>

    ) 
}
export default AP