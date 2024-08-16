import { getBoardMemos } from '@/app/actions/memo'
import { notFound } from 'next/navigation'
import { Board } from '@/lib/types'
import { getBoard } from '@/app/actions/board'

import BoardComponent from './components/BoardComponent'

export default async function BoardPage({
  params,
}: {
  params: { id: string }
}) {
  const getMemos = async () => {
    const res = await getBoardMemos(params.id)

    if (res.code === '200') {
      // console.log(res.data)
      return res.data
    }

    // console.log(res)
    notFound()
  }

  const getBoardInfo = async () => {
    const res = await getBoard(params.id)

    if (res.code === '200') {
      // console.log(res.data)
      return res.data
    }

    // console.log(res)
    notFound()
  }

  await getMemos()
  const boardInfo: Board = await getBoardInfo()

  return (
    <div className="w-full flex items-center min-h-svh flex-col h-svh mt-36 text-3xl gap-6">
      <div className="flex w-full">
        <BoardComponent boardId={params.id} boardInfo={boardInfo} />
      </div>
    </div>
  )
}
