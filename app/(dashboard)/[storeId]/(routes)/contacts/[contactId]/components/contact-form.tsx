'use client'

import * as z from 'zod'
import axios from 'axios'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Trash } from 'lucide-react'
import { Contact } from '@prisma/client'
import { useParams, useRouter } from 'next/navigation'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { Heading } from '@/components/ui/heading'
import { AlertModal } from '@/components/modals/alert-modal'
import { Checkbox } from '@/components/ui/checkbox'

const formSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().min(1),
  isCustomer: z.boolean().default(false).optional(),
  isPrimary: z.boolean().default(false).optional(),
  isVendor: z.boolean().default(false).optional()
})

type ContactFormValues = z.infer<typeof formSchema>

interface ContactFormProps {
  initialData: Contact | null
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialData }) => {
  const params = useParams()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const title = initialData ? 'Edit contact' : 'Create contact'
  const description = initialData ? 'Edit a contact' : 'Add a new contact'
  const toastMessage = initialData ? 'Contact updated.' : 'Contact created.'
  const action = initialData ? 'Save changes' : 'Create'

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: '',
      title: '',
      phone: '',
      email: '',
      isCustomer: false,
      isPrimary: false,
      isVendor: false
    }
  })

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setLoading(true)
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/contacts/${params.contactId}`,
          data
        )
      } else {
        await axios.post(`/api/${params.storeId}/contacts`, data)
      }
      router.refresh()
      router.push(`/${params.storeId}/contacts`)
      toast.success(toastMessage)
    } catch (error: any) {
      toast.error('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  const onDelete = async () => {
    try {
      setLoading(true)
      await axios.delete(`/api/${params.storeId}/contacts/${params.contactId}`)
      router.refresh()
      router.push(`/${params.storeId}/contacts`)
      toast.success('Contact deleted')
    } catch (error: any) {
      toast.error('Make sure to remove all connections first')
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
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Contact name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Contact title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Contact phone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Contact email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isCustomer"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      // @ts-ignore
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Customer</FormLabel>
                    <FormDescription>
                      This contact will be considered a customer with access to
                      the facility and to submit support requests.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isPrimary"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      // @ts-ignore
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Primary</FormLabel>
                    <FormDescription>
                      This contact will be considered a primary contact with for
                      the customer.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isVendor"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      // @ts-ignore
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Vendor</FormLabel>
                    <FormDescription>
                      This contact will be considered a vendor.
                    </FormDescription>
                  </div>
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
