import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Content() {
  React.useEffect(() => {
    AOS.init({
      duration: 5000, // Duration of the animation
      easing: "ease-in-out", // Easing function for the animation
    });
  }, []);

  return (
    <div id="Content">
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row d-flex flex-md-row flex-column-reverse">
          {/* Empty column for spacing on large screens */}
          <div className="col-lg-3"></div>

          {/* Details section */}
          <div
            className="details col-lg-2 col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center text-center"
            data-aos="fade-up"
          >
            <h1>JAYA</h1>
            <h1>KRISHNA</h1>
            <h6>FULL STACK DEVELOPER</h6>
            <p className="description">
              with a passion for <br /> developing modern React <br /> web apps.
            </p>
            {/* Social Media Icons */}
            <div className="social-icons mt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f icon"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in icon"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram icon"></i>
              </a>
            </div>
          </div>

          {/* Image section */}
          <div
            className="img col-lg-6 col-md-6 col-sm-12 d-flex"
            data-aos="fade-left"
          >
            <img
              src="https://img.freepik.com/premium-photo/young-man-working-laptop-park-vector-illustration-cartoon-style_941097-9436.jpg"
              style={{ borderRadius: "50%", padding: "50px" }}
              className="img-fluid"
              alt="..."
            />
          </div>
        </div>
      </div>

      {/* CSS for icons */}
      <style jsx>{`
        .social-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .icon {
          font-size: 24px;
          color: #333;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .icon:hover {
          color: #007bff; /* Change color on hover */
          transform: scale(1.2); /* Slightly enlarge the icon on hover */
        }
        .details p.description {
          margin: 0; /* Remove default margin for proper centering */
          font-family: "Open Sans", sans-serif; /* Apply Open Sans to p tag */
          font-size: 16px; /* Adjust font size as needed */
          font-weight: 800;
        }
        .details h6 {
          font-family: "Roboto", sans-serif; /* Apply Roboto to h6 tag */
          font-size: 20px; /* Adjust font size as needed */
          font-weight: 700; /* Adjust font weight as needed */
        }
        /* Apply the Protest Guerrilla font to the body */
        body {
          font-family: "Protest Guerrilla", sans-serif;
        }
      `}</style>
    </div>
  );
}

export default Content;
