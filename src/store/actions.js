import {ADD_NEW_ITEM} from "./typesList";

export const addToDo = data => {
    return async dispatch => {
        await dispatch(addItem(data))
    }
}

const addItem = data => {
    return {
        type: ADD_NEW_ITEM,
        payload: data
    }
}