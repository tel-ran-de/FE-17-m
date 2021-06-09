import React from 'react'

const ToDoItem = ({todo}) => {

    return (
        <li>{todo.title} <button>Check</button> <button>delete</button></li>
    )
}

export default ToDoItem