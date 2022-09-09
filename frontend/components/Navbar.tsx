import React from "react";
import images from "../assets/images"


export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home" className=" nav__item"><img src={images.home.src} alt="home" /></a></li>
        <li><a href="#about" className="nav__item"><img src={images.about.src} alt="about" /></a></li>
        <li><a href="#projects" className="nav__item"><img src={images.projects.src} alt="projects" /></a></li>
        <li><a href="#contact" className="nav__item"><img src={images.contact.src} alt="contact" /></a></li>
      </ul>
    </nav>
  );
};
