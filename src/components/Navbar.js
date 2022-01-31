import reactlogo from '../images/logo512.png';
import '../style.css';
const Navbar = () => {
  return (
    <nav>
      <img className="react-logo" src={reactlogo} alt="react logo" />
      <h3 className="react-logo-text">ReactFacts</h3>
      <h4 className="title">React Course - Project 1</h4>
    </nav>
  );
};

export default Navbar;
