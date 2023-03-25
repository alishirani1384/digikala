import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
        type: 'image',
      options: {
          hotspot: true,
          
      },
    }),
  ],
})

