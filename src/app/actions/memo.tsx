/**
 * * API Board
 */

'use server'

import { Prisma } from '@prisma/client'

import prisma from '@/lib/db'
import CustomResponse from '@/lib/res'
import makeObject from './makeobject'

/**
 * TODO 본인 소유의 보드인지 확인, 아니라면 isPublic 확인 후 true 라면 추가
 */
// 메모 생성
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
    return makeObject(new CustomResponse('200', 'Success'))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

/**
 * TODO 본인 소유의 보드인지 확인, 아니라면 isPublic 인지 확인
 */
// 사용자 소유의 모든 보드 + 상세정보 반환
export async function getBoardMemos(boardId: string) {
  try {
    const memos = await prisma.memo.findMany({
      where: { boardId },
    })

    return makeObject(new CustomResponse('200', 'Success', memos))
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2023') {
        return makeObject(new CustomResponse(e.code, 'No Board Found'))
      }
    }
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

/**
 * TODO 본인 소유의 보드인지 확인, 아니라면 isPublic 인지 && 자신의 메모인지 확인 후 true 라면 수정
 */
// 메모 수정
export async function updateMemo(id: string, document: string) {
  try {
    await prisma.memo.update({
      where: { id },
      data: {
        document,
      },
    })
    return makeObject(new CustomResponse('200', 'Success'))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

/**
 * TODO 본인 소유의 보드인지 확인, 아니라면 isPublic 인지 && 자신의 메모인지 확인 후 true 라면 수정
 */
// 메모 색 수정
export async function updateMemoColor(id: string, color: string) {
  try {
    await prisma.memo.update({
      where: { id },
      data: {
        color,
      },
    })
    return makeObject(new CustomResponse('200', 'Success'))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

/**
 * TODO 본인 소유의 보드인지 확인, 아니라면 isPublic 인지, 자신의 메모인지 확인 후 true 라면 삭제
 */
// 메모 삭제
export async function deleteMemo(id: string) {
  try {
    await prisma.memo.delete({
      where: { id },
    })
    return makeObject(new CustomResponse('200', 'Success'))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

// 메모가 본인 소유인지 확인
export async function haveMemo(userId: string, memoId: string) {
  try {
    const memo = await prisma.memo.findFirst({
      where: { id: memoId },
    })

    if (memo?.authorId === userId)
      return makeObject(new CustomResponse('200', 'Success', true))
    return makeObject(new CustomResponse('200', 'Success', false))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}
