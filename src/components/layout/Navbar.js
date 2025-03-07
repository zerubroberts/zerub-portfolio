import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: ${props => props.scrolled ? 'var(--white)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? 'var(--shadow-sm)' : 'none'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--space-6);
  z-index: 1000;
  transition: var(--transition-default);
`;

const Logo = styled(Link)`
  font-size: var(--fs-xl);
  font-weight: 700;
  color: var(--primary);
  
  &:hover {
    color: var(--primary-dark);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: var(--space-6);
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--white);
    padding: var(--space-6);
    box-shadow: var(--shadow-md);
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-dark);
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: var(--transition-default);
  }
  
  &:hover:after,
  &.active:after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-dark);
  font-size: var(--fs-xl);
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav scrolled={scrolled}>
      <Logo to="/">ZR</Logo>
      <MenuButton onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>
      <NavLinks isOpen={isOpen}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        <NavLink to="/data-visualization" onClick={() => setIsOpen(false)}>Data Viz</NavLink>
        <NavLink to="/ai-engineering" onClick={() => setIsOpen(false)}>AI Engineering</NavLink>
        <NavLink to="/resume" onClick={() => setIsOpen(false)}>Resume</NavLink>
        <NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
