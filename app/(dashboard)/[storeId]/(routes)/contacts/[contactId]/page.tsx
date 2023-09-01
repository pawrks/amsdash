import prismadb from '@/lib/prismadb'

import { ContactForm } from './components/contact-form'

const ContactPage = async ({ params }: { params: { contactId: string } }) => {
  const contact = await prismadb.contact.findUnique({
    where: {
      id: params.contactId
    }
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ContactForm initialData={contact} />
      </div>
    </div>
  )
}

export default ContactPage
