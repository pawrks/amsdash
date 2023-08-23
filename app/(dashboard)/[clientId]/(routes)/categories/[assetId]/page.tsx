import prismadb from '@/lib/prismadb'
import { AssetForm } from './components/asset-form'

const AssetPage = async ({ params }: { params: { assetId: string } }) => {
  const asset = await prismadb.asset.findUnique({
    where: {
      id: params.assetId
    }
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <AssetForm initialData={asset} />
      </div>
    </div>
  )
}

export default AssetPage
