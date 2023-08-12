'use client'

import { useEffect } from 'react'

import { useClientModal } from '@/hooks/use-client-modal'

const SetupPage = () => {
  const onOpen = useClientModal(state => state.onOpen)
  const isOpen = useClientModal(state => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return <div className="p-4">Root Page</div>
}

export default SetupPage
