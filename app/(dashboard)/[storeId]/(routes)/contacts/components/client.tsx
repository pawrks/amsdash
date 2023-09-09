'use client'

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { ApiList } from '@/components/ui/api-list'

import { columns, ContactColumn } from './columns'
import { CheckIn } from './check-in'
import DashboardPage from './check-in-results'

interface ContactClientProps {
  data: ContactColumn[]
}

export const ContactClient: React.FC<ContactClientProps> = ({ data }) => {
  const params = useParams()
  const router = useRouter()

  return (
    <>
      <Heading
        title="Access List"
        description="Manage access lists for clients"
      />
      <Separator />
      <div>
        <CheckIn />
      </div>
      <br />
      <div className="flex items-center justify-between">
        <Heading
          title={`Contacts (${data.length})`}
          description="Manage contacts for clients"
        />
        <Button onClick={() => router.push(`/${params.storeId}/contacts/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="Contact endpoints" />
      <Separator />
      <ApiList entityName="contacts" entityIdName="contactId" />
    </>
  )
}
