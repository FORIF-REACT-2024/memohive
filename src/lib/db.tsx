/**
 * * This file is for Singleton prisma client object
 * ! Dont import prisma-client for components
 */

import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

// 이 파일은 클라이언트 쪽에서 서버 접근할 때 객체 계속 다시 만들어지지 말라고 만들었습니다.
