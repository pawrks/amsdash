import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function PATCH(
  // Keep in mind you must keep these two arguments in the function although removing the first will not throw errors.
  // Even with no errors this will not work and it can be difficult to catch these bugs.
  req: Request,
  { params }: { params: { clientId: string } }
) {
  try {
    const { userId } = auth()
    const body = await req.json()

    const { name } = body

    if (!userId) {
      return new NextResponse('Authentication error', { status: 401 })
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 })
    }

    if (!params.clientId) {
      return new NextResponse('Client ID is required', { status: 400 })
    }

    const client = await prismadb.client.updateMany({
      where: {
        id: params.clientId,
        userId
      },
      data: {
        name
      }
    })

    return NextResponse.json(client)
  } catch (error) {
    console.log('[CLIENT_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { clientId: string } }
) {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse('Authentication error', { status: 401 })
    }

    if (!params.clientId) {
      return new NextResponse('Client ID is required', { status: 400 })
    }

    const client = await prismadb.client.deleteMany({
      where: {
        id: params.clientId,
        userId
      }
    })
  } catch (error) {
    console.log('[CLIENT_DELETE]', error)
  }
}
