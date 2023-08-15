import prismadb from '@/lib/prismadb'

interface DashboardPageProps {
  params: { clientId: string }
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const client = await prismadb.client.findFirst({
    where: {
      id: params.clientId
    }
  })
  return <div>Active Client: {client?.name}</div>
}

export default DashboardPage
