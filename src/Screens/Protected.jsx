import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const Protected = () => {
  return localStorage.getItem("userID") ? <Outlet /> : <Navigate to={"/"} />
}
