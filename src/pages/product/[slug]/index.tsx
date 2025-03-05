import Head from "next/head";
import Layout from "@/components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import https from "https";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const MyStyledBox = styled(Box)(({ theme }) => ({
  padding: "60px 0",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
}));

const SingleProductPage = (props: any) => {
  console.log("Props", props);
  const { product } = props;
  return (
    <>
      <Head>
        <title>Single product page</title>
        <meta name="description" content="Single product page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          <div className="row-inner">
            <MyStyledBox>
              {/*Product Slider*/}
              <article></article>
              {/*Product Slider*/}
              {/*Product Details*/}
              <article>
                <Typography
                  variant="h1"
                  sx={{ fontWeight: "800", letterSpacing: "1.5px" }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ marginTop: "30px", marginBottom: "30px" }}
                >
                  Price: <span>{product.price}</span>
                </Typography>
                <button>Add to cart</button>
              </article>
              {/*Product Details*/}
            </MyStyledBox>
            {/* <h1>{product.name}</h1>
            <h3>{product.price}</h3> */}
            {/* <img
              src={`https://magento.test/pub/media/catalog/product/${product.media_gallery_entries[0].file}`}
              alt="asdasd"
            /> */}
          </div>
        </div>
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
    authToken = res.data;
  } catch (error) {
    console.error("Error fetching token:", error);
  }
  try {
    const agent = new https.Agent({
      rejectUnauthorized: false, // Ignore SSL verification
    });
    const res = await axios.get(
      "https://magento.test/rest/V1/products?searchCriteria[pageSize]=1&searchCriteria[currentPage]=1&searchCriteria[sortOrders][0][field]=created_at&searchCriteria[sortOrders][0[direction]=DESC&searchCriteria[filterGroups][0][filters][0][field]=type_id&searchCriteria[filterGroups][0][filters][0][value]=configurable&searchCriteria[filterGroups][0][filters][0][condition_type]=eq",
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        httpsAgent: agent,
      }
    );
    const products = res.data.items;
    console.log("res Products", products);

    const paths = products.map((product: any) => ({
      params: { slug: product.sku },
    }));

    const childProductIds = products.flatMap(
      (product: any) =>
        product?.extension_attributes?.configurable_product_links || []
    );

    let morePaths: any = [];

    const getMorePaths = async (childProductIds: any) => {
      const query = new URLSearchParams({
        "searchCriteria[filterGroups][0][filters][0][field]": "entity_id",
        "searchCriteria[filterGroups][0][filters][0][value]":
          childProductIds.join(","),
        "searchCriteria[filterGroups][0][filters][0][condition_type]": "in",
      }).toString();
      console.log("query", query);

      const response = await axios.get(
        `https://magento.test/rest/V1/products?${query}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          httpsAgent: agent,
        }
      );
      console.log("response123", response?.data);
      morePaths = response.data.items.map((product: any) => ({
        params: { slug: product.sku },
      }));
      console.log("morePaths123", morePaths);
    };

    if (childProductIds.length > 0) {
      await getMorePaths(childProductIds);
    }
    console.log("childProductIds", childProductIds);
    console.log("morePaths", morePaths);

    const uniquePaths = Array.from(new Set([...paths, ...morePaths]));

    const uniqueArray = uniquePaths.filter(
      (o, index, arr) =>
        arr.findIndex((item) => JSON.stringify(item) === JSON.stringify(o)) ===
        index
    );
    // console.log("Unique paths", uniquePaths);

    // console.log("morePaths", morePaths);

    return { paths: uniqueArray, fallback: false };
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
    const product = res.data;

    return { props: { product } };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { props: { product: null } };
  }
};

export default SingleProductPage;
