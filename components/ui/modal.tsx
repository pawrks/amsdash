<<<<<<< HEAD
"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
=======
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'

interface ModalProps {
  title: string
  description: string
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
>>>>>>> origin/main
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
<<<<<<< HEAD
      onClose();
    }
  };

  return ( 
=======
      onClose()
    }
  }

  return (
>>>>>>> origin/main
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
<<<<<<< HEAD
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};
=======
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  )
}
>>>>>>> origin/main
