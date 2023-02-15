import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query Pages($first: Int) {
    pages(first: $first) {
      heading
      id
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`
export const GET_ALL_PLACES = gql`
  query getPlaces {
    places {
      id
      slug
      name
      description {
        html
      }
      location {
        latitude
        longitude
      }
      gallery {
        url
        width
        height
      }
    }
  }
`
