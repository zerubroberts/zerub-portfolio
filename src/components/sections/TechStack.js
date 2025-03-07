import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { techStack } from '../../data/resumeData';

const TechStackSection = styled.section`
  padding: var(--space-16) 0;
  background: var(--white);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--space-12);
  color: var(--text-dark);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--primary);
    border-radius: var(--radius-full);
  }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
`;

const TechCategory = styled(motion.div)`
  background: var(--background);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: var(--transition-default);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const CategoryTitle = styled.h3`
  color: var(--primary);
  margin-bottom: var(--space-4);
  font-size: var(--fs-xl);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  
  svg {
    font-size: var(--fs-2xl);
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

const TechItem = styled(motion.span)`
  background: var(--white);
  color: var(--text-medium);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--fs-sm);
  border: 1px solid var(--primary-light);
  transition: var(--transition-fast);
  
  &:hover {
    background: var(--primary);
    color: var(--white);
    border-color: var(--primary);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const TechStack = () => {
  return (
    <TechStackSection>
      <Container>
        <SectionTitle>Tech Stack</SectionTitle>
        
        <TechGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(techStack).map(([category, technologies], index) => (
            <TechCategory
              key={category}
              variants={itemVariants}
            >
              <CategoryTitle>{category}</CategoryTitle>
              <TechList>
                {technologies.map((tech, i) => (
                  <TechItem
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </TechItem>
                ))}
              </TechList>
            </TechCategory>
          ))}
        </TechGrid>
      </Container>
    </TechStackSection>
  );
};

export default TechStack;
