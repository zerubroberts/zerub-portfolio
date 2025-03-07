import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import DataVisualization from './pages/DataVisualization';
import AIEngineering from './pages/AIEngineering';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-visualization" element={<DataVisualization />} />
          <Route path="/ai-engineering" element={<AIEngineering />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
