const redux = require('redux')

const initState = {
    count: 0,
    person: {},
    persons: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INC' :
            return {...state, count: state.count + 1}
        case 'DEC' :
            return {...state, count: state.count - 1}
        case 'ADD10':
            return {...state, count: state.count + action.payload}
        case 'SET_PERSON':
            return {...state, person: action.payload}
        case 'ADD_PERSON':
            const _arr = [...state.persons, action.payload]
            return {...state, persons: _arr}
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => console.log(store.getState()))


store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'DEC'})
store.dispatch({type: 'ADD10', payload: 10})
store.dispatch({type: 'SET_PERSON', payload: {name: 'Vanya', age: 10}})
store.dispatch({type: 'ADD_PERSON', payload: store.getState().person})
store.dispatch({type: 'ADD_PERSON', payload: {name: 'Manya', age: 7}})