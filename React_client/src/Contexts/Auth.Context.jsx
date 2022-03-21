import React, { useState, createContext } from 'react'

export const AuthContext = createContext();

const initialData = {
  data: {
    token: undefined,
    rol: undefined,
    name: undefined
  }
}
export default function AuthContextProvider({ children }) {
  const [state, setState] = useState(initialData)
  
  const updateData = (data) => setState({data})
  
  const logout = () => {
    setState(initialData)
  }
  
  return (
    <AuthContext.Provider value={{ ...state,logout,updateData}}>
      {children}
    </AuthContext.Provider>
  )
}