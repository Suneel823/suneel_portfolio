import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import Img3 from "../../assets/portfolio3.jpg";
import Project from "../../assets/reactproject.jpg";


const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: Img1,
      title: "E-Learning Website",
      github: "https://github.com/Suneel823/Projectss",
      demo: "https://suneel823.github.io/Projectss/",
    },
    {
      id: 2,
      image: Project,
      title: "E-commerce web (React)",
      github: "https://github.com/Suneel823/SS_E-comerce",
      demo: "https://sunel-trends.netlify.app/",
    },
    {
      id: 3,
      image: Img2,
      title: " Weather App",
      github: "https://suneel823.github.io/Weather-app/",
      demo: "https://suneel823.github.io/Weather-app/",
    },
    {
      id: 4,
      image: Img3,
      title: "Shoe Website",
      github: "https://github.com/Suneel823/Shoe-website",
      demo: "https://suneel823.github.io/Shoe-website/",
    },
  ];

  return (
    <section id="portfolio">
      <h5 className="recentwork"> My Recent Work</h5>
      <h2>Project</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
