export default {
  name: "contactUs",
  type: "document",
  title: "Contact Us",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Title of the contact us section",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Slug for the Contact Us section, used in URLs",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "paragraph",
      type: "text",
      title: "Paragraph",
      description: "A short paragraph describing the contact us section",
    }
  ],
};
