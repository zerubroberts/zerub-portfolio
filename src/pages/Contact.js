import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import ParticlesBackground from '../components/ui/ParticlesBackground';

const ContactSection = styled.section`
  padding: var(--space-20) 0;
  background: var(--background);
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  position: relative;
  z-index: 5;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  margin-top: var(--space-10);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: var(--space-16);
  }
`;

const ContactInfo = styled.div`
  padding-right: var(--space-8);
  
  @media (max-width: 992px) {
    padding-right: 0;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: var(--fs-5xl);
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: var(--space-3);
  
  span {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  @media (max-width: 768px) {
    font-size: var(--fs-4xl);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: var(--fs-xl);
  color: var(--text-medium);
  margin-bottom: var(--space-12);
  max-width: 600px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: var(--fs-lg);
  }
`;

const ContactCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(var(--primary-rgb), 0.1);
  margin-bottom: var(--space-10);
`;

const ContactCardTitle = styled.h3`
  font-size: var(--fs-2xl);
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: var(--space-6);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: var(--gradient-1);
    border-radius: var(--radius-full);
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: var(--radius-md);
  background: rgba(var(--primary-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: var(--fs-xl);
  flex-shrink: 0;
`;

const ContactText = styled.div`
  h4 {
    font-size: var(--fs-lg);
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: var(--space-2);
  }
  
  p {
    color: var(--text-medium);
    line-height: 1.6;
  }
  
  a {
    color: var(--text-medium);
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-8);
`;

const SocialLink = styled(motion.a)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(var(--primary-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: var(--fs-lg);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--gradient-1);
    color: var(--white);
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const ContactForm = styled(motion.form)`
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(var(--primary-rgb), 0.1);
`;

const FormTitle = styled.h3`
  font-size: var(--fs-2xl);
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: var(--space-6);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: var(--gradient-1);
    border-radius: var(--radius-full);
  }
`;

const FormGroup = styled.div`
  margin-bottom: var(--space-6);
  
  label {
    display: block;
    margin-bottom: var(--space-2);
    color: var(--text-dark);
    font-weight: 600;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: var(--space-4);
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  border-radius: var(--radius-md);
  background: var(--background);
  color: var(--text-dark);
  font-size: var(--fs-md);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: var(--space-4);
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  border-radius: var(--radius-md);
  background: var(--background);
  color: var(--text-dark);
  font-size: var(--fs-md);
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--gradient-1);
  color: var(--white);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-4) var(--space-8);
  font-size: var(--fs-md);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(var(--success-rgb), 0.1);
  color: var(--success);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-6);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: 600;
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', formData);
    // Show success message
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <ContactSection>
      <ParticlesBackground />
      
      <FloatingCircle 
        size="300px" 
        bg="rgba(var(--primary-rgb), 0.03)" 
        top="10%" 
        right="5%" 
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0] 
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <FloatingCircle 
        size="200px" 
        bg="rgba(var(--secondary-rgb), 0.03)" 
        bottom="10%" 
        left="10%" 
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -10, 0] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <Container>
        <PageTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in <span>Touch</span>
        </PageTitle>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </Subtitle>
        
        <ContactGrid>
          <ContactInfo>
            <ContactCard
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ContactCardTitle>Contact Information</ContactCardTitle>
              
              <ContactDetails>
                <ContactItem>
                  <IconBox>
                    <FaEnvelope />
                  </IconBox>
                  <ContactText>
                    <h4>Email</h4>
                    <p><a href="mailto:zerub@example.com">zerub@example.com</a></p>
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <IconBox>
                    <FaPhone />
                  </IconBox>
                  <ContactText>
                    <h4>Phone</h4>
                    <p><a href="tel:+11234567890">+1 (123) 456-7890</a></p>
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <IconBox>
                    <FaMapMarkerAlt />
                  </IconBox>
                  <ContactText>
                    <h4>Location</h4>
                    <p>San Francisco, CA, USA</p>
                  </ContactText>
                </ContactItem>
              </ContactDetails>
              
              <SocialLinks>
                <SocialLink 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </SocialLink>
                <SocialLink 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </SocialLink>
                <SocialLink 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter />
                </SocialLink>
              </SocialLinks>
            </ContactCard>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onSubmit={handleSubmit}
          >
            <FormTitle>Send a Message</FormTitle>
            
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <FaPaperPlane /> Your message has been sent successfully!
              </SuccessMessage>
            )}
            
            <FormRow>
              <FormGroup>
                <label htmlFor="name">Your Name</label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="email">Your Email</label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <label htmlFor="subject">Subject</label>
              <Input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Message</label>
              <TextArea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required 
              ></TextArea>
            </FormGroup>
            
            <SubmitButton 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane /> Send Message
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 