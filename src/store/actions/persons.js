import {ADD_NEW_PERSON, CHANGE_ACTIVE_PERSON, DELETE_PERSON, FETCH_PERSONS} from "../typesList";
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