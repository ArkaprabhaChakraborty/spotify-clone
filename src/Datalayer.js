import React,{createContext,useContext,useReducer} from 'react';

export const DatalayerConstant = createContext();


export const Datalayer = ({ reducer, initialState , children}) => (
    <DatalayerConstant.Provider value={useReducer(reducer,initialState)}>
    { children }
    </DatalayerConstant.Provider> );

export const useStateValue = () => useContext(DatalayerConstant);