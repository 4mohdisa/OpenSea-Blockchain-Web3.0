import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 's6k1ia73',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skf6If9nNDeEY8th8cuMWg2ZWoXn0yxKCr3fRT640k7aK0NE9KxRpONO4O48pAXN1noXCenFnfHgizoxE57YRyhQ6KnOhus7hwSSaM7EMg5PYyXG1c7EeX5P0FxgH1tyRfhFU1cQ0vqCkrS1yAwrybrcPiEim7dEvKD8IUnspSmDLL9PmIYx',
  useCdn: false,
})
