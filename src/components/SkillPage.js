import React from "react";
import "./SkillPage.css";

const SkillPage = () => {
  return (
    <div className="skill-container">
      <div className="skill-left">
        <div className="skill-header">
          <span>Ski</span>lls
        </div>
        <p>
          It is possible to fly without motors, but not without knowledge and
          skill.
        </p>
      </div>
      <div className="skill-right">
        <div id="myCanvasContainer">
          <canvas width="600" height="600" id="myCanvas"></canvas>
        </div>
        <div id="tags">
          <ul>
            <li>
              <a href="/skills">Java</a>
            </li>
            <li>
              <a href="/skills">React</a>
            </li>
            <li>
              <a href="/skills">HTML</a>
            </li>
            <li>
              <a href="/skills">CSS</a>
            </li>
            <li>
              <a href="/skills">Redux</a>
            </li>
            <li>
              <a href="/skills">Github</a>
            </li>
            <li>
                <a herf="/skills">Git</a>
            </li>
            <li>
                <a herf="/skills">Spring</a>
            </li>
            <li>
                <a herf="/skills">Hibernate</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;