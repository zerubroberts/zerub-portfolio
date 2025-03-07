import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/sections/Hero';
import TechStack from '../components/sections/TechStack';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import DashboardGallery from '../components/sections/DashboardGallery';
import Testimonials from '../components/sections/Testimonials';
import { products } from '../data/resumeData';

const ProductsSection = styled.section`
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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
`;

const ProductCard = styled.div`
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition-default);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const ProductImage = styled.div`
  height: 200px;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--fs-2xl);
  font-weight: 700;
`;

const ProductContent = styled.div`
  padding: var(--space-6);
`;

const ProductTitle = styled.h3`
  font-size: var(--fs-xl);
  margin-bottom: var(--space-3);
  color: var(--text-dark);
`;

const ProductDescription = styled.p`
  color: var(--text-medium);
  margin-bottom: var(--space-4);
`;

const ProductHighlights = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: var(--space-4);
`;

const HighlightItem = styled.li`
  color: var(--text-medium);
  margin-bottom: var(--space-2);
  padding-left: var(--space-4);
  position: relative;
  
  &:before {
    content: '•';
    color: var(--primary);
    position: absolute;
    left: 0;
  }
`;

const ProductLink = styled.a`
  display: inline-block;
  padding: var(--space-2) var(--space-4);
  background: var(--primary);
  color: var(--white);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: var(--transition-fast);
  
  &:hover {
    background: var(--primary-dark);
  }
`;

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Hero />
      
      <ProductsSection>
        <Container>
          <SectionTitle data-aos="fade-up">Featured Products</SectionTitle>
          <ProductsGrid>
            {products.map((product, index) => (
              <ProductCard key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <ProductImage>{product.name}</ProductImage>
                <ProductContent>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDescription>{product.description}</ProductDescription>
                  <ProductHighlights>
                    {product.highlights.map((highlight, i) => (
                      <HighlightItem key={i}>{highlight}</HighlightItem>
                    ))}
                  </ProductHighlights>
                  <ProductLink href={product.url} target="_blank" rel="noopener noreferrer">
                    View Product
                  </ProductLink>
                </ProductContent>
              </ProductCard>
            ))}
          </ProductsGrid>
        </Container>
      </ProductsSection>
      
      <TechStack />
      <ExperienceTimeline />
      <DashboardGallery />
      <Testimonials />
    </>
  );
};

export default Home;
