import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import menuIcon from '../assets/menu.svg';
import closeIcon from '../assets/close.svg';
import { navLinks } from '../constants';
import pic from '../assets/pic.jpeg';
import Popup from '../components/Popup';

const NavItems = ({ activeLink, setActiveLink }) => {
  return (
    <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 md:ml-[40rem] ">
      {navLinks.map(({ id, href, name }) => (
        <li key={id}>
          <Link
            to={href}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className={`text-xl font-bold cursor-pointer transition-colors ${
              activeLink === id
                ? 'text-white border-b-2 border-white'
                : 'text-neutral-400 hover:text-white'
            }`}
            onClick={() => setActiveLink(id)}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(1);
  const [showPopup, setShowPopup] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map(({ href }) => document.getElementById(href));
      const currentSection = sections.find((section) => {
        const rect = section?.getBoundingClientRect();
        return rect && rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        const activeItem = navLinks.find(({ href }) => href === currentSection.id);
        if (activeItem) setActiveLink(activeItem.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center py-5 px-5 sm:px-0">
          <img
            className="h-12 w-12 rounded-full cursor-pointer transition-transform hover:scale-110 hover:shadow-lg border-2 border-white shadow-white "
            src={pic}
            alt=""
            onClick={() => setShowPopup(true)} // Open popup on click
          />
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors ml-3">
            Arpit_Kaul
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex "
            aria-label="Toggle menu"
          >
            <img
              src={isMenuOpen ? closeIcon : menuIcon}
              alt="menu toggle"
              className="w-6 h-6 ml-48"
            />
          </button>
          <nav className="hidden sm:flex">
            <NavItems activeLink={activeLink} setActiveLink={setActiveLink} />
          </nav>
        </div>
      </div>
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        onClick={toggleMenu}
        style={{ overflow: 'hidden' }}
      >
        <nav className="flex justify-center items-center h-full p-5">
          <NavItems activeLink={activeLink} setActiveLink={setActiveLink} />
        </nav>
      </div>
      {/* Conditionally render the Popup */}
      {showPopup && <Popup setShowPopup={setShowPopup} />}
    </header>
  );
};

export default Navbar;


// Popup.js (Modified)
