import React from 'react'
import {connect} from 'react-redux'
import Button from "./components/Button"
// import {INC, DEC} from "./store/typesList"

function App({count}) {
    return (
        <div>
            <Button text="+" changeValue="1"/>
            <span>{count}</span>
            <Button text="-" changeValue="-1"/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increaseCount: () => {
//             dispatch({type: INC})
//         },
//         decreaseCount: () => {
//             dispatch({type: DEC})
//         }
//     }
// }

export default connect(mapStateToProps, null)(App)
