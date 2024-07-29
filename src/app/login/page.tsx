import React from 'react'
import Layer from '@/components/Layer'
import LandingMemo from '@/components/Landing_Memo'
import LogInButton from '@/components/LogInButton'

const Login = () => {
  return (
    <div>
      <div className="relative w-96 top-40 mx-auto">
        <LandingMemo></LandingMemo>
        <LandingMemo
          color={'blue'}
          classname="absolute left-16 top-16"
        ></LandingMemo>
        <LogInButton />
      </div>
    </div>
  )
}

export default Login
