<<<<<<< HEAD
import { PrismaClient } from "@prisma/client"
=======
import { PrismaClient } from '@prisma/client'
>>>>>>> origin/main

declare global {
  var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient()
<<<<<<< HEAD
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb

export default prismadb;


=======
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb

export default prismadb
>>>>>>> origin/main
