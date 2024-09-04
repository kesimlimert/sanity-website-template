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
    },
    {
      name: "mail",
      type: "string",
      title: "Email",
      description: "Contact email address",
      validation: (Rule) =>
        Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
          name: "email",
          invert: false,
        }).error("Invalid email address"),
    },
    {
      name: "telephone",
      type: "string",
      title: "Telephone Number",
      description: "Contact telephone number",
      validation: (Rule) =>
        Rule.regex(/^\+?[1-9]\d{1,14}$/, {
          name: "telephone",
          invert: false,
        }).error("Invalid telephone number"),
    },
    {
      name: "address",
      type: "string",
      title: "Address",
      description: "Contact address",
    },
  ],
};
