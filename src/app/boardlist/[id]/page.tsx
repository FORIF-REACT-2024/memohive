import { createBoard, getUserBoards } from '@/app/actions/board'
import { getUserbyEmail } from '@/app/actions/user'
import { authOption } from '@/app/api/auth/[...nextauth]/route'
import BigPlusButton from '@/components/BigPlusButton'
import BoardListItem from '@/components/BoardListItem'
import { getServerSession } from 'next-auth'
import { notFound, redirect } from 'next/navigation'

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOption)

  if (!session) {
    redirect('/')
  }

  const user = await getUserbyEmail(session.user?.email)

  if (user.code !== '200') {
    notFound()
  }

  const boards = await getUserBoards(params.id)

  if (boards.code !== '200') {
    notFound()
  }
  // console.log(boards)

  return (
    <div className="w-full max-w-boardlist mx-auto mt-36 flex flex-col gap-16">
      <div className="w-full h-full min-h-boardlist p-1 rounded-xl bg-gradient-to-br from-lola-200 to-conblue-200">
        <div className="w-full h-full p-10 rounded-xl bg-white flex justify-center items-center gap-10">
          <BigPlusButton id={params.id} />
          {boards.data.map((board, index) => {
            return (
              <div key={index}>
                <BoardListItem data={board} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
