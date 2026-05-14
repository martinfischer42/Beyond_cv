import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import CasesOverviewPage from './pages/CasesOverviewPage';
import CmsMigrationCasePage from './pages/CmsMigrationCasePage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ImpressumPage from './pages/ImpressumPage';
import MarketingAutomationCasePage from './pages/MarketingAutomationCasePage';
import AiMarketingScalingCasePage from './pages/AiMarketingScalingCasePage';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/cases" element={<CasesOverviewPage />} />
        <Route path="/cases/ai-marketing-scaling" element={<AiMarketingScalingCasePage />} />
        <Route path="/cases/marketing-automation" element={<MarketingAutomationCasePage />} />
        <Route path="/cases/cms-migration" element={<CmsMigrationCasePage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
