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

  const storeRoutes = [
    {
      title: 'Overview',
      description: 'Store metrics and recent sales figures',
      href: `/${params.storeId}`,
      label: 'Overview',
      active: pathname === `/${params.storeId}`
    },
    {
      title: 'Billboards',
      description: 'Images for store website',
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
      description: 'Manage preferences for the store',
      href: `/${params.storeId}/settings`,
      label: 'Settings',
      active: pathname === `/${params.storeId}/settings`
    }
  ]

  const assetRoutes = [
    {
      title: 'Facilities',
      description: 'Data center phases and general information',
      href: `/${params.storeId}/assets/facilities`
    },
    {
      title: 'Network',
      description: 'IP blocks & cross-connects',
      href: `/${params.storeId}/assets/network`,
      label: 'Network'
    },
    {
      title: 'Power',
      description: 'Power audit | Service vs usage',
      href: `/${params.storeId}/assets/power`,
      label: 'Power'
    },
    {
      title: 'Cabinets',
      description: 'Manage cabinets & floor plans',
      href: `/${params.storeId}/assets/cabinets`,
      label: 'Cabinets'
    }
  ]

  const supportRoutes = [
    {
      title: 'Access List',
      description: 'Check-in & check-out facility visitors',
      href: `/${params.storeId}/support/access-list`,
      label: 'Access List'
    },
    {
      title: 'Package Tracking',
      description: 'Track incoming and outgoing packages',
      href: `/${params.storeId}/support/package-tracking`,
      label: 'Package Tracking'
    },
    {
      title: 'Tickets',
      description: 'Ticket portal for support requests',
      href: `/${params.storeId}/support/tickets`,
      label: 'Tickets'
    },
    {
      title: 'Vendor Management',
      description: 'Vendor contacts & on-site equipment'
    }
  ]

  const insightRoutes = [
    {
      title: 'Historical Metrics',
      description: 'Past metrics, future insights',
      href: `/${params.storeId}/insights/historical-metrics`,
      label: 'Historical Metrics'
    },
    {
      title: 'Advanced Analytics',
      description: 'Leverage modern, advanced AI & machine learning',
      href: `/${params.storeId}/insights/advanced-analytics`,
      label: 'Advanced Analytics'
    },
    {
      title: 'Data Modeling',
      description: 'Modeling predictions with data science',
      href: `/${params.storeId}/insights/data-modeling`,
      label: 'Data Modeling'
    },
    {
      title: 'Logging',
      description: 'Activity logs for a variety of systems',
      href: `/${params.storeId}/insights/logs`,
      label: 'Logs'
    }
  ]

  const accountRoutes = [
    {
      title: 'Sales',
      description: 'Sales and revenue figures',
      href: `/${params.storeId}/accounts/sales`,
      label: 'Sales'
    },
    {
      title: 'Billing',
      description: 'Invoices and payment information',
      href: `/${params.storeId}/accounts/billing`,
      label: 'Billing'
    }
  ]

  return (
    <NavigationMenu className="ml-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Colo-Store</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {storeRoutes.map(route => (
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
          <NavigationMenuTrigger>Assets</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {assetRoutes.map(route => (
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
              {insightRoutes.map(route => (
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
          <NavigationMenuTrigger>Accounts</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {accountRoutes.map(route => (
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
