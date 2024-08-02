/**
 * * API Board
 */

'use server'

import prisma from '@/lib/db'
import CustomResponse from '@/lib/res'
import { Board } from '@/lib/types'
import makeObject from './makeobject'

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
    return makeObject(new CustomResponse('200', 'Success'))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

/**
 * TODO 본인 소유 확인, 아니라면 isPublic 확인
 */
// 보드 하나 조회
export async function getBoard(id: string) {
  try {
    const board = await prisma.board.findFirst({
      where: { id },
    })
    return makeObject(new CustomResponse('200', 'Success', board))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

/**
 * TODO 본인 확인 해야됨
 */
// 사용자 소유의 모든 보드 + 상세정보 반환
export async function getUserBoards(authorId: string) {
  try {
    const boards: Board[] = await prisma.board.findMany({
      where: { authorId },
    })
    return makeObject(new CustomResponse('200', 'Success', boards))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

/**
 * TODO 본인 소유 확인 해야됨
 */
// 보드 제목 수정
export async function updateBoardTitle(id: string, title: string) {
  try {
    await prisma.board.update({
      where: { id },
      data: {
        title,
      },
    })
    return makeObject(new CustomResponse('200', 'Success'))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

/**
 * TODO 본인 소유 확인 해야됨
 */
// 보드 설명 업데이트
export async function updateBoardSummary(id: string, summary: string) {
  try {
    await prisma.board.update({
      where: { id },
      data: {
        summary,
      },
    })
    return makeObject(new CustomResponse('200', 'Success'))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

/**
 * TODO 본인 소유 확인 해야됨
 */
// 보드 공유 여부 설정
export async function updateBaordShare(id: string, isPublic: boolean) {
  try {
    await prisma.board.update({
      where: { id },
      data: {
        isPublic,
      },
    })
    return makeObject(new CustomResponse('200', 'Success'))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

/**
 * TODO 본인 소유 확인 해야됨
 */
// 보드 삭제
export async function deleteBoard(id: string) {
  try {
    await prisma.board.delete({
      where: { id },
    })
    return makeObject(new CustomResponse('200', 'Success'))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

/** */
// 보드가 해당 User의 것인지 확인
export async function haveBoard(userId: string, boardId: string) {
  try {
    const board = await prisma.board.findFirst({
      where: { id: boardId },
    })

    if (board?.authorId === userId)
      return makeObject(new CustomResponse('200', 'Success', true))
    return makeObject(new CustomResponse('200', 'Success', false))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

// 보드가 공유 설정 되어있는지 확인
export async function isShared(boardId: string) {
  try {
    const board = await prisma.board.findFirst({
      where: { id: boardId },
    })

    if (board?.isPublic === true)
      return makeObject(new CustomResponse('200', 'Success', true))
    return makeObject(new CustomResponse('200', 'Success', false))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}
