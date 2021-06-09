import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import ToDoItem from "./ToDoItem";

const ToDoList = ({todos}) => {

    useEffect(() => {
    }, [todos]);


    return (
        <ul className="list-group">
            {todos.map(t=> {
                console.log( t )
                return (<ToDoItem key={t.id} todo={t}/>)
            })}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(ToDoList)