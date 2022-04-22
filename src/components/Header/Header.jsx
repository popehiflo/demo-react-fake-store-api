import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navMenu = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClickOpenMenu = () => {
    navMenu.current.classList.toggle('nav__menu--visible');
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink to="/" className="logo nav-link">popehiflo</NavLink>
        <button className="nav__toggle" type="button" onClick={handleClickOpenMenu} aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
        <ul className="nav__menu" ref={navMenu}>
          <li className="nav__menu-item">
            <NavLink
              to="/#products"
              className={
                ({ isActive }) => (isActive ? 'nav__menu-link nav-link nav__menu-link--active' : 'nav__menu-link nav-link')
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav__menu-link nav-link nav__menu-link--active' : 'nav__menu-link nav-link')}>
              About
            </NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/about#see-more" className={({ isActive }) => (isActive ? 'nav__menu-link nav-link nav__menu-link--active' : 'nav__menu-link nav-link')}>
              #See more...
            </NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/about#contact" className={({ isActive }) => (isActive ? 'nav__menu-link nav-link nav__menu-link--active' : 'nav__menu-link nav-link')}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
