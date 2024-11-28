import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-10 ">
            <ul className="flex justify-around p-4">
                <li>
                    <Link to="/" className="cursor-pointer hover:text-blue-500">Home</Link>
                </li>
                <li>
                    <Link to="about" className="cursor-pointer hover:text-blue-500">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="cursor-pointer hover:text-blue-500">Contact</Link>
                </li>
                <li>
                    <Link to="/project" className="cursor-pointer hover:text-blue-500">Project</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;