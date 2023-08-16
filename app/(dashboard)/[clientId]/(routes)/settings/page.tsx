import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import prismadb from '@/lib/prismadb'

import { SettingsForm } from './components/settings-form'

interface SettingsPageProps {
  params: {
    clientId: string
  }
}

const SettingsPage: React.FC<SettingsPageProps> = async ({ params }) => {
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

  // This is necessary because the user is always able to change the URL in the browswer.
  // The navbar works properly but you need to always keep edge cases in mind.
  if (!client) {
    redirect('/')
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={client} />
      </div>
    </div>
  )
}
export default SettingsPage
