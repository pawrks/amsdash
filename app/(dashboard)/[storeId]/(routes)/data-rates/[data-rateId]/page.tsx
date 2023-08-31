import prismadb from '@/lib/prismadb'

import { DataRateForm } from './components/data-rate-form'

const SizePage = async ({ params }: { params: { dataRateId: string } }) => {
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

export default SizePage
