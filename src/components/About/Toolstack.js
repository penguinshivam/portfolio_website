import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiIntellijidea,
    SiJira,
    SiRabbitmq,
    SiApachekafka,
} from "react-icons/si";


function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiApachekafka/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRabbitmq/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiIntellijidea/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJira/>
            </Col>
        </Row>
    );
}

export default Toolstack;