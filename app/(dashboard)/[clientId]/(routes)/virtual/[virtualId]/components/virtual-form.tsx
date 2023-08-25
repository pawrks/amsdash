'use client'

import * as z from 'zod'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams, useRouter } from 'next/navigation'
import { Virtual } from '@prisma/client'
import { Trash } from 'lucide-react'

import { Heading } from '@/components/ui/heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { AlertModal } from '@/components/modals/alert-modal'

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Name requires at least 1 character.'
  }),
  value: z.string().min(1, {
    message: 'Value requires at least 1 character.'
  })
})

type VirtualFormValues = z.infer<typeof formSchema>

interface VirtualFormProps {
  initialData: Virtual | null
}

export const VirtualForm: React.FC<VirtualFormProps> = ({ initialData }) => {
  const params = useParams()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const title = initialData ? 'Edit Virtual Asset' : 'Create Virtual Asset'
  const description = initialData
    ? 'Edit a virtual asset'
    : 'Create a new virtual asset for a client'
  const toastMessage = initialData
    ? 'Virtual asset updated'
    : 'Virtual asset created'
  const action = initialData ? 'Save changes' : 'Create'

  const form = useForm<VirtualFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: '',
      value: ''
    }
  })

  const onSubmit = async (data: VirtualFormValues) => {
    try {
      setLoading(true)
      if (initialData) {
        await axios.patch(
          `/api/${params.clientId}/virtual/${params.virtualId}`,
          data
        )
      } else {
        await axios.post(`/api/${params.clientId}/virtual`, data)
      }
      router.refresh()
      router.push(`/${params.clientId}/virtual`)
      toast.success(toastMessage)
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const onDelete = async () => {
    try {
      setLoading(true)
      await axios.delete(`/api/${params.clientId}/virtual/${params.virtualId}`)
      router.refresh()
      router.push(`/${params.clientId}/virtual`)
      toast.success('Virtual asset deleted')
    } catch (error) {
      toast.error(
        'Please make sure all products using this virtual asset are deleted first'
      )
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
        onConfirm={() => {
          onDelete()
        }}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Virtual asset name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Value</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Virtual asset value"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  )
}
