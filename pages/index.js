import Head from 'next/head'
import HomePage from '../container/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Corept | Home</title>
        <meta name="description" content="Corept Construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage/>
    </>
  )
}
