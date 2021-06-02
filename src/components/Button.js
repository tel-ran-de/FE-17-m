import React from "react"
import {connect} from "react-redux"
import {CHANGE_COUNTER} from "../store/typesList";

const Button = ({text, changeValue, clickHandler}) => {



    return (
        <button onClick={() => { clickHandler(changeValue) }} >{text}</button>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickHandler: (changer) => dispatch({type: CHANGE_COUNTER, payload: +changer })
    }
}

export default connect(null, mapDispatchToProps)(Button)