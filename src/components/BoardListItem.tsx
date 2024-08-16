import React from 'react'
import Link from 'next/link'
import { Board } from '@/lib/types'
import DeleteButton from './DeleteButton'

const BoardListItem = ({ data }: { data: Board }) => {
  return (
    <div className="w-boardlistitem h-boardlistitem p-6 rounded-xl bg-gradient-to-br from-lola-100 to-conblue-100/70 drop-shadow-md flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <form>
          <input
            type="text"
            placeholder="Title"
            value={data.title ? data.title : undefined}
            className="w-32 bg-transparent text-2xl text-conblue-800 placeholder:text-conblue-800 outline-none"
          />
        </form>
        <DeleteButton />
      </div>
      <form>
        <input
          type="text"
          placeholder="보드 설명"
          value={data.summary ? data.summary : undefined}
          className="w-full h-full bg-transparent text-xl text-conblue-700/60 placeholder:text-conblue-700/60 outline-none"
        />
      </form>
      <Link href={`/board/${data.id}`} className="w-full h-full" />
    </div>
  )
}

export default BoardListItem
