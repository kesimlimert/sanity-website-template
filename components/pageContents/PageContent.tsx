"use client";
import { BlockRenderer } from "../BlockRenderer";
import { useNavbarStore } from "@/lib/store";
import { useEffect } from "react";

type Props = {
  data: any;
};

export function PageContent({ data }: Props) {
  const { setActiveItem } = useNavbarStore();
  useEffect(() => {
    setActiveItem(data?.slug.current);
  }, [setActiveItem, data?.slug]);
  return (
    <>
      <BlockRenderer content={data.content} />
    </>
  );
}
