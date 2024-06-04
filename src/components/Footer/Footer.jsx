import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import "./Footer.css";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
    return (
        <footer className="container max-w-custom mx-auto py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex justify-center w-full md:w-auto mb-4 md:mb-0">
                    <div className="logo">
                        <img src={Logo} alt="Logo" className="h-10 mx-auto" />
                    </div>
                </div>
                <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto">
                    <Link to="/faq" className="w-full text-center md:w-auto">FAQs</Link>
                    <Link to="/policy" className="w-full text-center md:w-auto">Privacy Policy</Link>
                    <Link to="/other" className="w-full text-center md:w-auto">Other</Link>
                    <Button type="primary" className="w-full md:w-auto">Contact Us</Button>
                </nav>
            </div>
            <div className="container mx-auto mt-8 text-center md:text-left">
                <p className="text-xs-custom">&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
