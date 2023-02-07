import Link from 'next/link'
import React, { ReactNode } from 'react'
import * as s from './styles'

type LinkWrapperProps = {
  href: string
  children: ReactNode
}

function LinkWrapper({ href, children }: LinkWrapperProps) {
  return (
    <s.Wrapper>
      <Link href={href}>{children}</Link>
    </s.Wrapper>
  )
}

export default LinkWrapper
