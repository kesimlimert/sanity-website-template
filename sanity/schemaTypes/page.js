export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "postList" },
        {
          name: "videoReferences",
          type: "reference",
          title: "Add video",
          to: [{ type: "video" }],
        },
        { type: "imageFullWidth" },
        { type: "imageGallery" },
        { type: "brandsList" },
        { type: "faqList" },
        { type: "testimonialList" },
        { type: "textImage" },
        { type: "pageTexts" },
        { type: "cardList" },
        { type: "divider" },
      ],
    },
  ],
};
