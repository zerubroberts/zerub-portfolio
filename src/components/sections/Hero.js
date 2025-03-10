import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaArrowRight, FaDownload, FaExternalLinkAlt, FaChartBar, FaLaptopCode, FaStore } from 'react-icons/fa';
// Using an existing image from the project or a placeholder
const profileImage = '/images/Zerub-Roberts (1).png';

const HeroSection = styled.section`
  position: relative;
  min-height: 80vh;
  padding: var(--space-10) 0 var(--space-4) 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--background);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(var(--background-rgb), 0.9) 0%, rgba(var(--background-rgb), 0.98) 100%);
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

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-16);
  padding: var(--space-12) 0;
  
  @media (max-width: 1023px) {
    flex-direction: column;
    text-align: center;
    padding: var(--space-8) 0;
  }
`;

const HeroLeftWrapper = styled.div`
  flex: 0.8;
  
  @media (max-width: 1023px) {
    margin-bottom: var(--space-8);
  }
`;

const HeroRight = styled.div`
  flex: 1.2;
  
  @media (min-width: 1024px) {
    order: 1;
  }
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1023px) {
    width: 280px;
    height: 280px;
    margin: 0 auto;
  }
`;

const ProfileImage = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 50%;
  z-index: 3;
  border: 6px solid white;
`;

const CircleBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid var(--primary);
  z-index: 1;
`;

const Greeting = styled.span`
  font-family: var(--font-primary);
  font-size: var(--fs-lg);
  color: var(--text-medium);
  font-weight: var(--fw-medium);
  display: block;
  margin-bottom: var(--space-2);
`;

const MainHeading = styled.h1`
  font-family: var(--font-heading);
  font-size: calc(var(--fs-6xl) * 1.2);
  font-weight: var(--fw-bold);
  color: var(--text-dark);
  margin-bottom: var(--space-2);
  letter-spacing: var(--ls-tight);
  line-height: var(--lh-tight);
  
  span {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: var(--fs-5xl);
  }
`;

const SubHeading = styled.p`
  font-size: var(--fs-2xl);
  color: var(--text-medium);
  font-weight: var(--fw-medium);
  margin-bottom: var(--space-4);
  
  @media (max-width: 768px) {
    font-size: var(--fs-xl);
  }
`;

const TypedText = styled.span`
  color: var(--primary);
  font-weight: var(--fw-semibold);
`;

const HeroButtons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: var(--space-4);
  margin-top: var(--space-8);
  margin-bottom: var(--space-6);
  overflow-x: auto;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: var(--space-4);
    padding-bottom: var(--space-2);
    -ms-overflow-style: none;  /* Hide scrollbar in IE and Edge */
    scrollbar-width: none;  /* Hide scrollbar in Firefox */
    
    &::-webkit-scrollbar {
      display: none;  /* Hide scrollbar in Chrome, Safari and Opera */
    }
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-lg);
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: var(--fs-md);
  white-space: nowrap;
  
  &.secondary {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
    
    &:hover {
      background: rgba(var(--primary-rgb), 0.1);
      transform: translateY(-3px);
    }
  }
`;

const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: 600;
  font-size: var(--fs-md);
  color: var(--primary);
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  margin-bottom: var(--space-2);
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: var(--primary);
    bottom: -4px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: var(--primary-dark);
    
    &::after {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateY(-3px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-2);
`;

const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  color: var(--primary);
  border: 2px solid rgba(var(--primary-rgb), 0.2);
  font-size: var(--fs-xl);
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
  
  &:hover {
    background: var(--primary);
    color: var(--white);
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

// Section Styles
const SectionContainer = styled.div`
  margin-top: var(--space-20);
  margin-bottom: var(--space-20);
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-10);
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: var(--fs-3xl);
  font-weight: var(--fw-bold);
  color: var(--text-dark);
  margin-bottom: var(--space-3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  letter-spacing: var(--ls-tight);
  
  svg {
    color: var(--primary);
  }
  
  span {
    color: var(--primary);
  }
`;

const SectionSubtitle = styled.p`
  font-size: var(--fs-lg);
  color: var(--text-medium);
  max-width: 600px;
  margin: 0 auto;
  line-height: var(--lh-relaxed);
  font-weight: var(--fw-regular);
`;

const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: var(--space-5);
  text-decoration: none;
  color: var(--primary);
  font-weight: 600;
  font-size: var(--fs-md);
  transition: all 0.3s ease;
  gap: var(--space-2);
  
  &:hover {
    transform: translateX(5px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-6);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }
`;

const ProjectImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: var(--space-5);
`;

const ProjectName = styled.h4`
  font-family: var(--font-heading);
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  color: var(--text-dark);
  margin-bottom: var(--space-3);
  letter-spacing: var(--ls-tight);
`;

const ProjectDescription = styled.p`
  font-size: var(--fs-md);
  color: var(--text-medium);
  margin-bottom: var(--space-4);
  line-height: var(--lh-relaxed);
`;

const ProjectTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
`;

const TechTag = styled.span`
  font-size: var(--fs-sm);
  background: var(--tag-bg);
  color: var(--primary);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-weight: 500;
`;

const ProjectFooter = styled.div`
  display: flex;
  gap: var(--space-4);
`;

const ProjectLink = styled.a`
  font-size: var(--fs-sm);
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--secondary);
    transform: translateX(3px);
  }
