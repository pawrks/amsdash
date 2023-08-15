'use client'

import {
  Check,
  ChevronsUpDown,
  PlusCircle,
  Store as StoreIcon
} from 'lucide-react'
import { useState } from 'react'
import { Client } from '@prisma/client'
import { useParams, useRouter } from 'next/navigation'

import { useClientModal } from '@/hooks/use-client-modal'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui/command'

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Client[]
}

export default function StoreSwitcher({
  className,
  items = []
}: StoreSwitcherProps) {
  const ClientModal = useClientModal()
  const params = useParams()
  const router = useRouter()

  const formattedItems = items.map(item => ({
    label: item.name,
    value: item.id
  }))

  const currentClient = formattedItems.find(
    item => item.value === params.clientId
  )

  const [open, setOpen] = useState(false)

  const onClientSelect = (client: { value: string; label: string }) => {
    setOpen(false)
    router.push(`/${client.value}`)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a client"
          className={cn('w-[200px] justify-between', className)}
        >
          <StoreIcon className="mr-2 h-4 w-4" />
          TODO: Current Client
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search clients..." />
            <CommandEmpty>No client found</CommandEmpty>
            <CommandGroup heading="Clients">
              {formattedItems.map(client => (
                <CommandItem
                  key={client.value}
                  onSelect={() => onClientSelect(client)}
                  className="text-sm"
                >
                  <StoreIcon className="mr-2 h-4 w-4" />
                  {client.label}
                  <Check
                    className={cn(
                      'ml-auto h-4 w-4',
                      currentClient?.value === client.value
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false)
                  ClientModal.onOpen()
                }}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Create Client
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
