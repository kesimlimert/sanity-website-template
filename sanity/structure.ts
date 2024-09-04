import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Main')
    .items([
      S.listItem()
        .title('Main')
        .child(
          S.list()
            .title('Services')
            .items([
              S.documentTypeListItem('post').title('Services'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('author').title('Authors'),
              S.divider(),
              ...S.documentTypeListItems().filter(
                (item) => item.getId() && !['post', 'category', 'author','aboutUs','contactUs','settings'].includes(item.getId()!),
              ),
            ])
        ),
      S.listItem()
        .title('Single Documents')
        .child(
          S.list()
            .title('Single Documents')
            .items([
              S.documentTypeListItem('homePage').title('Home Page'),
              S.documentTypeListItem('aboutUs').title('About Us'),
              S.documentTypeListItem('contactUs').title('Contact Us'),
              S.divider(),
              S.documentTypeListItem('navbar').title('Website Navigation'),
              S.documentTypeListItem('settings').title('Site settings'),
            ])
        ),
    ])