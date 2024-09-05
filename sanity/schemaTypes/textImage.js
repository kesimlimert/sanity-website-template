export default {
  name: "textImage",
  type: "object",
  title: "Text with Image",
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
      name: "title",
      type: "string",
      title: "Title",
      description: "Title of the text and image section",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "position",
          type: "string",
          title: "Position",
          description: "to place image on left or right side",
          options: {
            list: [
              { title: "Left", value: "left" },
              { title: "Right", value: "right" },
            ],
            layout: "radio",
          },
        },
      ],
    },
    {
      name: "fullWidth",
      type: "boolean",
      title: "Full Width",
      description: "Toggle to increase the width of the container",
    },
    {
      name: "displayParagraph",
      type: "boolean",
      title: "Display Paragraph",
      description: "Toggle to display or hide the paragraph",
    },
    {
      name: "paragraph",
      type: "text",
      title: "Paragraph",
      description: "Short paragraph to placed near text",
      description: "Text content with a maximum length of 300 characters",
      validation: (Rule) => Rule.max(300),
      hidden: ({ parent }) => !parent.displayParagraph,
    },
    {
      name: "displayButton",
      type: "boolean",
      title: "Display Button",
      description: "Toggle to display or hide the button",
    },
    {
      name: "button",
      type: "object",
      title: "Button",
      description: "Button text and link to navigate user in our website",
      hidden: ({ parent }) => !parent.displayButton,
      fields: [
        {
          name: "buttonText",
          type: "string",
          title: "Button Text",
        },
        {
          name: "buttonLink",
          type: "reference",
          title: "Button Link",
          to: [{ type: "page" }, { type: "aboutUs" }, { type: "contactUs" }],
        },
      ],
    },
    {
      name: "displayList",
      type: "boolean",
      title: "Display List",
      description: "Toggle to display or hide the list",
    },
    {
      name: "list",
      type: "array",
      title: "List",
      description: "List for placing text content",
      of: [{ type: "string" }],
      hidden: ({ parent }) => !parent.displayList,
    },
    {
      name: "showIcons",
      type: "boolean",
      title: "Show Icons",
      description: "Toggle to show or hide icons for the list",
      hidden: ({ parent }) => !parent.displayList,
    },
  ],
};
