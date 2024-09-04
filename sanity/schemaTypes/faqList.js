export default {
	name: 'faqList',
	type: 'object',
	title: 'FAQ List',
	fields: [
	  {
		name: 'title',
		type: 'string',
		title: 'Title',
		description: 'Title of the FAQ list document',
	  },
	  {
		name: 'displayContentTextBlock',
		type: 'boolean',
		title: 'Display Content Text Block',
		description: 'Toggle to display or hide the content text block',
	  },
	  {
		name: 'contentTextBlock',
		type: 'contentTextBlock',
		title: 'Content Text Block',
		hidden: ({ parent }) => !parent.displayContentTextBlock,
	  },
	  {
		name: 'faqReferences',
		type: 'array',
		title: 'FAQ References',
		of: [{ type: 'reference', to: [{ type: 'faq' }] }],
	  },
	],
  };