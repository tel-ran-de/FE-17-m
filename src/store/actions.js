import {ADD_NEW_ITEM, CHANGE_ITEM_STATUS, DELETE_ITEM} from "./typesList";

export const addToDo = data => {
    return async dispatch => {
        await dispatch(addItem(data))
    }
}

export const setCompleted = id => {
    return async dispatch => {
        await dispatch(makeCompleted(id))
    }
}

export const removeItem = id => {
    return async dispatch => {
        await dispatch( removeToDo(id))
    }
}

const makeCompleted = id => {
    return {
        type: CHANGE_ITEM_STATUS,
        payload: id
    }
}

const addItem = data => {
    return {
        type: ADD_NEW_ITEM,
        payload: data
    }
}

const removeToDo = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}