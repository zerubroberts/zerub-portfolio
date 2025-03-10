import React from 'react';
import styled from 'styled-components';
import Hero from '../components/sections/Hero';
import ProfessionalJourney from '../components/sections/ProfessionalJourney';
import DashboardGallery from '../components/sections/DashboardGallery';
import Testimonials from '../components/sections/Testimonials';
import ContactBanner from '../components/sections/ContactBanner';

const HomeContainer = styled.div`
  width: 100%;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <DashboardGallery />
      <ProfessionalJourney />
      <Testimonials />
      <ContactBanner />
    </HomeContainer>
  );
};

export default Home;
