<<<<<<< HEAD
"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
=======
'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
>>>>>>> origin/main

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
<<<<<<< HEAD
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: 'Overview',
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: 'Billboards',
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: 'Categories',
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: 'Sizes',
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: 'Colors',
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: 'Products',
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: 'Orders',
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: 'Settings',
      active: pathname === `/${params.storeId}/settings`,
    },
  ]

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
=======
  const pathname = usePathname()
  const params = useParams()

  const routes = [
    {
      href: `/${params.clientId}`,
      label: 'Home',
      active: pathname === `/${params.clientId}`
    },
    {
      href: `/${params.clientId}/assets`,
      label: 'Assets',
      active: pathname.startsWith(`/${params.clientId}/assets`)
    },
    {
      href: `/${params.clientId}/products`,
      label: 'Products',
      active: pathname.startsWith(`/${params.clientId}/products`)
    },
    {
      href: `/${params.clientId}/support`,
      label: 'Support',
      active: pathname.startsWith(`/${params.clientId}/support`)
    },
    {
      href: `/${params.clientId}/insights`,
      label: 'Insights',
      active: pathname.startsWith(`/${params.clientId}/insights`)
    },
    {
      href: `/${params.clientId}/docs`,
      label: 'Docs',
      active: pathname.startsWith(`/${params.clientId}/docs`)
    },
    {
      href: `/${params.clientId}/settings`,
      label: 'Settings',
      active: pathname.startsWith(`/${params.clientId}/settings`)
    }
  ]

  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x', className)}>
      {routes.map(route => (
>>>>>>> origin/main
        <Link
          key={route.href}
          href={route.href}
          className={cn(
<<<<<<< HEAD
            'text-sm font-medium transition-colors hover:text-primary',
            route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
  )
};
=======
            'test-sm font-medium transition-colors hover:text-primary',
            route.active
              ? 'text-black dark:text-white'
              : 'text-muted-foreground'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
>>>>>>> origin/main
