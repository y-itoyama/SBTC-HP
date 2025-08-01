import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Facts from '@/components/landing/Facts';
import ValueProposition from '@/components/landing/ValueProposition';
import Benefits from '@/components/landing/Benefits';
import Closing from '@/components/landing/Closing';
import InterestForm from '@/components/landing/InterestForm';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Facts />
        <ValueProposition />
        <Benefits />
        <Closing />
        <InterestForm />
      </main>
      <Footer />
    </div>
  );
}
