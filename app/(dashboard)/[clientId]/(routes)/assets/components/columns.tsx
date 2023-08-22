'use client'

import { ColumnDef } from '@tanstack/react-table'

export type AssetColumn = {
  id: string
  label: string
  createdAt: string
}

export const columns: ColumnDef<AssetColumn>[] = [
  {
    accessorKey: 'label',
    header: 'Label'
  },
  {
    accessorKey: 'createdAt',
    header: 'Date'
  }
]
