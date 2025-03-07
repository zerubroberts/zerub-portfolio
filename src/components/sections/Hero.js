import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/resumeData';

const HeroSection = styled.section`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--background) 0%, var(--background-alt) 100%);
  padding: var(--space-16) 0;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  h1 {
    font-size: var(--fs-5xl);
    margin-bottom: var(--space-4);
    
    @media (max-width: 768px) {
      font-size: var(--fs-4xl);
    }
  }

  h2 {
    color: var(--primary);
    font-size: var(--fs-2xl);
    margin-bottom: var(--space-6);
    
    @media (max-width: 768px) {
      font-size: var(--fs-xl);
    }
  }

  p {
    color: var(--text-medium);
    font-size: var(--fs-lg);
    margin-bottom: var(--space-8);
    max-width: 600px;
    
    @media (max-width: 992px) {
      margin: 0 auto var(--space-8);
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--space-4);
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 80%;
    height: 80%;
    background: var(--primary);
    opacity: 0.1;
    border-radius: var(--radius-lg);
  }
  
  img {
    position: relative;
    width: 100%;
    height: auto;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
  }
  
  @media (max-width: 992px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: var(--primary);
  opacity: 0.1;
  border-radius: var(--radius-full);
`;

const Hero = () => {
  return (
    <HeroSection>
      <FloatingShape
        as={motion.div}
        animate={{
          y: [0, 30, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: "150px",
          height: "150px",
          top: "10%",
          left: "5%",
        }}
      />
      <FloatingShape
        as={motion.div}
        animate={{
          x: [0, 30, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: "100px",
          height: "100px",
          bottom: "15%",
          right: "10%",
        }}
      />
      <HeroContainer>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Hi, I'm {personalInfo.name}</h1>
            <h2>{personalInfo.title}</h2>
            <p>{personalInfo.summary}</p>
            <ButtonGroup>
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </ButtonGroup>
          </motion.div>
        </HeroContent>
        
        <HeroImage
          as={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="/profile-image.jpg" 
            alt={personalInfo.name}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Profile+Image';
            }}
          />
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
