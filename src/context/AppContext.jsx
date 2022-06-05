import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
    isAuth: false,
    token: null
}

const reducer = (state, action) => {
    switch(action.type){
        case "LOGIN_SUCCESS": {
            return {
                ...state,
                isAuth: true,
                token: action.token
            }
        }
        case "LOGOUT_SUCCESS": {
            return {
                ...state,
                isAuth: false,
                token: null
            }
        }
        case "LOGIN_FAILURE": {
            return {
                ...state,
                isAuth: false,
                token: null
            }
        }
        default: {
            return state;
        }
    }
}

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state)

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};
