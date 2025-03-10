import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/resumeData';
import { FaExternalLinkAlt, FaCode, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const GallerySection = styled.section`
  padding: var(--space-4) 0 var(--space-20) 0;
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
    background: radial-gradient(circle at 90% 10%, rgba(var(--primary-rgb), 0.05) 0%, transparent 60%),
               radial-gradient(circle at 10% 90%, rgba(var(--secondary-rgb), 0.05) 0%, transparent 60%);
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

const FilterButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  margin-bottom: var(--space-12);
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  border: 2px solid ${props => props.active ? 'var(--primary-light)' : 'var(--glass-border)'};
  background: ${props => props.active ? 'var(--primary)' : 'var(--glass-bg)'};
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-bounce);
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
    background: ${props => props.active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.15)'};
  }
`;

const GalleryWrapper = styled.div`
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  margin: 0 auto;
  max-width: 1000px;
  background: var(--white);
  border: 1px solid rgba(var(--primary-rgb), 0.1);
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.75), transparent);
    z-index: 1;
  }
`;

const DashboardImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const DashboardInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: var(--space-6);
  z-index: 2;
  color: var(--white);
`;

const DashboardTitle = styled.h3`
  font-size: var(--fs-2xl);
  font-weight: 700;
  margin-bottom: var(--space-2);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const DashboardDescription = styled.p`
  font-size: var(--fs-md);
  margin-bottom: var(--space-4);
  max-width: 700px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: var(--fs-sm);
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
`;

const TechTag = styled.span`
  padding: var(--space-1) var(--space-3);
  background: rgba(255, 255, 255, 0.25);
  border-radius: var(--radius-full);
  font-size: var(--fs-xs);
  font-weight: 600;
  backdrop-filter: blur(4px);
  color: var(--white);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: var(--fs-xxs);
  }
`;

const LinkButtons = styled.div`
  display: flex;
  gap: var(--space-3);
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: rgba(var(--primary-rgb), 0.9);
  color: var(--white);
  border-radius: var(--radius-md);
  font-size: var(--fs-sm);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: var(--primary);
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.3);
  }
  
  @media (max-width: 768px) {
    font-size: var(--fs-xs);
    padding: var(--space-1) var(--space-3);
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--space-6);
`;

const NavButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--white);
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  color: var(--primary);
  font-size: var(--fs-lg);
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary);
    color: var(--white);
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background: var(--white);
      color: var(--primary);
      transform: scale(1);
    }
  }
`;

const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-6);
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? 'var(--primary)' : 'rgba(var(--primary-rgb), 0.2)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary)' : 'rgba(var(--primary-rgb), 0.4)'};
  }
`;

// Floating elements
const FloatingCircle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '100px'};
  height: ${props => props.size || '100px'};
  border-radius: 50%;
  background: ${props => props.bg || 'rgba(var(--primary-rgb), 0.05)'};
  z-index: 0;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
`;

const DashboardGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [current, setCurrent] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  useEffect(() => {
    setFilteredProjects(
      selectedCategory === 'all'
        ? projects.filter(project => project.category === 'data-viz')
        : projects.filter(project => project.category === selectedCategory)
    );
  }, [selectedCategory]);

  const nextSlide = () => {
    setCurrent(current === filteredProjects.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? filteredProjects.length - 1 : current - 1);
  };
  
  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <GallerySection id="dashboards">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Dashboard <span>Gallery</span>
        </SectionTitle>
        
        <FloatingCircle 
          size="120px" 
          bg="rgba(var(--primary-rgb), 0.05)" 
          top="10%" 
          left="5%" 
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0] 
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <FloatingCircle 
          size="80px" 
          bg="rgba(var(--secondary-rgb), 0.05)" 
          bottom="15%" 
          right="10%" 
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0] 
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <FilterButtons
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FilterButton
            active={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
          >
            All Dashboards
          </FilterButton>
          <FilterButton
            active={selectedCategory === 'data-viz'}
            onClick={() => setSelectedCategory('data-viz')}
          >
            Data Visualization
          </FilterButton>
          <FilterButton
            active={selectedCategory === 'bi-tools'}
            onClick={() => setSelectedCategory('bi-tools')}
          >
            BI Tools
          </FilterButton>
          <FilterButton
            active={selectedCategory === 'analytics'}
            onClick={() => setSelectedCategory('analytics')}
          >
            Analytics
          </FilterButton>
        </FilterButtons>
        
        <GalleryWrapper>
          <AnimatePresence mode="wait">
            {filteredProjects.map((dashboard, index) => (
              index === current && (
                <motion.div
                  key={dashboard.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ImageContainer>
                    <DashboardImage 
                      src={dashboard.image || `/dashboard-images/${dashboard.id}.jpg`} 
                      alt={dashboard.title}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1 }}
                    />
                  </ImageContainer>
                  
                  <DashboardInfo>
                    <DashboardTitle>{dashboard.title}</DashboardTitle>
                    <DashboardDescription>
                      {dashboard.description.length > 120
                        ? dashboard.description.substring(0, 120) + '...'
                        : dashboard.description}
                    </DashboardDescription>
                    
                    <TechTags>
                      {dashboard.technologies.slice(0, 3).map((tech, techIndex) => (
                        <TechTag key={techIndex}>{tech}</TechTag>
                      ))}
                      {dashboard.technologies.length > 3 && (
                        <TechTag>+{dashboard.technologies.length - 3} more</TechTag>
                      )}
                    </TechTags>
                    
                    <LinkButtons>
                      {dashboard.link && (
                        <LinkButton 
                          href={dashboard.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt /> View Dashboard
                        </LinkButton>
                      )}
                      
                      {dashboard.codeUrl && (
                        <LinkButton 
                          href={dashboard.codeUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <FaCode /> View Code
                        </LinkButton>
                      )}
                    </LinkButtons>
                  </DashboardInfo>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </GalleryWrapper>
        
        <NavigationButtons>
          <NavButton 
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft />
          </NavButton>
          
          <NavButton 
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight />
          </NavButton>
        </NavigationButtons>
        
        <IndicatorsContainer>
          {filteredProjects.map((_, index) => (
            <Indicator 
              key={index} 
              active={index === current} 
              onClick={() => goToSlide(index)}
            />
          ))}
        </IndicatorsContainer>
      </Container>
    </GallerySection>
  );
};

export default DashboardGallery;
