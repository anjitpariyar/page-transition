import style from "../../styles/home.module.scss";
import style2 from "../../styles/product.module.scss";

import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { motion } from "framer-motion";

const Product = () => {
  const {
    query: { product },
  } = useRouter();
  return (
    <>
      <Head>
        <title>Page Transition - {product}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="title" content={"page transition - " + product} />
        <meta
          property="og:description"
          content={"page transition - " + product}
        />
        <meta property="image" content={"/images/" + product + ".jpg"} />
        <meta property="title" content={"page transition - " + product} />
        <meta
          property="og:description"
          content={"page transition - " + product}
        />
        <meta property="og:image" content={"/images/" + product + ".jpg"} />
      </Head>
      <main className={style.Container}>
        <motion.h1 className={style.Title} layoutId="header">
          My {product}
        </motion.h1>
        <motion.div
          className={style.Card + " " + style2.Card}
          layoutId={product}
        >
          <Image
            src={"/images/" + product + ".jpg"} // Route of the image file
            height={450} // Desired size with correct aspect ratio
            width={524} // Desired size with correct aspect ratio
            layout="responsive"
            alt={"this image is full view of product"}
            objectFit="cover"
            priority
          />
        </motion.div>
        <Link href="/">
          <a className={style2.Back}>Back</a>
        </Link>
      </main>
    </>
  );
};

export default Product;
