import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT' },
    { to: '/menu', label: 'MENU' },
    { to: '/book', label: 'BOOK TABLE' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav className={`navbar${isMenuOpen ? ' navbar-menu-open' : ''}`}>
      <Link to="/" className="nav-brand-link" aria-label="Kadappa Cafe by Rohit - Home">
        <img src="/logo.png" alt="Kadappa Cafe" className="nav-logo" />
        <span className="nav-brand-copy">
          <span className="nav-brand-name">Kadappa Cafe</span>
          <span className="nav-brand-byline">by Rohit Shinde</span>
        </span>
      </Link>

      <div className="nav-links">
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} className="nav-link">{link.label}</Link>
        ))}
      </div>

      <button
        type="button"
        className="nav-mobile-toggle"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

      {isMenuOpen && (
        <div className="nav-mobile-links">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link">{link.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
