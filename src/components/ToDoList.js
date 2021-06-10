import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import ToDoItem from "./ToDoItem";
import {getDataFromServer} from "../store/actions";

const ToDoList = ({todos, getTodos}) => {

    useEffect(() => {
        getTodos()
    }, []);


    return (
        <ul className="list-group">
            {todos.map(t=> {
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

const mapDispatchToProps = dispatch => {
    return {
        getTodos: () => dispatch(getDataFromServer())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)