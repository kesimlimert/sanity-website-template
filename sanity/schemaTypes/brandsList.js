export default {
  name: "brandsList",
  type: "object",
  title: "Brands List",
  fields: [
    {
      name: "brandImages",
      type: "array",
      title: "Brand Images",
      of: [
        {
          type: "reference",
          to: [{ type: "brandImage" }],
        },
      ],
	  validation: Rule => Rule.max(5).warning('You can only add up to 5 brand images'),
    },
  ],
};
