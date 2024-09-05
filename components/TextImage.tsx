import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

type Props = {
  data: any;
};

export function TextImage({ data }: Props) {
  console.log(data.displayParagraph);
  const { src, width, height, alt } = urlForImage(data.image) ?? {
    src: "",
    width: 0,
    height: 0,
    alt: "",
  };
  const fullWidth = data?.fullWidth;
  return (
    <div
      className={`container flex justify-center items-center ${data?.image?.position === "right" ? `flex-row-reverse` : ``} ${fullWidth ? `max-w-screen-lg p-8 my-10` : `max-w-4xl p-4`} m-auto my-10`}
    >
      <div className="flex-1">
        <Image className="" src={src} width={width} height={height} alt={alt} />
      </div>
      <div
        className={`flex-1 ${data?.image?.position === "right" ? `pr-8` : `pl-8`}`}
      >
        <h1
          className={`${fullWidth ? `text-6xl` : `text-4xl`} font-bold leading-tight`}
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
      </div>
    </div>
  );
}
