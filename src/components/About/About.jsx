import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h2>LAST APP STANDING, WYOMING USA</h2>
              <h3>Software Development Intern (Remote)</h3>
              <br />
              <p>Developing a cross-platform mobile application (iOS & Android) focused on automated dietary and calorie tracking. 
                <br />
Integrating Large Language Models (LLMs) and image recognition, allowing users to instantly extract accurate nutritional information simply by taking a photo of their food. 
    <br />
Designing an intuitive user interface to streamline daily meal logging and deliver real-time caloric data.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uilcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>DSA</h3>
              <p>
                Solved more than 150 questions on Data Structures and Algorithms so far.  
                Check out my{" "}
                <a
                  href="https://leetcode.com/u/huzaif7999/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  LeetCode Profile
                </a>.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
