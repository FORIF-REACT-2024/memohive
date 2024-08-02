/**
 * * This file is for testing
 */

import {
  createBoard,
  updateBoardSummary,
  updateBaordShare,
  getUserBoards,
} from './board'
import { createMemo, getBoardMemos, updateMemo, updateMemoColor } from './memo'
import { createUser, getUser, updateUser } from './user'

// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here

  const create = await createUser('sj203904@outlook.com', 'sj20304')

  console.log(create)
}

async function createBoardTest() {
  const create = await createBoard(
    '66a368e653c5ec9350f76b40',
    'new board',
    true,
  )

  console.log(create)
}

async function changeBoardSummaryandPublicity() {
  const update = await updateBoardSummary(
    '66a48becf5c8491841e268bb',
    'new board summary',
  )

  console.log(update)

  const publicity = await updateBaordShare('66a48becf5c8491841e268bb', false)

  console.log(publicity)
}

async function createMemoTest() {
  const create = await createMemo(
    '66a368e653c5ec9350f76b40',
    '66a48becf5c8491841e268bb',
    'new memo',
  )

  console.log(create)
}

async function updateMemoTest() {
  const update1 = await updateMemo('66a4a1da8b56043040b4f52c', 'updated memo')

  console.log(update1)

  const update2 = await updateMemoColor('66a4a1da8b56043040b4f52c', '#ffffff')

  console.log(update2)
}

async function getUserTest() {
  const user = await getUser('66a368e653c5ec9350f76b40')
  console.log(user)
}

async function getUserBoardsTest() {
  const boards = await getUserBoards('66a368e653c5ec9350f76b40')
  console.log(boards)
}

async function getBoardMemosTest() {
  const boards = await getBoardMemos('66a48becf5c8491841e268bb')
  console.log(boards)
}

main().catch(async (e) => {
  console.log(e)
})
