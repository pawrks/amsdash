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

    const categories = await prismadb.category.create({
      data: {
        name,
        assetId,
        clientId: params.clientId
      }
    })

    return NextResponse.json(categories)
  } catch (error) {
    console.log('[CATEGORIES_POST]', error)
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

    const category = await prismadb.category.findMany({
      where: {
        clientId: params.clientId
      }
    })

    return NextResponse.json(category)
  } catch (error) {
    console.log('[CATEGORIES_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
