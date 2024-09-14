"use client";

import React from "react";
import { ContentTextBlock } from "./ContentTextBlock";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

type FaqItem = {
  _id: string;
  title: string;
  question: string;
  answer: string;
};

type Props = {
  data: {
    title: string;
    displayContentTextBlock: boolean;
    contentTextBlock: any;
    faqReferences: FaqItem[];
  };
};

export function FaqList({ data }: Props) {
  return (
    <>
      {data?.displayContentTextBlock && (
        <ContentTextBlock texts={data?.contentTextBlock} />
      )}
      {data && data.faqReferences.length > 0 && (
        <div className="max-w-3xl my-16 mx-auto">
          <Accordion>
            {data.faqReferences.map((faq: FaqItem) => (
              <AccordionItem key={faq._id} title={faq.question}>
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </>
  );
}
