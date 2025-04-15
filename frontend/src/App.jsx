import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Bookshelf from './pages/Bookshelf';
import Inspiration from './pages/Inspiration';
import Animation from './pages/Animation';
import Map from './pages/Map';
import ConnectionsMap from './pages/ConnectionsMap';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();
  const secretMapUrl = process.env.REACT_APP_SECRET_MAP_URL;
  console.log('secretMapUrl:', secretMapUrl);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} /> 
        <Route path="/projects" element={<Projects />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
        <Route path="/Inspiration" element={<Inspiration />} />
        <Route path="/Animation" element={<Animation />} />
        <Route path="/Map" element={<Map />} />
        {secretMapUrl && <Route path={secretMapUrl} element={<ConnectionsMap />} />}
        <Route path="/Resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;