import prismadb from '@/lib/prismadb'

import { DataRateForm } from './components/data-rate-form'

const DataRatePage = async ({ params }: { params: { dataRateId: string } }) => {
  if (!params.dataRateId) {
    throw new Error('dataRateId is not provided')
  }

  const dataRate = await prismadb.dataRate.findUnique({
    where: {
      id: params.dataRateId
    }
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <DataRateForm initialData={dataRate} />
      </div>
    </div>
  )
}

export default DataRatePage
