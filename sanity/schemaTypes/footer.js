export default {
  name: "footer",
  type: "document",
  title: "Footer",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Title of the footer section",
    },
    {
      name: "navigation",
      type: "array",
      title: "Navigation",
      description: "Navigation items in the footer",
      of: [
        {
          type: "reference",
		  name: "pageReferences",
          to: [{ type: "aboutUs" }, { type: "page" }, { type: "contactUs" }],
        },
      ],
	  validation: Rule => Rule.max(10).warning('You can only add up to 10 navigation items'),
    },
    {
      name: "displaySocialMedia",
      type: "boolean",
      title: "Display Social Media",
      description: "Toggle to display or hide social media links",
    },
  ],
};
