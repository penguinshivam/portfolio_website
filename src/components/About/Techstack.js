import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiJava,
    DiAngularSimple,
    DiMysql,
    DiGithub,
} from "react-icons/di";
import {
    SiRedis,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiAngularSimple/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGithub/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedis/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMysql/>
            </Col>
        </Row>
    );
}

export default Techstack;