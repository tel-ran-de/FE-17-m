import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import ToDoItem from "./ToDoItem";
import {getTodo} from "../store/actions";

const ToDoList = ({todos, fetchData}) => {

    useEffect(() => {
        fetchData()
    }, []);


    return (
        <ul className="list-group">
            {todos.map(t=> {
                return (<ToDoItem key={t.id} todo={t}/>)
            })}
        </ul>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(getTodo())
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)