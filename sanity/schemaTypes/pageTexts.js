export default {
	name: 'pageTexts',
	title: 'Page Texts',
	type: 'document',
	description: 'Write text blocks for pages',
	fields: [
	  {
		name: 'title',
		title: 'Title',
		type: 'string',
	  },
	  {
		name: 'content',
		title: 'Content',
		type: 'blockContent', 
	  },
	],
  };