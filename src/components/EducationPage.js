import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>Experience</p>
        <p>
          <span>&</span>Education
        </p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>Full Stack Developer</p>
          <p>Highradius</p>
          <p>
            <span>Jan 2022- April 2022</span>
            <a href="/">
              <LocationOnIcon />
              Remote, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>Bachelor's of Engineering</p>
          <p>Chandigarh University</p>
          <p>
            <span>2019 - 2023</span>
            <a href="/">
              <LocationOnIcon />
              Punjab, India
            </a>
          </p>
        </div>
        <div className="education">
            <p>Intermediate Education</p>
            <p>Narayana Junior College</p>
            <p>
                <span>Jule'17 - March'19</span>
                <a href="/">
                    <LocationOnIcon />
                    Vijayawada, India
                </a>
            </p>
        </div>
        <div className="education">
          <p>Secondary Education</p>
          <p>Sri Saraswathi High School</p>
          <p>
            <span>Jule'2016 - April'17</span>
            <a href="/">
              <LocationOnIcon />
              Tallur, India
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;