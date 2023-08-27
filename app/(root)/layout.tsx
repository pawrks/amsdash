<<<<<<< HEAD
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId,
    }
  });

  if (store) {
    redirect(`/${store.id}`);
  };

  return (
    <>
      {children}
    </>
  );
};
=======
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
    redirect('/sign-in')
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
>>>>>>> origin/main
