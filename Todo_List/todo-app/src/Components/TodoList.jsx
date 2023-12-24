import { useState } from "react"
import "./Todo.css"

const TodoList = () => {
    const [inputValue, SetInputValue] = useState("")
    const [todos, setTodos] = useState([])

    function handleInputChange (e){
        SetInputValue(e.target.value)
    }

    const handelAddTodos = ()=>{
        if(inputValue !== ""){
            const newTodo = {
                id:Date.now(),
                text:inputValue,
                isCompleted: false
            };
            setTodos([...todos,newTodo])
            SetInputValue("")
        }
    }

    const handelToggleChange = (id)=>{
        const updatedTodos = todos.map((item)=>{
            if(item.id == id){
                return{
                    ...item, isCompleted: !item.isCompleted
                } 
            }
            return item
        })
        console.log(updatedTodos)
        setTodos(updatedTodos)
    }

    const handleRemoveTodo = (id) =>{
        const filteredTodos = todos.filter((item)=>(
            item.id !== id 
        )) 

        setTodos(filteredTodos)
    }

  return (
    <>
        <div className="todo-container">
            <h1>My Todo List</h1>
            <div className="todo-input">
            <input type="text" 
            value={inputValue}
            placeholder="Enter a List"
            onChange={handleInputChange}
            />
            <button onClick={handelAddTodos}><span>Add</span></button>
            </div>
            
            <ul className="todo-list">
                {
                    todos.map((item,index)=>(
                        <li className={`todo-item ${item.isCompleted?"completed":" "}`}>
                        <div className="list-left">
                        <input type="checkbox" onChange={()=>handelToggleChange(item.id)}></input>
                        <span className="todo-text">{item.text}</span></div>
                        <button onClick={()=>handleRemoveTodo(item.id)}><span>Remove</span></button>
                        </li>
                    ))
                }
            </ul>
        </div>
    </>
  )
}

export default TodoList