'use client'

import { useState } from 'react'

export default function ChangeUserName({ name }: { name: string }) {
  const [inputName, setInputName] = useState(name)

  return (
    <input
      type="text"
      onChange={(e) => setInputName(e.target.value)}
      defaultValue={inputName}
    />
  )
}
