export default {
	name: 'brandImage',
	type: 'document',
	title: 'Brands',
	fields: [
	  {
		name: 'image',
		type: 'image',
		title: 'Image',
		options: {
		  hotspot: true, // Enables image cropping
		},
	  },
	  {
		name: 'alt',
		type: 'string',
		title: 'Alt Text',
		description: 'Alternative text for SEO and accessibility',
	  },
	],
  };