import React from "react";
import "./about.css";
import MeAbout from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5 className="getabout">Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MeAbout} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Fresher</h5>
            </article>
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              {/* <small>80+ Completed</small> */}
            </article>
          </div>
          <p>I'm Suneel kumar vulavala I'm Frontend and Backend Developer from Anantapur, India, I build apps with a focus on JavaScript React & Redux considering all the aspects of UI/UX . I enjoy turning complex problems into simple, beautiful and intuitive designs.
A Software Engineer , who loves to solve problems. I am having an some practical experience of building high-performing, responsive, beautiful web applications to deliver a unique, intuitive user experience that works, also keen interest in UI/UX with some nice designing skills.
I am a well-trained teammate who loves to share ideas and prioritizes communication in order to achieve goals within the set deadlines. I enjoy being challenged and working on projects that require me to step outside of my comfort zone.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
