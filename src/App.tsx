import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import MediaCentrePage from './pages/MediaCentrePage';
import ContactPage from './pages/ContactPage';
import FiberRowPage from './pages/permits/FiberRowPage';
import GasRowPage from './pages/permits/GasRowPage';
import PowerRowPage from './pages/permits/PowerRowPage';
import TowerMastPage from './pages/permits/TowerMastPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="media-centre" element={<MediaCentrePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="permits/fiber-row" element={<FiberRowPage />} />
        <Route path="permits/gas-row" element={<GasRowPage />} />
        <Route path="permits/power-row" element={<PowerRowPage />} />
        <Route path="permits/tower-mast" element={<TowerMastPage />} />
      </Route>
    </Routes>
  );
}
