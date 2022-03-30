import sanityClient from '@sanity/client'

const options = {
    projectId: "g84vjx02",
    dataset: "production"
}

const client = sanityClient({
    ...options,
    apiVersion: '2021-08-31',
    useCdn: true
});

export default client;