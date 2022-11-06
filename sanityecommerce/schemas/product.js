//Export JSON to be concat with schema.js

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [

        //Image of product
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },

        //Name of product
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },

        //Slug (unique ID) of our product
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },

        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },

        //Price of our product
        {
            name: 'details',
            title: 'Details',
            type: 'string'

        }
    ]
}