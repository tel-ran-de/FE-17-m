import {
    ADD_NEW_PERSON,
    CHANGE_ACTIVE_PERSON,
    DELETE_PERSON,
    EDIT_PERSON,
    FETCH_PERSONS,
    SET_PERSON_BY_ID
} from "../typesList";
import personsInitial, {activePersonId, setActivePersonIdToStorage, setPersonsToStorage} from "../../data/persons";

export const changeActivePersonId = personId => {
    return dispatch => {
        try {
            setActivePersonIdToStorage(personId)
            dispatch(setActivePerson(personId))
        } catch (err) {
            console.log(err.message)
        }

    }
}

export const getPersons = () => {
    return dispatch => {
        try {
            const obj = getObj()
            dispatch(fetchPersons(obj))
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const addNewPerson = data => {
    return async dispatch => {
        try {
            const person = await createPerson(data)
            await dispatch( addPerson(person) )
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const deletePerson = personId => {
    return async dispatch => {
        try {
            await deleteFromServer(personId)
            await dispatch( deletePersonFromState(personId) )
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const editPerson = person => {
    return async dispatch => {
        try {
            await editPersonInServer(person)
            await dispatch(editPersonInState(person))
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const setPersonById = personId => {
    return dispatch => {
        try {
            dispatch( setPersonByIdInState(personId) )
        } catch (e) {
            console.log(e.message)
        }
    }
}

const setPersonByIdInState = personId => {
    return {
        type: SET_PERSON_BY_ID,
        payload: personId
    }
}

const setActivePerson = personId => {
    return {
        type: CHANGE_ACTIVE_PERSON,
        payload: personId
    }
}

const fetchPersons = obj => {
    return {
        type: FETCH_PERSONS,
        payload: obj
    }
}

const addPerson = person => {
    return {
        type: ADD_NEW_PERSON,
        payload: person
    }
}

const editPersonInState = person => {
    return {
        type: EDIT_PERSON,
        payload: person
    }
}



const deletePersonFromState = personId => {
    return {
        type: DELETE_PERSON,
        payload: personId
    }
}


// Server emulations


const createPerson = data => {
    const newPerson = {
        ...data,
        id: Date.now()
    }
    const persons = personsInitial
    persons.push(newPerson)
    setPersonsToStorage(persons)
    return newPerson
}

const editPersonInServer = person => {
    const idx = personsInitial.findIndex(p=>p.id === person.id)
    if (idx === -1) return null
    personsInitial.splice(idx, 1, person)
    setPersonsToStorage(personsInitial)
}

const getObj = () => {
    return {
        list: [...personsInitial],
        activePerson: +activePersonId
    }
}

const deleteFromServer = personId => {
    const idx = personsInitial.findIndex(p=>p.id===personId)
    if (idx === -1) return null
    personsInitial.splice(idx,1)
    setPersonsToStorage(personsInitial)
}