import { useState } from 'react';
import './MainNavigation.css';

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationClass = isMenuOpen
    ? 'primary-navigation-visible'
    : 'primary-navigation';
  const headerClass = isMenuOpen
    ? 'primary-header-data-overlay'
    : 'primary-header';
  const ariaExpanded = isMenuOpen ? 'true' : 'false';

  return (
    <>
      <header className={headerClass}>
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="logo">
              <svg width="146" height="24">
                <use xlinkHref="images/logo.svg#logo" />
              </svg>
            </a>
            <button
              className="mobile-nav-toggle"
              aria-controls="primary-navigation"
              aria-expanded={ariaExpanded}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img
                className="icon-hamburger"
                src={
                  isMenuOpen
                    ? 'images/icon-close.svg'
                    : 'images/icon-hamburger.svg'
                }
                alt=""
                aria-hidden="true"
              />
              <span className="visually-hidden">Menu</span>
            </button>
            <nav className={navigationClass} id="primary-navigation">
              <ul aria-label="Primary" role="list" className="nav-list" i>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </nav>
            <button className="button | display-sm-none display-md-inline-flex">
              Get Started
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
