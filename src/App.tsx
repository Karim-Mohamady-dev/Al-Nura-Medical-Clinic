import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { DemoNoticeBanner } from './components/common/DemoNoticeBanner';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileBottomBar } from './components/layout/MobileBottomBar';
import { FloatingWhatsApp } from './components/whatsapp/FloatingWhatsApp';

// Modals
import { DoctorDetailModal } from './components/doctors/DoctorDetailModal';
import { SpecialtyDetailModal } from './components/specialties/SpecialtyDetailModal';
import { ServiceDetailModal } from './components/services/ServiceDetailModal';
import { BranchDetailModal } from './components/branches/BranchDetailModal';
import { ArticleDetailModal } from './components/blog/ArticleDetailModal';

// Pages
import { Home } from './pages/Home';
import { Doctors } from './pages/Doctors';
import { Specialties } from './pages/Specialties';
import { Services } from './pages/Services';
import { Branches } from './pages/Branches';
import { Booking } from './pages/Booking';
import { Contact } from './pages/Contact';
import { Insurance } from './pages/Insurance';
import { About } from './pages/About';
import { PatientResources } from './pages/PatientResources';
import { Blog } from './pages/Blog';
import { FAQ } from './pages/FAQ';
import { Legal } from './pages/Legal';

// Types
import { Doctor, Specialty, MedicalService, Branch, MedicalArticle } from './types';

interface ReturnContext {
  page: string;
  doctor?: Doctor | null;
  specialty?: Specialty | null;
  service?: MedicalService | null;
  branch?: Branch | null;
  article?: MedicalArticle | null;
}

