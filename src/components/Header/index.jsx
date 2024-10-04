import Navbar from "../Navbar/TopNav";
import { useLocation, Link } from "react-router-dom";

import "./style.css";

const Header = () => {
  return (
    <>
      <header id="header" class="header fixed-top">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" class="logo d-flex align-items-center">
            <img
              src="https://www.skarosoft.com/casino2/assets/img/logo.png"
              alt="logo"
            />
          </a>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="about.html">
                  About
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
