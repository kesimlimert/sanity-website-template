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
		name: 'faqReferences',
		type: 'array',
		title: 'FAQ References',
		of: [{ type: 'reference', to: [{ type: 'faq' }] }],
	  },
	],
  };