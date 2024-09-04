export default {
  name: "navbar",
  type: "document",
  title: "Navbar",
  fields: [
    {
      name: "navItems",
      type: "array",
      title: "Navigation Items",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
              description: "Title of the navigation item",
            },
            {
              name: "pageReferences",
              type: "array",
              title: "Page References",
              of: [
                {
                  type: "reference",
                  to: [
                    { type: "page" },
                    { type: "contactUs" },
                    { type: "aboutUs" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
