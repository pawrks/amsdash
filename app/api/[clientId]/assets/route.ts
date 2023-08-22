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

    const { label, imageUrl } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 })
    }

    if (!label) {
      return new NextResponse('Label is required', { status: 400 })
    }
    if (!imageUrl) {
      return new NextResponse('Image URL is required', { status: 400 })
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

    const asset = await prismadb.asset.create({
      data: {
        label,
        imageUrl,
        clientId: params.clientId
      }
    })

    return NextResponse.json(asset)
  } catch (error) {
    console.log('[ASSETS_POST]', error)
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

    const assets = await prismadb.asset.findMany({
      where: {
        clientId: params.clientId
      }
    })

    return NextResponse.json(assets)
  } catch (error) {
    console.log('[ASSETS_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
