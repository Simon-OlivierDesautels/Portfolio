import React, { ReactNode } from "react";
import images from "../assets/skills/images";

export const Skills = () => {
  return (
    <div className="content">
      <div className="wrapper bloc">
        <h2>Skills and experiences</h2>
        <div className="skills">
          <ul className="skills-detail__list">
            {images.map((element) => {
              console.log(images);
              return (
                <li className="skills-detail__list__skill">
                  <div className="skills-detail__infobox">
                    <p>{element["name"]}</p>
                  </div>
                  <img src={element["image"].src} alt={element["image"].src} />
                </li>
              );
            })}
          </ul>
          <div>
            <div className="experience">
              <b>2022</b>
              <span>
                <b>College diploma in multimedia integration</b>
                <p>Édouard Montpetit college</p>
              </span>
            </div>
            <div className="experience">
              <b>2021</b>
              <span>
                <b>Programmer and graphic designer</b>
                <p>Bleuet Design</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
