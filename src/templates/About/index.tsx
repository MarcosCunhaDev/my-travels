import LinkWrapper from '@/components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import React from 'react'
import * as s from './styles'

function About() {
  return (
    <s.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="about" />
      </LinkWrapper>
      <s.Heading>My Travels</s.Heading>
      <s.Body>
        <p>
          Qui irure commodo pariatur ipsum mollit dolore culpa anim officia
          exercitation fugiat. Dolore ut culpa qui laboris officia magna tempor
          labore culpa velit consequat culpa. Consectetur aute velit irure
          dolore esse incididunt. Consequat non magna minim do mollit dolore
          dolore incididunt sint enim. Aliqua laborum laborum voluptate in duis
          Lorem laboris commodo in. Cupidatat Lorem eiusmod commodo do in culpa
          elit sunt elit.{' '}
        </p>
      </s.Body>
    </s.Content>
  )
}

export default About
