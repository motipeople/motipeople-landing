import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import FeatureSection from '@/components/FeatureSection';
import MeetupSection from '@/components/MeetupSection';
import ReviewSection from '@/components/ReviewSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ScrollTopButton from '@/components/common/ScrollTopButton';

export default function App() {
  return (
    <main className='min-h-screen bg-black'>
      <HeroSection />
      <ProblemSection />
      <FeatureSection />
      <MeetupSection />
      <ReviewSection />
      <CTASection />
      <Footer />
      <ScrollTopButton />
    </main>
  );
}
