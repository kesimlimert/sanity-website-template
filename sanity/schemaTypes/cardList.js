export default {
  name: "cardList",
  type: "object",
  title: "Card List",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Title of the card list",
    },
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
      name: "cards",
      type: "array",
      title: "Cards",
      of: [
        {
          type: "reference",
          to: [{ type: "card" }],
        },
      ],
    },
  ],
};
