import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import portfolio from "../../Assets/Projects/portfolio.png";
import bms from "../../Assets/Projects/bms.jpg";
import scm from "../../Assets/Projects/scm.jpg";
import transleto from "../../Assets/Projects/transleto.jpg";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import wanderlust from "../../Assets/Projects/wanderlust.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderlust}
              isBlog={false}
              title="Wanderlust"
              description="Wanderlust is a travel website clone built with Node.js and Express, designed to make exploring and booking travel destinations easy and enjoyable. Users can browse popular destinations, search and filter by preferences, and book trips with a streamlined process."
              ghLink="https://github.com/penguinshivam/wanderlust"
              demoLink="https://wanderlust-lfn7.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="WeatherApp"
              description="WeatherApp is a React-based app that displays real-time weather updates for any city. It features a simple interface, responsive design, and API integration to showcase weather details like temperature and conditions. Perfect for learning React fundamentals!."
              ghLink="https://github.com/penguinshivam/WeatherApp"
              demoLink="https://weatherapp-penguinshivam.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transleto}
              isBlog={false}
              title="Live Speech-to-Speech Translator for Bussiness Meetings(transleto)"
              description="Developed a Chrome extension using JavaScript for speech-to-speech translation in online meetings.API Integration: Integrated a third-party speech recognition and translation API (e.g., Google Cloud Speech-to-Text & Translation API) for live conversion."
              ghLink="https://github.com/penguinshivam/transleto"
              demoLink="https://youtu.be/fhbINQIUqf4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio Website(MyPortfolio)"
              description="MyPortfolio is a personal portfolio website built with React to showcase my skills, projects, and achievements. It features a modern, responsive design with smooth navigation and dynamic components for an engaging user experience."
              ghLink="https://github.com/penguinshivam/portfolio_website"
              demoLink="https://shivam-agarwal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scm}
              isBlog={false}
              title="Smart Contact Manager"
              description="Developed a Smart Contact Manager web application using Java and Spring Boot.Implemented MySQL database for secure storage and retrieval of contacts and user authentication and role-based access control.Designed a responsive front-end using HTML and Tailwind CSS for Cross-Device Compatibility."
              ghLink="https://github.com/penguinshivam/Smart-Contact-Manager"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bms}
              isBlog={false}
              title="Book Management System"
              description="BookVault is a book management system built with Angular and TypeScript to streamline book cataloging and tracking. It features a responsive interface, efficient CRUD operations, and seamless data binding for managing books effectively. This project demonstrates Angular's capabilities in building dynamic and scalable applications."
              ghLink="https://github.com/penguinshivam/BMS"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
