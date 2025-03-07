import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projects, specialties } from '../data/resumeData';

const PageContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: var(--space-20) 0 var(--space-16);
  background: linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%);
  color: var(--white);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: var(--fs-5xl);
  margin-bottom: var(--space-6);
  
  @media (max-width: 768px) {
    font-size: var(--fs-4xl);
  }
`;

const Subtitle = styled.p`
  font-size: var(--fs-xl);
  opacity: 0.9;
  margin-bottom: var(--space-8);
  
  @media (max-width: 768px) {
    font-size: var(--fs-lg);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-12);
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const SkillTitle = styled.h3`
  font-size: var(--fs-xl);
  margin-bottom: var(--space-3);
`;

const ProjectsSection = styled.section`
  padding: var(--space-16) 0;
  background: var(--background);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-8);
  margin-top: var(--space-12);
`;

const ProjectCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--fs-2xl);
  font-weight: 700;
`;

const ProjectContent = styled.div`
  padding: var(--space-6);
`;

const ProjectTitle = styled.h3`
  font-size: var(--fs-xl);
  margin-bottom: var(--space-3);
  color: var(--text-dark);
`;

const ProjectDescription = styled.p`
  color: var(--text-medium);
  margin-bottom: var(--space-4);
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
`;

const TechTag = styled.span`
  background: var(--background-alt);
  color: var(--text-medium);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  font-size: var(--fs-sm);
`;

const Impact = styled.div`
  background: var(--background-alt);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  
  strong {
    color: var(--primary);
    display: block;
    margin-bottom: var(--space-2);
  }
`;

const MLOpsSection = styled.section`
  padding: var(--space-16) 0;
  background: var(--white);
`;

const MLOpsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
  margin-top: var(--space-12);
`;

const MLOpsCard = styled(motion.div)`
  background: var(--background);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
`;

const MLOpsTitle = styled.h3`
  font-size: var(--fs-xl);
  margin-bottom: var(--space-3);
  color: var(--text-dark);
`;

const MLOpsDescription = styled.p`
  color: var(--text-medium);
`;

const AIEngineering = () => {
  const aiSpecialty = specialties.find(s => s.id === 'ai-engineering');
  const aiProjects = projects.filter(project => project.category === 'ai-engineering');
  
  const mlopsFeatures = [
    {
      title: "Experiment Tracking",
      description: "Using MLflow for comprehensive experiment tracking, model versioning, and reproducibility."
    },
    {
      title: "Model Deployment",
      description: "Deploying models to production using AWS SageMaker with automated scaling and monitoring."
    },
    {
      title: "Data Version Control",
      description: "Implementing DVC for efficient data and model versioning across projects."
    },
    {
      title: "CI/CD Pipelines",
      description: "Automated testing and deployment pipelines ensuring code quality and model performance."
    },
    {
      title: "Model Monitoring",
      description: "Real-time monitoring of model performance, drift detection, and automated retraining."
    },
    {
      title: "Infrastructure as Code",
      description: "Using Terraform and CloudFormation for reproducible ML infrastructure deployment."
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Title>AI Engineering</Title>
              <Subtitle>
                Building and deploying production-ready machine learning solutions
                with a focus on scalability and maintainability
              </Subtitle>
            </motion.div>
            
            <SkillsGrid>
              {aiSpecialty.skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <SkillTitle>{skill}</SkillTitle>
                </SkillCard>
              ))}
            </SkillsGrid>
          </HeroContent>
        </Container>
      </HeroSection>
      
      <ProjectsSection>
        <Container>
          <motion.h2
            className="section-title-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured AI Projects
          </motion.h2>
          
          <ProjectsGrid>
            {aiProjects.map((project, index) => (
              <ProjectCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectImage>{project.title}</ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.technologies.map((tech, i) => (
                      <TechTag key={i}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  <Impact>
                    <strong>Impact</strong>
                    {project.impact}
                  </Impact>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Container>
      </ProjectsSection>
      
      <MLOpsSection>
        <Container>
          <motion.h2
            className="section-title-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            MLOps & Best Practices
          </motion.h2>
          
          <MLOpsGrid>
            {mlopsFeatures.map((feature, index) => (
              <MLOpsCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <MLOpsTitle>{feature.title}</MLOpsTitle>
                <MLOpsDescription>{feature.description}</MLOpsDescription>
              </MLOpsCard>
            ))}
          </MLOpsGrid>
        </Container>
      </MLOpsSection>
    </PageContainer>
  );
};

export default AIEngineering;
