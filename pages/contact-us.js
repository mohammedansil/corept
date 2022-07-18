import Head from "next/head";
import ContactUsPage from "../container/ContactUsPage";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Corept | Contact Us</title>
        <meta name="description" content="Corept Construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactUsPage />
    </>
  );
}
