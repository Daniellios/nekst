import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import ProductCard from "../components/ProductCard";
import ProductDeals from "../components/ProductDeals";
import styles from "../styles/Home.module.scss";
import type { IProduct } from "../types/product.interface";

const URL = "https://fakestoreapi.com/products/";

interface IProductListProps {
  products: IProduct[];
}

export const getStaticProps: GetStaticProps<{
  products: IProduct[];
}> = async () => {
  const res = await fetch(URL);
  const products: IProduct[] = await res.json();

  return { props: { products } };
};

const Home: NextPage<IProductListProps> = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Azalia now</title>
        <meta name="description" content="Купить электронику" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        {/* PRODUCT LIST  */}
        <div className={styles.product__list}>
          <ProductDeals></ProductDeals>
          {products.map((product: IProduct) => (
            <ProductCard key={product.id} {...product}></ProductCard>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
