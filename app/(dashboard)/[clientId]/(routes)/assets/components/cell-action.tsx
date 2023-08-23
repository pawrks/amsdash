'use client'

import {
  Contact,
  Copy,
  Edit,
  MoreHorizontal,
  Network,
  Plug,
  ScrollText,
  Server,
  Trash
} from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'
import { AssetColumn } from './columns'

interface CellActionProps {
  data: AssetColumn
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
        <DropdownMenuLabel>Connections</DropdownMenuLabel>
        <DropdownMenuItem>
          <Contact className="mr-2 h-4 w-4" />
          Client
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Plug className="mr-2 h-4 w-4" />
          Power
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Network className="mr-2 h-4 w-4" />
          Network
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Server className="mr-2 h-4 w-4" />
          Systems
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
