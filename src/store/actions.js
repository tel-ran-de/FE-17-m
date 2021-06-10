import {ADD_NEW_ITEM, CHANGE_ITEM_STATUS, DELETE_ITEM, FETCH_DATA} from "./typesList";
import {fb} from "../firebase/connect";

export const getDataFromServer = () => {
    return async dispatch => {
        const _data = await fb.firestore().collection('todos').get()
        const _arr = []
        _data.forEach( doc => {
            _arr.push({id: doc.id, ...doc.data() })
        } )
        await dispatch(fetchData(_arr))

    }
}

export const addToDo = data => {
    return async dispatch => {
        const _data = await fb.firestore().collection('todos').add(data)
        await dispatch(addItem({id: _data.id, ...data}))
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

const fetchData = data => {
    return {
        type: FETCH_DATA,
        payload: data
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