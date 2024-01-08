import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <span>Pro</span>jects
      </div>
      <div className="project-list">
        <div className="project">
          <p>Credit Card Fraud Detection</p>
          <p>Python, Machine Learning Models</p>
          <p>
            <span>2023</span>
          </p>
        </div>
        <div className="project">
          <p>Responsive Tourism Web Application</p>
          <p>Java, React, HTMLS, CSS,SQL</p>
          <p>
            <span>2022</span>
          </p>
        </div>
        <div className="project">
          <p>Kisan Mitra</p>
          <p>Java, SQL</p>
          <p>
            <span>2021</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;