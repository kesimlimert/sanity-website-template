export default {
	name: 'page',
	title: 'Page',
	type: 'document',
	fields: [
	  {
		name: 'title',
		title: 'Title',
		type: 'string',
	  },
	  {
		name: 'slug',
		title: 'Slug',
		type: 'slug',
		options: {
		  source: 'title',
		  maxLength: 96,
		},
	  },
	  {
		name: 'content',
		title: 'Content',
		type: 'array',
		of: [
		  { type: 'author' },
		  { type: 'pageTexts' },
		  { type: 'post' },
		  { type: 'gallery' },
		],
	  },
	],
  };