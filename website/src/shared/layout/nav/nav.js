import "./nav.css";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../../components/core/buttons/buttons";
import { default as logo } from "../../../assets/shared/desktop/logo.svg";
import { useState } from "react";

export default function Navigation({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  const changeMenuState = () => setMenuIsOpen(!menuIsOpen);

  return isMobile ? (
    <header>
      <nav className="mobile-navigation container">
        <div className="mobile-navigation__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="mobile-navigation__menu">
          <div className={ `mobile-navigation__menu--icon ${ menuIsOpen ? 'open' : '' }` } onClick={ changeMenuState }></div>
          <div className="mobile-navigation__menu--list">
            <ul className="navigation__menu" onClick={ changeMenuState }>
              <li className="navigation__menu--item">
                <Link to="/stories" className="t-upper">
                  stories
                </Link>
              </li>
              <li className="navigation__menu--item">
                <Link to="/features" className="t-upper">
                  features
                </Link>
              </li>
              <li className="navigation__menu--item">
                <Link to="/pricing" className="t-upper">
                  pricing
                </Link>
              </li>
            </ul>
            <div className="navigation__actions">
              <PrimaryButton type="button" text="get an invite" theme="dark" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  ) : (
    <header>
      <nav className="navigation">
        <div className="navigation__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <ul className="navigation__menu">
          <li className="navigation__menu--item">
            <Link to="/stories" className="t-upper">
              stories
            </Link>
          </li>
          <li className="navigation__menu--item">
            <Link to="/features" className="t-upper">
              features
            </Link>
          </li>
          <li className="navigation__menu--item">
            <Link to="/pricing" className="t-upper">
              pricing
            </Link>
          </li>
        </ul>

        <div className="navigation__actions">
          <PrimaryButton type="button" text="get an invite" theme="dark" />
        </div>
      </nav>

      {/* Dynamically render the hero component of each page */}
      {children}
    </header>
  );
}
