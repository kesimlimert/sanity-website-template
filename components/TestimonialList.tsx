import React from "react";
import { ContentTextBlock } from "./ContentTextBlock";

type Testimonial = {
  comment: string;
  authorName: string;
  authorJobTitle: string;
};

type Props = {
  data: {
    displayContentTextBlock?: boolean;
    contentTextBlock?: any;
    testimonialReferences: Testimonial[];
  };
};

export function TestimonialList({ data }: Props) {
  return (
    <>
      {data?.displayContentTextBlock && (
        <ContentTextBlock texts={data?.contentTextBlock} />
      )}
      <div className="container max-w-5xl flex justify-center items-center m-auto my-16">
        {data?.testimonialReferences?.map((testimonial: any, index: number) => (
          <div
            className="flex flex-col gap-4 bg-gray-100 mx-2 rounded-xl p-4"
            key={index}
          >
            <p>{testimonial.comment}</p>
            <div className="flex flex-col gap-1">
              <p className="font-bold">{testimonial.authorName}</p>
              <p className="text-gray-700 text-sm">{testimonial.authorJobTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
