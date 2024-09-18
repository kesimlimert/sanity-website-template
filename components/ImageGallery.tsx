"use client"

import React, { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Card } from "@nextui-org/card";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/modal";

interface ImageData {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

interface Props {
  data: {
    images: ImageData[];
    title: string;
  };
  maxWidth?: string;
  className?: string;
}

export function ImageGallery({ data, maxWidth = "5xl", className = "" }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = data?.images.map((image: ImageData) => {
    const { src, width, height, alt } = urlForImage(image) ?? {
      src: "",
      width: 0,
      height: 0,
      alt: image.alt,
    };
    return {
      src: src as string,
      width: width as number,
      height: height as number,
      alt: alt as string,
    };
  });

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    onOpen();
  };

  return (
    <>
      <h1 className="text-4xl px-4 pt-2 font-bold leading-tight text-center">{data?.title}</h1>
      <div className={`max-w-${maxWidth} m-auto px-4 my-16 gap-2 grid grid-cols-9 grid-rows-2 ${className}`}>
        {images?.map((image: any, index: number) => (
          <Card 
            key={index}
            className={`col-span-3 ${(index + 1) % 4 === 0 ? 'col-span-9 h-[300px]' : 'h-[300px]'} cursor-pointer`}
            onClick={() => handleImageClick(image.src)}
            isPressable
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-full object-cover"
            />
          </Card>
        ))}
      </div>

      <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        size="xl"
        className="bg-transparent shadow-none"
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody className="p-0">
              {selectedImage && (
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={selectedImage}
                    alt="Enlarged image"
                    fill
                    style={{ objectFit: 'contain' }}
                    onClick={onClose}
                  />
                </div>
              )}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}