import { getBoardMemos } from '@/app/actions/memo'
import { notFound } from 'next/navigation'
import { Memo } from '@/lib/types'
import BoardComponent from './components/BoardComponent'

export default async function Board({ params }: { params: { id: string } }) {
  const getMemos = async () => {
    const res = await getBoardMemos(params.id)

    if (res.code === '200') {
      console.log(res.data)
      return res.data
    }

    console.log(res)
    notFound()
  }

  const initialMemo: Memo[] = await getMemos()

  return (
    <div className="w-full flex items-center min-h-svh flex-col h-svh mt-36 text-3xl gap-6">
      <div>This page is /board/[id]</div>
      <div>[id]: {params.id}</div>

      <div className="flex w-full">
        <BoardComponent initialMemo={initialMemo} />
      </div>
    </div>
  )
}
