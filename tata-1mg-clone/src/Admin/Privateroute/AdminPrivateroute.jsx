import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function AdminPrivateroute({children}) {
  const {isAuth} = useSelector((state)=>{return state.AdminAuth})

  if(!isAuth){
    return <Navigate to="/adminlogin" />
  }

  return children
}

export default AdminPrivateroute