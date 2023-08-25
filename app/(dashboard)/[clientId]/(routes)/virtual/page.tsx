import { format } from 'date-fns'

import prismadb from '@/lib/prismadb'

import { VirtualClient } from './components/client'
import { VirtualColumn } from './components/columns'

const VirtualPage = async ({ params }: { params: { clientId: string } }) => {
  const virtual = await prismadb.virtual.findMany({
    where: {
      clientId: params.clientId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formattedVirtual: VirtualColumn[] = virtual.map(item => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy')
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <VirtualClient data={formattedVirtual} />
      </div>
    </div>
  )
}

export default VirtualPage
