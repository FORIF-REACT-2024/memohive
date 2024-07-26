'use server'

import prisma from '@/lib/db'

// 사용자 생성
export async function createUser(email: string, username: string) {
  try {
    await prisma.user.create({
      data: {
        email,
        username,
      },
    })
  } catch (e) {
    console.log(e)
  }
}

// 사용자 정보 업데이트
export async function updateUser(id: string, username: string) {
  try {
    await prisma.user.update({
      where: { id },
      data: {
        username,
      },
    })
  } catch (e) {
    console.log(e)
  }
}

// 사용자 제거
export async function removeUser(id: string) {
  try {
    await prisma.user.delete({
      where: { id },
    })
  } catch (e) {
    console.log(e)
  }
}
