import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Huzaif</h1>
        <p className={styles.description}>
          Currently working with a US-based startup, Last App Standing, where I am building cross-platform applications with integrated LLM technologies. 
          <br /> 
          As a Software Developer, I focus on creating intuitive, high-performance web and mobile apps, leveraging my experience in C++ and JavaScript to optimize algorithms and lead the development of AI-driven solutions.
        </p>
        <a href="mailto:huzaif7999@gmail.com" className={styles.contactBtn}>
          Mail
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
