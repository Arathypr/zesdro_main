import "./Footer.css";
import Groupdot from "../../assets/Groupdot.png";
import Union from "../../assets/Union.png";
import ZESDROLOGO from "../../assets/ZESDROLOGO.svg";
import { useTypingEffect } from "../Typing/Typing";
import navbar from "../../assets/navbar.png";
import React from "react";

function Footer() {
  const textToAnimate =
    "Feel free to reach out if you want to collaborate with us, or simply have a chat.";
  const interKeyStrokeDurationInMs = 50;
  const animatedText = useTypingEffect(
    textToAnimate,
    interKeyStrokeDurationInMs
  );
  return (
    <div className="rectangle-div3 container-fluid">
      <div className="position-relative">
        {" "}
        <img
          src={Groupdot}
          className=" dots1 position-absolute bottom-0 end-0"
        />
      </div>
      <div className="have-a-cryptic-container">
        <p className="have-a-cryptic-project-with-yo">
          <span>Have a </span>
          <span className="have-a">cryptic</span>
          <span> project with </span>
          <span className="have-a">you</span>
          <span> ?</span>
        </p>
        <p className="well-make-it-bright">
          <span>We’ll make it</span> <span className="have-a">bright</span>
        </p>
      </div>
      <div className="feel-free-to">{animatedText}</div>
      <div className="d-flex flex-row mb-3 imagecontainer mt justify-content-evenly">
        <div className=" logo_image">
          <img src={ZESDROLOGO} alt="" />
        </div>

        <div className="location_box position-absolute">
          <div>
            <img src={Union} alt="" className="img" />
            <div className="location_div position-absolute">
              <h2 className="location ">Location</h2>
              <div className="detail">
                4TH Floor,
                <br />
                Alfa Horizon Tower 3, <br />
                Vallarpadam,Kochi,
                <br />
                Kerala,682504.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row mb-3 imagecontainer mt justify-content-evenly">
        <div className="logo">zesdro.com</div>
        <div className="contact-us_box podsition-absolute ">
          <div>
            <img src={Union} alt="" className="img" />
            <div className="contact_us_div position-absolute">
              <h2 className="contact-us ">Contact-Us</h2>
              <div className="detail_contact">
                hello@zesdro.com
                <br />
                9895335221
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-div-footer container-fluid">
        <footer>
          <hr className="border border-white" />
          <div className="navbar">
            <div className="celozisall-rights-reserved">
              @ZESDRO.All Rights Reserved
            </div>
            <nav className="nav">
              <ul>
                <li>
                  <div className="nav-main">
                    {" "}
                    <a href="#" class="nav-link" style={{ color: "#fff" }}>
                      Instagram
                    </a>
                    <img src={navbar} alt="" className="nav-img" />
                  </div>
                </li>
                <li>
                  <div className="nav-main">
                    <a
                      href="#"
                      className="nav-link1"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Facebook
                    </a>
                    <img src={navbar} alt="" className="nav-img" />
                  </div>
                </li>
                <li>
                  <div className="nav-main">
                    <a
                      href="#"
                      className="nav-link2"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      LinkedIn
                    </a>
                    <img src={navbar} alt="" className="nav-img" />
                  </div>
                </li>
                <li>
                  <div className="nav-main">
                    <a
                      href="#"
                      className="nav-link3"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Twitter
                    </a>
                    <img src={navbar} alt="" className="nav-img" />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;
