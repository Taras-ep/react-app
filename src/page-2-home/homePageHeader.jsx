import React from "react";
import search from './search.png'
import shoppingCart from './shopping-cart.png'
import './home.css'

const Header = () => {
    return (
        <header>
            <nav className="nav-menu">
                <ul className="menu-left menu-elements">
                    <li><a href="">smartphones</a></li>
                    <li><a href="">tablets</a></li>
                    <li><a href="">camaras</a></li>
                    <li><a href="">accessories</a></li>
                </ul>
                <ul className="menu-right menu-elements">
                    <li><a href="">compare</a></li>
                    <li><a href="">support</a></li>
                    <li><a href="">sign up</a></li>
                    <li><a href=""><img src={search}></img></a></li>
                    <li><a href=""><img src={shoppingCart}></img></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header