'use server'

import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOption } from '../api/auth/[...nextauth]/route'
import { getUserbyEmail } from './user'

export async function checkLogin() {
  const session = await getServerSession(authOption)

  if (!session) {
    console.log('No session found')
  }

  if (session) {
    console.log(session)

    if (session.user) {
      const user = await getUserbyEmail(session.user.email)
      if (user.code === '200') {
        redirect(`/boardlist/${user.data.id}`)
      } else {
        console.log(user)
      }
    }
  }
}

export async function checkLogout() {
  const session = await getServerSession(authOption)

  if (!session) {
    console.log('No session found')

    redirect('/')
  }
}
