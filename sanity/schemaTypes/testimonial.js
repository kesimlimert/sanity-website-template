export default {
  name: "testimonial",
  type: "document",
  title: "Testimonial",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Title of the testimonial",
    },
    {
      name: "comment",
      type: "text",
      title: "Comment",
      description: "The testimonial comment",
    },
    {
      name: "authorName",
      type: "string",
      title: "Author Name",
      description: "Name of the person who gave the testimonial",
    },
    {
      name: "authorJobTitle",
      type: "string",
      title: "Author Job Title",
      description: "Job title of the person who gave the testimonial",
    },
  ],
};
