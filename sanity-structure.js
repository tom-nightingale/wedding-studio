export const SanityStructure = (S) =>
  S.list()
    .title('Kelly & Tom Wedding')
    .items([
      S.listItem()
        .title('Home')
        .child(S.document().schemaType('home').documentId('home').title('Home')),
    ])
