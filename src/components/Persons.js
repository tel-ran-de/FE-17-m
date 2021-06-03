import React from "react"
import {connect} from "react-redux"

const Persons = ({persons}) => {

    const renderPersons = () => {
        if (persons === undefined) return null
        return persons.map(p => (
            <li key={p.id}>{p.fullName} {p.phone} <a href={`mailto:${p.email}`}>{p.email}</a></li>
        ))
    }

    return (
        <ul>
            {renderPersons()}
        </ul>

    )
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

export default connect(mapStateToProps, null)(Persons)