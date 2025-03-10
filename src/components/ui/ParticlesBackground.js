import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const Particle = styled(motion.div)`
  position: absolute;
  background: ${props => props.color || 'rgba(var(--primary-rgb), 0.1)'};
  border-radius: 50%;
  width: ${props => props.size || '10px'};
  height: ${props => props.size || '10px'};
`;

const ParticlesBackground = () => {
  // Generate random positions for the particles
  const generateParticles = () => {
    const particles = [];
    const count = 15; // Reduced particle count for better performance
    
    for (let i = 0; i < count; i++) {
      particles.push({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: `${Math.random() * 20 + 5}px`,
        color: i % 2 === 0 ? 'rgba(var(--primary-rgb), 0.07)' : 'rgba(var(--secondary-rgb), 0.07)',
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5
      });
    }
    
    return particles;
  };
  
  const particles = generateParticles();
  
  return (
    <ParticlesContainer>
      {particles.map(particle => (
        <Particle
          key={particle.id}
          size={particle.size}
          color={particle.color}
          initial={{ x: particle.x, y: particle.y, opacity: 0 }}
          animate={{ 
            x: [particle.x, `${parseInt(particle.x) + (Math.random() * 10 - 5)}%`], 
            y: [particle.y, `${parseInt(particle.y) + (Math.random() * 10 - 5)}%`],
            opacity: [0, 0.8, 0]
          }}
          transition={{ 
            duration: particle.duration, 
            repeat: Infinity, 
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </ParticlesContainer>
  );
};

export default ParticlesBackground; 