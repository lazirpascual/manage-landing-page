import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="primary-footer | padding-block-700 bg-neutral-900 text-neutral-100">
        <div className="container">
          <div className="primary-footer-wrapper">
            <div className="primary-footer-logo-social">
              <a href="#">
                <svg width="146" height="24">
                  <use xlinkHref="images/logo.svg#logo" />
                </svg>
              </a>
              <ul className="social-list" role="list" aria-label="social links">
                <li>
                  <a aria-label="facebook" href="#">
                    <svg className="social-icon">
                      <use xlinkHref="images/social-icons.svg#icon-facebook" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="youtube" href="#">
                    <svg className="social-icon">
                      <use xlinkHref="images/social-icons.svg#icon-youtube" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="twitter" href="#">
                    <svg className="social-icon">
                      <use xlinkHref="images/social-icons.svg#icon-twitter" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="pinterest" href="#">
                    <svg className="social-icon">
                      <use xlinkHref="images/social-icons.svg#icon-pinterest" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a aria-label="instagram" href="#">
                    <svg className="social-icon">
                      <use xlinkHref="images/social-icons.svg#icon-instagram" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="primary-footer-nav">
              <nav className="footer-nav">
                <ul
                  className="flow"
                  style={{ '--flow-spacer': '1em' }}
                  aria-label="Footer"
                  role="list"
                >
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                  <li>
                    <a href="">Products</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Community</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="primary-footer-form">
              <form action="">
                <input type="email" />
                <button className="button" data-shadow="none">
                  Go
                </button>
              </form>
              <p>Copyright 2020. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
