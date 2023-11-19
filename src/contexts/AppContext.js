import React, { createContext, useReducer } from 'react';


const initialState = {
    isInitialised: false,
}


const AppContext = createContext({...initialState});
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            // TODO: Add anything here if need to login
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { AppContext, AppProvider };