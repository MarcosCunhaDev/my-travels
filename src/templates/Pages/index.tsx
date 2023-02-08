import LinkWrapper from '@/components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import React from 'react'
import * as s from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

function PageTemplate({ heading, body }: PageTemplateProps) {
  return (
    <s.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="about" />
      </LinkWrapper>
      <s.Heading>{heading}</s.Heading>
      <s.Body>
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
      </s.Body>
    </s.Content>
  )
}

export default PageTemplate
