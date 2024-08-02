'use client'

import { getUser } from '@/app/actions/user'
import { User } from '@/lib/types'
import { useState } from 'react'

export default function Form() {
  const [username, setUsername] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div className="mt-20">
      <p>Username: {username}</p>
      <button
        className="bg-conblue-300 rounded-md px-2 shadow-2xl shadow-gray-500"
        type="button"
        onClick={async () => {
          setLoading(true)
          console.log('button')
          const user: User = await getUser('66aa522093d7601408509951').then(
            (res) => {
              return res.data
            },
          )
          console.log(user)
          setUsername(user.username)
          setLoading(false)
        }}
      >
        Get User Name
      </button>

      {loading ?? <div>Loading...</div>}
    </div>
  )
}
