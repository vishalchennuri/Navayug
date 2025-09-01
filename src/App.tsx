import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LandingPage from "./pages/landingpage";
import Layout from "./components/layout";
import About from "./pages/About";
import Services from "./pages/Services";
import PlansAndPricing from "./pages/Plans";
import Contact from "./pages/ContactUS";
import ErrorPage from "./pages/Error";
import Portfolio from "./components/PortfolioWebsite";
import WorkPortfolio from "./components/WorkDetails";
import PortfolioPage from "./pages/Portfolio";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/pricing" element={<PlansAndPricing />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/portfolio" element={<PortfolioPage />} />
           <Route path="/project/:id" element={<WorkPortfolio />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}