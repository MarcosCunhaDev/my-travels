import LinkWrapper from '@/components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
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
    description?: { html: string }
    gallery: ImageProps[]
  }
}

function PlaceTemplate({ place }: PlaceTemplateProps) {
  const { name, description, gallery } = place
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <s.Wrapper>
        <s.Container>
          <s.Heading>{name}</s.Heading>
          {description?.html && (
            <s.Body>
              <div
                dangerouslySetInnerHTML={{ __html: description?.html }}
              ></div>
            </s.Body>
          )}

          <s.Gallery>
            {gallery.map((place, index) => {
              return (
                <Image
                  src={place.url}
                  alt={name}
                  key={`photo-${index}`}
                  width={1000}
                  height={600}
                  quality={75}
                />
              )
            })}
          </s.Gallery>
        </s.Container>
      </s.Wrapper>
    </>
  )
}

export default PlaceTemplate
