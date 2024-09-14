import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

interface BrandImage {
  image: any;
  alt: string;
}

interface Props {
  data: {
    brandImages?: BrandImage[];
  };
}

export function BrandsList({ data }: Props) {
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
  return (
      <div className="flex gap-8 items-center mx-auto overflow-x-scroll px-8 max-w-5xl my-16 justify-between">
        {images?.map(
          (
            image: { src: string; width: number; height: number; alt: string },
            index: number
          ) => (
            <div className="max-w-32 shrink-0" key={index}>
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
              />
            </div>
          )
        )}
      </div>
  );
}
