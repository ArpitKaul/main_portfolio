import { useState } from 'react';
import menuIcon from '../assets/menu.svg';
import closeIcon from '../assets/close.svg'; 
import { navLinks } from '../constants';

const NavItems = () => {
  return (
    <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
      {navLinks.map(({ id, href, name }) => (
        <li key={id}>
          <a 
            href={href} 
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
            onClick={() => {}}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 px-5 sm:px-0">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Arpit
          </a>
          <button 
            onClick={toggleMenu} 
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img 
              src={isMenuOpen ? closeIcon : menuIcon} 
              alt="menu toggle" 
              className="w-6 h-6" 
            />
          </button>

          
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>

      
      <div 
        className={`fixed top-0 left-0 right-0 bottom-0  sm:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        onClick={toggleMenu} 
        style={{ overflow: 'hidden' }}
      >
        <nav className="flex justify-center items-center h-full p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
