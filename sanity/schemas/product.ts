import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
      defineField({
          name: "title",
          title: "Title",
          type: "string",
      }),
      defineField({
          name: "discount",
          title: "Discount",
          type:"number",
      })
      
  ],
})
