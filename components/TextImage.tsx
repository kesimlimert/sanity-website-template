import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { ContentTextBlock } from "./ContentTextBlock";
import { Button } from "@nextui-org/react";
import { IconCircleCheck } from "@tabler/icons-react";
import Link from "next/link";

type Props = {
  data: {
    image: {
      asset: {
        _ref: string;
        _type: string;
      };
      position?: "left" | "right";
    };
    fullWidth?: boolean;
    displayContentTextBlock?: boolean;
    contentTextBlock?: any; 
    title?: string;
    displayParagraph?: boolean;
    paragraph?: string;
    displayList?: boolean;
    list?: string[];
    showIcons?: boolean;
    displayButton?: boolean;
    button?: {
      buttonText: string;
      buttonLink: {
        slug: string;
      };
    };
  };
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
        className={`container flex sm:flex-row sm:gap-0 gap-8 flex-col justify-center items-center ${data?.image?.position === "right" ? `sm:flex-row-reverse` : ``} ${fullWidth ? `max-w-screen-xl p-8` : `max-w-5xl p-4`} m-auto px-4 my-16`}
      >
        <div className="flex-1">
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
          />
        </div>
        <div
          className={`flex-1 ${data?.image?.position === "right" ? `sm:pr-8` : `sm:pl-8`}`}
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
              {data?.list?.map((item: any, index: number) => (
                <div key={index} className="flex gap-2 pt-4">
                  {data?.showIcons && (
                    <IconCircleCheck size={24} color="#A20100" stroke={2} />
                  )}
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}
          {data?.displayButton && (
            <div className="mt-8">
              <Link href={"/" + data?.button?.buttonLink.slug}>
                <Button className="text-white" color="secondary" size={fullWidth ? "lg" : "md"}>
                  {data?.button?.buttonText}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
