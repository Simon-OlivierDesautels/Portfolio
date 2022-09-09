import Project from "./Project";
import { useState } from "react";

export const Projects = () => {
  const [activeType, setActiveType] = useState("all");

  const changeActiveType = (nextType: string) => {
    setActiveType(nextType);
  };

  return (
    <div className="content" >
      <div className="wrapper bloc"id="projects">
        <h2>My projects</h2>

        <div className="projects">
          <ul className="projects__nav">
            <li
              className={activeType == "all" ? "projects__nav__li-active" : ""}
              onClick={() => {
                changeActiveType("all");
              }}
            >
              <b>All</b>
            </li>
            <li
              className={activeType == "web" ? "projects__nav__li-active" : ""}
              onClick={() => {
                changeActiveType("web");
              }}
            >
              <b>Web</b>
            </li>
            <li
              className={
                activeType == "design" ? "projects__nav__li-active" : ""
              }
              onClick={() => {
                changeActiveType("design");
              }}
            >
              <b>Design</b>
            </li>
            <li
              className={activeType == "3d" ? "projects__nav__li-active" : ""}
              onClick={() => {
                changeActiveType("3d");
              }}
            >
              <b>3D</b>
            </li>
          </ul>
        </div>
        <div className="projects-list">
          <Project
            currentProjectType="web"
            currentProjectFilter={`${activeType}`}
            projectName="First"
          >
            Proin sollicitudin convallis convallis. Praesent gravida fermentum
            nisl vitae dictum. Ut non dapibus sem. Praesent ac bibendum velit.
          </Project>
          <Project
            currentProjectType="web"
            currentProjectFilter={`${activeType}`}
            projectName="Second"
          >
            Proin sollicitudin convallis convallis. Praesent gravida fermentum
            nisl vitae dictum. Ut non dapibus sem. Praesent ac bibendum velit.
          </Project>
        </div>
      </div>
    </div>
  );
};
