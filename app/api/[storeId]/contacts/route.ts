import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'

import prismadb from '@/lib/prismadb'

export async function POST(
  req: Request,
  {
    params
  }: {
    params: {
      storeId: string
      name: string
      phone: string
      email: string
      title: string
      isCustomer: boolean
      isPrimary: boolean
      isVendor: boolean
    }
  }
) {
  try {
    const { userId } = auth()

    const body = await req.json()

    const { name, phone, email, title, isCustomer, isPrimary, isVendor } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 })
    }

    if (!phone) {
      return new NextResponse('Phone is required', { status: 400 })
    }

    if (!title) {
      return new NextResponse('Title is required', { status: 400 })
    }

    if (!email) {
      return new NextResponse('Email is required', { status: 400 })
    }

    if (!isCustomer) {
      return new NextResponse('Customer is required', { status: 400 })
    }

    if (!isPrimary) {
      return new NextResponse('Primary is required', { status: 400 })
    }

    if (!isVendor) {
      return new NextResponse('Vendor is required', { status: 400 })
    }

    if (!params.storeId) {
      return new NextResponse('Store id is required', { status: 400 })
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

    const contact = await prismadb.contact.create({
      data: {
        name,
        phone,
        email,
        title,
        isCustomer,
        isPrimary,
        isVendor,
        storeId: params.storeId
      }
    })

    return NextResponse.json(contact)
  } catch (error) {
    console.log('[CONTACTS_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse('Store id is required', { status: 400 })
    }

    const contacts = await prismadb.contact.findMany({
      where: {
        storeId: params.storeId
      }
    })

    return NextResponse.json(contacts)
  } catch (error) {
    console.log('[CONTACTS_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
