'use client'

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { ApiList } from '@/components/ui/api-list'

import { columns, DataRateColumn } from './columns'

interface DataRateClientProps {
  data: DataRateColumn[]
}

export const DataRateClient: React.FC<DataRateClientProps> = ({ data }) => {
  const params = useParams()
  const router = useRouter()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Data Rates (${data.length})`}
          description="Manage data rates for products"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/data-rates/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="Data rate endpoints" />
      <Separator />
      <ApiList entityName="dataRates" entityIdName="dataRateId" />
    </>
  )
}
