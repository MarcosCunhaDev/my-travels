import { GetStaticProps } from 'next'
import PlaceTemplate from '@/templates/Places'

import client from '@/graphql/client'
import { GET_ALL_PLACES, GET_PLACE_BY_SLUG } from '@/graphql/queries'
import { useRouter } from 'next/router'
import { PlaceTemplateProps } from '@/templates/Places'
import {
  GetPlacesQuery,
  GetPlaceBySlugQuery
} from '@/graphql/generated/graphql'

const Place = ({ place }: PlaceTemplateProps) => {
  const router = useRouter()

  //retorna um loading, qq coisa enquanto tá sendo criada
  if (router.isFallback) return null
  return <PlaceTemplate place={place} />
}
export const getStaticPaths = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_ALL_PLACES, {
    first: 3
  })
  const paths = places.map(({ slug }) => ({ params: { slug } }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true }

  return {
    props: {
      place
    }
  }
}

export default Place
