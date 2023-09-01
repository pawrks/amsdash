'use client'

import { ColumnDef } from '@tanstack/react-table'

import { CellAction } from './cell-action'
import { Button } from '@/components/ui/button'
import { ArrowUpDown } from 'lucide-react'

export type ContactColumn = {
  id: string
  name: string
  phone: string
  email: string
  title: string
  isCustomer: boolean
  isPrimary: boolean
  isVendor: boolean
  createdAt: string
}

export const columns: ColumnDef<ContactColumn>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-2 h-3.5 w-3.5" />
        </Button>
      )
    }
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Title
          <ArrowUpDown className="ml-2 h-3.5 w-3.5" />
        </Button>
      )
    }
  },
  {
    accessorKey: 'isPrimary',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Primary
          <ArrowUpDown className="ml-2 h-3.5 w-3.5" />
        </Button>
      )
    }
  },
  {
    accessorKey: 'phone',
    header: ({}) => {
      return <div>Phone</div>
    }
  },
  {
    accessorKey: 'email',
    header: ({}) => {
      return <div>Email</div>
    }
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Created
          <ArrowUpDown className="ml-2 h-3.5 w-3.5" />
        </Button>
      )
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
