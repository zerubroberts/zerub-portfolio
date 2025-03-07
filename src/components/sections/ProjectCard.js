import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition-default);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-default);
  }
  
  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const Category = styled.span`
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  background: var(--primary);
  color: var(--white);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--fs-sm);
  font-weight: 500;
  z-index: 1;
`;

const Content = styled.div`
  padding: var(--space-6);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: var(--fs-xl);
  margin-bottom: var(--space-3);
  color: var(--text-dark);
`;

const Description = styled.p`
  color: var(--text-medium);
  margin-bottom: var(--space-4);
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
`;

const Tech = styled.span`
  background: var(--background-alt);
  color: var(--text-medium);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  font-size: var(--fs-sm);
`;

const Impact = styled.div`
  background: var(--background-alt);
  padding: var(--space-3);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-4);
  
  strong {
    color: var(--primary);
    font-weight: 600;
  }
`;

const Links = styled.div`
  display: flex;
  gap: var(--space-3);
  margin-top: auto;
  
  a {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--text-medium);
    font-size: var(--fs-sm);
    transition: var(--transition-fast);
    
    &:hover {
      color: var(--primary);
    }
    
    svg {
      font-size: var(--fs-lg);
    }
  }
`;

const ProjectCard = ({ 
  title, 
  description, 
  category,
  technologies, 
  impact,
  image,
  githubUrl,
  liveUrl 
}) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <ImageContainer>
        <img 
          src={image || `https://via.placeholder.com/600x400?text=${title}`} 
          alt={title}
        />
        <Category>{category}</Category>
      </ImageContainer>
      
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        
        <TechStack>
          {technologies.map((tech, index) => (
            <Tech key={index}>{tech}</Tech>
          ))}
        </TechStack>
        
        {impact && (
          <Impact>
            <strong>Impact:</strong> {impact}
          </Impact>
        )}
        
        <Links>
          {githubUrl && (
            <motion.a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> View Code
            </motion.a>
          )}
          {liveUrl && (
            <motion.a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt /> Live Demo
            </motion.a>
          )}
        </Links>
      </Content>
    </Card>
  );
};

export default ProjectCard;
