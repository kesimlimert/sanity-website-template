import { BrandsList } from "./BrandsList";
import { TextImage } from "./TextImage";

type Block = {
  _type: string;
  _key: string;
};

type Props = {
  content: Block[];
};

export function BlockRenderer({ content }: Props) {
  return (
    <>
      {content.map((block) => {
        switch (block._type) {
          case "textImage":
            return <TextImage key={block._key} data={block} />;
          case "brandsList":
            return <BrandsList key={block._key} data={block} />;
          // Add more cases for other block types
          default:
            return null;
        }
      })}
    </>
  );
}
