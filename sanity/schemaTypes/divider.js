export default {
	name: 'divider',
	type: 'object',
	title: 'Divider',
	fields: [
	  {
		name: 'title',
		type: 'string',
		title: 'Title',
		description: 'Title of the divider',
		validation: Rule => Rule.max(30).warning('Title should be under 30 characters'),
	  },
	  {
		name: 'paragraph',
		type: 'text',
		title: 'Paragraph',
		description: 'Paragraph text with a maximum length of 60 characters',
		validation: Rule => Rule.max(60).warning('Paragraph should be under 60 characters'),
	  },
	  {
		name: 'displayButton',
		type: 'boolean',
		title: 'Display Button',
		description: 'Toggle to display or hide the button',
	  },
	  {
		name: 'button',
		type: 'object',
		title: 'Button',
		hidden: ({ parent }) => !parent.displayButton,
		fields: [
		  {
			name: 'buttonText',
			type: 'string',
			title: 'Button Text',
		  },
		  {
			name: 'buttonLink',
			type: 'reference',
			title: 'Button Link',
			to: [{ type: 'page' }, { type: 'aboutUs' }, { type: 'contactUs' }],
		  },
		],
	  },
	],
  };