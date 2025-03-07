import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { contactInfo } from '../../data/resumeData';

const FooterContainer = styled.footer`
  background-color: var(--background-alt);
  padding: var(--space-12) 0 var(--space-4);
  margin-top: var(--space-20);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-8);
`;

const FooterSection = styled.div`
  h4 {
    color: var(--text-dark);
    margin-bottom: var(--space-4);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  
  a {
    color: var(--text-medium);
    transition: var(--transition-fast);
    
    &:hover {
      color: var(--primary);
      transform: translateX(5px);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-4);
  
  a {
    color: var(--text-medium);
    font-size: var(--fs-xl);
    transition: var(--transition-fast);
    
    &:hover {
      color: var(--primary);
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: var(--space-8);
  margin-top: var(--space-8);
  border-top: 1px solid var(--text-light);
  color: var(--text-medium);
  font-size: var(--fs-sm);
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h4>Navigation</h4>
          <FooterLinks>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/data-visualization">Data Visualization</Link>
            <Link to="/ai-engineering">AI Engineering</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h4>Specialties</h4>
          <FooterLinks>
            <Link to="/data-visualization">Data Visualization & Insights</Link>
            <Link to="/ai-engineering">AI Engineering</Link>
            <Link to="/projects">Project Portfolio</Link>
            <Link to="/tech-stack">Tech Stack</Link>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h4>Products</h4>
          <FooterLinks>
            <a href="#" target="_blank" rel="noopener noreferrer">BetTrackerX</a>
            {/* Add more products as they become available */}
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h4>Connect</h4>
          <p>{contactInfo.location}</p>
          <SocialLinks>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={`mailto:${contactInfo.email}`}>
              <FaEnvelope />
            </a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {currentYear} Zerub Roberts. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
