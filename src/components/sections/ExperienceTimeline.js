import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { workExperience, education } from '../../data/resumeData';

const TimelineSection = styled.section`
  background: var(--background-alt);
  padding: var(--space-16) 0;
`;

const TimelineContainer = styled.div`
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

const TimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    box-shadow: var(--shadow-md);
    padding: var(--space-6);
    border-radius: var(--radius-lg);
    background: var(--white);
    
    .vertical-timeline-element-date {
      color: var(--text-medium);
      font-weight: 500;
      
      @media (max-width: 1169px) {
        margin: var(--space-4) 0 0;
      }
    }
  }
  
  .vertical-timeline-element-content-arrow {
    border-right-color: var(--white);
  }
  
  .vertical-timeline-element-icon {
    box-shadow: var(--shadow-lg);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ElementTitle = styled.h3`
  font-size: var(--fs-xl);
  margin-bottom: var(--space-2);
  color: var(--text-dark);
`;

const ElementSubtitle = styled.h4`
  font-size: var(--fs-lg);
  color: var(--primary);
  margin-bottom: var(--space-4);
`;

const ElementLocation = styled.p`
  font-size: var(--fs-sm);
  color: var(--text-medium);
  margin-bottom: var(--space-4);
  font-style: italic;
`;

const HighlightsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const HighlightItem = styled(motion.li)`
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

const ExperienceTimeline = () => {
  const workIconStyles = { background: 'var(--primary)', color: '#fff' };
  const eduIconStyles = { background: 'var(--secondary)', color: '#fff' };

  return (
    <TimelineSection>
      <TimelineContainer>
        <SectionTitle>Professional Journey</SectionTitle>
        
        <VerticalTimeline>
          {/* Work Experience */}
          {workExperience.map((exp, index) => (
            <TimelineElement
              key={index}
              date={exp.period}
              iconStyle={workIconStyles}
              icon={<FaBriefcase />}
              className="vertical-timeline-element--work"
            >
              <ElementTitle>{exp.role}</ElementTitle>
              <ElementSubtitle>{exp.company}</ElementSubtitle>
              <ElementLocation>{exp.location}</ElementLocation>
              
              <HighlightsList>
                {exp.highlights.map((highlight, i) => (
                  <HighlightItem
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {highlight}
                  </HighlightItem>
                ))}
              </HighlightsList>
            </TimelineElement>
          ))}
          
          {/* Education */}
          {education.map((edu, index) => (
            <TimelineElement
              key={index}
              date={edu.period}
              iconStyle={eduIconStyles}
              icon={<FaGraduationCap />}
              className="vertical-timeline-element--education"
            >
              <ElementTitle>{edu.degree}</ElementTitle>
              <ElementSubtitle>{edu.institution}</ElementSubtitle>
              <p>{edu.field}</p>
            </TimelineElement>
          ))}
        </VerticalTimeline>
      </TimelineContainer>
    </TimelineSection>
  );
};

export default ExperienceTimeline;
