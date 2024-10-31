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
      <div className="container max-w-5xl px-4 m-auto my-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data?.testimonialReferences?.map((testimonial: any, index: number) => (
            <div
              className="flex flex-col justify-between bg-secondary bg-opacity-30 rounded-xl p-4 h-full"
              key={index}
            >
              <p className="mb-4 text-secondary">{testimonial.comment}</p>
              <div className="mt-auto">
                <p className="font-bold text-secondary">{testimonial.authorName}</p>
                <p className="text-secondary opacity-70 text-sm">{testimonial.authorJobTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
