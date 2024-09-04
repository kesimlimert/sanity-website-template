export default {
	name: 'imageGallery',
	type: 'object',
	title: 'Image Gallery',
	fields: [
	  {
		name: 'title',
		type: 'string',
		title: 'Title',
	  },
	  {
		name: 'images',
		type: 'array',
		title: 'Images',
		of: [{ type: 'image' }],
		options: {
		  layout: 'grid',
		},
	  },
	],
  };