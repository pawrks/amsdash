import prismadb from '@/lib/prismadb'

import { VirtualForm } from './components/virtual-form'

const VirtualPage = async ({ params }: { params: { virtualId: string } }) => {
  const virtual = await prismadb.virtual.findUnique({
    where: {
      id: params.virtualId
    }
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <VirtualForm initialData={virtual} />
      </div>
    </div>
  )
}

export default VirtualPage
