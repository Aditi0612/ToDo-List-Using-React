import React from 'react'

const Todo_item = ({todo}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
    </div>
  )
}

export default Todo_item
