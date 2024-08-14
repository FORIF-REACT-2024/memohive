import React from 'react'
import LandingMemo from '@/components/Landing_Memo'
import LogInButton from '@/components/LogInButton'
import { checkLogin } from '../actions/auth'

const Login = async () => {
  await checkLogin()

  return (
    <div className="w-full flex items-center min-h-svh flex-col h-svh text-sm gap-6">
      <div className="relative w-96 top-40 mx-auto">
        <LandingMemo />
        <LandingMemo color="blue" classname="absolute left-16 top-16" />
        <LogInButton />
      </div>
    </div>
  )
}

export default Login
