import { format } from 'date-fns'

import prismadb from '@/lib/prismadb'

import { DataRateColumn } from './components/columns'
import { DataRateClient } from './components/client'

const DataRatePage = async ({ params }: { params: { dataRateId: string } }) => {
  const dataRates = await prismadb.dataRate.findMany({
    where: {
      id: params.dataRateId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formattedDataRates: DataRateColumn[] = dataRates.map(item => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy')
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <DataRateClient data={formattedDataRates} />
      </div>
    </div>
  )
}

export default DataRatePage
