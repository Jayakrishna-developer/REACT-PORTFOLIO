import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Projects() {
  React.useEffect(() => {
    AOS.init({
      duration: 5000,
      easing: "linear",
    });
  }, []);

  const cardData = [
    {
      title: "BUDGET CALCULATOR",
      text: "INCOME EXPENSE CALCULATION",
      imgSrc:
        "https://cdn.dribbble.com/users/218217/screenshots/3610718/first_scene_blue_800x600_2_dribbble.gif",
      aos: "fade-right",
    },
    {
      title: "JK BANK",
      text: "ONLINE BANKING APP",
      imgSrc:
        "https://blog.krugercorp.com/hs-fs/hubfs/1_zdaj_q66kjXS8rygZ7hOEw.gif?width=792&name=1_zdaj_q66kjXS8rygZ7hOEw.gif",
      aos: "fade-left",
    },
    {
      title: "CALCULATOR",
      text: "SIMPLE MATHEMATICAL CALCULATOR",
      imgSrc:
        "https://cdn.dribbble.com/users/997696/screenshots/4854881/media/80013ef332183e216857f74fedae3979.gif",
      aos: "fade-right",
    },
    {
      title: "BMI CALCULATOR",
      text: "SIMPLE BMI CALCULATION",
      imgSrc:
        "https://cdn.dribbble.com/users/324878/screenshots/4161328/media/882978634f321bddcd756d840ba17ee7.gif",
      aos: "fade-left",
    },
    {
      title: "BUDGET CALCULATOR",
      text: "REACT BUDGET CALCULATOR",
      imgSrc: "https://media.giphy.com/media/cJFQJzZxFMhONxDTnt/giphy.gif",
      aos: "fade-right",
    },
    {
      title: "SPOTIFY CLONE",
      text: "SPOTIFY FRONT END",
      imgSrc:
        "https://media1.tenor.com/images/e1fd4ff42613e8053b0f840f39a17df6/tenor.gif?itemid=15663671",
      aos: "fade-left",
    },
    {
      title: "TRAVEL SITE CLONE",
      text: "FRONT END OF TRAVEL SITE",
      imgSrc:
        "https://cdn.dribbble.com/users/795597/screenshots/3569676/travel-planning__1_.gif",
      aos: "fade-right",
    },
    {
      title: "SHOES",
      text: "PARALLAX DEMONSTRATION SITE",
      imgSrc:
        "https://www.bing.com/th/id/OGC.aabbf7dc3ad11304a5df329a26056ae7?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2fba%2f5d%2fd4%2fba5dd445504b80df283e90ebadb57d0b.gif&ehk=xtcF9MI31gvlrIeDiijtWmZ9EkDBzwdZ%2ft%2bTfpPk9wA%3d",
      aos: "fade-left",
    },
  ];

  const cardStyles = {
    width: "19rem",
    border: "none",
    boxShadow: "none",
    backgroundColor: "transparent",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
    position: "relative",
  };

  const cardHoverStyles = {
    transform: "scale(1.05)",
  };

  return (
    <div style={{ marginTop: "200px" }} id="Projects">
      <h1
        className="heading"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        PROJECTS
      </h1>
      <Container fluid="md">
        <Row className="justify-content-center" style={{ marginTop: "30px" }}>
          {cardData.map((card, index) => (
            <Col
              xs={10}
              sm={6}
              md={6}
              lg={3}
              className="mb-4 d-flex justify-content-center"
              key={index}
            >
              <Card
                data-aos={card.aos}
                style={cardStyles}
                className="project-card"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = cardHoverStyles.transform)
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
              >
                <Card.Img
                  variant="top"
                  src={card.imgSrc}
                  alt={`Project ${index + 1}`}
                  style={{
                    borderRadius: "20px",
                    marginBottom: "2px",
                    height: "230px",
                  }}
                />
                <Card.Body style={{ backgroundColor: "transparent" }}>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: "800",
                    }}
                  >
                    {card.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
