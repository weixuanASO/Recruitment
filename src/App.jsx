import { useEffect } from "react";
import { topBar } from "./content.js";

import TopBar from "./components/TopBar.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Reality from "./components/Reality.jsx";
import Results from "./components/Results.jsx";
import Clients from "./components/Clients.jsx";
import SystemSection from "./components/SystemSection.jsx";
import ForYou from "./components/ForYou.jsx";
import Included from "./components/Included.jsx";
import Mentor from "./components/Mentor.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

/*
  The landing page. Sections render top-to-bottom in this order.
  To reorder the page, reorder these lines.
*/
export default function App() {
  // Always start at the top when landing here.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {topBar.show && <TopBar />}
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Reality />
        <Results />
        <Clients />
        <SystemSection />
        <ForYou />
        <Included />
        <Mentor />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
