const {ADD_PERSON} = require("./typesList");
const stateInit = {
    persons: []
}

const reducer = (state = stateInit, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return {...state, persons: [...state.persons, action.payload]}

        default:
            return state
    }
}

export default reducer