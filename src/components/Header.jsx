import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-white drop-shadow-lg'>
        <div className='text-2x1 font-bold text-black-600'>
            DevSteve
        </div>
        
        <nav className='flex space-x-4'>
            <Link
            to="/"
            className='px-4 py-2 rounded-lg border text-gray-950 hover:bg-black hover:text-white transition-colors'
            >
                Home
            </Link>
            <Link
            to="/projects"
            className='px-4 py-2 rounded-lg border text-gray-950 hover:bg-black hover:text-white transition-colors'
            >
                Projects
            </Link>
            <Link
            to="/about"
            className='px-4 py-2 rounded-lg border text-gray-950 hover:bg-black hover:text-white transition-colors'
            >
                About Me
            </Link>
            <Link
            to="/contact"
            className='px-4 py-2 rounded-lg border text-gray-950 hover:bg-black hover:text-white transition-colors'
            >
                Contact Me
            </Link>
        </nav>
    </header>
    
  );
};

export default Header


// Header.defaultProps ={
//     title: 'DevSteve'
// }
