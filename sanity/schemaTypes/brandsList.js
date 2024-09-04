export default {
	name: 'brandsList',
	type: 'object',
	title: 'Brands List',
	fields: [
		{
			name: 'brandImages',
			type: 'array',
			title: 'Brand Images',
			of: [{ type: 'brandImage' }],
		},
	],
  };