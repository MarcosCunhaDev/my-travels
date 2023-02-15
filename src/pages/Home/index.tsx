import React from 'react'
import DynamicMap from '@/components/Map/dynamicMap'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from '@/components/LinkWrapper'
import { MapProps } from '@/components/Map'

function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>
      <DynamicMap places={places} />
    </>
  )
}

export default HomeTemplate
