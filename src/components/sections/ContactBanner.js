import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';

const BannerSection = styled.section`
  padding: var(--space-20) 0;
  background: var(--gradient-1);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  position: relative;
  z-index: 1;
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--white);
`;

const Title = styled.h2`
  font-size: var(--fs-4xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
  
  @media (max-width: 768px) {
    font-size: var(--fs-3xl);
  }
`;

const Subtitle = styled.p`
  font-size: var(--fs-xl);
  max-width: 600px;
  margin: 0 auto var(--space-10);
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: var(--fs-lg);
  }
`;

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  background: var(--white);
  color: var(--primary);
  font-weight: 600;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-lg);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background-image: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.5) 0%, transparent 15%),
                    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.5) 0%, transparent 15%);
`;

const ContactBanner = () => {
  return (
    <BannerSection>
      <Background />
      <Container>
        <BannerContent>
          <Title>Let's Work Together</Title>
          <Subtitle>
            Have a project in mind? I'd love to hear about it. Let's discuss how we can collaborate to bring your ideas to life.
          </Subtitle>
          <Button to="/contact">
            Get in Touch <FaArrowRight />
          </Button>
        </BannerContent>
      </Container>
    </BannerSection>
  );
};

export default ContactBanner; 