'use client'

import { useRouter, useParams } from 'next/navigation'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/data-table'

import { VirtualColumn, columns } from './columns'
import { ApiList } from '@/components/ui/api-list'

interface VirtualClientProps {
  data: VirtualColumn[]
}

export const VirtualClient: React.FC<VirtualClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Virtual (${data.length})`}
          description="Manage virtual assets for individual clients"
        />
        <Button onClick={() => router.push(`/${params.clientId}/virtual/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API calls for Virtual Assets" />
      <Separator />
      <ApiList entityName="virtual" entityIdName="VirtualId" />
    </>
  )
}
