import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    if (!params.categoryId) {
      return new NextResponse('Category ID is required', { status: 400 })
    }

    const category = await prismadb.category.findUnique({
      where: {
        id: params.categoryId
      }
    })
    return NextResponse.json(category)
  } catch (error) {
    console.log('[CATEGORY_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PATCH(
  // Keep in mind you must keep these two arguments in the function although removing the first will not throw errors.
  // Even with no errors this will not work and it can be difficult to catch these bugs.
  req: Request,
  { params }: { params: { clientId: string; categoryId: string } }
) {
  try {
    const { userId } = auth()
    const body = await req.json()

    const { name, assetId } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 })
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 })
    }

    if (!assetId) {
      return new NextResponse('Asset ID is required', { status: 400 })
    }

    if (!params.categoryId) {
      return new NextResponse('Category ID is required', { status: 400 })
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

    const category = await prismadb.category.updateMany({
      where: {
        id: params.categoryId
      },
      data: {
        name,
        assetId
      }
    })

    return NextResponse.json(category)
  } catch (error) {
    console.log('[CATEGORY_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { clientId: string; categoryId: string } }
) {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 })
    }

    if (!params.categoryId) {
      return new NextResponse('Category ID is required', { status: 400 })
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

    const category = await prismadb.category.deleteMany({
      where: {
        id: params.categoryId
      }
    })
    return NextResponse.json(category)
  } catch (error) {
    console.log('[CATEGORY_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
