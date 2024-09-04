export default {
  name: "faq",
  type: "document",
  title: "FAQ",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Title of the FAQ document",
    },
    {
      name: "question",
      type: "string",
      title: "Question",
      description: "The FAQ question",
    },
    {
      name: "answer",
      type: "text",
      title: "Answer",
      description: "The FAQ answer",
    },
  ],
};
