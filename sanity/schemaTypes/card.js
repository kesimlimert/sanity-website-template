export default {
  name: "card",
  type: "document",
  title: "Card",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required().error("Title is required"),
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
      description: "Optional subtitle",
      validation: (Rule) => Rule.optional(),
    },
    {
      name: "paragraph",
      type: "text",
      title: "Paragraph",
      validation: (Rule) => Rule.required().error("Paragraph is required"),
    },
  ],
};
