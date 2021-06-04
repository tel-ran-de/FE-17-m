import React, {useEffect} from "react"
import {connect} from "react-redux"
import {CHANGE_ACTIVE_PERSON, FETCH_PERSONS} from "../../store/typesList";
import personsInitial, {activePersonId, setActivePersonIdToStorage} from "../../data/persons";

const SelectActivePerson = ({persons, activePerson, getPersonsObject, changeActivePerson}) => {

    useEffect(() => {
        const obj = {
            list: personsInitial,
            activePerson: +activePersonId
        }
        getPersonsObject(obj)
    }, []);


    const changeSelectValue = event => {
        changeActivePerson(+event.target.value)
        setActivePersonIdToStorage(+event.target.value)
    }

    return  persons.length ? (
        <select onChange={changeSelectValue} defaultValue={activePerson || null}>
            <option value='-1'>Choose a user</option>
            {persons.map( p => (<option key={p.id} value={p.id}>{p.fName} {p.lName}</option>) )}
        </select>
    ) : null
}

const mapStateToProps = state => {
    return {
        persons: state.persons.list,
        activePerson: state.persons.activePerson
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPersonsObject: personsObject => dispatch({type: FETCH_PERSONS, payload: personsObject}),
        changeActivePerson: newId => dispatch({type: CHANGE_ACTIVE_PERSON, payload: newId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(SelectActivePerson)