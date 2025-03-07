import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Main = styled.main`
  min-height: 100vh;
  padding-top: 70px; // Height of navbar
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>
        <Content>{children}</Content>
        <Footer />
      </Main>
    </>
  );
};

export default Layout;
