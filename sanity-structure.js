export const SanityStructure = (S) =>
  S.list()
    .title('Kelly & Tom Wedding')
    .items([
      S.listItem()
        .title('Home')
        .child(S.document().schemaType('home').documentId('home').title('Home')),
      S.divider(),
      S.listItem()
        .title('Evening')
        .child(S.document().schemaType('evening').documentId('evening').title('Evening')),
    ])
