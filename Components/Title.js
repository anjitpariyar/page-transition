import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styles from "./title.module.scss";

const Title = ({ text, arc, radius }) => {
  const characters = text.split("");
  const degree = arc / characters.length;

  return (
    <motion.h1
      className={styles.Title}
      layoutId="header"
      style={{ height: `${radius / 1.5}px` }}
    >
      {characters.map((char, i) => (
        <span
          key={`heading-span-${i}`}
          style={{
            height: `${radius}px`,
            transform: `rotate(${degree * i - arc / 2}deg)`,
            transformOrigin: `0 ${radius}px 0`,
            position: "absolute",
          }}
        >
          {char}
        </span>
      ))}
    </motion.h1>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  arc: PropTypes.number, // how curved do you want the text
  radius: PropTypes.number, // how big do you want the curve
};

Title.defaultProps = {
  arc: 120,
  radius: 400,
};

export default Title;
