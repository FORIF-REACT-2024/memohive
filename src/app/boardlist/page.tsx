'use client'
import React, { useEffect, useState } from 'react'
import BigPlusButton from '@/components/BigPlusButton'
import BoardListItem from '@/components/BoardListItem'
import getUserBoardList from '@api/actions'

const BoardList = ({ userId }: { userId: string }) => {
  const [BoardList, setBoardList] = useState<Array<string>>([])

  useEffect(() => {
    async function fetchBoards() {
      try {
        const res = getUserBoardList('66a77a65c71eaf1ebcc56780')
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
    fetchBoards()
    return () => {}
  }, [])

  const [title, setTitle] = useState<string>('보드 이름')
  const [summary, setSummary] = useState<string>('보드 설명')

  return (
    <div className="relative top-40 w-full max-w-boardlist mx-auto flex flex-col gap-16">
      <h1 className="text-4xl text-conblue-800">Board List</h1>
      <div className="w-full h-full min-h-boardlist p-10 rounded-xl border-4 border-conblue-100 flex justify-center items-center gap-10">
        <BigPlusButton />
        <BoardListItem title={title} summary={summary} />
      </div>
    </div>
  )
}

export default BoardList
