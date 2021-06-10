import {ADD_NEW_ITEM, CHANGE_ITEM_STATUS, DELETE_ITEM, FETCH_DATA} from "./typesList";
import {fb} from "../firebase/connect";

export const getDataFromServer = () => {
    return async dispatch => {
        try {
            const _data = await fb.firestore().collection('todos').get()
            const _arr = []
            _data.forEach( doc => {
                _arr.push({id: doc.id, ...doc.data() })
            } )
            await dispatch(fetchData(_arr))
        } catch (e) {
            console.log( e.message );
        }
    }
}

export const addToDo = data => {
    return async dispatch => {
        try {
            const _data = await fb.firestore().collection('todos').add(data)
            const _doc = await fb.firestore().collection('todos').doc(_data.id).get()
            await dispatch(addItem({id: _data.id, ..._doc.data()}))
        } catch (e) {
            console.log( e.message )
        }
    }
}

export const setCompleted = id => {
    return async dispatch => {
        try {
            const _doc =await fb.firestore().collection('todos').doc(id).get()
            await fb.firestore().collection('todos').doc(id).update({ completed: !_doc.data().completed })
            await dispatch(makeCompleted(id))
        } catch (e) {
            console.log( e.message )
        }
    }
}

export const removeItem = id => {
    return async dispatch => {
        try {
            await fb.firestore().collection('todos').doc(id).delete()
            await dispatch( removeToDo(id))
        } catch (e) {
            console.log( e.message )
        }

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