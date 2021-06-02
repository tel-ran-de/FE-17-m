import {CHANGE_COUNTER, DEC, INC} from "./typesList";

const initState = {
    count: 0
}

const reducer = (state = initState, action) => {
    switch (action.type) {

        case INC:
            return {...state, count: state.count + 1}

        case DEC:
            return {...state, count: state.count - 1}

        case CHANGE_COUNTER:
            return {...state, count: state.count + action.payload}

        default:
            return state
    }
}

export default reducer