import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { physicalId: string } }
) {
  try {
    if (!params.physicalId) {
      return new NextResponse('Physical asset ID is required', { status: 400 })
    }

    const physical = await prismadb.physical.findUnique({
      where: {
        id: params.physicalId
      }
    })
    return NextResponse.json(physical)
  } catch (error) {
    console.log('[PHYSICAL_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PATCH(
  // Keep in mind you must keep these two arguments in the function although removing the first will not throw errors.
  // Even with no errors this will not work and it can be difficult to catch these bugs.
  req: Request,
  { params }: { params: { clientId: string; physicalId: string } }
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

    if (!params.physicalId) {
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

    const physical = await prismadb.physical.updateMany({
      where: {
        id: params.physicalId
      },
      data: {
        name,
        value
      }
    })

    return NextResponse.json(physical)
  } catch (error) {
    console.log('[PHYSICAL_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { clientId: string; physicalId: string } }
) {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 })
    }

    if (!params.physicalId) {
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

    const physical = await prismadb.physical.deleteMany({
      where: {
        id: params.physicalId
      }
    })
    return NextResponse.json(physical)
  } catch (error) {
    console.log('[PHYSICAL_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
