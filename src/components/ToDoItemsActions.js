import React from "react";
import {connect} from 'react-redux'
import {removeItem, setCompleted} from "../store/actions";
const ToDoItemsActions = ({id, changeCompleted, deleteToDo}) => {
    const clickCompletedHandle = event => {
        event.preventDefault()
        changeCompleted(id)
    }

    const clickDeleteHandle = event => {
        event.preventDefault()
        deleteToDo(id)
    }
    return (
        <div>
            <button
                onClick={clickCompletedHandle}
                className="btn btn-outline-primary btn-sm mx-2">
                <i className="bi bi-check2-square"></i> Check
            </button>

            <button
                onClick={clickDeleteHandle}
                className="btn btn-outline-danger btn-sm">
                <i className="bi bi-trash"></i> Delete
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCompleted: id => dispatch(setCompleted(id)),
        deleteToDo: id => dispatch( removeItem(id) )
    }
}
export default connect(null, mapDispatchToProps)(ToDoItemsActions)