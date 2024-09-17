import { BrandsList } from "./BrandsList";
import { TextImage } from "./TextImage";
import { PostList } from "./PostList";
import { VideoReferences } from "./VideoReferences";
import { ImageFullWidth } from "./ImageFullWidth";
import { ImageGallery } from "./ImageGallery";
import { FaqList } from "./FaqList";
import { TestimonialList } from "./TestimonialList";
import { PageTexts } from "./PageTexts";
import { CardList } from "./CardList";
import { Divider } from "./Divider";

// Base types
type BaseBlock = {
  _type: string;
  _key: string;
};

type ContentTextBlock = any;

// Specific block types
type BrandsListBlock = BaseBlock & {
  _type: "brandsList";
  brandImages?: { image: any; alt: string }[];
};

type TextImageBlock = BaseBlock & {
  _type: "textImage";
  image: {
    asset: { _ref: string; _type: string };
    position?: "left" | "right";
  };
  fullWidth?: boolean;
  displayContentTextBlock?: boolean;
  contentTextBlock?: ContentTextBlock;
  title?: string;
  displayParagraph?: boolean;
  paragraph?: string;
  displayList?: boolean;
  list?: string[];
  showIcons?: boolean;
  displayButton?: boolean;
  button?: {
    buttonText: string;
    buttonLink: { slug: string };
  };
};

type VideoReferencesBlock = BaseBlock & {
  _type: "videoReferences";
  title: string;
  description: string;
  displayContentTextBlock?: boolean;
  contentTextBlock?: ContentTextBlock;
  videoSource?: string;
};

type TestimonialListBlock = BaseBlock & {
  _type: "testimonialList";
  displayContentTextBlock?: boolean;
  contentTextBlock?: ContentTextBlock;
  testimonialReferences: {
    comment: string;
    authorName: string;
    authorJobTitle: string;
  }[];
};

type DividerBlock = BaseBlock & {
  _type: "divider";
  title: string;
  paragraph: string;
  displayButton: boolean;
  button: {
    buttonText: string;
    buttonLink: {
      title: string;
      slug: string;
    };
  };
};

type FaqListBlock = BaseBlock & {
  _type: "faqList";
  title: string;
  displayContentTextBlock: boolean;
  contentTextBlock: ContentTextBlock;
  faqReferences: {
    _id: string;
    title: string;
    question: string;
    answer: string;
  }[];
};

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

type PostListBlock = BaseBlock & {
  _type: "postList";
  postListReferences: Post[];
};

type ImageFullWidthBlock = BaseBlock & {
  _type: "imageFullWidth";
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  title: string;
};

type ImageGalleryBlock = BaseBlock & {
  _type: "imageGallery";
  images: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  }[];
  maxWidth?: string;
  title: string;
};

type PageTextsBlock = BaseBlock & {
  _type: "pageTexts";
  title: string;
  content: any[];
};

type CardListBlock = BaseBlock & {
  _type: "cardList";
  cards: {
    title: string;
    subtitle: string;
    paragraph: string;
  }[];
};

// Union type for all blocks
type Block =
  | BrandsListBlock
  | TextImageBlock
  | VideoReferencesBlock
  | TestimonialListBlock
  | DividerBlock
  | FaqListBlock
  | PostListBlock
  | ImageFullWidthBlock
  | ImageGalleryBlock
  | PageTextsBlock
  | CardListBlock;

type Props = {
  content: Block[];
};

export function BlockRenderer({ content }: Props) {
  return (
    <>
      {content.map((block) => {
        switch (block._type) {
          case "postList":
            return <PostList key={block._key} data={block} />;
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
            console.warn(`Unsupported block type: ${(block as Block)._type}`);
            return null;
        }
      })}
    </>
  );
}
