import React, { createContext, useContext } from 'react';

import { useReducerAsync } from 'use-reducer-async';
import {reducer, asyncActions} from "./reducers"

const StoreContext = createContext();
const { Provider } = StoreContext;

const initialState = {
    success: "",
    error: "",
}

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducerAsync(reducer, initialState, asyncActions)

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };