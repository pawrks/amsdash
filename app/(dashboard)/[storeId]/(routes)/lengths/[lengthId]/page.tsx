import prismadb from '@/lib/prismadb'

import { LengthForm } from './components/length-form'

const LengthPage = async ({ params }: { params: { lengthId: string } }) => {
  const length = await prismadb.length.findUnique({
    where: {
      id: params.lengthId
    }
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <LengthForm initialData={length} />
      </div>
    </div>
  )
}

export default LengthPage
