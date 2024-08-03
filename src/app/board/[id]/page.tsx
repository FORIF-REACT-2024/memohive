'use client'

import { getBoardMemos } from '@/app/actions/memo'
import { Memo } from '@/lib/types'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Board() {
  const params = useParams<{ id: string }>()
  const [memos, setMemos] = useState<Memo[]>()

  useEffect(() => {
    const getMemos = async () => {
      const res = await getBoardMemos(params.id)

      if (res.code === '200') {
        setMemos(res.data)
      } else {
        console.log(res)
      }
    }

    getMemos()
  }, [params.id])

  return (
    <div className="w-full flex items-center min-h-svh flex-col h-svh mt-36 text-3xl gap-6">
      <div>This page is /board/[id]</div>
      <div>[id]: {params.id}</div>

      <div className="flex w-full">
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
      </div>
    </div>
  )
}
