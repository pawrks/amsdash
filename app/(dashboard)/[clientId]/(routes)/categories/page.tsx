import { format } from 'date-fns'

import prismadb from '@/lib/prismadb'

import { CategoryClient } from './components/client'
import { CategoryColumn } from './components/columns'

const CategoriesPage = async ({ params }: { params: { clientId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: {
      clientId: params.clientId
    },
    include: {
      asset: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formattedCategories: CategoryColumn[] = categories.map(item => ({
    id: item.id,
    name: item.name,
    assetLabel: item.asset.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy')
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formattedCategories} />
      </div>
    </div>
  )
}

export default CategoriesPage
