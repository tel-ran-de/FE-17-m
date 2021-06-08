import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import RootReducer from "./reducers/RootReducer";
import InitialState from "./initialState";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    // applyMiddleware(thunk),
    applyMiddleware(thunk, logger),
    // other store enhancers if any
);

export const store = createStore(RootReducer, InitialState, enhancer)