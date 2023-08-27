import { format } from 'date-fns'

import prismadb from '@/lib/prismadb'

import { AssetClient } from './components/client'
import { AssetColumn } from './components/columns'

const AssetsPage = async ({ params }: { params: { clientId: string } }) => {
  const assets = await prismadb.asset.findMany({
    where: {
      clientId: params.clientId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formattedAssets: AssetColumn[] = assets.map(item => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy')
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <AssetClient data={formattedAssets} />
      </div>
    </div>
  )
}

export default AssetsPage
