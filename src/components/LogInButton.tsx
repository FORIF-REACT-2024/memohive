'use client'

import { signIn } from 'next-auth/react'
import React from 'react'

const LogInButton = () => {
  return (
    <button
      type="button"
      className="px-12 mx-auto mt-28 h-12 bg-white rounded-xl drop-shadow-md flex gap-4 justify-center items-center "
      onClick={async () => {
        await signIn('google', { callbackUrl: '/' })
      }}
    >
      <img src="/Google Logo.png" alt="google logo" className="block w-6 h-6" />
      <p>Continue with Google</p>
    </button>
  )
}

export default LogInButton
