import { format } from 'date-fns'

import prismadb from '@/lib/prismadb'

import { ContactColumn as ContactColumn } from './components/columns'
import { ContactClient } from './components/client'

const ContactsPage = async ({ params }: { params: { storeId: string } }) => {
  const contacts = await prismadb.contact.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formattedContacts: ContactColumn[] = contacts.map(item => ({
    id: item.id,
    name: item.name,
    title: item.title,
    phone: item.phone,
    email: item.email,
    isCustomer: item.isCustomer,
    isPrimary: item.isPrimary,
    isVendor: item.isVendor,
    createdAt: format(item.createdAt, 'MMMM do, yyyy')
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ContactClient data={formattedContacts} />
      </div>
    </div>
  )
}

export default ContactsPage
