import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'lukarakic'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: import.meta.env.VITE_TOKEN,
})
