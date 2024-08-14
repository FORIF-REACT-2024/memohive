import { authOption } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOption)

  if (!session) {
    redirect('/')
  }

  return <div>{params.id}</div>
}
