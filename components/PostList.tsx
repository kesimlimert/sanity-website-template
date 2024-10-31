import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

type Category = {
  title: string;
  slug: string;
  color: string;
};

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  categories: Category[];
};

type Props = {
  data: {
    postListReferences: Post[];
  };
};
export function PostList({ data }: Props) {
  const getCategoryColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      green: 'bg-green-400',
      blue: 'bg-blue-400',
      purple: 'bg-purple-400',
      orange: 'bg-orange-400'
    };
    return colorMap[color] || 'bg-gray-200';
  };
  
  return (
    <div className="flex gap-4 max-w-5xl justify-center sm:justify-start px-4 flex-wrap mx-auto my-10">
      {data?.postListReferences?.map((post: any) => (
        <Link href={post.slug} key={post.slug}>
          <Card className="w-80 h-[380px] hover:scale-105 transition-all duration-500 cursor-pointer bg-danger" isPressable>
            <CardHeader className="my-1">
              <p className="text-sm font-bold text-secondary">{post.title}</p>
            </CardHeader>
            <CardBody className="p-0">
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
            <p className="text-sm line-clamp-3 px-2 py-2 text-secondary">{post.excerpt}</p>
            </CardBody>
            <CardFooter className="mt-4">
              {post.categories.map((category: any) => (
                <div className={`${getCategoryColor(category.color)} opacity-80 rounded-full py-1 px-2`} key={category.slug}>
                  <p className="text-xs text-white font-bold">{category.title}</p>
                </div>
              ))}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
