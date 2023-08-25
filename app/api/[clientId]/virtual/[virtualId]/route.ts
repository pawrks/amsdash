import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { virtualId: string } }
) {
  try {
    if (!params.virtualId) {
      return new NextResponse('Virtual asset ID is required', { status: 400 })
    }

    const virtual = await prismadb.virtual.findUnique({
      where: {
        id: params.virtualId
      }
    })
    return NextResponse.json(virtual)
  } catch (error) {
    console.log('[VIRTUAL_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PATCH(
  // Keep in mind you must keep these two arguments in the function although removing the first will not throw errors.
  // Even with no errors this will not work and it can be difficult to catch these bugs.
  req: Request,
  { params }: { params: { clientId: string; virtualId: string } }
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

    if (!params.virtualId) {
      return new NextResponse('Virtual asset ID is required', { status: 400 })
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

    const virtual = await prismadb.virtual.updateMany({
      where: {
        id: params.virtualId
      },
      data: {
        name,
        value
      }
    })

    return NextResponse.json(virtual)
  } catch (error) {
    console.log('[VIRTUAL_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { clientId: string; virtualId: string } }
) {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 })
    }

    if (!params.virtualId) {
      return new NextResponse('Asset ID is required', { status: 400 })
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

    const virtual = await prismadb.virtual.deleteMany({
      where: {
        id: params.virtualId
      }
    })
    return NextResponse.json(virtual)
  } catch (error) {
    console.log('[VIRTUAL_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
