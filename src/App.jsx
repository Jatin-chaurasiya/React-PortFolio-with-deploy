import Header from "./components/Header";
import { initAnimations } from "./utils/animations";
import { useEffect } from "react";
import Loader from "./components/loader";
import Hero from "./components/Hero";
import About from "./components/about";
import Experience from "./components/experience";
import Achievements from "./components/achievements";
import Projects from "./components/pojects";
import Footer from "./components/footer";
import Contact from "./components/contact";
import StatsSection from "./components/stats";
import SharePopup from "./components/SharePopup";
import ChatBot from "./components/ChatBot";


function App() {
  useEffect(() => {
    const cleanup = initAnimations();
    return cleanup;
  }, []);
  return (
    <>
    <Loader />
    <Header />
    <Hero />
    <About />
    <Experience />
    <Achievements />
    <Projects />
    <StatsSection />
    <Contact />
    <Footer />
    <SharePopup />
    <ChatBot />
    </>
  );
}

export default App;