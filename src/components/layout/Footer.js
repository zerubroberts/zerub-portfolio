import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone, FaArrowUp } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background: var(--white);
  padding: var(--space-12) 0 var(--space-6);
  position: relative;
  border-top: 1px solid rgba(var(--primary-rgb), 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-12);
  margin-bottom: var(--space-12);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  margin-bottom: var(--space-4);
  font-size: var(--fs-2xl);
  font-weight: 800;
  
  span {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const FooterDescription = styled.p`
  color: var(--text-medium);
  line-height: 1.7;
  margin-bottom: var(--space-6);
`;

const FooterTitle = styled.h3`
  font-size: var(--fs-lg);
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: var(--space-5);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--gradient-1);
    border-radius: var(--radius-full);
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

const FooterLink = styled(Link)`
  color: var(--text-medium);
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  
  &:hover {
    color: var(--primary);
    transform: translateX(5px);
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--text-medium);
  
  svg {
    color: var(--primary);
    font-size: var(--fs-lg);
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-4);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(var(--primary-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--gradient-1);
    color: var(--white);
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(var(--primary-rgb), 0.1);
  margin: var(--space-4) 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-6);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-4);
  }
`;

const Copyright = styled.p`
  color: var(--text-medium);
  font-size: var(--fs-sm);
  
  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
  }
`;

const BackToTop = styled(motion.button)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--gradient-1);
  color: var(--white);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: var(--shadow-md);
  
  &:hover {
    transform: translateX(-50%) translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <FooterWrapper>
      <BackToTop 
        onClick={scrollToTop}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </BackToTop>
      
      <FooterContent>
        <FooterTop>
          <FooterCol>
            <FooterLogo>Zerub<span>Roberts</span></FooterLogo>
            <FooterDescription>
              Transforming complex data into actionable insights through beautiful visualizations and robust analytics solutions.
            </FooterDescription>
            <SocialLinks>
              <SocialLink 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </SocialLink>
              <SocialLink 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
          </FooterCol>
          
          <FooterCol>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Me</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterLinks>
          </FooterCol>
          
          <FooterCol>
            <FooterTitle>Services</FooterTitle>
            <FooterLinks>
              <FooterLink to="/services">Data Visualization</FooterLink>
              <FooterLink to="/services">Machine Learning</FooterLink>
              <FooterLink to="/services">Dashboard Design</FooterLink>
              <FooterLink to="/services">Data Analysis</FooterLink>
              <FooterLink to="/services">AI Consulting</FooterLink>
            </FooterLinks>
          </FooterCol>
          
          <FooterCol>
            <FooterTitle>Contact</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <FaMapMarkerAlt />
                <span>San Francisco, CA, USA</span>
              </ContactItem>
              <ContactItem>
                <FaPhone />
                <span>+1 (123) 456-7890</span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <span>zerub@example.com</span>
              </ContactItem>
            </ContactInfo>
          </FooterCol>
        </FooterTop>
        
        <Divider />
        
        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} <a href="/">ZerubRoberts</a>. All rights reserved.
          </Copyright>
          
          <Copyright>
            Designed and developed with ❤️
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
