export default {
	name: 'imageFullWidth',
	title: 'Image Full Width',
	type: 'object',
	description: 'Image that spans the full width of the page',
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string"
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			fields: [
			  {
				name: "alt",
				type: "string",
				title: "Alternative text",
				description: "Important for SEO and accessiblity."
			  }
			],
			options: {
			  hotspot: true
			}
		  },
	],
  };