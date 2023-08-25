import prismadb from '@/lib/prismadb'
import { PhysicalForm } from './components/physical-form'

const PhysicalPage = async ({ params }: { params: { physicalId: string } }) => {
  const physical = await prismadb.physical.findUnique({
    where: {
      id: params.physicalId
    }
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <PhysicalForm initialData={physical} />
      </div>
    </div>
  )
}

export default PhysicalPage
