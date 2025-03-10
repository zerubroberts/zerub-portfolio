import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaCode, FaChartBar, FaBrain } from 'react-icons/fa';
import { personalInfo, specialties } from '../data/resumeData';

// Styled Components
const AboutSection = styled.section`
  padding: var(--space-20) 0;
  min-height: 80vh;
  background: var(--background-dark);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 10% 20%, rgba(var(--primary-rgb), 0.15) 0%, transparent 60%),
      radial-gradient(circle at 90% 80%, rgba(var(--secondary-rgb), 0.15) 0%, transparent 60%);
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

const PageTitle = styled(motion.h1)`
  font-size: var(--fs-5xl);
  color: var(--white);
  margin-bottom: var(--space-10);
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--gradient-1);
    border-radius: var(--radius-full);
  }
  
  span {
    color: var(--primary);
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  margin-top: var(--space-16);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const ProfileImage = styled.div`
  width: 100%;
  max-width: 400px;
  height: 400px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  position: relative;
  margin-bottom: var(--space-6);
  box-shadow: var(--shadow-xl);
  border: 4px solid rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    opacity: 0.2;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileContent = styled.div`
  margin-top: var(--space-6);
`;

const ProfileName = styled.h2`
  font-size: var(--fs-3xl);
  color: var(--white);
  margin-bottom: var(--space-2);
`;

const ProfileTitle = styled.h3`
  font-size: var(--fs-xl);
  color: var(--primary-light);
  margin-bottom: var(--space-6);
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--text-light);
  margin-bottom: var(--space-6);
  
  svg {
    color: var(--accent);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-6);
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--glass-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: var(--fs-xl);
  transition: all 0.3s ease;
  border: 1px solid var(--glass-border);
  
  &:hover {
    transform: translateY(-5px);
    background: var(--primary);
    color: var(--white);
  }
`;

const BioSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const AboutTitle = styled.h2`
  font-size: var(--fs-2xl);
  color: var(--white);
  margin-bottom: var(--space-6);
  position: relative;
  padding-bottom: var(--space-4);
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--primary);
    border-radius: var(--radius-full);
  }
`;

const BioText = styled.div`
  color: var(--text-light);
  font-size: var(--fs-lg);
  line-height: 1.8;
  margin-bottom: var(--space-8);
  
  p {
    margin-bottom: var(--space-4);
  }
`;

const SpecialtiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-8);
`;

const SpecialtyCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-glass);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
    border-color: rgba(var(--primary-rgb), 0.3);
  }
`;

const SpecialtyIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--gradient-1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
  font-size: var(--fs-2xl);
  color: var(--white);
  box-shadow: var(--shadow-lg);
`;

const SpecialtyTitle = styled.h3`
  font-size: var(--fs-xl);
  color: var(--white);
  margin-bottom: var(--space-3);
`;

const SpecialtyDescription = styled.p`
  color: var(--text-light);
  margin-bottom: var(--space-4);
  line-height: 1.6;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-4);
`;

const SkillTag = styled.span`
  background: rgba(var(--primary-rgb), 0.2);
  color: var(--primary-light);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--fs-xs);
  font-weight: 600;
`;

// Specialty icons mapping
const getSpecialtyIcon = (id) => {
  switch(id) {
    case 'data-viz':
      return <FaChartBar />;
    case 'ai-engineering':
      return <FaBrain />;
    default:
      return <FaCode />;
  }
};

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <AboutSection>
      <Container>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span>Me</span>
        </PageTitle>
        
        <AboutGrid>
          <ProfileSection 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProfileImage>
              {/* Replace with actual image if available */}
              <img src="/profile-placeholder.jpg" alt={personalInfo.name} />
            </ProfileImage>
            
            <ProfileContent>
              <ProfileName>{personalInfo.name}</ProfileName>
              <ProfileTitle>{personalInfo.title}</ProfileTitle>
              
              <LocationInfo>
                <FaMapMarkerAlt />
                <span>{personalInfo.location}</span>
              </LocationInfo>
              
              <SocialLinks>
                <SocialLink 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </SocialLink>
                <SocialLink 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </SocialLink>
                <SocialLink 
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEnvelope />
                </SocialLink>
              </SocialLinks>
            </ProfileContent>
          </ProfileSection>
          
          <BioSection
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AboutTitle>Biography</AboutTitle>
            <BioText>
              <p>
                I'm a data specialist with over 8 years of consulting experience, focused on predictive analytics and business intelligence. My expertise spans multiple BI platforms including Tableau, Power BI, and Qlik, as well as machine learning tools like Python, AWS Sagemaker, and TensorFlow.
              </p>
              <p>
                {personalInfo.summary}
              </p>
              <p>
                Throughout my career, I've worked with clients across numerous industries, helping them transform raw data into actionable insights and strategic business decisions. I'm passionate about using technology to solve complex problems and drive innovation.
              </p>
            </BioText>
          </BioSection>
        </AboutGrid>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ marginTop: 'var(--space-20)' }}
        >
          <AboutTitle>My Specialties</AboutTitle>
          
          <SpecialtiesGrid>
            {specialties.map((specialty, index) => (
              <SpecialtyCard
                key={specialty.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <SpecialtyIcon>
                  {getSpecialtyIcon(specialty.id)}
                </SpecialtyIcon>
                <SpecialtyTitle>{specialty.title}</SpecialtyTitle>
                <SpecialtyDescription>{specialty.description}</SpecialtyDescription>
                
                <SkillsList>
                  {specialty.skills.map((skill, i) => (
                    <SkillTag key={i}>{skill}</SkillTag>
                  ))}
                </SkillsList>
              </SpecialtyCard>
            ))}
          </SpecialtiesGrid>
        </motion.div>
        
      </Container>
    </AboutSection>
  );
};

export default About; 