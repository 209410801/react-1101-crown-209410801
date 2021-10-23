import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../assets/crown.svg'
import './Header_01.scss';

const Header_01 = () => {
    return (
        <div>
            <div className="header">
                <Link to="/" className="logo-container">
                    <Logo src='./assets/crown.svg' />
                </Link>
                <div className="options">
                    <Link to="/shop_01" className="option">Shopss</Link>
                    <Link to="/contact_01" className="option">Contact</Link>
                    <Link to="/signin_01" className="option">Sign In</Link>
                    <div className="cart-icon" onclick="cartToggle()">
                        <Logo className="shopping-icon" src="./assets/shopping-bag.svg" alt="" />
                    </div>
                </div>
            </div>
            {/* <h3>
                Header_01
            </h3> */}
        </div>
    )
}

export default Header_01;