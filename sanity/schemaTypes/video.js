export default {
  name: "video",
  type: "document",
  title: "Video Gallery",
  fields: [
    {
      name: "displayContentTextBlock",
      type: "boolean",
      title: "Display Content Text Block",
      description: "Toggle to display or hide the content text block",
    },
    {
      name: "contentTextBlock",
      type: "contentTextBlock",
      title: "Content Text Block",
      hidden: ({ parent }) => !parent.displayContentTextBlock,
    },
    {
      name: "videoSource",
      type: "url",
      title: "Video Source",
      description: "URL of the video",
    },
    {
      name: "title",
      type: "string",
      title: "Video Title",
      description: "Title of the video",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      description: "Description of the video",
    },
  ],
};
