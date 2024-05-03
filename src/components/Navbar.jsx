import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar({ setShowLogin }) {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <IconX width={30} height={30} />
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testi-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" to="/team">
                Our Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div>{isAuthenticated &&  <h4>{user.name}</h4>}</div>
          {isAuthenticated ? (
            <div className="navbar__buttons">
              <button
                className="navbar__buttons__register"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="navbar__buttons">
              <button
                onClick={() => loginWithRedirect()}
                className="navbar__buttons__register"
              >
                Sign In
              </button>
            </div>
          )}

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
