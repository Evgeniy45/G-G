import '../styles/App.scss';
import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { ConcertTable } from '../components/ConcertTable/ConcertTable';
import { BandMembers } from '../components/BandMembers/BandMembers';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { Contacts } from '../components/Contacts/Contacts';
import { Footer } from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ConcertTable />
        <BandMembers />
        <AboutSection />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;