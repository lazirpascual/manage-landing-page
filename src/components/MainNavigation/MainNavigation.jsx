export default function MainNavigation() {
  return (
    <>
      <header className="primary-header">
        <div className="container">
          <a href="#" className="logo">
            <img src="images/logo.svg" alt="Manage"></img>
          </a>
          <nav className="primary-navigation">
            <ul aria-label="Primary" role="list" className="nav-list">
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
          <button className="button">Get Started</button>
        </div>
      </header>
    </>
  );
}
