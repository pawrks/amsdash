import { format } from 'date-fns'

import prismadb from '@/lib/prismadb'

import { LengthColumn } from './components/columns'
import { LengthClient } from './components/client'

const LengthsPage = async ({ params }: { params: { storeId: string } }) => {
  const lengths = await prismadb.length.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formattedLengths: LengthColumn[] = lengths.map(item => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy')
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <LengthClient data={formattedLengths} />
      </div>
    </div>
  )
}

export default LengthsPage
