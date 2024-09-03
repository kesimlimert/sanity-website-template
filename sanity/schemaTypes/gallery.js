export default {
	name: 'gallery',
	title: 'Image Gallery',
	type: 'document',
	description: 'Add image to use in pages',
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