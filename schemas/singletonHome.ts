import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      group: 'content',
      of: [
        {
          name: 'section',
          type: 'section',
          title: 'Section',
        },
      ],
    }),
    /* SEO fields...*/
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Only used to generate the slug.',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'seo',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
