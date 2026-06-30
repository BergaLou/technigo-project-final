import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { SwearContext } from "./context/SwearContext.jsx";
import { Header } from "../components/Header/Header.jsx";
import { Hero } from "../components/Hero/Hero.jsx";
import { Features } from "../components/Features/Features.jsx";
import { HowItWorks } from "../components/HowItWorks.jsx";
import { CTA } from "../components/CallToAction/CTA.jsx";
import { Footer } from "../components/Footer/Footer.jsx";
import { SwearList } from "../components/SwearList/swearList.jsx";
import { Challenge } from "../components/Challenge/Challenge.jsx";
import { Duels } from "../components/Duels/Duels.jsx";
import { LeaderBoard } from "../components/LeaderBoard/LeaderBoard.jsx";
import { Arena } from "../components/Arena/Arena.jsx";
import { TTC } from "../components/TakeTheChallenge/TTC";

export const App = () => {
  const { swears, loading } = useContext(SwearContext);

  if (loading) {
    return <div className="bg-black min-h-screen text-white text-center p-20">Loading...</div>;
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <HowItWorks />
                <CTA />
                <section className="p-10">
                  <SwearList swears={swears} />
                </section>
              </>
            }
          />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/duel" element={<Duels />} />
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/TTC" element={<TTC />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};