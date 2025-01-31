import React,{useState} from 'react'
import '../mediaRequests/header-media-requests.css';
import './hamburger-menu.css'
import NavElementsRight from './NavElementsRight.tsx'
import NavElementsLeft from './NavElementsLeft.tsx';

const HamburgerMenu = () => {
    return (
        <div className='hamburger-menu-container'>
            <div className='nav-button'> 
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className='nav-elements'>
                <NavElementsRight/>
                <NavElementsLeft/>
            </nav>
        </div>
    )
}

export default HamburgerMenu