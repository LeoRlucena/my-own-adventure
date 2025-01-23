import React from "react";

import image from "../images/education-background.jpg";

const imageAltText = "green pattern texture background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a System Development Student studying at Senac University. I enjoy studying multiple subjects that envolves the world of coding and designing.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Group projects",
  "Algorithms",
  "Always learning",
  "Finally projects",
  "Interfaces",
];

const detailOrQuote =
  "This year I'll graduate from the System Development course at Senac University.";

const Education = () => {
  return (
    <section className="padding" id="education">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default Education;
