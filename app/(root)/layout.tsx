import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import prismadb from '@/lib/prismadb'

export default async function SetupLayout({
  children
}: {
  children: React.ReactNode
}) {
  // Check if user logged in
  const { userId } = auth()

  // If no user redirect to home page
  if (!userId) {
    redirect('/')
  }

  // Find client related to user
  const client = await prismadb.client.findFirst({
    where: {
      userId
    }
  })

  // If there is a client then redirect to the client dashboard page
  if (client) {
    redirect(`/${client.id}`)
  }

  return <>{children}</>
}
