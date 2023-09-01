'use client'

import { ColumnDef } from '@tanstack/react-table'

import { CellAction } from './cell-action'
import { Button } from '@/components/ui/button'
import { ArrowUpDown } from 'lucide-react'

export type DataRateColumn = {
  id: string
  name: string
  value: string
  createdAt: string
}

export const columns: ColumnDef<DataRateColumn>[] = [
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
    accessorKey: 'value',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Value
          <ArrowUpDown className="ml-2 h-3.5 w-3.5" />
        </Button>
      )
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
