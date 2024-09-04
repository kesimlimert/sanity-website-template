export default {
  name: "aboutUs",
  type: "document",
  title: "About Us",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Title of the About Us section",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Slug for the About Us section, used in URLs",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "paragraphs",
      type: "array",
      title: "Paragraphs",
      description: "Paragraphs describing the About Us section",
      of: [{ type: "text" }],
    },
    {
      name: "team",
      type: "array",
      title: "Team",
      description: "Team members",
      of: [
        {
          name: "teamMember",
          type: "reference",
          to: [{ type: "author" }],
        },
      ],
    },
  ],
};
