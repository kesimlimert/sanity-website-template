export default {
	name: 'postList',
	type: 'object',
	title: 'Post List',
	fields: [
	  {
		name: 'title',
		type: 'string',
		title: 'Title',
		description: 'Title of the Services list document',
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
		name: 'postListReferences',
		type: 'array',
		title: 'Services References',
		of: [{ type: 'reference', to: [{ type: 'post' }] }],
	  },
	],
  };