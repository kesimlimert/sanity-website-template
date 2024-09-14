import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type Button = {
  buttonText: string;
  buttonLink: {
    title: string;
    slug: string;
  };
};

type Props = {
  data: {
    title: string;
    paragraph: string;
    displayButton: boolean;
    button: Button;
  };
};

export function Divider({ data }: Props) {
  console.log(data);
  return (
    <>
      {data && (
        <div className="flex w-full flex-col items-center justify-center bg-gradient-to-tr from-violet-600 via-violet-600 to-indigo-600">
          <div className="flex gap-2 flex-col py-16 px-8 items-center justify-center">
            <h1 className="text-white text-4xl font-bold">{data?.title}</h1>
            <p className="text-white text-lg">{data?.paragraph}</p>
            {data?.displayButton && (
              <Link href={"/" + data?.button?.buttonLink.slug}>
                <Button color="secondary" variant="faded" size="md">
                  {data?.button?.buttonText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
