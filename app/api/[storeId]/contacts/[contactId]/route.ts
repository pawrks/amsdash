import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'

import prismadb from '@/lib/prismadb'

export async function GET(
  req: Request,
  { params }: { params: { contactId: string } }
) {
  try {
    if (!params.contactId) {
      return new NextResponse('Contact ID is required', { status: 400 })
    }

    const contact = await prismadb.contact.findUnique({
      where: {
        id: params.contactId
      }
    })

    return NextResponse.json(contact)
  } catch (error) {
    console.log('[CONTACT_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { contactId: string; storeId: string } }
) {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!params.contactId) {
      return new NextResponse('Contact ID is required', { status: 400 })
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

    const contact = await prismadb.contact.delete({
      where: {
        id: params.contactId
      }
    })

    return NextResponse.json(contact)
  } catch (error) {
    console.log('[CONTACT_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { contactId: string; storeId: string } }
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

    if (!params.contactId) {
      return new NextResponse('Billboard id is required', { status: 400 })
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

    const contact = await prismadb.contact.update({
      where: {
        id: params.contactId
      },
      data: {
        name,
        phone,
        email,
        title,
        isCustomer,
        isPrimary,
        isVendor
      }
    })

    return NextResponse.json(contact)
  } catch (error) {
    console.log('[CONTACT_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
