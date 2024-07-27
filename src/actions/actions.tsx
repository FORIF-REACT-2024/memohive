/**
 * * This file is for testing
 */

import { createBoard, updateBoardSummary, updateBaordShare } from './board'
import { createMemo, updateMemo, updateMemoColor } from './memo'
import { updateUser } from './user'

// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here

  // await prisma.user.create({
  //   data: {
  //     username: 'Rich',
  //     email: 'hello@prisma.com',
  //   },
  // })

  // const allUsers = await prisma.user.findMany()
  // console.log(allUsers)

  const update = await updateUser(
    '66a368e653c5ec9350f76b40',
    'seongjineeeemong',
  )
  console.log(update)
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

updateMemoTest().catch(async (e) => {
  console.log(e)
})
