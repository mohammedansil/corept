import Head from "next/head";
import AboutUsPage from "../container/AboutUsPage";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Corept | About Us</title>
        <meta name="description" content="Corept Construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutUsPage />
    </>
  );
}
