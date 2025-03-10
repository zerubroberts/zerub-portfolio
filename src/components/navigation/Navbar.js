import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaBriefcase, FaBlog, FaEnvelope } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 var(--space-6);
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? 'var(--shadow-md)' : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
  
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Logo = styled.div`
  font-size: var(--fs-xl);
  font-weight: 800;
  color: ${props => props.scrolled ? 'var(--text-dark)' : 'var(--primary)'};
  transition: color 0.3s ease;
  
  span {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-1);
  margin: 0 auto;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  padding: var(--space-2) var(--space-4);
  color: ${props => props.scrolled ? 'var(--text-dark)' : 'var(--text-dark)'};
  text-decoration: none;
  font-weight: 600;
  font-size: var(--fs-sm);
  transition: all 0.3s ease;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  
  svg {
    font-size: var(--fs-md);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--gradient-1);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover, &.active {
    color: var(--primary);
    
    &::after {
      width: 80%;
    }
  }
  
  &.active {
    background: rgba(var(--primary-rgb), 0.08);
  }
`;

const ActionButton = styled(Link)`
  padding: var(--space-2) var(--space-6);
  background: var(--gradient-1);
  color: var(--white);
  border-radius: var(--radius-full);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--fs-sm);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.scrolled ? 'var(--text-dark)' : 'var(--primary)'};
  font-size: var(--fs-2xl);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.98);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: var(--space-10);
`;

const MobileMenuHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-6);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--text-dark);
  font-size: var(--fs-2xl);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary);
    transform: rotate(90deg);
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  align-items: center;
`;

const MobileNavLink = styled(Link)`
  color: var(--text-dark);
  text-decoration: none;
  font-size: var(--fs-xl);
  font-weight: 700;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  
  svg {
    font-size: var(--fs-2xl);
    color: var(--primary);
  }
  
  &:hover, &.active {
    color: var(--primary);
    transform: translateY(-3px);
  }
  
  &.active {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };
  
  const navLinks = [
    { to: '/', text: 'Home', icon: <FaHome /> },
    { to: '/about', text: 'About', icon: <FaUser /> },
    { to: '/projects', text: 'Projects', icon: <FaCode /> },
    { to: '/experience', text: 'Experience', icon: <FaBriefcase /> },
    { to: '/blog', text: 'Blog', icon: <FaBlog /> },
    { to: '/contact', text: 'Contact', icon: <FaEnvelope /> },
  ];
  
  return (
    <>
      <NavbarContainer scrolled={scrolled}>
        <NavContent>
          <LogoContainer to="/" scrolled={scrolled}>
            <Logo scrolled={scrolled}>Zerub<span>Roberts</span></Logo>
          </LogoContainer>
          
          <NavLinks>
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                scrolled={scrolled}
                className={location.pathname === link.to ? 'active' : ''}
              >
                {link.icon}
                {link.text}
              </NavLink>
            ))}
          </NavLinks>
          
          <ActionButton to="/contact">Let's Connect</ActionButton>
          
          <MobileMenuButton 
            scrolled={scrolled} 
            onClick={toggleMobileMenu}
          >
            <FaBars />
          </MobileMenuButton>
        </NavContent>
      </NavbarContainer>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileMenuHeader>
              <Logo>Zerub<span>Roberts</span></Logo>
              <CloseButton onClick={toggleMobileMenu}>
                <FaTimes />
              </CloseButton>
            </MobileMenuHeader>
            
            <MobileNavLinks>
              {navLinks.map((link, index) => (
                <MobileNavLink 
                  key={link.to} 
                  to={link.to}
                  className={location.pathname === link.to ? 'active' : ''}
                  onClick={toggleMobileMenu}
                  as={motion.a}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.1 * index }
                  }}
                >
                  {link.icon}
                  {link.text}
                </MobileNavLink>
              ))}
            </MobileNavLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 