import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
    projectId:'dr9a8bl5',
    dataset:'production',
    apiVersion:'2022-05-30',
    useCdn: true,
    
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);