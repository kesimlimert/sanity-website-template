import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  data: {
    image: any;
    title: string;
  };
};

export function ImageFullWidth({ data }: Props) {
  const { src, width, height, alt } = urlForImage(data.image) ?? {
    src: "",
    width: 0,
    height: 0,
    alt: "",
  };
  return (
    <div className="w-full relative">
      <h2 className="text-4xl font-bold absolute sm:bottom-10 bottom-5 text-white sm:left-10 left-5">{data.title}</h2>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full"
      />
    </div>
  );
}
