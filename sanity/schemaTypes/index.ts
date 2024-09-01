import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import settings from './settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, category, post, author, settings],
}
