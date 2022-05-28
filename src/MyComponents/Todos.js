import React from 'react'
import Todo_item from "../MyComponents/Todo_item"


const Todos = (props) => {
  return (
    <div className="container">
      <h3>Todos List</h3>
      <Todo_item todo={props.Todos[0]}/>
    </div>
  )
}
 
export default Todos
