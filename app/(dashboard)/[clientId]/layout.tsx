import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'

import prismadb from '@/lib/prismadb'

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { clientId: string }
}) {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const client = await prismadb.client.findFirst({
    where: {
      id: params.clientId,
      userId
    }
  })

  if (!client) {
    redirect('/')
  }

  return <>{children}</>
}
