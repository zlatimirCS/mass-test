import Head from "next/head";
import Layout from "@/components/Layout";
import HomepageHero from "@/components/ui/HomepageHero";
import FullWidthCarousel from "@/components/ui/FullWidthCarousel";
import Promotions from "@/components/ui/Promotions";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <HomepageHero />
          <FullWidthCarousel />
          <Promotions />
        </>
      </Layout>
    </>
  );
}
