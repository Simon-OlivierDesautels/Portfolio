import React from "react";

interface Props {
  currentProjectType: string;
  currentProjectFilter: string;
  projectName: string;
  children: any;
}
const Project: React.FC<Props> = ({
  currentProjectType,
  currentProjectFilter,
  projectName,
  children,
}) => {
  return (
    <div
      className={`project ${
        currentProjectFilter == currentProjectType
          ? "active"
          : currentProjectFilter == "all"
          ? "active"
          : ""
      }`}
    >
      <div
        className="project-imageTEMP"
        style={{ backgroundImage: `url(/project/${projectName}.png)` }}
      >
        <div className="project-links">
          <a href="#">
            <img src="#" alt="github" />
          </a>
          <a href="#">
            <img src="#" alt="website" />
          </a>
        </div>
      </div>
      <h3>{projectName}</h3>

      <p>{children}</p>
    </div>
  );
};

export default Project;
