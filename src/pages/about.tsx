import { NextPage } from 'next'
import About from '@/templates/About'
import client from '@/graphql/client'
import { GET_PAGES } from '@/graphql/queries'

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)
  console.log(pages)
  return { props: {} }
}

const AboutPage: NextPage = () => {
  return <About />
}

export default AboutPage
