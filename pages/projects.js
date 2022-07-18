import Head from "next/head";
import Home from '../components/Services/HomeSection'
import Project from '../components/Services/ProjectSection'
import Contact from '../components/Services/QuoteSection'
export default function Projects() {
  return (
    <>
    <Head>
        <title>Corept | Projects</title>
        <meta name="description" content="Corept Construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home/>
      <Project/>
      {/* <Contact/> */}
    </>
  )
}
