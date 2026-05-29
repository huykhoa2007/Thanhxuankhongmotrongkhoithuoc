/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Layout from './components/Layout';
import FloatingSupportButton from './components/FloatingSupportButton';
import HomePage from './pages/HomePage';
import EffectsPage from './pages/EffectsPage';
import SecondhandPage from './pages/SecondhandPage';
import BenefitsPage from './pages/BenefitsPage';
import SupportPage from './pages/SupportPage';
import GuidePage from './pages/GuidePage';
import LegalPage from './pages/LegalPage';
import CommitmentPage from './pages/CommitmentPage';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes {...({ location, key: location.pathname } as any)}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/tac-hai" element={<PageWrapper><EffectsPage /></PageWrapper>} />
        <Route path="/thu-dong" element={<PageWrapper><SecondhandPage /></PageWrapper>} />
        <Route path="/tuyen-truyen" element={<PageWrapper><BenefitsPage /></PageWrapper>} />
        <Route path="/huong-dan" element={<PageWrapper><GuidePage /></PageWrapper>} />
        <Route path="/luat-phap" element={<PageWrapper><LegalPage /></PageWrapper>} />
        <Route path="/ho-tro" element={<PageWrapper><SupportPage /></PageWrapper>} />
        <Route path="/cam-ket" element={<PageWrapper><CommitmentPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
      <FloatingSupportButton />
    </Router>
  );
}

