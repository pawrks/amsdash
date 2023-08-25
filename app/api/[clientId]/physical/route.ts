import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import prismadb from '@/lib/prismadb'

export async function POST(
  req: Request,
  { params }: { params: { clientId: string } }
) {
  try {
    const { userId } = auth()
    const body = await req.json()

    const { name, value } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 })
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 })
    }
    if (!value) {
      return new NextResponse('Value is required', { status: 400 })
    }

    if (!params.clientId) {
      return new NextResponse('Client ID is required', { status: 400 })
    }

    const clientByUserId = await prismadb.client.findFirst({
      where: {
        id: params.clientId,
        userId
      }
    })

    if (!clientByUserId) {
      return new NextResponse('Unauthorized', { status: 403 })
    }

    const physical = await prismadb.physical.create({
      data: {
        name,
        value,
        clientId: params.clientId
      }
    })

    return NextResponse.json(physical)
  } catch (error) {
    console.log('[PHYSICAL_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function GET(
  req: Request,
  { params }: { params: { clientId: string } }
) {
  try {
    if (!params.clientId) {
      return new NextResponse('Client ID is required', { status: 400 })
    }

    const physical = await prismadb.physical.findMany({
      where: {
        clientId: params.clientId
      }
    })

    return NextResponse.json(physical)
  } catch (error) {
    console.log('[PHYSICAL_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
