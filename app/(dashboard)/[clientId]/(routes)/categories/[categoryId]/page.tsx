import prismadb from '@/lib/prismadb'
import { CategoryForm } from './components/category-form'

const CategoryPage = async ({
  params
}: {
  params: { categoryId: string; clientId: string }
}) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId
    }
  })

  const assets = await prismadb.asset.findMany({
    where: {
      clientId: params.clientId
    }
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm assets={assets} initialData={category} />
      </div>
    </div>
  )
}

export default CategoryPage
