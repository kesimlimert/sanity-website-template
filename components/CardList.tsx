import React from 'react';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Divider } from '@nextui-org/react';

type CardData = {
  title: string;
  subtitle: string;
  paragraph: string;
};

type Props = {
  data: {
    cards: CardData[];
  };
};

export function CardList({ data }: Props) {
  return (
    <div className="flex gap-4 max-w-5xl sm:justify-start justify-center px-4 flex-wrap mx-auto my-10">
      {data?.cards?.map((card: any) => (
        <Card shadow='none' className="max-w-80 bg-secondary bg-opacity-30" key={card.title}>
          <CardHeader className="flex-col items-start gap-1">
            <p className='text-left font-bold text-secondary'>{card.title}</p>
            <p className='text-secondary opacity-70 text-sm'>{card.subtitle}</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className='text-secondary'>{card.paragraph}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}