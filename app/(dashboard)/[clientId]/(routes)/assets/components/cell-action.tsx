'use client'

import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter, useParams } from 'next/navigation'
import {
  Contact,
  Copy,
  Edit,
  MoreHorizontal,
  Network,
  Plug,
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
import { AlertModal } from '@/components/modals/alert-modal'

interface CellActionProps {
  data: AssetColumn
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id)
    toast.success('Asset ID copied to clipboard.')
  }

  const onDelete = async () => {
    try {
      setLoading(true)
      await axios.delete(`/api/${params.clientId}/assets/${data.id}`)
      router.refresh()
      toast.success('Asset deleted')
    } catch (error) {
      toast.error('Make sure all connections to this asset are deleted first.')
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(`/${params.clientId}/assets/${data.id}`)}
          >
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
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
    </>
  )
}
