import { useRouter } from '@/lib/router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { WhyChooseUsPage } from '@/pages/WhyChooseUsPage';
import { SecurityTipsPage } from '@/pages/SecurityTipsPage';
import { ContactPage } from '@/pages/ContactPage';
import { RequestConsultationPage } from '@/pages/RequestConsultationPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { TermsPage } from '@/pages/TermsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

function App() {
  const { path, params, navigate } = useRouter();

  const renderPage = () => {
    if (path === '/') return <HomePage navigate={navigate} />;
    if (path === '/about') return <AboutPage navigate={navigate} />;
    if (path === '/services') return <ServicesPage navigate={navigate} />;
    if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '');
      return <ServiceDetailPage slug={slug} navigate={navigate} />;
    }
    if (path === '/why-choose-us') return <WhyChooseUsPage navigate={navigate} />;
    if (path === '/security-tips') return <SecurityTipsPage navigate={navigate} />;
    if (path === '/contact') return <ContactPage navigate={navigate} />;
    if (path === '/request-consultation')
      return <RequestConsultationPage navigate={navigate} presetService={params.service} />;
    if (path === '/privacy-policy') return <PrivacyPolicyPage navigate={navigate} />;
    if (path === '/terms') return <TermsPage navigate={navigate} />;
    return <NotFoundPage navigate={navigate} />;
  };

  const isNotFound =
    path !== '/' &&
    path !== '/about' &&
    path !== '/services' &&
    !path.startsWith('/services/') &&
    path !== '/why-choose-us' &&
    path !== '/security-tips' &&
    path !== '/contact' &&
    path !== '/request-consultation' &&
    path !== '/privacy-policy' &&
    path !== '/terms';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!isNotFound && <Header navigate={navigate} currentPath={path} />}
      <main className="flex-1">{renderPage()}</main>
      {!isNotFound && <Footer navigate={navigate} />}
      <FloatingActions />
    </div>
  );
}

export default App;
