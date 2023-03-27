import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'services',
  title: 'Services',
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
      defineField({
          name: "text",
          title: "Text",
          type:"string"
      })
  ],
})
