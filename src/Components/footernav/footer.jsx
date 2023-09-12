import navbar from "../../assets/navbar.png";
import "./footer.css";
function FooterNav() {
  return (
    <div className="rectangle-div-footer container-fluid">
      <footer>
        <hr className="border border-white" />
        <div className="navbar">
          <div className="zesdro-rights-reserved">
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
  );
}

export default FooterNav;
