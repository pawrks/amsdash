import { format } from 'date-fns'

import prismadb from '@/lib/prismadb'

import { PhysicalClient } from './components/client'
import { PhysicalColumn } from './components/columns'

const PhysicalPage = async ({ params }: { params: { clientId: string } }) => {
  const physical = await prismadb.physical.findMany({
    where: {
      clientId: params.clientId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formattedPhysical: PhysicalColumn[] = physical.map(item => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy')
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <PhysicalClient data={formattedPhysical} />
      </div>
    </div>
  )
}

export default PhysicalPage
