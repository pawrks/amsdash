import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { assetId: string } }
) {
  try {
    if (!params.assetId) {
      return new NextResponse('Asset ID is required', { status: 400 })
    }

    const asset = await prismadb.asset.findUnique({
      where: {
        id: params.assetId
      }
    })
    return NextResponse.json(asset)
  } catch (error) {
    console.log('[ASSET_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PATCH(
  // Keep in mind you must keep these two arguments in the function although removing the first will not throw errors.
  // Even with no errors this will not work and it can be difficult to catch these bugs.
  req: Request,
  { params }: { params: { clientId: string; assetId: string } }
) {
  try {
    const { userId } = auth()
    const body = await req.json()

    const { label, imageUrl } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 })
    }

    if (!label) {
      return new NextResponse('Name is required', { status: 400 })
    }

    if (!imageUrl) {
      return new NextResponse('Image URL is required', { status: 400 })
    }

    if (!params.assetId) {
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

    const asset = await prismadb.asset.updateMany({
      where: {
        id: params.assetId
      },
      data: {
        label,
        imageUrl
      }
    })

    return NextResponse.json(asset)
  } catch (error) {
    console.log('[ASSET_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { clientId: string; assetId: string } }
) {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 })
    }

    if (!params.assetId) {
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

    const asset = await prismadb.asset.deleteMany({
      where: {
        id: params.assetId
      }
    })
    return NextResponse.json(asset)
  } catch (error) {
    console.log('[ASSET_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
