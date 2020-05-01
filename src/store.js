import React, {createContext, useReducer} from "react";
import Reducer from './Reducer'

let dt = window.localStorage.getItem('darktheme')
if (dt === null) {
    dt = false;
} else {
    dt = JSON.parse(dt)
}

const initialState = {
    value: 'Country',
    darktheme:  dt || false
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;