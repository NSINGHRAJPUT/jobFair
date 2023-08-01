import HeroSection from './Components/Hero/Hero';
import Header from './Components/Header/Header';
import About from "./Components/About/About";
import Footer from './Components/Footer/Footer';
import SignIn from './Components/SignIn/SignIn';
import Talent from './Components/Talent/Talent';
import Reviews from './Components/Reviews/Reviews';
import Feature from './Components/Feature/Feature';

function App() {
  return (
    <div className="contaier-fluid">
      <Header />
      <HeroSection />
      <SignIn/>
      <Talent/>
      <Reviews />
      <Feature />
      <About />
      <Footer />
    </div>
  );
}

export default App;
