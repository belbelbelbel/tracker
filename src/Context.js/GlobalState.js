import React ,{ createContext,useReducer} from "react";
import AddReducer from "./AddReducer";

const initialstate = {
    transactions: [
]
}
// create context
export const GlobalContext = createContext(initialstate);
// provide components
export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(AddReducer,initialstate)
    function deleteTransaction(id) {
        dispatch({
            type:"deleteTransaction",
            payload:id,
        });
    }
    function addTransaction(transactions) {
        dispatch({
            type:"addTransaction",
            payload:transactions,
        });
    }
    return( 
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>{children }</GlobalContext.Provider>
    )
}
