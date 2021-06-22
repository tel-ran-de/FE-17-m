import {ADD_NEW_ITEM, CHANGE_ITEM_STATUS, DELETE_ITEM, FETCH_ITEMS} from "./typesList";

const URL = 'http://localhost:8080/api/todos';


export const getTodo = () => {
    return async dispatch => {
        try {
            const response = await fetch(URL, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()
            await dispatch(fetchingTodos(json))
        } catch (e) {

        }
    }
}

export const addToDo = data => {
    return async dispatch => {
        try {
            const response = await fetch(URL, {
                method: 'POST',
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }, body: JSON.stringify(data)
            })
            const json = await response.json()
            await dispatch(addItem(json))
        } catch (e) {
            console.log(e.message)
        }

    }
}

export const setCompleted = id => {
    return async (dispatch, getState) => {
        try {
            const todo = getState().todos.find(t => t.id === id)
            const response = await fetch(URL + '/' + id, {
                method: 'PUT',
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }, body: JSON.stringify({completed: !todo.completed})
            })
            if ( response.status === 200 ) {
                await dispatch(makeCompleted(id))
            }
        } catch (e) {
            console.log(e.message)
        }

    }
}

export const removeItem = id => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL}/${id}`, {
                method: 'DELETE',
                mode: 'cors',
                cache: 'no-cache',})
            await dispatch(removeToDo(id))
        } catch (e) {
            console.log( e.message)
        }

    }
}

const fetchingTodos = (data) => {
    return {
        type: FETCH_ITEMS,
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