'use client'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Client } from '@prisma/client'
import { Trash } from 'lucide-react'

import { Heading } from '@/components/ui/heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface SettingsFormProps {
  initialData: Client
}

const formSchema = z.object({
  name: z.string().min(1)
})

type SettingsFormValues = z.infer<typeof FormSchema>

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver
  })

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage client preferences" />
        <Button variant="destructive" size="sm" onClick={() => {}}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
    </>
  )
}
