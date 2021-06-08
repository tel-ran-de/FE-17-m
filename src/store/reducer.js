import {
    ADD_NEW_PERSON,
    CHANGE_ACTIVE_PERSON, CHANGE_EDIT_MODE,
    DELETE_PERSON,
    EDIT_PERSON,
    FETCH_PERSONS,
    GET_PERSON_BY_ID, SET_PERSON_BY_ID
} from "./typesList";
import {setPersonsToStorage} from "../data/persons";

const stateInit = {
    persons: {
        list: [],
        activePerson: null,
        editMode: false,
        personById: {}
    }
}

let idx
let _arr

export const reducer = (state = stateInit, action) => {
    switch (action.type) {
        case FETCH_PERSONS:
            return {...state, persons: {...state.persons, ...action.payload}}

        case ADD_NEW_PERSON:

            return {
                ...state,
                persons: {...state.persons, list: [...state.persons.list, action.payload]}
            }

        case CHANGE_ACTIVE_PERSON:
            return {...state, persons: {...state.persons, activePerson: action.payload}}

        case DELETE_PERSON:
            idx = state.persons.list.findIndex(p=>p.id===action.payload)
            if (idx === -1) return state
            _arr = [...state.persons.list]
            _arr.splice(idx,1)
            return { ...state, persons: {...state.persons, list: _arr } }

        case EDIT_PERSON:

            idx = state.persons.list.findIndex(p=>p.id===action.payload.id)
            if (idx===-1) return state
            _arr = [...state.persons.list]
            _arr.splice(idx, 1, action.payload)
            return {...state, persons: {...state.persons, list: _arr}}

        case SET_PERSON_BY_ID:
            idx = state.persons.list.findIndex(p=>p.id===action.payload)
            if (idx===-1) return {...state, persons: {...state.persons, personById: {}}}
            return {...state, persons: {...state.persons, personById: state.persons.list[idx]}}

        case CHANGE_EDIT_MODE:
            return {...state, persons: {...state.persons, editMode: !state.persons.editMode}}


        default:
            return state
    }
}