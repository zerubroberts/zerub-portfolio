import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { specialties } from '../data/resumeData';
import DashboardGallery from '../components/sections/DashboardGallery';

const PageContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: var(--space-20) 0 var(--space-16);
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  color: var(--white);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: var(--fs-5xl);
  margin-bottom: var(--space-6);
  
  @media (max-width: 768px) {
    font-size: var(--fs-4xl);
  }
`;

const Subtitle = styled.p`
  font-size: var(--fs-xl);
  opacity: 0.9;
  margin-bottom: var(--space-8);
  
  @media (max-width: 768px) {
    font-size: var(--fs-lg);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-12);
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SkillTitle = styled.h3`
  font-size: var(--fs-xl);
  margin-bottom: var(--space-3);
`;

const ProcessSection = styled.section`
  padding: var(--space-16) 0;
  background: var(--background);
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
  margin-top: var(--space-12);
`;

const ProcessCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
`;

const ProcessNumber = styled.div`
  width: 40px;
  height: 40px;
  background: var(--primary);
  color: var(--white);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-bottom: var(--space-4);
`;

const ProcessTitle = styled.h3`
  font-size: var(--fs-xl);
  margin-bottom: var(--space-3);
  color: var(--text-dark);
`;

const ProcessDescription = styled.p`
  color: var(--text-medium);
`;

const DataVisualization = () => {
  const dataVizSpecialty = specialties.find(s => s.id === 'data-viz');
  
  const process = [
    {
      title: "Requirements Gathering",
      description: "Understanding your data story and visualization needs through detailed consultation."
    },
    {
      title: "Data Analysis",
      description: "Deep dive into your data to identify patterns, trends, and key insights."
    },
    {
      title: "Design & Prototyping",
      description: "Creating intuitive and visually appealing dashboard layouts and interactive elements."
    },
    {
      title: "Development",
      description: "Building robust, interactive dashboards using industry-leading visualization tools."
    },
    {
      title: "Testing & Refinement",
      description: "Ensuring accuracy, performance, and user-friendly experience through iterative testing."
    },
    {
      title: "Deployment & Training",
      description: "Implementing the solution and providing comprehensive training for your team."
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Title>Data Visualization & Insights</Title>
              <Subtitle>
                Transforming complex data into clear, actionable insights through
                beautiful and intuitive visualizations
              </Subtitle>
            </motion.div>
            
            <SkillsGrid>
              {dataVizSpecialty.skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <SkillTitle>{skill}</SkillTitle>
                </SkillCard>
              ))}
            </SkillsGrid>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ProcessSection>
        <Container>
          <motion.h2
            className="section-title-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Visualization Process
          </motion.h2>
          
          <ProcessGrid>
            {process.map((step, index) => (
              <ProcessCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProcessNumber>{index + 1}</ProcessNumber>
                <ProcessTitle>{step.title}</ProcessTitle>
                <ProcessDescription>{step.description}</ProcessDescription>
              </ProcessCard>
            ))}
          </ProcessGrid>
        </Container>
      </ProcessSection>
      
      <DashboardGallery />
    </PageContainer>
  );
};

export default DataVisualization;
