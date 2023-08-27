<<<<<<< HEAD
"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
=======
'use client'

import { useEffect, useState } from 'react'

import { ClientModal } from '@/components/modals/client-modal'

// This 'provider' will 'provide' modals throughout the entire app.
// For example, components/modal/client-modal.tsx is 'provided' via this 'provider'
const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  // This component will go in the app's layout.tsx, but... that is a server component,
  // you can't just add client components to it withough hydration errors. Modals are notorious
  // for hydration errors because they can be triggered from many places, causing the
  // de-synchronization between server and client components. Because this useEffect life cycle
  // can only run client side, we can avoid hydration errors and ensure to return null until the
  // component is actually mounted.
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
>>>>>>> origin/main
  }

  return (
    <>
<<<<<<< HEAD
      <StoreModal />
    </>
  );
}
=======
      <ClientModal />
    </>
  )
}

export default ModalProvider
>>>>>>> origin/main
