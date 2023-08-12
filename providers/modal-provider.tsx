'use client'

import { useEffect, useState } from 'react'

import { ClientModal } from '@/components/modals/client-modal'

// This 'provider' will 'provide' modals throughout the entire app.
// For example, components/modal/store-modal.tsx is 'provided' via this 'provider'
const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) {
    return null
  }

  return (
    <>
      <ClientModal />
    </>
  )
}

export default ModalProvider
