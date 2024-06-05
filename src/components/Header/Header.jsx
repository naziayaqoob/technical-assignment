import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../Button/Button';
import Logo from "../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="container max-w-custom mx-auto flex flex-col md:flex-row items-center justify-between header">
            <div className="flex justify-between w-full md:w-auto">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="h-10" />
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            <nav className={`menu ${isOpen ? 'open' : 'closed'} md:flex md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6`}>
                <Link to="/about-us" className="text-lg">About Us</Link>
                <Link to="/registration" className="text-lg">Registration</Link>
                <Link to="/careers" className="text-lg">Careers</Link>
                <Button type="primary">Contact Us</Button>
            </nav>
        </header>
    );
};

export default Header;
