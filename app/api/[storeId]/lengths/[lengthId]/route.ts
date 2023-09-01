import { NextResponse } from 'next/server'

import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'

export async function GET(
  req: Request,
  { params }: { params: { lengthId: string } }
) {
  try {
    if (!params.lengthId) {
      return new NextResponse('Size id is required', { status: 400 })
    }

    const length = await prismadb.length.findUnique({
      where: {
        id: params.lengthId
      }
    })

    return NextResponse.json(length)
  } catch (error) {
    console.log('[LENGTH_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { lengthId: string; storeId: string } }
) {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!params.lengthId) {
      return new NextResponse('Length id is required', { status: 400 })
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId
      }
    })

    if (!storeByUserId) {
      return new NextResponse('Unauthorized', { status: 405 })
    }

    const length = await prismadb.length.delete({
      where: {
        id: params.lengthId
      }
    })

    return NextResponse.json(length)
  } catch (error) {
    console.log('[LENGTH_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { lengthId: string; storeId: string } }
) {
  try {
    const { userId } = auth()

    const body = await req.json()

    const { name, value } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 })
    }

    if (!value) {
      return new NextResponse('Value is required', { status: 400 })
    }

    if (!params.lengthId) {
      return new NextResponse('Length ID is required', { status: 400 })
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId
      }
    })

    if (!storeByUserId) {
      return new NextResponse('Unauthorized', { status: 405 })
    }

    const length = await prismadb.length.update({
      where: {
        id: params.lengthId
      },
      data: {
        name,
        value
      }
    })

    return NextResponse.json(length)
  } catch (error) {
    console.log('[LENGTH_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
