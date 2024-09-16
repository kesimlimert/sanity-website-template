import React from 'react';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

type Props = {
  data: any;
};

export function ImageGallery({ data }: Props) {
  const images = data?.brandImages?.map((brandImage: any) => {
    const { src, width, height, alt } = urlForImage(brandImage.image) ?? {
      src: "",
      width: 0,
      height: 0,
      alt: brandImage.alt,
    };
    return {
      src: src as string,
      width: width as number,
      height: height as number,
      alt,
    };
  });
  console.log(data);
  return (
    <div className="max-w-5xl m-auto my-16 gap-2 grid grid-cols-12 grid-rows-2">
      {images?.map((image: any, index: number) => (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      ))}
    </div>
  );
}