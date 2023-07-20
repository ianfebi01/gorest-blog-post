"use client"
import { logIn } from '@/redux/feature/auth-slice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import React from 'react'
import { useDispatch } from 'react-redux'

const Login = () => {

    const dispatch = useDispatch<AppDispatch>()
    const username = useAppSelector((state)=> state.authReducer.value.username)

    const onClickLogin = ()=>{
        dispatch(logIn('ianfebi'))
    }
  return (
    <div>
      <button onClick={onClickLogin}>Login</button>
      <span>{username}</span>
    </div>
  )
}

export default Login
