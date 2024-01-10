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
import {
  ArrowUpDown,
  BrainCircuit,
  Building,
  Contact,
  Cpu,
  Droplets,
  FolderClock,
  Folders,
  Gauge,
  Landmark,
  LayoutDashboard,
  List,
  MemoryStick,
  Microscope,
  Package,
  Palette,
  Plug,
  Receipt,
  Ruler,
  Scaling,
  ScrollText,
  Settings,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  Ticket
} from 'lucide-react'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const params = useParams()

  const assetRoutes = [
    // {
    //   title: 'Facilities',
    //   description: 'Data center phases & floor plans',
    //   icon: <Building className="mr-2 h-4 w-4" />,
    //   href: `/${params.storeId}/assets/facilities`,
    //   label: 'Facilities'
    // },
    {
      title: 'Overview',
      description: 'Network metrics overview',
      icon: <Gauge className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}`,
      label: 'Overview'
    },
    {
      title: 'Virtual Networks',
      description: 'Subnet data center resources',
      icon: <Share2 className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/assets/network`,
      label: 'Network'
    },
    {
      title: 'VPN',
      description: 'Virtual private network options',
      icon: <Plug className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/assets/power`,
      label: 'Power'
    },
    {
      title: 'Monitoring',
      description: 'Real-time infrastructure health monitoring ',
      icon: <Stethoscope className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/support/vendor-management`,
      label: 'Vendor Management'
    }
    // {
    //   title: 'Vendor Management',
    //   description: 'Vendor contacts & on-site visits',
    //   icon: <Contact className="mr-2 h-4 w-4" />,
    //   href: `/${params.storeId}/support/vendor-management`,
    //   label: 'Vendor Management'
    // }
  ]

  const inventoryRoutes = [
    {
      title: 'Overview',
      description: 'VM metrics overview',
      icon: <Gauge className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}`,
      label: 'Overview'
    },
    // {
    //   title: 'Settings',
    //   description: 'Manage preferences for the store',
    //   icon: <Settings className="mr-2 h-4 w-4" />,
    //   href: `/${params.storeId}/settings`,
    //   label: 'Settings'
    // },
    // {
    //   title: 'Orders',
    //   description: 'Recent orders placed',
    //   icon: <Folders className="mr-2 h-4 w-4" />,
    //   href: `/${params.storeId}/orders`,
    //   label: 'Orders'
    // },
    // {
    //   title: 'Images',
    //   description: 'Operating system images',
    //   icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    //   href: `/${params.storeId}/billboards`,
    //   label: 'Billboards'
    // },
    // {
    //   title: 'Categories',
    //   description: 'Organize products into categories',
    //   icon: <List className="mr-2 h-4 w-4" />,
    //   href: `/${params.storeId}/categories`,
    //   label: 'Categories'
    // },
    {
      title: 'VMs',
      description: 'Inventory of VMs',
      icon: <ShoppingBag className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/products`,
      label: 'Products'
    },
    {
      title: 'Storage',
      description: 'Storage options for VMs',
      icon: <Scaling className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/sizes`,
      label: 'Sizes'
    },
    {
      title: 'CPU',
      description: 'CPU options for VMs',
      icon: <Cpu className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/colors`,
      label: 'CPU'
    },
    {
      title: 'Memory',
      description: 'Memory options for VMs',
      icon: <MemoryStick className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/lengths`,
      label: 'Memory'
    },
    {
      title: 'Data Rates',
      description: 'Data rate options for VMs',
      icon: <ArrowUpDown className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/data-rates`,
      label: 'Data Rates'
    }
  ]

  const supportRoutes = [
    {
      title: 'Overview',
      description: 'Storage metrics overview',
      icon: <Gauge className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}`,
      label: 'Overview'
    },
    {
      title: 'Pools',
      description: 'Storage pools for data center resources',
      icon: <Droplets className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/contacts`,
      label: 'Access List'
    },
    {
      title: 'Backups',
      description: 'Backups for VMs',
      icon: <Package className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/support/package-tracking`,
      label: 'Package Tracking'
    },
    {
      title: 'Replication',
      description: 'Live replication for VMs',
      icon: <Ticket className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/support/tickets`,
      label: 'Tickets'
    },
    {
      title: 'Monitoring',
      description: 'Real-time storage infrastructure health monitoring',
      icon: <Stethoscope className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/support/vendor-management`,
      label: 'Vendor Management'
    }
  ]

  const insightRoutes = [
    {
      title: 'Historical Metrics',
      description: 'Past metrics, future insights',
      icon: <FolderClock className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/insights/historical-metrics`,
      label: 'Historical Metrics'
    },
    {
      title: 'Advanced Analytics',
      description: 'Leverage modern AI & advanced machine learning',
      icon: <BrainCircuit className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/insights/advanced-analytics`,
      label: 'Advanced Analytics'
    },
    {
      title: 'Data Modeling',
      description: 'Modeling predictions with data science',
      icon: <Microscope className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/insights/data-modeling`,
      label: 'Data Modeling'
    },
    {
      title: 'Logging',
      description: 'Activity logs for a variety of systems',
      icon: <ScrollText className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/insights/logs`,
      label: 'Logs'
    }
  ]

  const accountRoutes = [
    {
      title: 'Sales',
      description: 'Sales and revenue figures',
      icon: <Landmark className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/accounts/sales`,
      label: 'Sales'
    },
    {
      title: 'Billing',
      description: 'Invoices and payment information',
      icon: <Receipt className="mr-2 h-4 w-4" />,
      href: `/${params.storeId}/accounts/billing`,
      label: 'Billing'
    }
  ]

  return (
    <NavigationMenu className="ml-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Compute</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {inventoryRoutes.map(route => (
                <ListItem
                  icon={route.icon}
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
          <NavigationMenuTrigger>Network</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {assetRoutes.map(route => (
                <ListItem
                  icon={route.icon}
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
          <NavigationMenuTrigger>Storage</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {supportRoutes.map(route => (
                <ListItem
                  icon={route.icon}
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
          <NavigationMenuTrigger>Insights</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {insightRoutes.map(route => (
                <ListItem
                  icon={route.icon}
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
                  icon={route.icon}
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

type ListItemProps = {
  icon?: React.ReactNode
  title: string
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  ListItemProps & React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, icon, ...props }, ref) => {
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
          {icon && <span>{icon}</span>}
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
