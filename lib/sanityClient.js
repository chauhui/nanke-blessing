import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: 'p4osbiim',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})
