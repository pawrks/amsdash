'use client'

import { useRouter, useParams } from 'next/navigation'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'

export const AssetClient = () => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Assets (0)"
          description="Manage assets and their metadata."
        />
        <Button onClick={() => router.push(`/${params.clientId}/assets/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Asset
        </Button>
      </div>
      <Separator />
    </>
  )
}
