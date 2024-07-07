import { useEffect, useRef, useState } from "react";
import HeroImg from "../assets/dev.jpg";
import { cards } from "../utils/Data";
import { v4 as uuid } from "uuid";
import "./home.css";
import Card from "../components/card/Card";
import Portfolio1 from "../assets/project-slider-img-1.webp";
import Portfolio2 from "../assets/project-slider-img-2.webp";
import Portfolio3 from "../assets/project-slider-img-3.webp";
import Portfolio4 from "../assets/project-slider-img-4.webp";
import Portfolio5 from "../assets/project-slider-img-2.webp";
import Portfolio6 from "../assets/project-slider-img-1.webp";
import Contact from "../components/contact/Contact";
import Timeline from "../components/timeline/Timeline";
import Footer from "../components/footer/Footer";

const Home = () => {
  const skillRef = useRef(null);
  const words = ["Everything", "Love", "Solving", "Knowledge"];
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateProgressbar();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let wordIndex = 0;
    const intervalId = setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length;
      setCurrentWord(words[wordIndex]);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [words]);

  const animateProgressbar = () => {
    const progressBars = document.querySelectorAll(".skill__progress-line");
    progressBars.forEach((progressBar) => {
      const percent = progressBar.getAttribute("data-width");
      progressBar.style.width = `${percent}%`;
    });
  };

  const educationData = [
    {
      year: "2023(oct)",
      degree: "MCA",
      institution: "SBRR MAHAJANA FIRST GRADE COLLEGE MYSORE, Karnataka",
      university: "University of mysore",
      details: "Graduated with honors.",
    },
    {
      year: "2021(june)",
      degree: "BCA",
      institution: "Government Science college Hassan, karnataka",
      university: "University of mysore",
      details: "Specialized in software development.",
    },
    {
      year: "2018(june)",
      degree: "PUC",
      institution: "Sujala college Hassan, karnataka",
      university: "University of mysore",
      details: "PCMC",
    },
    {
      year: "2016(june)",
      degree: "SSLC",
      institution: "St.josephs high school Hassan, Karnataka",
      university: "University of mysore",
      details: "Specialized in software development.",
    },
  ];


  return (
    <div className="container home">
      <section className="hero-section" id="home">
        <div className="hero-section__left">
          <div className="hero-section__special-text">
            <h1>Welcome to My Portfolio</h1>
            Hello! I am <br /> Avi
          </div>
          <div className="hero-section__paragraph">
            <h3>a fullstack developer and adventure enthusiast</h3>
            <div className="container">
              <span className="first-text">Coding is</span>&nbsp;&nbsp;
              <span className="sec-text">{currentWord}</span>
            </div>
            <br />
          </div>
        </div>
        <div className="hero-section__right">
          <div className="hero-section__image">
            <img src={HeroImg} alt="hero" />
          </div>
        </div>
      </section>
      <section className="education" id="education">
        <h3 className="section__label">My Education</h3>
        <h1 className="section__title">Educational Background</h1>
        <Timeline education={educationData} />
      </section>

      <section className="services" id="services">
        <h3 className="section__label">My Services</h3>
        <h1 className="section__title">Services</h1>
        <div className="cards">
          {cards.map((card) => (
            <Card
              key={uuid()}
              icon={card.icon}
              title={card.title}
              features={card.features}
            />
          ))}
        </div>
      </section>

      <section className="skill" id="skills" ref={skillRef}>
        <div className="skill__left">
          <h3 className="section__label">My Skills</h3>
          <h2 className="section__title">My Special skills are</h2>
        </div>
        <div className="skill__right">
          <div className="skill__wrapper">
            <div className="skill__tag">Development</div>
            <div className="skill__box">
              <div className="skill__progress-line" data-width="75"></div>
              <div className="skill__percentage">75%</div>
            </div>
          </div>
          <div className="skill__wrapper">
            <div className="skill__tag">Design</div>
            <div className="skill__box">
              <div className="skill__progress-line" data-width="85"></div>
              <div className="skill__percentage">85%</div>
            </div>
          </div>
          <div className="skill__wrapper">
            <div className="skill__tag">Testing</div>
            <div className="skill__box">
              <div className="skill__progress-line" data-width="60"></div>
              <div className="skill__percentage">60%</div>
            </div>
          </div>
          <div className="skill__wrapper">
            <div className="skill__tag">Cloud</div>
            <div className="skill__box">
              <div className="skill__progress-line" data-width="65"></div>
              <div className="skill__percentage">65%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h3 className="section__label">My Projects</h3>
        <h2 className="section__title">My Complete Projects</h2>

        <div className="portfolio__grid">
          <div className="portfolio__card">
            <img src={Portfolio1} alt="portfolio 1" />
            <div className="portfolio__card-title">Portfolio 1</div>
          </div>
          <div className="portfolio__card">
            <img src={Portfolio2} alt="portfolio 2" />
            <div className="portfolio__card-title">Portfolio 2</div>
          </div>
          <div className="portfolio__card">
            <img src={Portfolio3} alt="portfolio 3" />
            <div className="portfolio__card-title">Portfolio 3</div>
          </div>
          <div className="portfolio__card">
            <img src={Portfolio4} alt="portfolio 4" />
            <div className="portfolio__card-title">Portfolio 4</div>
          </div>
          <div className="portfolio__card">
            <img src={Portfolio5} alt="portfolio 5" />
            <div className="portfolio__card-title">Portfolio 5</div>
          </div>
          <div className="portfolio__card">
            <img src={Portfolio6} alt="portfolio 6" />
            <div className="portfolio__card-title">Portfolio 6</div>
          </div>
        </div>
      </section>

      <div className="contact" id="contact">
        <h3 className="section__label">Contact</h3>
        <h2 className="section__title">Connect with me</h2>

        <Contact />
        <Footer/>
      </div>
     </div>
  );
};

export default Home;