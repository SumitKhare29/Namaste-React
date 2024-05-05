import LOGO_URL from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const status = useOnlineStatus();
  return (
    <>
      <div className="header flex justify-between bg-teal-200 shadow-lg h-24 mb-2">
        <div className="logo flex items-center">
          <img className="logo-image h-24 pl-4" src={LOGO_URL}></img>
          <h1 className="text-xl text-green-900 px-4">Let's Eat🍿 </h1>
        </div>
        <div className="flex items-center">
          <ul className="flex m-4 p-4">
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            {status ? <li>Online ✅</li> : <li>Offline 🔴</li>}
            <li className="px-4">Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
