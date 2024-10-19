import "./Navbar.scss";
import AirBnbLogo from "../../assets/AirBnbLogo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={AirBnbLogo} className="navbar__logo" alt="AirBnb Logo" />
    </nav>
  );
}
