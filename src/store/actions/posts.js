import postsInitial, {setPostsToStorage} from '../../data/posts'
import {ADD_POST, FETCH_POSTS} from "../typesList";
import personsInitial, {setPersonsToStorage} from "../../data/persons";


export const getPosts = () =>{
    return async dispatch => {
        try {
            const obj = getObj()
            await dispatch(fetchPosts(obj))
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const addPost = post => {
    return async dispatch => {
        try {
            console.log( post )
            const newPost = await addPostInServer(post)
            await dispatch(addPostInState(newPost))
        } catch (e) {
            console.log(e.message)
        }
    }
}

const fetchPosts = data => {
    return {
        type: FETCH_POSTS,
        payload: data
    }
}

const addPostInState = post => {
    return {
        type: ADD_POST,
        payload: post
    }
}

//Server Side

const getObj = () => {
    return {
        list: [...postsInitial]
    }
}

const addPostInServer = post => {
    const newPost = {
        ...post,
        id: Date.now()
    }
    postsInitial.push(newPost)
    setPostsToStorage(postsInitial)
    return newPost
}