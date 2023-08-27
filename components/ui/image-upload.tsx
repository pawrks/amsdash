<<<<<<< HEAD
"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ImagePlus, Trash } from "lucide-react";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
=======
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { CldUploadWidget } from 'next-cloudinary'
import { Trash, ImagePlus } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface ImageUploadProps {
  disabled?: boolean
  onChange: (value: string) => void
  onRemove: (value: string) => void
  value: string[]
>>>>>>> origin/main
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
<<<<<<< HEAD
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
=======
  value
}) => {
  // Hydration error trick again.
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const onUpload = (result: any) => {
    onChange(result.info.secure_url)
  }

  if (!isMounted) {
    return null
>>>>>>> origin/main
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
<<<<<<< HEAD
        {value.map((url) => (
=======
        {value.map(url => (
>>>>>>> origin/main
          <div
            key={url}
            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
          >
            <div className="z-10 absolute top-2 right-2">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                variant="destructive"
<<<<<<< HEAD
                size="sm"
=======
                size="icon"
>>>>>>> origin/main
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image fill className="object-cover" alt="Image" src={url} />
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="ntuo3yv1">
        {({ open }) => {
          const onClick = () => {
<<<<<<< HEAD
            open();
          };
=======
            open()
          }
>>>>>>> origin/main

          return (
            <Button
              type="button"
              disabled={disabled}
              variant="secondary"
              onClick={onClick}
            >
              <ImagePlus className="h-4 w-4 mr-2" />
<<<<<<< HEAD
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
=======
              Upload an image
            </Button>
          )
        }}
      </CldUploadWidget>
    </div>
  )
}

export default ImageUpload
>>>>>>> origin/main
