import React from 'react'
import {connect} from "react-redux"
import { useForm } from "react-cool-form"
import Field from "./Field";
import {addToDo} from "../store/actions";

const Form = ({addToDoItem}) => {

    const {form, use} = useForm({
        defaultValues: {title: '', completed: false},
        onSubmit: (values, {reset}) => {
            values.id = Date.now()
            addToDoItem(values)
            reset()
        }
    })

    const errors = use("errors")

    return (
        <form ref={form} className="w-50 mx-auto" noValidate>
            <Field
                label="Enter New Item"
                name="title"
                id="title"
                type="text"
                required
                error={errors.title}
            />
        </form>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        addToDoItem: data => dispatch(addToDo(data))
    }
}
export default connect(null, mapDispatchToProps)(Form)