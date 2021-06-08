import {ADD_POST, CHANGE_ADD_POST, FETCH_POSTS} from "../typesList";



export const PostsReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, list: [...state.list, action.payload]
            }
        case FETCH_POSTS:
            return {...state, ...action.payload}
        case CHANGE_ADD_POST:
            return {...state,  addPostMode: !state.addPostMode}
        default:
            return state
    }
}