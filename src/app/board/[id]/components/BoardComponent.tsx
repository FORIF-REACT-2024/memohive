'use client'

import { Memo } from '@/lib/types'
import { useState } from 'react'

export default function BoardComponent({
  initialMemo,
}: {
  initialMemo: Memo[]
}) {
  const [memos, setMemos] = useState<Memo[]>(initialMemo)

  return (
    <div className="flex flex-row w-full mx-20 bg-conblue-50 rounded-lg">
      <div className="flex flex-col gap-4 items-center mx-10 my-14">
        <div className="text-conblue-700 text-5xl">Board1</div>
        <div className="text-conblue-400 text-xl">Summary</div>
        <button
          type="button"
          className="bg-white font-light px-4 py-2 rounded-lg text-center drop-shadow-xl"
        >
          +
        </button>
      </div>
      {memos?.map((memo: Memo, index: number) => {
        return (
          <div key={index} className="text-conblue-400 text-xl">
            {memo.document}
          </div>
        )
      })}
    </div>
  )
}
