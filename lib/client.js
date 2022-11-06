import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'hluh4urr',
    dataset: 'production',
    apiVersion: '2022-03-10', // use current UTC date - see "specifying API version"!
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // or leave blank for unauthenticated usage
    useCdn: true,
})

const builder = imageUrlBuilder(client);

//Arrow function that takes in a source and returns the image from builder
export const urlFor = (source) => builder.image(source)