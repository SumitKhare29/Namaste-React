import LOGO_URL from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const status = useOnlineStatus();
  return (
    <>
      <div className="header">
        <div className="logo">
          <img className="logo-image" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul className="nav-items-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            {status ? <li>Online ✅</li> : <li>Offline 🔴</li>}
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
