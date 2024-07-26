/**
 * * This file is for testing
 */

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

main().catch(async (e) => {
  console.log(e)
})
