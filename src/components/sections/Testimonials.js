import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar, FaLinkedin } from 'react-icons/fa';

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
    background: linear-gradient(135deg, rgba(var(--background-rgb), 0.97) 0%, rgba(var(--background-rgb), 1) 100%);
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
  margin-bottom: var(--space-2);
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

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--space-16);
  color: var(--text-medium);
  font-size: var(--fs-lg);
  line-height: 1.6;
`;

const TestimonialsContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--space-10);
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(var(--primary-rgb), 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: var(--gradient-1);
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: var(--space-10);
  right: var(--space-10);
  color: rgba(var(--primary-rgb), 0.1);
  font-size: 6rem;
  line-height: 1;
  z-index: 1;
`;

const TestimonialContent = styled.div`
  position: relative;
  z-index: 2;
`;

const TestimonialText = styled.p`
  font-size: var(--fs-xl);
  line-height: 1.7;
  color: var(--text-dark);
  font-weight: 500;
  margin-bottom: var(--space-8);
  position: relative;
  
  @media (max-width: 768px) {
    font-size: var(--fs-lg);
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: var(--space-8);
  border-top: 1px solid rgba(var(--primary-rgb), 0.1);
  padding-top: var(--space-6);
`;

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: var(--space-4);
  border: 2px solid rgba(var(--primary-rgb), 0.2);
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h4`
  font-size: var(--fs-lg);
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: var(--space-1);
  display: flex;
  align-items: center;
  
  a {
    margin-left: var(--space-2);
    color: var(--primary);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const AuthorTitle = styled.p`
  font-size: var(--fs-sm);
  color: var(--text-medium);
  margin-bottom: var(--space-2);
`;

const RatingStars = styled.div`
  display: flex;
  align-items: center;
  color: var(--warning);
  font-size: var(--fs-md);
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-12);
  gap: var(--space-4);
`;

const NavButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
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

const TestimonialDots = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-8);
`;

const Dot = styled.button`
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

const FloatingCircle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '100px'};
  height: ${props => props.size || '100px'};
  border-radius: 50%;
  background: ${props => props.bg || 'rgba(var(--primary-rgb), 0.03)'};
  z-index: 1;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
`;

// Testimonials data with enhanced details
const enhancedTestimonials = [
  {
    id: 1,
    quote: "Zerub's expertise in data visualization transformed our business analytics. His dashboards provide clear insights that drive our strategic decisions.",
    author: "Alexandra Chen",
    title: "VP of Operations, TechGlobal Inc.",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    rating: 5,
    linkedin: "https://linkedin.com/in/example"
  },
  {
    id: 2,
    quote: "Working with Zerub on our ML projects was incredible. His technical skills combined with business acumen delivered solutions that exceeded our expectations.",
    author: "Michael Rodriguez",
    title: "CTO, DataSphere Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    linkedin: "https://linkedin.com/in/example"
  },
  {
    id: 3,
    quote: "Zerub has a rare talent for translating complex data into actionable insights. His work helped us identify key growth opportunities we would have otherwise missed.",
    author: "Sarah Johnson",
    title: "Marketing Director, Innovate Group",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    linkedin: "https://linkedin.com/in/example"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === enhancedTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? enhancedTestimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };
  
  const currentTestimonial = enhancedTestimonials[currentIndex];
  
  return (
    <Section id="testimonials">
      <FloatingCircle 
        size="250px" 
        bg="rgba(var(--primary-rgb), 0.03)" 
        top="10%" 
        left="5%" 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <FloatingCircle 
        size="180px" 
        bg="rgba(var(--secondary-rgb), 0.03)" 
        bottom="15%" 
        right="10%" 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0] 
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What People <span>Say</span>
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Feedback from clients and colleagues about my work and collaboration
        </SectionSubtitle>
        
        <TestimonialsContainer>
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>
              
              <TestimonialContent>
                <TestimonialText>
                  {currentTestimonial.quote}
                </TestimonialText>
                
                <TestimonialAuthor>
                  <AuthorImage>
                    <img src={currentTestimonial.image} alt={currentTestimonial.author} />
                  </AuthorImage>
                  
                  <AuthorInfo>
                    <AuthorName>
                      {currentTestimonial.author}
                      <a href={currentTestimonial.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                      </a>
                    </AuthorName>
                    
                    <AuthorTitle>{currentTestimonial.title}</AuthorTitle>
                    
                    <RatingStars>
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          color={i < currentTestimonial.rating ? 'var(--warning)' : 'rgba(var(--text-light-rgb), 0.3)'} 
                        />
                      ))}
                    </RatingStars>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialContent>
            </TestimonialCard>
          </AnimatePresence>
          
          <NavigationButtons>
            <NavButton 
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft />
            </NavButton>
            
            <NavButton 
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight />
            </NavButton>
          </NavigationButtons>
          
          <TestimonialDots>
            {enhancedTestimonials.map((_, index) => (
              <Dot 
                key={index} 
                active={index === currentIndex} 
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </TestimonialDots>
        </TestimonialsContainer>
      </Container>
    </Section>
  );
};

export default Testimonials;
