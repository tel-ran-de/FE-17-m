import React, {useState} from 'react'
import {connect} from "react-redux"
import {ADD_PERSON} from "../store/typesList";

const AddPerson = ({addPerson}) => {
    const personInit = {
        fullName: '',
        phone: '',
        email: ''
    }

    const [person, setPerson] = useState(personInit)

    const submitHandle = event => {
        event.preventDefault()
        addPerson({...person, id: Date.now()})
        setPerson(personInit)
    }

    const changeHandle = event => {
        setPerson({...person, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={submitHandle}>
            <input type="text" name="fullName" onChange={changeHandle} value={person.fullName} placeholder="Full Name"/>
            <br/>
            <input type="text" name='phone' onChange={changeHandle} value={person.phone} placeholder="Phone"/>
            <br/>
            <input type="text" name="email" onChange={changeHandle} value={person.email} placeholder="Email"/>
            <br/>
            <button type="submit">Add</button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPerson: (person) => dispatch({type: ADD_PERSON, payload: person})
    }
}

export default connect(null, mapDispatchToProps)(AddPerson)