import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/Store'

export default function PrivateRoute({children}) {
    const {log} = useContext(AuthContext)

    console.log(log)

  if(log === false){
    return <Navigate to='/login'></Navigate>
  }
  return children;  
}
