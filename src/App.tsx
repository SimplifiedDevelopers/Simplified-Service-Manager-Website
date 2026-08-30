import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductTour } from './components/ProductTour';
import { HowItWorks } from './components/HowItWorks';
import { Security } from './components/Security';
import { Pricing } from './components/Pricing';
import { Cta } from './components/Cta';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductTour />
        <HowItWorks />
        <Security />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
