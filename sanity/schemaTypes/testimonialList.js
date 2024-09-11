export default {
	name: 'testimonialList',
	type: 'object',
	title: 'Testimonial List',
	fields: [
	  {
		name: 'title',
		type: 'string',
		title: 'Title',
		description: 'Title of the Testimonial list document',
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
		name: 'testimonialReferences',
		type: 'array',
		title: 'Testimonial References',
		of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
	  },
	],
  };