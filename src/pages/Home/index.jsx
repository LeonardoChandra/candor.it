import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

import "./style.css";
import "./mediaqueries.css";
import { pageData } from "./itemData";
import ProjectItem from "./ProjectItems";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Inner from "../../components/Animation/Curve/transition";
import useHoverEffect from "../../components/Animation/useHoverEffect";

const Home = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".hero__parallax-hand", {
        y: () => window.innerHeight / 1,
        clipPath: "inset(0 0 200% 0)",
        scrollTrigger: {
          trigger: ".hero__text-content-container",
          start: "top top",
          end: "+=4000",
          scrub: 1,
        },
      });

      gsap.to(".slides", {
        x: "-20%",
        scrollTrigger: {
          trigger: ".project__projects-container ul li:nth-child(1)",
          pinSpacing: true,
          scrub: 1,
          start: "top",
          end: "+=2000",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useHoverEffect(".btn-jiggle", 1.2, 3.0, 0.1);

  return (
    <Inner>
      <section id="HOME">
        {/* =================================== HERO =================================== */}
        <section id="hero">
          <div className="hero__text-container">
            <h1 className="hero__text-title text-title">
              Digitalize
              <br />
              Your Brand.
            </h1>
            <div className="hero__text-content-container">
              <p className="hero__text-content">We craft cutting-edge websites, mobile apps, and other technologies solution tailored to your business. Elevate your digital presence with our reliable development services.</p>
            </div>
          </div>
          <div className="hero__parallax-container">
            <img src="/home/background.png" className="hero__parallax-bg" />
            <img src="/home/wave.png" className="hero__parallax-bg-wave" />
            <img src="/home/hand.png" className="hero__parallax-hand" />
          </div>
        </section>
        <div className="white-corner-box" />
        {/* =================================== SERVICE =================================== */}
        <section id="service">
          <div className="service__text-container">
            <div className="service__text-content-container">
              <h1 className="service__text-title text-title">Solution.</h1>
              <div className="service__text-button-container">
                <Link to="/Service">
                  <button className="service__text-button btn-jiggle">
                    <h1>What We Do</h1>
                  </button>
                </Link>
              </div>
            </div>
            <p className="service__text-content">Whether you need a stunning website, a cutting-edge mobile app, or an AI-powered solution to address specific challenges, our team is here to help.</p>
          </div>
        </section>
        {/* =================================== PROJECT =================================== */}
        <section id="project">
          <div className="project__text-container">
            <div className="project__text-content-container">
              <h1 className="project__text-title text-title">Recent work.</h1>
            </div>
          </div>
          <div className="project__projects-container">
            <ul>
              {pageData.map((project, index) => (
                <ProjectItem key={index} project={project} itemIndex={index} />
              ))}
            </ul>
          </div>
          <div className="project__cube-container">
            <Link to="/Projects" className="custom-btn btn-12">
              <span>Click!</span>
              <span>See All</span>
            </Link>
          </div>
          <div className="slides_wrapper">
            <div className="slides">
              <div className="slide">
                <img src="./slide/slide-3.png" className="slides__img" />
              </div>
              <div className="slide">
                <img src="./slide/slide-1.gif" className="slides__img" />
              </div>
              <div className="slide">
                <img src="./slide/slide-2.png" className="slides__img" />
              </div>
              <div className="slide">
                <img src="./slide/slide-4.png" className="slides__img" />
              </div>
            </div>
          </div>
          <div className="project__footer-container">
            <img src="/home/background2.png" className="project__footer-bg" />
            <div className="project__footer-text-container">
              <h1 className="project__footer-title text-title">
                Elevate your
                <br />
                vision now!
              </h1>
              <button className="project__footer-button btn-jiggle">START NOW</button>
            </div>
          </div>
        </section>
        {/* =================================== Contact & Footer =================================== */}
        <section id="contact">
          <div className="white-corner-box top" />
          <div className="contact__content-container">
            <div className="contact-container">
              <Contact />
            </div>
            <div className="footer-container">
              <Footer />
            </div>
          </div>
        </section>
      </section>
    </Inner>
  );
};

export default Home;
