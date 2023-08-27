<<<<<<< HEAD
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import StoreSwitcher from "@/components/store-switcher";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import prismadb from "@/lib/prismadb";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    }
  });

  return ( 
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
=======
import { UserButton, auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import { MainNav } from '@/components/main-nav'
import ClientSwitcher from '@/components/client-switcher'
import prismadb from '@/lib/prismadb'
import { ThemeToggle } from '@/components/theme-toggle'

const Navbar = async () => {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const clients = await prismadb.client.findMany({
    where: {
      userId
    }
  })

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <ClientSwitcher items={clients} />
>>>>>>> origin/main
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
};
 
export default Navbar;
=======
  )
}

export default Navbar
>>>>>>> origin/main
