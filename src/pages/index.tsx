import HomeTemplate from './Home'
import React from 'react'
import { MapProps } from '@/components/Map'
import client from '@/graphql/client'
import { GetStaticProps } from 'next'
import { GET_ALL_PLACES } from '@/graphql/queries'
import { GetPlacesQuery } from '@/graphql/generated/graphql'

function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_ALL_PLACES)

  if (!places.length) return { notFound: true }

  return {
    props: {
      places
    }
  }
}

export default Home
