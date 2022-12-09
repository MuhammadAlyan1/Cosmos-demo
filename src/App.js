import Community from './components/Community';
import HeroSection from './components/heroSection';
import DesktopNavbar from './components/navbar/DesktopNavbar';
import MobileNavbar from './components/navbar/mobileNavbar';

function App() {
  return (
    <div className="font-['Inter']">
      <MobileNavbar />
      <DesktopNavbar />
      <HeroSection />
      <Community />
    </div>
  );
}

export default App;
