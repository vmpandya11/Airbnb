import React, { useState } from 'react';
import './Header.css';
import img from '../../images/logo.png';
import banner from '../../images/banner-img.png'
import Dropdown from 'react-bootstrap/Dropdown';
import PopBox from '../PopBox/PopBox';
import PopBox2 from '../PopBox/PopBox2';
import { FaGripLines, FaUser, FaGlobe } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    const [showPopBox, setShowPopBox] = useState(false);

    const handlePopBoxClose = () => {
        setShowPopBox(false);
    };

    const handleLoginClick = () => {
        setShowPopBox(true);
    };
    const [showSignUp, setShowSignUp] = useState(false);

    const handleSignUpClick = () => {
        setShowSignUp(true);
    };

    const handlePopBoxClose2 = () => {
        setShowSignUp(false);
    };

    return (
        <>
            <div className='Header'>
                <div className='airbnb'>
                    <img src={img} className='img' alt='none' />
                </div>
                <div className='place-to-stay'>
                    <span>Place to stay</span>
                    <span>Place to stay</span>
                    <span>Place to stay</span>

                </div>
                <Dropdown>
                    <Link to="/host">
                        <Button style={{ "background": "none", "border": "none" }}>
                            Become a host <FaGlobe className="earth-icon" />
                        </Button>
                    </Link>
                    <Dropdown.Toggle id="dropdown-basic" className="dropdown-toggle" >
                        <span className="icon-container">

                            <FaGripLines className="griplines" />
                            <FaUser className="user-icon" />

                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleLoginClick}>Log in</Dropdown.Item>
                        <Dropdown.Item onClick={handleSignUpClick}>Sign Up</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Host Your Home</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Host Your Exprience</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <PopBox show={showPopBox} onHide={handlePopBoxClose} />
                <PopBox2 show={showSignUp} onHide={handlePopBoxClose2} />
            </div >
            <img src={banner} alt="none" style={{ "width": "100%", "height": "500px" }}></img>
        </>
    );
}



