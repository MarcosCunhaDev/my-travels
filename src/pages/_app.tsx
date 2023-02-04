import GlobalStyles from '@/styles/global'
import Theme from '@/styles/theme'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Travels</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project to show my favorite spots in the world!"
        ></meta>
      </Head>
      <Theme>
        <GlobalStyles />
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
