import React from 'react'
import {connect} from 'react-redux'
import ToDoItem from "./ToDoItem";

const ToDoList = ({todos}) => {

    return (
        <ul>
            {todos.map(t=><ToDoItem key={t.id} todo={t} />)}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(ToDoList)