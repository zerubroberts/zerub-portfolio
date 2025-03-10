import React from 'react';
import styled from 'styled-components';
import { FaCode, FaChartLine, FaRobot, FaDatabase } from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: var(--space-20) 0;
  background: var(--background);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-16);
`;

const Title = styled.h2`
  font-size: var(--fs-4xl);
  color: var(--text-dark);
  margin-bottom: var(--space-4);
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: var(--fs-lg);
  color: var(--text-medium);
  max-width: 600px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-8);
`;

const ServiceCard = styled.div`
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  border: 1px solid rgba(var(--primary-rgb), 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background: var(--gradient-1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-6);
  font-size: var(--fs-3xl);
  color: var(--white);
`;

const ServiceTitle = styled.h3`
  font-size: var(--fs-xl);
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: var(--space-4);
`;

const ServiceDescription = styled.p`
  font-size: var(--fs-md);
  color: var(--text-medium);
  line-height: 1.6;
`;

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Modern, responsive websites using React, Next.js, and other cutting-edge technologies.',
    icon: <FaCode />
  },
  {
    id: 2,
    title: 'Data Visualization',
    description: 'Interactive dashboards and visualizations that bring your data to life.',
    icon: <FaChartLine />
  },
  {
    id: 3,
    title: 'AI Solutions',
    description: 'Custom AI and machine learning solutions to optimize your business processes.',
    icon: <FaRobot />
  },
  {
    id: 4,
    title: 'Database Design',
    description: 'Efficient and scalable database architecture for your applications.',
    icon: <FaDatabase />
  }
];

const Services = () => {
  return (
    <ServicesSection>
      <Container>
        <SectionHeader>
          <Title>My Services</Title>
          <Subtitle>
            Specialized expertise to help you achieve your digital goals
          </Subtitle>
        </SectionHeader>
        
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <IconContainer>
                {service.icon}
              </IconContainer>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services; 