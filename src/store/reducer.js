import {ADD_NEW_ITEM, CHANGE_ITEM_STATUS, DELETE_ITEM} from "./typesList";

const initialState = {
    todos: []
}

let _arr, idx

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_NEW_ITEM:
            return {...state, todos: [...state.todos, action.payload]}

        case CHANGE_ITEM_STATUS:
            _arr = [...state.todos]
            idx = _arr.findIndex(t=>t.id===action.payload)
            if ( idx === -1 ) return state
            _arr[idx].completed = !_arr[idx].completed
            return {...state, todos: [..._arr]}

        case DELETE_ITEM:
            _arr = [...state.todos]
            idx = _arr.findIndex(t=>t.id===action.payload)
            if ( idx === -1 ) return state
            _arr.splice(idx, 1)
            return {...state, todos: [..._arr]}

        default:
            return state
    }
}