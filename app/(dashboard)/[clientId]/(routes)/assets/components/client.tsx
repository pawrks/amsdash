'use client'

import { useRouter, useParams } from 'next/navigation'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/data-table'

import { AssetColumn, columns } from './columns'
import { ApiList } from '@/components/ui/api-list'

interface AssetClientProps {
  data: AssetColumn[]
}

export const AssetClient: React.FC<AssetClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Assets (${data.length})`}
          description="Manage assets for individual clients"
        />
        <Button onClick={() => router.push(`/${params.clientId}/assets/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading title="API" description="API calls for Assets" />
      <Separator />
      <ApiList entityName="assets" entityIdName="assetId" />
    </>
  )
}
