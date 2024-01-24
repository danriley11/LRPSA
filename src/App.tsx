import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HOME, ABOUT, CONSULTATIONS, SPECIALISTS, TERMS_OF_USE, CONTACT } from './routes/routes';
import { Suspense, lazy } from 'react';
import DefaultRouteWrapper from './routes/RouteWrappers';
import ScrollToTop from './routes/ScrollToTop';

const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const Consultations = lazy(() => import('./pages/consultations/Consultations'));
const Specialists = lazy(() => import('./pages/specialists/Specialists'));
const TermsOfUse = lazy(() => import('./pages/termsOfUse/TermsOfUse'));
const Contact = lazy(() => import('./pages/contact/Contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={''}>
        <ScrollToTop />
        <Routes>
          <Route
            path={HOME}
            element={
              <DefaultRouteWrapper>
                <Home />
              </DefaultRouteWrapper>
            }
          />
          <Route
            path={ABOUT}
            element={
              <DefaultRouteWrapper>
                <About />
              </DefaultRouteWrapper>
            }
          />
          <Route
            path={CONSULTATIONS}
            element={
              <DefaultRouteWrapper>
                <Consultations />
              </DefaultRouteWrapper>
            }
          />
          <Route
            path={SPECIALISTS}
            element={
              <DefaultRouteWrapper>
                <Specialists />
              </DefaultRouteWrapper>
            }
          />
          <Route
            path={TERMS_OF_USE}
            element={
              <DefaultRouteWrapper>
                <TermsOfUse />
              </DefaultRouteWrapper>
            }
          />
          <Route
            path={CONTACT}
            element={
              <DefaultRouteWrapper>
                <Contact />
              </DefaultRouteWrapper>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
