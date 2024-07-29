import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="fixed flex items-center top-4 w-full max-w-container h-12 mx-auto md:mx-8 px-4 rounded-lg drop-shadow-md bg-gradient-to-r from-lola-100 to-conblue-100">
        <Link href="/" className="text-2xl ">
          Memo
        </Link>
      </div>
    </div>
  )
}

export default Header
