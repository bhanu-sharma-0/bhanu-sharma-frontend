import React from 'react';
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleMenuClose = () => {
        setMenu(false);
    };

    return (
        <>
            <nav className="text-white h-20 w-full flex justify-around items-center bg-gray-950 px-6">
                <motion.h1
                    className="text-4xl font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Bhanu Sharma
                </motion.h1>
                <ul className="hidden md:flex gap-12 text-xl">
                    <li className="hover:text-blue-400 transition"><Link to='/'>Home</Link></li>
                    <li className="hover:text-blue-400 transition"><Link to='/about'>About</Link></li>
                    <li className="hover:text-blue-400 transition"><Link to='/project'>Project</Link></li>
                    <li className="hover:text-blue-400 transition"><Link to='/contact'>Contact Us</Link></li>
                </ul>
                <button
                    onClick={() => setMenu(!menu)}
                    className="md:hidden"
                >
                    {menu ? <X size={30} /> : <Menu size={30} />}
                </button>
            </nav>

            {menu && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden flex flex-col items-center bg-gray-800 h-[calc(100vh-5rem)] w-full py-20 text-[24px] gap-12 absolute top-20 left-0 text-white"
                >
                    <Link className="hover:text-blue-400" to='/' onClick={handleMenuClose}>Home</Link>
                    <Link className="hover:text-blue-400" to='/about' onClick={handleMenuClose}>About</Link>
                    <Link className="hover:text-blue-400" to='/project' onClick={handleMenuClose}>Projects</Link>
                    <Link className="hover:text-blue-400" to='/contact' onClick={handleMenuClose}>Contact Us</Link>
                </motion.div>
            )}
        </>
    );
};

export default Navbar;
