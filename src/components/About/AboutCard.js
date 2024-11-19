import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivam Agarwal </span>
            from <span className="purple"> Greater Noida, India.</span>
            <br />
            I am persuing Bachelor of technology (B.Tech) in computer science and engineering at IILM College of Engineering and Technology, Greater Noida.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Event Management
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “The computer was born to solve problems that did not exist before.”
          </p>
          <footer className="blockquote-footer">Bill Gates, Microsoft founder and former CEO</footer>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
