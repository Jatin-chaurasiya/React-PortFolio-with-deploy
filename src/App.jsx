import Header from "./components/Header";
import { initAnimations } from "./utils/animations";
import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cleanup = initAnimations();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      cleanup?.();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
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