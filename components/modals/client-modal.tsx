'use client'

import * as z from 'zod'

import { useClientModal } from '@/hooks/use-client-modal'
import { Modal } from '@/components/ui/modal'

// In order to use this modal throughout the  app it will be 'provided'
// via a 'provider' in the provider directory.
export const ClientModal = () => {
  const ClientModal = useClientModal()

  return (
    <Modal
      title="Create a new Client"
      description="Add a new client to get started!"
      isOpen={ClientModal.isOpen}
      onClose={ClientModal.onClose}
    >
      (pending) Create Client Form (pending)
    </Modal>
  )
}
