import { BrandsList } from "./BrandsList";
import { TextImage } from "./TextImage";
import { CategoryReferences } from "./CategoryReferences";
import { PostReferences } from "./PostReferences";
import { VideoReferences } from "./VideoReferences";
import { ImageFullWidth } from "./ImageFullWidth";
import { ImageGallery } from "./ImageGallery";
import { FaqList } from "./FaqList";
import { TestimonialList } from "./TestimonialList";
import { PageTexts } from "./PageTexts";
import { CardList } from "./CardList";
import { Divider } from "./Divider";

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
          case "categoryReferences":
            return <CategoryReferences key={block._key} data={block} />;
          case "postReferences":
            return <PostReferences key={block._key} data={block} />;
          case "videoReferences":
            return <VideoReferences key={block._key} data={block} />;
          case "imageFullWidth":
            return <ImageFullWidth key={block._key} data={block} />;
          case "imageGallery":
            return <ImageGallery key={block._key} data={block} />;
          case "brandsList":
            return <BrandsList key={block._key} data={block} />;
          case "faqList":
            return <FaqList key={block._key} data={block} />;
          case "testimonialList":
            return <TestimonialList key={block._key} data={block} />;
          case "textImage":
            return <TextImage key={block._key} data={block} />;
          case "pageTexts":
            return <PageTexts key={block._key} data={block} />;
          case "cardList":
            return <CardList key={block._key} data={block} />;
          case "divider":
            return <Divider key={block._key} data={block} />;
          default:
            console.warn(`Unsupported block type: ${block._type}`);
            return null;
        }
      })}
    </>
  );
}