import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import prismadb from '@/lib/prismadb'

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()

    const { name } = body

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 })
    }

    const client = await prismadb.client.create({
      data: {
        name,
        userId
      }
    })

    return NextResponse.json(client)
  } catch (error) {
    console.log('[CLIENTS_STORE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
