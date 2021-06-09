import React from 'react'
import {connect} from "react-redux"
import { useForm } from "react-cool-form"
import Field from "./Field";
import {addToDo} from "../store/actions";

const Form = ({addToDoItem}) => {

    const {form, use} = useForm({
        defaultValues: {title: '', completed: false},
        onSubmit: values => {
            values.id = Date.now()
            addToDoItem(values)
        }
    })

    const errors = use("errors")

    return (
        <form ref={form} noValidate>
            <Field
                label="New Item"
                name="title"
                id="title"
                type="text"
                required
                error={errors.title}
            />
            <button>Add</button>
        </form>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        addToDoItem: data => dispatch(addToDo(data))
    }
}
export default connect(null, mapDispatchToProps)(Form)