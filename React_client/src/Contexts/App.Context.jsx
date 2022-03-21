import React, { createContext, useState } from 'react'

export const AppContext = createContext();

const initialData = {
    data: {
        // type:"DU"
    }
}

export default function AppContextProvider({ children }) {
    const [state, setState] = useState(initialData);

    const resetStatus=()=>setState(initialData)
    const updateData = (data) => setState({data})

    return (
        <AppContext.Provider value={{ ...state,updateData,resetStatus }}>
            {children}
        </AppContext.Provider>
    )
}