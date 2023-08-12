'use client'

import { useClientModal } from '@/hooks/use-client-modal'
import { Modal } from '@/components/ui/modal'
// In order to use this modal throughout the  app it will be 'provided'
// via a 'provider' in the provider directory.
export const StoreModal = () => {
  const StoreModal = useStoreModal()

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={StoreModal.isOpen}
      onClose={StoreModal.onClose}
    >
      Create Store Form (pending)
    </Modal>
  )
}
