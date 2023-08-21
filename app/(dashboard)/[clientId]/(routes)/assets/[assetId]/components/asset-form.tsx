'use client'

import * as z from 'zod'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams, useRouter } from 'next/navigation'
import { Asset } from '@prisma/client'
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
import ImageUpload from '@/components/ui/image-upload'

const formSchema = z.object({
  label: z.string().min(1, {
    message: 'Name requires at least 1 character.'
  }),
  imageUrl: z.string().min(1, {
    message: 'Image URL requires at least 1 character.'
  })
})

type AssetFormValues = z.infer<typeof formSchema>

interface AssetFormProps {
  initialData: Asset | null
}

export const AssetForm: React.FC<AssetFormProps> = ({ initialData }) => {
  const params = useParams()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const title = initialData ? 'Edit Asset' : 'Create Asset'
  const description = initialData
    ? 'Edit an Asset'
    : 'Create a new asset for a client'
  const toastMessage = initialData ? 'Asset updated' : 'Asset created'
  const action = initialData ? 'Save changes' : 'Create'

  const form = useForm<AssetFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      label: '',
      imageUrl: ''
    }
  })

  const onSubmit = async (data: AssetFormValues) => {
    try {
      setLoading(true)
      await axios.patch(`/api/clients/${params.clientId}`, data)
      router.refresh()
      toast.success('Asset updated')
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const onDelete = async () => {
    try {
      setLoading(true)
      await axios.delete(`/api/clients/${params.clientId}`)
      router.refresh()
      router.push('/')
      toast.success('Asset deleted')
    } catch (error) {
      toast.error('Make sure all assets and products are deleted first.')
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
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background Image</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    disabled={loading}
                    onChange={url => field.onChange(url)}
                    onRemove={() => field.onChange('')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Label</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Asset label"
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
      <Separator />
    </>
  )
}
