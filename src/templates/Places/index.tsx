import LinkWrapper from '@/components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import React from 'react'
import * as s from './styles'

export type ImageProps = {
  url: string
  width: number
  height: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description: { html: string }
    gallery: ImageProps[]
  }
}

function PlaceTemplate({ place }: PlaceTemplateProps) {
  const { name, description, gallery } = place
  return (
    <s.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="about" />
      </LinkWrapper>
      <s.Heading>{name}</s.Heading>
      <s.Body>
        <div dangerouslySetInnerHTML={{ __html: description.html }}></div>
      </s.Body>
      {gallery.map((place, index) => {
        return <img src={place.url} alt={name} key={`photo-${index}`} />
      })}
    </s.Content>
  )
}

export default PlaceTemplate
