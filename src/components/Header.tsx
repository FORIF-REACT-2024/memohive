'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const { data: session } = useSession()

  return (
    <div className="flex justify-center">
      <div className="z-50 fixed flex items-center justify-between top-4 w-full max-w-container h-12 mx-auto md:mx-8 px-4 rounded-lg drop-shadow-md bg-gradient-to-r from-lola-100 to-conblue-100">
        <Link href="/" className="text-2xl">
          Memo
        </Link>

        {session ? (
          <div className="flex flex-row gap-4">
            <div className="text-2xl"> {session.user?.name} </div>
            <button
              type="button"
              className="text-xl font-extralight"
              onClick={() => {
                signOut({ callbackUrl: '/' })
              }}
            >
              LogOut
            </button>
          </div>
        ) : (
          <Link href="/login" className="text-xl font-extralight">
            Login
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
