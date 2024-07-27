/**
 * * API Board
 */

'use server'

import prisma from '@/lib/db'
import CustomResponse from '@/lib/error'

// 보드 생성
export async function createBoard(
  authorId: string,
  title: string,
  isPublic?: boolean,
  summary?: string,
) {
  try {
    await prisma.board.create({
      data: {
        authorId,
        title,
        isPublic: isPublic ?? false,
        summary: summary ?? '',
      },
    })
    return new CustomResponse('200', 'Success')
  } catch (e) {
    return new CustomResponse(e.code, e.message)
  }
}

export async function updateBoardTitle(id: string, title: string) {
  try {
    await prisma.board.update({
      where: { id },
      data: {
        title,
      },
    })
    return new CustomResponse('200', 'Success')
  } catch (e) {
    return new CustomResponse(e.code, e.message)
  }
}

// 보드 설명 업데이트
export async function updateBoardSummary(id: string, summary: string) {
  try {
    await prisma.board.update({
      where: { id },
      data: {
        summary,
      },
    })
    return new CustomResponse('200', 'Success')
  } catch (e) {
    return new CustomResponse(e.code, e.message)
  }
}

export async function updateBaordShare(id: string, isPublic: boolean) {
  try {
    await prisma.board.update({
      where: { id },
      data: {
        isPublic,
      },
    })
    return new CustomResponse('200', 'Success')
  } catch (e) {
    return new CustomResponse(e.code, e.message)
  }
}

export async function deleteBoard(id: string) {
  try {
    await prisma.board.delete({
      where: { id },
    })
    return new CustomResponse('200', 'Success')
  } catch (e) {
    return new CustomResponse(e.code, e.message)
  }
}
