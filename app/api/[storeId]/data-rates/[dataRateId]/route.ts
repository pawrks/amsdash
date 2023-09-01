import { NextResponse } from 'next/server'

import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs'

export async function GET(
  req: Request,
  { params }: { params: { dataRateId: string } }
) {
  try {
    if (!params.dataRateId) {
      return new NextResponse('Size id is required', { status: 400 })
    }

    const dataRate = await prismadb.dataRate.findUnique({
      where: {
        id: params.dataRateId
      }
    })

    return NextResponse.json(dataRate)
  } catch (error) {
    console.log('[DATA_RATE_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { dataRateId: string; storeId: string } }
) {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!params.dataRateId) {
      return new NextResponse('Data rate id is required', { status: 400 })
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

    const dataRate = await prismadb.dataRate.delete({
      where: {
        id: params.dataRateId
      }
    })

    return NextResponse.json(dataRate)
  } catch (error) {
    console.log('[DATA_RATE_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { dataRateId: string; storeId: string } }
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

    if (!params.dataRateId) {
      return new NextResponse('Data rate id is required', { status: 400 })
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

    const dataRate = await prismadb.dataRate.update({
      where: {
        id: params.dataRateId
      },
      data: {
        name,
        value
      }
    })

    return NextResponse.json(dataRate)
  } catch (error) {
    console.log('[DATA_RATE_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
