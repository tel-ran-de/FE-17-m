import {ADD_NEW_PERSON} from "./typesList";
import {store} from "./store";

export const addPersons = person => {
    person.id = Date.now()
    store.dispatch({type: ADD_NEW_PERSON, person})
}