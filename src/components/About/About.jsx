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
              <h3>Frontend Developer</h3>
              <p>
                Specializing in creating responsive and visually appealing user interfaces using HTML, CSS, and JavaScript frameworks like React.
              </p>
            </div>
          </li>
{/*           <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Proficient in building robust server-side applications and APIs with Node.js, Express, and MongoDB.
              </p>
            </div>
          </li> */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uilcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>DSA</h3>
              <p>
                Solved more than 100 questions on Data Structures and Algorithms so far.  
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
