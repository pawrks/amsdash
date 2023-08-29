'use client'

import * as React from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()
  const params = useParams()

  const assetRoutes = [
    {
      title: 'Overview',
      description: 'View store analytics and recent sales figures',
      href: `/${params.storeId}`,
      label: 'Overview',
      active: pathname === `/${params.storeId}`
    },
    {
      title: 'Billboards',
      description: "Images that appear on your store's homepage",
      href: `/${params.storeId}/billboards`,
      label: 'Billboards',
      active: pathname === `/${params.storeId}/billboards`
    },
    {
      title: 'Categories',
      description: 'Organize products into categories',
      href: `/${params.storeId}/categories`,
      label: 'Categories',
      active: pathname === `/${params.storeId}/categories`
    },
    {
      title: 'Sizes',
      description: 'Size options for products',
      href: `/${params.storeId}/sizes`,
      label: 'Sizes',
      active: pathname === `/${params.storeId}/sizes`
    },
    {
      title: 'Colors',
      description: 'Color options for products',
      href: `/${params.storeId}/colors`,
      label: 'Colors',
      active: pathname === `/${params.storeId}/colors`
    },
    {
      title: 'Products',
      description: 'Inventory of products available',
      href: `/${params.storeId}/products`,
      label: 'Products',
      active: pathname === `/${params.storeId}/products`
    },
    {
      title: 'Orders',
      description: 'Orders placed by customers',
      href: `/${params.storeId}/orders`,
      label: 'Orders',
      active: pathname === `/${params.storeId}/orders`
    },
    {
      title: 'Settings',
      description: 'Manage preferences for your store',
      href: `/${params.storeId}/settings`,
      label: 'Settings',
      active: pathname === `/${params.storeId}/settings`
    }
  ]

  const supportRoutes = [
    {
      title: 'Access List',
      description: 'Check-in & check-out data center visitors',
      href: `/${params.storeId}/support/access-list`
    },
    {
      title: 'Package Tracking',
      description: 'Track incoming and outgoing packages',
      href: `/${params.storeId}/support/package-tracking`
    }
  ]

  return (
    <NavigationMenu className="ml-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Assets</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {assetRoutes.map(route => (
                <ListItem
                  key={route.title}
                  title={route.title}
                  href={route.href}
                >
                  {route.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Support</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {supportRoutes.map(route => (
                <ListItem
                  key={route.title}
                  title={route.title}
                  href={route.title}
                >
                  {route.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Insights</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {assetRoutes.map(route => (
                <ListItem
                  key={route.href}
                  title={route.title}
                  href={route.href}
                >
                  {route.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Docs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
