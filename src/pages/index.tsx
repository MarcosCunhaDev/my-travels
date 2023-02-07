import React from 'react'
import DynamicMap from '@/components/Map/dynamicMap'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from '@/components/LinkWrapper'

const place = {
  id: '1',
  name: 'Brasília',
  slug: 'brasilia',
  location: { latitude: -15.793889, longitude: -47.882778 }
}

function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>
      <DynamicMap places={[place]} />
    </>
  )
}

export default Home
