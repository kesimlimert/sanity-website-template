import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { ContentTextBlock } from "./ContentTextBlock";
import { Button } from "@nextui-org/react";
import { IconCircleCheck } from "@tabler/icons-react";
import Link from "next/link";

type Props = {
  data: any;
};

export function TextImage({ data }: Props) {
  const { src, width, height, alt } = urlForImage(data.image) ?? {
    src: "",
    width: 0,
    height: 0,
    alt: "",
  };
  const fullWidth = data?.fullWidth;
  return (
    <>
      {data?.displayContentTextBlock && (
        <ContentTextBlock texts={data?.contentTextBlock} />
      )}
      <div
        className={`container flex justify-center items-center ${data?.image?.position === "right" ? `flex-row-reverse` : ``} ${fullWidth ? `max-w-screen-xl p-8` : `max-w-5xl p-4`} m-auto my-16`}
      >
        <div className="flex-1">
          <Image
            className=""
            src={src}
            width={width}
            height={height}
            alt={alt}
          />
        </div>
        <div
          className={`flex-1 ${data?.image?.position === "right" ? `pr-8` : `pl-8`}`}
        >
          <h1
            className={`${fullWidth ? `text-5xl` : `text-4xl`} font-bold leading-tight`}
          >
            {data?.title}
          </h1>
          {data?.displayParagraph && (
            <p
              className={`text-gray-600 pt-2 ${fullWidth ? "text-lg" : "text-md"} `}
            >
              {data?.paragraph}
            </p>
          )}
          {data?.displayList && (
            <div className="pt-4">
              {data?.list.map((item: any, index: number) => (
                <div key={index} className="flex gap-2 pt-4">
                  {data?.showIcons && (
                    <IconCircleCheck size={24} color="#7e22ce" stroke={2} />
                  )}
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}
          {data?.displayButton && (
            <div className="mt-8">
              <Link href={"/" + data?.button.buttonLink.slug}>
                <Button color="secondary" size={fullWidth ? "lg" : "md"}>
                  {data?.button.buttonText}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
