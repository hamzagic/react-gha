import { Link } from "react-router-dom";
import './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className="logo">TechFran</div>
      <div className="links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;