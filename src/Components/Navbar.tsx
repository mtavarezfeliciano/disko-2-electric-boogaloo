import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons"; //
import { FC } from "react";

//just nav bar and top of the page p much - nothing fancy here tbh

const navBtns = ["Home", "About", "Sets", "Contact"];

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="https://nywolf.org/meet-our-wolves/webcams/">
          <FontAwesomeIcon icon={faPaw} />
        </a>
      </div>
      <div className="buttons-container">
        <ul className="nav-list">
          {navBtns.map((btn) => (
            <li className="nav-item" key={btn}>
              <a href={`#${btn}`}>{btn.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    /* <div id='logo'>
                <img src={MainLogo} alt="DISKO" />
            </div> */
  );
};

export default Navbar;
