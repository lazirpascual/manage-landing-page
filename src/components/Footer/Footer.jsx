export default function Footer() {
  return (
    <>
      <footer className="padding-block-700 bg-neutral-900 text-neutral-100">
        <div className="container">
          <div className="even-columns">
            <div>
              <a href="#" className="logo">
                <img src="images/logo.svg" alt="Manage" />
              </a>
              <ul role="list" aria-label="social links">
                <li>
                  <a aria-label="facebook" href="#"></a>
                </li>
                <li>
                  <a aria-label="youtube" href="#"></a>
                </li>
                <li>
                  <a aria-label="twitter" href="#"></a>
                </li>
                <li>
                  <a aria-label="pinterest" href="#"></a>
                </li>
                <li>
                  <a aria-label="instagram" href="#"></a>
                </li>
              </ul>
            </div>
            <div>
              <nav className="footer-nav">
                <ul aria-label="Footer" role="list">
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
            <div>
              <form action="">
                <input type="email" />
                <button className="button">Go</button>
                <p>Copyright 2020. All Rights Reserved.</p>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