`;

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roleArray = [
    'Data Scientist',
    'AI Engineer',
    'Data Visualization Specialist',
    'Data Consultant'
  ];
  
  useEffect(() => {
    const type = () => {
      const i = loopNum % roleArray.length;
      const fullText = roleArray[i];
      
      setText(prev => {
        if (isDeleting) {
          return fullText.substring(0, prev.length - 1);
        } else {
          return fullText.substring(0, prev.length + 1);
        }
      });
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };
    
    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [isDeleting, loopNum, text, typingSpeed, roleArray]);
  
  // Product data
  const productsData = [
    {
      id: 'bettracker',
      name: 'BetTrackerX',
      description: 'A comprehensive betting analytics platform for tracking performance and optimizing strategies.',
      image: 'https://via.placeholder.com/600x400?text=BetTrackerX',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'D3.js'],
      liveUrl: 'https://bettracker.example.com',
      domain: 'bettracker.example.com',
      repoUrl: 'https://github.com/example/bettracker'
    },
    {
      id: 'portfolio',
      name: 'Portfolio Builder',
      description: 'An intuitive platform to create professional portfolios in minutes with customizable templates.',
      image: 'https://via.placeholder.com/600x400?text=Portfolio+Builder',
      techStack: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://portfolio-builder.example.com',
      domain: 'portfolio-builder.example.com',
      repoUrl: 'https://github.com/example/portfolio-builder'
    }
  ];
  
  // Client project data
  const clientProjectsData = [
    {
      id: 'healthcare',
      name: 'Healthcare Analytics Platform',
      description: 'Developed a predictive analytics system for a major healthcare provider to optimize patient care pathways.',
      image: 'https://via.placeholder.com/600x400?text=Healthcare+Analytics',
      techStack: ['Python', 'TensorFlow', 'AWS', 'React'],
      clientName: 'Leading Healthcare Provider',
      year: '2023'
    },
    {
      id: 'fintech',
      name: 'Investment Robo-Advisor',
      description: 'Built an automated investment advisory platform using machine learning algorithms to personalize portfolio recommendations.',
      image: 'https://via.placeholder.com/600x400?text=Robo+Advisor',
      techStack: ['Python', 'Django', 'PostgreSQL', 'React'],
      clientName: 'FinTech Startup',
      year: '2022'
    }
  ];
  
  // Data visualization projects
  const dataVizProjects = [
    {
      id: 'sales-dashboard',
      name: 'Interactive Sales Dashboard',
      description: 'Real-time sales analytics dashboard with predictive forecasting and regional breakdown.',
      image: 'https://via.placeholder.com/600x400?text=Sales+Dashboard',
      techStack: ['D3.js', 'React', 'Firebase'],
      demoUrl: 'https://sales-dashboard.example.com'
    },
    {
      id: 'covid-tracker',
      name: 'COVID-19 Data Explorer',
      description: 'Interactive visualization tool tracking pandemic metrics across different regions with trend analysis.',
      image: 'https://via.placeholder.com/600x400?text=COVID+Tracker',
      techStack: ['Tableau', 'R', 'Python'],
      demoUrl: 'https://covid-tracker.example.com'
    }
  ];
  
  return (
    <HeroSection id="home">
      <Container>
        <HeroContent>
          <HeroLeftWrapper>
            <ProfileImageWrapper>
              <ProfileImage src={profileImage} alt="Zerub Roberts" />
              <CircleBorder />
            </ProfileImageWrapper>
          </HeroLeftWrapper>
          
          <HeroRight>
            <Greeting>Hello, I'm</Greeting>
            
            <MainHeading>Zerub <span>Roberts</span></MainHeading>
            
            <SubHeading>I'm a <TypedText>{text}</TypedText></SubHeading>
            
            <HeroButtons>
              <Button 
                as={Link} 
                to="/products" 
                className="secondary"
              >
                <FaStore /> My Products
              </Button>
              
              <Button 
                as={Link} 
                to="/projects" 
                className="secondary"
              >
                <FaLaptopCode /> My Projects
              </Button>
              
              <Button 
                as={Link} 
                to="/data-viz" 
                className="secondary"
              >
                <FaChartBar /> Dashboard Showcase
              </Button>
            </HeroButtons>
            
            <ResumeLink 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload /> Download Resume
            </ResumeLink>
            
            <SocialLinks>
              <SocialLink 
                href="https://linkedin.com/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </SocialLink>
              
              <SocialLink 
                href="https://github.com/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </SocialLink>
            </SocialLinks>
          </HeroRight>
        </HeroContent>

        {/* Products I've Built Section */}
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>
              <FaStore /> Products I've <span>Built</span>
            </SectionTitle>
            <SectionSubtitle>
              End-to-end micro-SaaS solutions designed and developed independently, from concept to deployment.
            </SectionSubtitle>
            <ViewAllLink to="/products">
              View all products <FaArrowRight />
            </ViewAllLink>
          </SectionHeader>
          
          <ProjectsGrid>
            {productsData.map((product) => (
              <ProjectCard key={product.id}>
                <ProjectImageContainer>
                  <ProjectImage src={product.image} alt={product.name} />
                </ProjectImageContainer>
                <ProjectContent>
                  <ProjectName>{product.name}</ProjectName>
                  <ProjectDescription>{product.description}</ProjectDescription>
                  <ProjectTechStack>
                    {product.techStack.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </ProjectTechStack>
                  <ProjectFooter>
                    <ProjectLink href={product.liveUrl} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live Demo
                    </ProjectLink>
                    <ProjectLink href={product.repoUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> View Code
                    </ProjectLink>
                  </ProjectFooter>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </SectionContainer>
        
        {/* Projects I've Worked On Section */}
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>
              <FaLaptopCode /> Projects I've <span>Worked On</span>
            </SectionTitle>
            <SectionSubtitle>
              Client-focused solutions delivered with attention to detail, helping businesses solve complex challenges.
            </SectionSubtitle>
            <ViewAllLink to="/client-projects">
              View all client projects <FaArrowRight />
            </ViewAllLink>
          </SectionHeader>
          
          <ProjectsGrid>
            {clientProjectsData.map((project) => (
              <ProjectCard key={project.id}>
                <ProjectImageContainer>
                  <ProjectImage src={project.image} alt={project.name} />
                </ProjectImageContainer>
                <ProjectContent>
                  <ProjectName>{project.name}</ProjectName>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTechStack>
                    {project.techStack.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </ProjectTechStack>
                  <ProjectFooter>
                    <ProjectLink as="span">
                      Client: {project.clientName}
                    </ProjectLink>
                    <ProjectLink as="span">
                      Year: {project.year}
                    </ProjectLink>
                  </ProjectFooter>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </SectionContainer>
        
        {/* Data Visualization Showcase Section */}
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>
              <FaChartBar /> Data Visualization <span>Showcase</span>
            </SectionTitle>
            <SectionSubtitle>
              Interactive dashboards and data-driven insights creating visual narratives from complex datasets.
            </SectionSubtitle>
            <ViewAllLink to="/data-viz">
              View all visualizations <FaArrowRight />
            </ViewAllLink>
          </SectionHeader>
          
          <ProjectsGrid>
            {dataVizProjects.map((viz) => (
              <ProjectCard key={viz.id}>
                <ProjectImageContainer>
                  <ProjectImage src={viz.image} alt={viz.name} />
                </ProjectImageContainer>
                <ProjectContent>
                  <ProjectName>{viz.name}</ProjectName>
                  <ProjectDescription>{viz.description}</ProjectDescription>
                  <ProjectTechStack>
                    {viz.techStack.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </ProjectTechStack>
                  <ProjectFooter>
                    <ProjectLink href={viz.demoUrl} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> View Dashboard
                    </ProjectLink>
                  </ProjectFooter>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </SectionContainer>
        
      </Container>
    </HeroSection>
  );
};

export default Hero;