function MainAppContent() {
  const { language } = useLanguage();

  const [currentPage, setCurrentPage] = useState<string>('home');
  const [returnContext, setReturnContext] = useState<ReturnContext>({ page: 'home' });
  const [bookingParams, setBookingParams] = useState<{
    doctorId?: string;
    specialtyId?: string;
    branchId?: string;
  }>({});

  // Modals state
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [selectedService, setSelectedService] = useState<MedicalService | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<MedicalArticle | null>(null);

  const handleNavigate = (page: string, params?: any) => {
    if (page === 'booking') {
      setReturnContext({
        page: currentPage === 'booking' ? returnContext.page : currentPage,
        doctor: selectedDoctor,
        specialty: selectedSpecialty,
        service: selectedService,
        branch: selectedBranch,
        article: selectedArticle,
      });
      // Close active modals so booking view is clean
      setSelectedDoctor(null);
      setSelectedSpecialty(null);
      setSelectedService(null);
      setSelectedBranch(null);
      setSelectedArticle(null);
    }
    setCurrentPage(page);
    if (params) {
      setBookingParams(params);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookWithDoctor = (doctorId: string, specialtyId: string, doctorObj?: Doctor | null) => {
    setReturnContext({
      page: currentPage === 'booking' ? returnContext.page : currentPage,
      doctor: doctorObj || null,
      specialty: null,
      service: null,
      branch: null,
      article: null,
    });
    setSelectedDoctor(null);
    setBookingParams({ doctorId, specialtyId });
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookSpecialty = (specialtyId: string, specialtyObj?: Specialty | null) => {
    setReturnContext({
      page: currentPage === 'booking' ? returnContext.page : currentPage,
      doctor: null,
      specialty: specialtyObj || null,
      service: null,
      branch: null,
      article: null,
    });
    setSelectedSpecialty(null);
    setBookingParams({ specialtyId });
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookService = (serviceId: string, specialtyId: string, serviceObj?: MedicalService | null) => {
    setReturnContext({
      page: currentPage === 'booking' ? returnContext.page : currentPage,
      doctor: null,
      specialty: null,
      service: serviceObj || null,
      branch: null,
      article: null,
    });
    setSelectedService(null);
    setBookingParams({ specialtyId });
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookAtBranch = (branchId: string, branchObj?: Branch | null) => {
    setReturnContext({
      page: currentPage === 'booking' ? returnContext.page : currentPage,
      doctor: null,
      specialty: null,
      service: null,
      branch: branchObj || null,
      article: null,
    });
    setSelectedBranch(null);
    setBookingParams({ branchId });
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookFromArticle = (articleObj?: MedicalArticle | null) => {
    setReturnContext({
      page: currentPage === 'booking' ? returnContext.page : currentPage,
      doctor: null,
      specialty: null,
      service: null,
      branch: null,
      article: articleObj || null,
    });
    setSelectedArticle(null);
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingClose = () => {
    const targetPage = returnContext.page || 'home';
    setCurrentPage(targetPage);

    // Restore modal context if user initiated booking from inside a detail modal
    if (returnContext.doctor) {
      setSelectedDoctor(returnContext.doctor);
    } else if (returnContext.specialty) {
      setSelectedSpecialty(returnContext.specialty);
    } else if (returnContext.service) {
      setSelectedService(returnContext.service);
    } else if (returnContext.branch) {
      setSelectedBranch(returnContext.branch);
    } else if (returnContext.article) {
      setSelectedArticle(returnContext.article);
    }

    // Reset return context to default
    setReturnContext({ page: 'home' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFB] text-[#243746] font-sans">
      
      {/* Top Banner & Announcement */}
      <DemoNoticeBanner />
      <AnnouncementBar />

      {/* Main Responsive Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page Content View Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onSelectDoctor={(doc) => setSelectedDoctor(doc)}
            onSelectSpecialty={(spec) => setSelectedSpecialty(spec)}
            onSelectService={(srv) => setSelectedService(srv)}
            onSelectBranch={(br) => setSelectedBranch(br)}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        )}

        {currentPage === 'doctors' && (
          <Doctors
            onSelectDoctor={(doc) => setSelectedDoctor(doc)}
            onBookAppointment={handleBookWithDoctor}
            initialSpecialtyFilter={bookingParams.specialtyId}
            initialBranchFilter={bookingParams.branchId}
          />
        )}

        {currentPage === 'specialties' && (
          <Specialties
            onSelectSpecialty={(spec) => setSelectedSpecialty(spec)}
            onBookAppointment={handleBookSpecialty}
          />
        )}

        {currentPage === 'services' && (
          <Services
            onSelectService={(srv) => setSelectedService(srv)}
            onBookService={handleBookService}
          />
        )}

        {currentPage === 'branches' && (
          <Branches
            onSelectBranch={(br) => setSelectedBranch(br)}
            onBookAtBranch={handleBookAtBranch}
          />
        )}

        {currentPage === 'booking' && (
          <Booking
            initialDoctorId={bookingParams.doctorId}
            initialSpecialtyId={bookingParams.specialtyId}
            initialBranchId={bookingParams.branchId}
            onClose={handleBookingClose}
          />
        )}

        {currentPage === 'contact' && <Contact />}

        {currentPage === 'insurance' && <Insurance />}

        {currentPage === 'about' && <About />}

        {currentPage === 'resources' && (
          <PatientResources onNavigateBooking={() => handleNavigate('booking')} />
        )}

        {currentPage === 'blog' && (
          <Blog onSelectArticle={(art) => setSelectedArticle(art)} />
        )}

        {currentPage === 'faq' && <FAQ />}

        {currentPage.startsWith('legal') && (
          <Legal
            initialTab={
              currentPage === 'legal-terms'
                ? 'terms'
                : currentPage === 'legal-disclaimer'
                ? 'disclaimer'
                : currentPage === 'legal-cancellation'
                ? 'cancellation'
                : 'privacy'
            }
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Floating WhatsApp Widget */}
      <FloatingWhatsApp onNavigate={handleNavigate} />

      {/* Sticky Mobile Action Bar (capped <= 14vh mobile height) */}
      <MobileBottomBar onNavigate={handleNavigate} />

      {/* Detail Modals */}
      <DoctorDetailModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onBookAppointment={handleBookWithDoctor}
      />

      <SpecialtyDetailModal
        specialty={selectedSpecialty}
        onClose={() => setSelectedSpecialty(null)}
        onBookSpecialty={handleBookSpecialty}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleBookService}
      />

      <BranchDetailModal
        branch={selectedBranch}
        onClose={() => setSelectedBranch(null)}
        onBookAtBranch={handleBookAtBranch}
      />

      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onBookConsultation={handleBookFromArticle}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}
