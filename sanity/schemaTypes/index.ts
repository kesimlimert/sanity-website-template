import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import settings from "./settings";
import imageFullWidth from "./imageFullWidth";
import page from "./page";
import pageTexts from "./pageTexts";
import brandImage from "./brandImage";
import brandsList from "./brandsList";
import imageGallery from "./imageGallery";
import testimonial from "./testimonial";
import faq from "./faq";
import video from "./video";
import faqList from "./faqList";
import testimonialList from "./testimonialList";
import contentTextBlock from "./contentTextBlock";
import textImage from "./textImage";
import card from "./card";
import cardList from "./cardList";
import divider from "./divider";
import contactUs from "./contactUs";
import aboutUs from "./aboutUs";
import homePage from "./homePage";
import navbar from "./navbar";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    category,
    post,
    author,
    settings,
    imageFullWidth,
    page,
    pageTexts,
    brandImage,
    brandsList,
    imageGallery,
    testimonial,
    faq,
    video,
    faqList,
    testimonialList,
    contentTextBlock,
    textImage,
    card,
    cardList,
    divider,
    contactUs,
    aboutUs,
    homePage,
    navbar,
  ],
};
