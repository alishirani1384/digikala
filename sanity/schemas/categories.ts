import { defineType,defineField } from "sanity";

export default defineType({
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
      defineField({
          name: "title",
          title: "Title",
          type:"string",
      }),
  ],
})