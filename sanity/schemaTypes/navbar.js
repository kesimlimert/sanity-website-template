export default {
  name: "navbar",
  type: "document",
  title: "Navbar",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Give a name for dropdown menu item",
    },
    {
      name: "hideDropdown",
      type: "boolean",
      title: "Hide Dropdown",
      description: "Toggle to hide or show the dropdown menu",
    },
    {
      name: "pageReferences",
      type: "array",
      title: "Page References",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }, { type: "contactUs" }, { type: "aboutUs" }],
        },
      ],
    },
  ],
};
