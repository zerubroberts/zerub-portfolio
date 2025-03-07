import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/resumeData';

const GallerySection = styled.section`
  padding: var(--space-16) 0;
  background: var(--background);
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  border: 2px solid var(--primary);
  background: ${props => props.active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.active ? 'var(--white)' : 'var(--primary)'};
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-fast);
  
  &:hover {
    background: var(--primary);
    color: var(--white);
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--space-6);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DashboardCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition-default);
  cursor: pointer;
  
  &:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-5px);
  }
`;

const DashboardImage = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-default);
  }
  
  ${DashboardCard}:hover & img {
    transform: scale(1.05);
  }
`;

const DashboardInfo = styled.div`
  padding: var(--space-6);
`;

const DashboardTitle = styled.h3`
  font-size: var(--fs-xl);
  margin-bottom: var(--space-2);
  color: var(--text-dark);
`;

const DashboardDescription = styled.p`
  color: var(--text-medium);
  margin-bottom: var(--space-4);
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

const TechTag = styled.span`
  background: var(--background-alt);
  color: var(--text-medium);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  font-size: var(--fs-sm);
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-6);
`;

const ModalContent = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-lg);
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
`;

const ModalInfo = styled.div`
  padding: var(--space-6);
`;

const ModalTitle = styled.h3`
  font-size: var(--fs-2xl);
  margin-bottom: var(--space-4);
  color: var(--text-dark);
`;

const ModalDescription = styled.p`
  color: var(--text-medium);
  margin-bottom: var(--space-6);
  font-size: var(--fs-lg);
  line-height: 1.6;
`;

const ImpactSection = styled.div`
  background: var(--background-alt);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-6);
  
  h4 {
    color: var(--primary);
    margin-bottom: var(--space-2);
  }
`;

const DashboardGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDashboard, setSelectedDashboard] = useState(null);
  
  const datavizProjects = projects.filter(project => 
    project.category === 'data-viz' || selectedCategory === 'all'
  );

  const handleDashboardClick = (dashboard) => {
    setSelectedDashboard(dashboard);
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setSelectedDashboard(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <GallerySection>
      <Container>
        <SectionTitle>Dashboard Gallery</SectionTitle>
        
        <FilterButtons>
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
        </FilterButtons>
        
        <GalleryGrid>
          <AnimatePresence>
            {datavizProjects.map((dashboard) => (
              <DashboardCard
                key={dashboard.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleDashboardClick(dashboard)}
              >
                <DashboardImage>
                  <img 
                    src={`/dashboard-images/${dashboard.id}.jpg`}
                    alt={dashboard.title}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400?text=${dashboard.title}`;
                    }}
                  />
                </DashboardImage>
                <DashboardInfo>
                  <DashboardTitle>{dashboard.title}</DashboardTitle>
                  <DashboardDescription>{dashboard.description}</DashboardDescription>
                  <TechTags>
                    {dashboard.technologies.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </TechTags>
                </DashboardInfo>
              </DashboardCard>
            ))}
          </AnimatePresence>
        </GalleryGrid>
        
        <AnimatePresence>
          {selectedDashboard && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleModalClose}
            >
              <ModalContent
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ModalImage
                  src={`/dashboard-images/${selectedDashboard.id}-full.jpg`}
                  alt={selectedDashboard.title}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/1200x800?text=${selectedDashboard.title}`;
                  }}
                />
                <ModalInfo>
                  <ModalTitle>{selectedDashboard.title}</ModalTitle>
                  <ModalDescription>{selectedDashboard.description}</ModalDescription>
                  
                  <ImpactSection>
                    <h4>Impact</h4>
                    <p>{selectedDashboard.impact}</p>
                  </ImpactSection>
                  
                  <TechTags>
                    {selectedDashboard.technologies.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </TechTags>
                </ModalInfo>
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </Container>
    </GallerySection>
  );
};

export default DashboardGallery;
