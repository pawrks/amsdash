import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'

import prismadb from '@/lib/prismadb'
import Navbar from '@/components/navbar'

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { clientId: string }
}) {
  // Check if there is a logged in user
  const { userId } = auth()

  // If no user then redirect to sign-in page
  if (!userId) {
    redirect('/sign-in')
  }

  // Get first related client to logged in user
  const client = await prismadb.client.findFirst({
    where: {
      id: params.clientId,
      userId
    }
  })

  // If no client is created then redirec to home page
  if (!client) {
    redirect('/')
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
