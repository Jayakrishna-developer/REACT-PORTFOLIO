import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Container, Row, Col } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  useEffect(() => {
    // Define the scroll-triggered animation
    gsap.fromTo(
      ".skill-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Container
      className="skills-section"
      style={{ marginTop: "200px",marginBottom:"200px" }}
      id="Skills"
    >
      <h1 className="text-center my-4">SKILLS</h1>

      <Row className="justify-content-center">
        <Col
          xs={6}
          md={3}
          lg={3}
          className="d-flex align-items-center justify-content-center mb-3 skill-item"
        >
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-white-tick-mark-icon-transparent-background-31623251046kjwkdqb7vd.png"
            alt="Checkmark"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          HTML
        </Col>

        <Col
          xs={6}
          md={3}
          lg={3}
          className="d-flex align-items-center justify-content-center mb-3 skill-item"
        >
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-white-tick-mark-icon-transparent-background-31623251046kjwkdqb7vd.png"
            alt="Checkmark"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          CSS
        </Col>

        <Col
          xs={6}
          md={3}
          lg={3}
          className="d-flex align-items-center justify-content-center mb-3 skill-item"
        >
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-white-tick-mark-icon-transparent-background-31623251046kjwkdqb7vd.png"
            alt="Checkmark"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          JavaScript
        </Col>

        <Col
          xs={12}
          md={6}
          lg={3}
          className="d-flex align-items-center justify-content-center mb-3 skill-item"
        >
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-white-tick-mark-icon-transparent-background-31623251046kjwkdqb7vd.png"
            alt="Checkmark"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          React
        </Col>
      </Row>

      {/* Divider Line */}
      <hr className="my-4" />

      {/* Second Row of Skills */}
      <Row className="justify-content-center">
        <Col
          xs={6}
          md={3}
          lg={3}
          className="d-flex align-items-center justify-content-center mb-3 skill-item"
        >
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-white-tick-mark-icon-transparent-background-31623251046kjwkdqb7vd.png"
            alt="Checkmark"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          Node.js
        </Col>

        <Col
          xs={6}
          md={3}
          lg={3}
          className="d-flex align-items-center justify-content-center mb-3 skill-item"
        >
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-white-tick-mark-icon-transparent-background-31623251046kjwkdqb7vd.png"
            alt="Checkmark"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          MongoDB
        </Col>

        <Col
          xs={6}
          md={3}
          lg={3}
          className="d-flex align-items-center justify-content-center mb-3 skill-item"
        >
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-white-tick-mark-icon-transparent-background-31623251046kjwkdqb7vd.png"
            alt="Checkmark"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          Bootstrap
        </Col>

        <Col
          xs={12}
          md={6}
          lg={3}
          className="d-flex align-items-center justify-content-center mb-3 skill-item"
        >
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-white-tick-mark-icon-transparent-background-31623251046kjwkdqb7vd.png"
            alt="Checkmark"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          Git
        </Col>
      </Row>

      {/* Divider Line */}
      <hr className="my-4" />

      {/* Third Row of Skills */}
      <Row className="justify-content-center">
        <Col
          xs={6}
          md={3}
          lg={3}
          className="d-flex align-items-center justify-content-center mb-3 skill-item"
        >
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-white-tick-mark-icon-transparent-background-31623251046kjwkdqb7vd.png"
            alt="Checkmark"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          TypeScript
        </Col>

        <Col
          xs={6}
          md={3}
          lg={3}
          className="d-flex align-items-center justify-content-center mb-3 skill-item"
        >
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-white-tick-mark-icon-transparent-background-31623251046kjwkdqb7vd.png"
            alt="Checkmark"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          GITHUB
        </Col>
        <Col
          xs={12}
          md={6}
          lg={3}
          className="d-flex align-items-center justify-content-center mb-3 skill-item"
        >
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-white-tick-mark-icon-transparent-background-31623251046kjwkdqb7vd.png"
            alt="Checkmark"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          />
          EXPRESS
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
