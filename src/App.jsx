import { useState } from "react"
import  "./style.css"
export default function App(){
  const [newItem, setNewItem] = useState("");
  const [todo, setTodo] = useState([]);
  function handleSubmit(e){
    e.preventDefault();
    setTodo((currentTodo)=>{
      return [...currentTodo,{id:crypto.randomUUID(),title:newItem,completed:false} ]
    });
    setNewItem("");
  };
  function toggleCheck(id, completed){
    setTodo(currentTodo=>{
      return currentTodo.map(todo=>{
        if(todo.id===id){
          return{...todo,completed};
        }
        return todo;
      });
    });
  };

  function deleteItem(id){
    setTodo(currentTodo=>{
      return currentTodo.filter(todo=>todo.id !== id);
    });
  };

  return <><form onSubmit={handleSubmit}>
    <div className="title center">TO DO LIST</div>
    <div className="headin center">
      <label htmlFor="name">New Item</label>
      <input className="ip" value= {newItem} 
      onChange={e=>setNewItem(e.target.value)} 
      type="text" id="name" required={true} />
    </div>
    <div className="center">
      <button className="addbtn">+ADD</button>
    </div>
  </form>
  <div className="list center">
    <h1>Tasks</h1>
    <ul>
      {todo.length === 0 && "No Todos!"}
      {todo.map(todo=>{
        return (<li key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.completed} onChange={ e => toggleCheck(todo.id,e.target.checked)} />
            {todo.title}
          </label>
          <button onClick={()=>{deleteItem(todo.id);console.log(todo.id)}} className="dbtn">X</button>
        </li>)
      })}
    </ul>
  </div> 
  </>
}
