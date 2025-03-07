import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/resumeData';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  padding: var(--space-16) 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  color: var(--white);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--space-12);
  color: var(--white);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--white);
    border-radius: var(--radius-full);
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-lg);
    pointer-events: none;
  }
`;

const QuoteIcon = styled.div`
  color: rgba(255, 255, 255, 0.2);
  font-size: 48px;
  margin-bottom: var(--space-4);
`;

const TestimonialContent = styled.p`
  font-size: var(--fs-lg);
  line-height: 1.6;
  margin-bottom: var(--space-6);
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: var(--radius-full);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--primary);
`;

const AuthorInfo = styled.div`
  h4 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-1);
  }
  
  p {
    font-size: var(--fs-sm);
    opacity: 0.8;
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <Container>
        <SectionTitle>What People Say</SectionTitle>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>
              
              <TestimonialContent>
                {testimonial.content}
              </TestimonialContent>
              
              <TestimonialAuthor>
                <AuthorAvatar>
                  {testimonial.name.charAt(0)}
                </AuthorAvatar>
                <AuthorInfo>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <p>{testimonial.company}</p>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
