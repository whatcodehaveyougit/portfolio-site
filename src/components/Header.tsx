import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <div className="header">
      <div className="hero">
        <h1 className="text-6xl">SIGURD WATT</h1>
        <h2 className="text-2xl">SOFTWARE DEVELOPER</h2>
        <div className="contact-details flex justify-center text-blue-400 my-3">
          <a href="tel:07724543520">07724 543 520</a>
          <span>|</span>
          <a href="mailto:sigurdwatt@gmail.com?subject-Contact">sigurdwatt@gmail.com</a>
        </div>
      </div>
      <nav>
        <ul id="menu">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="cv">CV</Link>
          </li>
          <li>
            <Link to="portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
