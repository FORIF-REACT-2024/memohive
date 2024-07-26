/**
 * * This file is for testing
 */

import { updateUser } from './user'

// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//   // ... you will write your Prisma Client queries here

//   await prisma.user.create({
//     data: {
//       username: 'Rich',
//       email: 'hello@prisma.com',
//     },
//   })

//   const allUsers = await prisma.user.findMany()
//   console.log(allUsers)
// }

// main()
//   .catch(async (e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

updateUser('66a3683c5ec9350f76b40', 'seongjineeeemong').catch(async (e) => {
  console.log(e)
})
