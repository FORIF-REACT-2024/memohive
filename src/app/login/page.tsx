import React from 'react'
import Layer from '@/components/Layer'
import LandingMemo from '@/components/Landing_Memo'
import LogInButton from '@/components/LogInButton'

const Login = () => {
  return (
    <div>
      <Layer>
        <div className="relative w-96 top-40 mx-auto">
          <LandingMemo>dkdkdk</LandingMemo>
          <LandingMemo color={'blue'} classname="absolute left-16 top-16">
            dkdkdk
          </LandingMemo>
          <LogInButton />
        </div>
      </Layer>
    </div>
  )
}

export default Login
