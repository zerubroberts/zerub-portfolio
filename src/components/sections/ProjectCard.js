import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card = styled(motion.div)`
  position: relative;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-glass);
  transition: var(--transition-bounce);

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;

const ProjectImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-default);

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: var(--space-6);
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
`;

const Title = styled.h3`
  font-size: var(--fs-xl);
  color: var(--white);
  margin-bottom: var(--space-2);
`;

const Description = styled.p`
  color: var(--text-light);
  font-size: var(--fs-base);
  line-height: 1.6;
  margin-bottom: var(--space-4);
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-light);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--fs-sm);
  backdrop-filter: blur(5px);
`;

const Links = styled.div`
  display: flex;
  gap: var(--space-4);
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--text-light);
  font-size: var(--fs-base);
  text-decoration: none;
  transition: var(--transition-fast);

  &:hover {
    color: var(--white);
    transform: translateY(-2px);
  }

  svg {
    font-size: var(--fs-lg);
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  background: var(--gradient-1);
  color: var(--white);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--fs-sm);
  font-weight: 600;
  z-index: 2;
  box-shadow: var(--shadow-md);
`;

const ProjectCard = ({ 
  title, 
  description, 
  category,
  technologies, 
  impact,
  image,
  githubUrl,
  liveUrl,
  featured
}) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {featured && <FeaturedBadge>Featured</FeaturedBadge>}
      <ImageContainer>
        <ProjectImage
          src={image || `https://via.placeholder.com/600x400?text=${title}`}
          alt={title}
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/600x400?text=${title}`;
          }}
        />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TechStack>
          {technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechStack>
        {impact && (
          <Description>
            <strong>Impact:</strong> {impact}
          </Description>
        )}
        <Links>
          {githubUrl && (
            <LinkButton
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> Code
            </LinkButton>
          )}
          {liveUrl && (
            <LinkButton
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Live Demo
            </LinkButton>
          )}
        </Links>
      </Content>
    </Card>
  );
};

export default ProjectCard;
