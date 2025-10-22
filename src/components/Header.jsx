import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // for icons — install lucide-react if not installed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">DevSteve</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg border text-gray-900 hover:bg-black hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="px-4 py-2 rounded-lg border text-gray-900 hover:bg-black hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 rounded-lg border text-gray-900 hover:bg-black hover:text-white transition-colors"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg border text-gray-900 hover:bg-black hover:text-white transition-colors"
          >
            Contact Me
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t flex flex-col space-y-2 px-6 py-4">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg border text-gray-900 hover:bg-black hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="px-4 py-2 rounded-lg border text-gray-900 hover:bg-black hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 rounded-lg border text-gray-900 hover:bg-black hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg border text-gray-900 hover:bg-black hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact Me
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
