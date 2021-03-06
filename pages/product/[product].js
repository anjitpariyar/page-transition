import style from "../../styles/home.module.scss";
import style2 from "../../styles/product.module.scss";
import Title from "../../Components/Title";

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

        <meta
          property="og:title"
          content={"page transition - " + product}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={"page transition - " + product}
          key="ogdescription"
        />
        <meta
          property="image"
          content={"../../public/images/" + product + ".jpg"}
          key="image"
        />
        <meta
          property="title"
          content={"page transition - " + product}
          key="title"
        />
        <meta
          property="og:description"
          content={"page transition - " + product}
          key="ogdescription"
        />
        <meta
          property="og:image"
          content={"../../public/images/" + product + ".jpg"}
          key="ogimage"
        />
        <meta
          property="image"
          content={"/images/" + product + ".jpg"}
          key="image"
        />
        <meta
          property="og:url"
          content={"https://page-transition-pi.vercel.app/product/" + product}
          key="url"
        />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:locale" content="en_GB" key="locale" />
      </Head>

      <main className={style.Container}>
        <Title text={"My" + product} arc={120} radius={300} />

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
