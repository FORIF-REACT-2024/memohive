/**
 * * API Board
 */

'use server'

import prisma from '@/lib/db'
import CustomResponse from '@/lib/error'

export async function createMemo(
  authorId: string,
  boardId: string,
  document: string,
  color?: string,
) {
  try {
    await prisma.memo.create({
      data: {
        authorId,
        boardId,
        document,
        color: color ?? '#BA94E8',
      },
    })
    return new CustomResponse('200', 'Success')
  } catch (e) {
    return new CustomResponse(e.code, e.message)
  }
}

export async function updateMemo(id: string, document: string) {
  try {
    await prisma.memo.update({
      where: { id },
      data: {
        document,
      },
    })
    return new CustomResponse('200', 'Success')
  } catch (e) {
    return new CustomResponse(e.code, e.message)
  }
}

export async function updateMemoColor(id: string, color: string) {
  try {
    await prisma.memo.update({
      where: { id },
      data: {
        color,
      },
    })
    return new CustomResponse('200', 'Success')
  } catch (e) {
    return new CustomResponse(e.code, e.message)
  }
}

export async function deleteMemo(id: string) {
  try {
    await prisma.memo.delete({
      where: { id },
    })
    return new CustomResponse('200', 'Success')
  } catch (e) {
    return new CustomResponse(e.code, e.message)
  }
}
