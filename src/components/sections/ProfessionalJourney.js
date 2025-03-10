import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaLaptopCode, FaServer, FaChartBar, FaGraduationCap } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { workExperience } from '../../data/resumeData';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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

const TimelineContainer = styled.div`
  position: relative;
  margin-top: var(--space-16);
  padding: 0 var(--space-4);
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: linear-gradient(to bottom, rgba(var(--primary-rgb), 0.3), rgba(var(--primary-rgb), 0.8));
  transform: translateX(-50%);
  
  @media (max-width: 768px) {
    left: 30px;
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 500px;
  margin-left: var(--space-10);
  
  @media (max-width: 768px) {
    margin-left: var(--space-10);
  }
`;

const YearBubble = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gradient-1);
  color: var(--white);
  font-weight: 600;
  padding: var(--space-2) var(--space-4);
  border-radius: 50px;
  font-size: var(--fs-sm);
  white-space: nowrap;
  box-shadow: var(--shadow-md);
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 30px;
  }
`;

const TimelinePoint = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.3);
  z-index: 1;
  
  @media (max-width: 768px) {
    left: 30px;
  }
`;

const TimelineConnector = styled.div`
  position: absolute;
  top: 10px;
  width: calc(50% - 30px);
  height: 3px;
  background: linear-gradient(
    to ${props => props.direction === 'left' ? 'left' : 'right'}, 
    rgba(var(--primary-rgb), 0.8), 
    rgba(var(--primary-rgb), 0.3)
  );
  
  ${props => props.direction === 'left' ? `
    right: 50%;
  ` : `
    left: 50%;
  `}
  
  @media (max-width: 768px) {
    left: 40px;
    width: 50px;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  margin-bottom: var(--space-12);
  width: 100%;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    ${TimelineContent} {
      align-items: flex-end;
      text-align: right;
      margin-right: var(--space-10);
      margin-left: 0;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column !important;
    padding-left: 70px;
    
    &:nth-child(even) {
      ${TimelineContent} {
        align-items: flex-start;
        text-align: left;
        margin-left: var(--space-10);
        margin-right: 0;
      }
    }
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
`;

const JobTitle = styled.h3`
  font-size: var(--fs-xl);
  font-weight: 600;
  color: var(--text-dark);
`;

const Company = styled.h4`
  font-size: var(--fs-lg);
  font-weight: 500;
  color: var(--primary);
  margin-bottom: var(--space-2);
`;

const JobDetails = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-6);
  margin-bottom: var(--space-4);
  font-size: var(--fs-sm);
  color: var(--text-medium);
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const JobDescription = styled.p`
  font-size: var(--fs-md);
  color: var(--text-medium);
  line-height: 1.6;
  margin-bottom: var(--space-4);
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: var(--primary);
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--fs-sm);
`;

const SkillsContainer = styled.div`
  display: ${props => props.isVisible ? 'flex' : 'none'};
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-4);
`;

const Skill = styled.span`
  background: rgba(var(--primary-rgb), 0.1);
  color: var(--primary);
  padding: var(--space-1) var(--space-3);
  border-radius: 50px;
  font-size: var(--fs-xs);
  font-weight: 500;
`;

const JobIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gradient-1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--fs-xl);
`;

// Mock skills data (this would typically come from your API or data source)
const skillsByRole = {
  'Software Engineer': ['JavaScript', 'React', 'Node.js', 'TypeScript', 'GraphQL', 'REST APIs'],
  'Backend Developer': ['Python', 'Django', 'PostgreSQL', 'Docker', 'AWS', 'Microservices'],
  'Data Scientist': ['Python', 'R', 'Machine Learning', 'TensorFlow', 'Data Visualization', 'SQL'],
  'Frontend Developer': ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Responsive Design'],
  'DevOps Engineer': ['Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'AWS', 'Linux'],
  'Full Stack Developer': ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'AWS'],
  'UX/UI Designer': ['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Prototyping', 'Wireframing'],
  'Product Manager': ['Agile', 'Scrum', 'JIRA', 'User Stories', 'Product Roadmap', 'A/B Testing'],
  'Student': ['Research', 'Project Management', 'Academic Writing', 'Data Analysis', 'Presentations']
};

const getJobIcon = (role) => {
  switch (role.toLowerCase()) {
    case 'software engineer':
    case 'frontend developer':
    case 'full stack developer':
      return <FaLaptopCode />;
    case 'backend developer':
    case 'devops engineer':
      return <FaServer />;
    case 'data scientist':
    case 'ux/ui designer':
    case 'product manager':
      return <FaChartBar />;
    case 'student':
      return <FaGraduationCap />;
    default:
      return <FaBriefcase />;
  }
};

const ProfessionalJourney = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const timeline = useRef(null);
  
  useEffect(() => {
    if (inView && timeline.current) {
      // Animate the timeline line
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0, transformOrigin: 'top' },
        { scaleY: 1, duration: 1.5, ease: 'power3.out' }
      );
      
      // Animate the year bubbles
      gsap.fromTo(
        '.year-bubble',
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.2, 
          ease: 'back.out(1.7)',
          delay: 0.5
        }
      );
      
      // Animate the timeline points
      gsap.fromTo(
        '.timeline-point',
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.4, 
          stagger: 0.2, 
          ease: 'back.out(2)',
          delay: 0.7
        }
      );
      
      // Animate the timeline connectors
      gsap.fromTo(
        '.timeline-connector',
        { scaleX: 0, transformOrigin: 'center' },
        { 
          scaleX: 1, 
          duration: 0.5, 
          stagger: 0.2, 
          ease: 'power2.out',
          delay: 0.9
        }
      );
      
      // Animate the timeline content
      gsap.fromTo(
        '.timeline-content',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.7, 
          stagger: 0.2, 
          ease: 'power2.out',
          delay: 1.1
        }
      );
    }
  }, [inView]);
  
  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  const getYearFromPeriod = (periodStr) => {
    const match = periodStr.match(/\b(\d{4})\b/);
    return match ? match[1] : '';
  };
  
  return (
    <Section id="experience">
      <Container>
        <SectionHeader>
          <Title>Professional Journey</Title>
          <Subtitle>
            A timeline of my career growth and professional experience
          </Subtitle>
        </SectionHeader>
        
        <TimelineContainer ref={(el) => { timeline.current = el; ref(el); }}>
          <TimelineLine className="timeline-line" />
          
          {workExperience.map((job, index) => {
            const year = getYearFromPeriod(job.period);
            const isEven = index % 2 === 1;
            const direction = isEven ? 'left' : 'right';
            
            return (
              <TimelineItem key={index}>
                <YearBubble 
                  className="year-bubble"
                  style={{ top: `${index * 200 + 10}px` }}
                >
                  {year}
                </YearBubble>
                
                <TimelinePoint 
                  className="timeline-point"
                  style={{ top: `${index * 200 + 50}px` }}
                />
                
                <TimelineConnector 
                  className="timeline-connector"
                  direction={direction}
                  style={{ top: `${index * 200 + 50}px` }}
                />
                
                <TimelineContent className="timeline-content">
                  <JobHeader>
                    <JobIcon>
                      {getJobIcon(job.role)}
                    </JobIcon>
                    <JobTitle>{job.role}</JobTitle>
                  </JobHeader>
                  
                  <Company>{job.company}</Company>
                  
                  <JobDetails>
                    <DetailItem>
                      <FaCalendarAlt />
                      {job.period}
                    </DetailItem>
                    <DetailItem>
                      <FaMapMarkerAlt />
                      {job.location}
                    </DetailItem>
                  </JobDetails>
                  
                  <JobDescription>{job.description}</JobDescription>
                  
                  <ToggleButton onClick={() => toggleDetails(index)}>
                    {expandedIndex === index ? 'Hide Skills' : 'Show Skills'}
                  </ToggleButton>
                  
                  <SkillsContainer isVisible={expandedIndex === index}>
                    {skillsByRole[job.role]?.map((skill, i) => (
                      <Tippy key={i} content={`${skill} used at ${job.company}`}>
                        <Skill>{skill}</Skill>
                      </Tippy>
                    ))}
                  </SkillsContainer>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </TimelineContainer>
      </Container>
    </Section>
  );
};

export default ProfessionalJourney;
