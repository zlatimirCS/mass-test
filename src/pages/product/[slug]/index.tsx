import Head from "next/head";
import Layout from "@/components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import https from "https";

const SingleProductPage = (props: any) => {
  console.log("single product props", props);
  return (
    <>
      <Head>
        <title>Single product page</title>
        <meta name="description" content="Single product page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>Single product page</div>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  let authToken = "";
  try {
    const agent = new https.Agent({
      rejectUnauthorized: false, // Ignore SSL verification
    });
    const res = await axios.post(
      "https://magento.test/rest/V1/integration/admin/token",
      {
        username: "john.smith",
        password: "Madmoney5#",
      },
      {
        httpsAgent: agent,
      }
    );
    console.log("Response from server:", res.data);
    authToken = res.data;
  } catch (error) {
    console.error("Error fetching token:", error);
  }
  try {
    const agent = new https.Agent({
      rejectUnauthorized: false, // Ignore SSL verification
    });
    const res = await axios.get(
      "http://magento.test/rest/V1/products?searchCriteria[pageSize]=10&searchCriteria[currentPage]=1",
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        httpsAgent: agent,
      }
    );
    console.log("Response from server:", res.data);
    const products = res.data.items;
    console.log("Products from Magento:", products);

    const paths = products.map((product: any) => ({
      params: { slug: product.sku },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { paths: [], fallback: false };
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let authToken = "";
  try {
    const agent = new https.Agent({
      rejectUnauthorized: false, // Ignore SSL verification
    });
    const res = await axios.post(
      "https://magento.test/rest/V1/integration/admin/token",
      {
        username: "john.smith",
        password: "Madmoney5#",
      },
      {
        httpsAgent: agent,
      }
    );
    authToken = res.data;
  } catch (error) {
    console.error("Error fetching token:", error);
  }
  try {
    const agent = new https.Agent({
      rejectUnauthorized: false, // Ignore SSL verification
    });
    const { slug } = params as ParsedUrlQuery;
    const res = await axios.get(
      `http://magento.test/rest/V1/products/${slug}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        httpsAgent: agent,
      }
    );
    console.log("Response from server:", res.data);
    const product = res.data;

    return { props: { product } };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { props: { product: null } };
  }
};

export default SingleProductPage;
