import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

type Props = {
  data: {
    title: string;
    content: any[];
  };
};

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full my-6">
          <Image
            className="object-cover mx-auto"
            src={urlForImage(value)?.src || ''}
            alt={value.alt || ' '}
            height={urlForImage(value)?.height || ''}
            width={urlForImage(value)?.width || ''}
          />
        </div>
      );
    },
  },
};

export function PageTexts({ data }: Props) {
  return (
    <div className="container max-w-5xl mx-auto my-16 portableText">
      <PortableText 
        value={data.content} 
        components={components}
      />
    </div>
  );
}