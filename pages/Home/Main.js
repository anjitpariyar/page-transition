import style from "../../styles/home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// const myLoader = ({ src, width, quality }) => {
//   return `https://i1.wp.com/angularscript.com/wp-content/uploads/2018/06/Progressively-Loading-Images-With-Blur-Effect-min.png?resize=800%2C455&ssl=1`;
// };
import Title from "../../Components/Title";
const Main = () => {
  return (
    <div className={style.Container}>
      <Title text="Click one of us" arc={120} radius={300} />
      <section className={style.Grid}>
        {["ig", "wallpaint"].map((img, index) => (
          <Link href={"product/" + img} key={img + "-" + index}>
            <motion.a className={style.Card} layoutId={img}>
              <Image
                // loader={myLoader}
                src={"/images/" + img + ".jpg"} // Route of the image file
                height={450} // Desired size with correct aspect ratio
                width={524} // Desired size with correct aspect ratio
                layout="responsive"
                alt="click me"
                objectFit="cover"
                priority
              />
            </motion.a>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Main;
