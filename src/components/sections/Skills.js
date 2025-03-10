import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { techStack } from '../../data/resumeData';

const Section = styled.section`
  padding: var(--space-20) 0;
  background: var(--background);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 10% 90%, rgba(var(--primary-rgb), 0.05) 0%, transparent 70%),
               radial-gradient(circle at 90% 10%, rgba(var(--secondary-rgb), 0.05) 0%, transparent 70%);
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: var(--space-12);
  color: var(--text-dark);
  font-size: var(--fs-4xl);
  font-weight: 800;
  
  span {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-12);
`;

const FilterButton = styled(motion.button)`
  padding: var(--space-2) var(--space-5);
  background: ${props => props.active ? 'var(--gradient-1)' : 'transparent'};
  color: ${props => props.active ? 'var(--white)' : 'var(--text-medium)'};
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(var(--primary-rgb), 0.2)'};
  border-radius: var(--radius-full);
  font-size: var(--fs-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.active ? 'var(--shadow-md)' : 'none'};
    background: ${props => props.active ? 'var(--gradient-1)' : 'rgba(var(--primary-rgb), 0.1)'};
    color: ${props => props.active ? 'var(--white)' : 'var(--primary)'};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-8);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 0;
  box-shadow: var(--shadow-md);
  overflow: hidden;
  border: 1px solid rgba(var(--primary-rgb), 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(var(--primary-rgb), 0.3);
  }
`;

const CategoryHeader = styled.div`
  background: var(--gradient-1);
  padding: var(--space-5);
  color: var(--white);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: rgba(0, 0, 0, 0.1);
  }
`;

const CategoryTitle = styled.h3`
  font-size: var(--fs-xl);
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span {
    font-size: var(--fs-xs);
    font-weight: 600;
    background: rgba(255, 255, 255, 0.2);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-full);
  }
`;

const SkillsList = styled.div`
  padding: var(--space-5);
`;

const SkillItem = styled(motion.div)`
  margin-bottom: var(--space-4);
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2);
`;

const SkillName = styled.h4`
  font-size: var(--fs-md);
  font-weight: 600;
  color: var(--text-dark);
  margin: 0;
`;

const SkillLevel = styled.span`
  color: var(--primary);
  font-size: var(--fs-sm);
  font-weight: 700;
`;

const SkillBarContainer = styled.div`
  height: 8px;
  background: rgba(var(--primary-rgb), 0.1);
  border-radius: var(--radius-full);
  overflow: hidden;
`;

const SkillBarFill = styled(motion.div)`
  height: 100%;
  background: var(--gradient-1);
  border-radius: var(--radius-full);
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: var(--space-12);
  
  h3 {
    color: var(--text-dark);
    margin-bottom: var(--space-4);
  }
  
  p {
    color: var(--text-medium);
    max-width: 500px;
    margin: 0 auto;
  }
`;

// Floating elements
const FloatingCircle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '80px'};
  height: ${props => props.size || '80px'};
  border-radius: 50%;
  background: ${props => props.bg || 'rgba(var(--primary-rgb), 0.05)'};
  z-index: 0;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
`;

const Skills = () => {
  const [filter, setFilter] = useState('all');
  
  // Filter skills based on selected category
  const getFilteredSkills = () => {
    if (filter === 'all') {
      return Object.keys(techStack).map(category => ({
        name: category,
        skills: techStack[category].map(skill => ({
          name: skill,
          level: Math.floor(Math.random() * 30) + 70 // Random between 70-100
        }))
      }));
    }
    
    return Object.keys(techStack)
      .filter(category => category.toLowerCase() === filter.toLowerCase())
      .map(category => ({
        name: category,
        skills: techStack[category].map(skill => ({
          name: skill,
          level: Math.floor(Math.random() * 30) + 70 // Random between 70-100
        }))
      }));
  };
  
  const filteredSkills = getFilteredSkills();
  
  const categoryIcons = {
    "Data Visualization": "📊",
    "Programming": "💻",
    "Cloud & MLOps": "☁️",
    "Databases": "🗄️",
    "Machine Learning": "🧠",
    "Big Data": "📈"
  };
  
  // Animation variants
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
      transition: { duration: 0.4 }
    }
  };

  return (
    <Section id="skills">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Technical <span>Skills</span>
        </SectionTitle>
        
        {/* Floating elements */}
        <FloatingCircle 
          size="180px" 
          bg="rgba(var(--primary-rgb), 0.05)" 
          top="15%" 
          right="5%" 
        />
        
        <FloatingCircle 
          size="140px" 
          bg="rgba(var(--secondary-rgb), 0.05)" 
          bottom="15%" 
          left="10%" 
        />
        
        <FilterBar>
          <FilterButton
            active={filter === 'all'}
            onClick={() => setFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Skills
          </FilterButton>
          
          {Object.keys(techStack).map((category, index) => (
            <FilterButton
              key={index}
              active={filter === category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </FilterButton>
          ))}
        </FilterBar>
        
        <AnimatePresence mode="wait">
          {filteredSkills.length > 0 ? (
            <SkillsGrid 
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredSkills.map((category, index) => (
                <SkillCategory 
                  key={category.name}
                  variants={itemVariants}
                >
                  <CategoryHeader>
                    <CategoryTitle>
                      {category.name}
                      <span>{categoryIcons[category.name] || "🔧"} {category.skills.length}</span>
                    </CategoryTitle>
                  </CategoryHeader>
                  
                  <SkillsList>
                    {category.skills.map((skill, skillIndex) => (
                      <SkillItem 
                        key={skillIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * skillIndex }}
                      >
                        <SkillTop>
                          <SkillName>{skill.name}</SkillName>
                          <SkillLevel>{skill.level}%</SkillLevel>
                        </SkillTop>
                        
                        <SkillBarContainer>
                          <SkillBarFill 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </SkillBarContainer>
                      </SkillItem>
                    ))}
                  </SkillsList>
                </SkillCategory>
              ))}
            </SkillsGrid>
          ) : (
            <EmptyState
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3>No Skills Found</h3>
              <p>No skills match the selected filter. Please try a different category.</p>
            </EmptyState>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
};

export default Skills;
