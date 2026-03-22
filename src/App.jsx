import Header from "./components/Header";
import { initAnimations } from "./utils/animations";
import { useEffect } from "react";
import Loader from "./components/loader";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/experience";
import Achievements from "./components/achievements";


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
    </>
  );
}

export default App;