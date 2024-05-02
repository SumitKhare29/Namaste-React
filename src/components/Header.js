import LOGO_URL from "../utils/constant";
import {Link} from "react-router-dom";
const Header =() =>{
    return(
        <>
        <div className='header'>
            <div className='logo'>
                <img className='logo-image'src={LOGO_URL}></img>
            </div>
            <div className='nav-items'>
            <ul className='nav-items-list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
     </>
    );
}
export default Header;