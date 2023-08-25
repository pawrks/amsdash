'use client'

import { useRouter, useParams } from 'next/navigation'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/data-table'

import { PhysicalColumn, columns } from './columns'
import { ApiList } from '@/components/ui/api-list'

interface PhysicalClientProps {
  data: PhysicalColumn[]
}

export const PhysicalClient: React.FC<PhysicalClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Physical (${data.length})`}
          description="Manage physical assets for individual clients"
        />
        <Button onClick={() => router.push(`/${params.clientId}/physical/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API calls for Physical Assets" />
      <Separator />
      <ApiList entityName="physical" entityIdName="PhysicalId" />
    </>
  )
}
