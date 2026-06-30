import { useEffect, useState } from "react";
import { getSwears } from "../services/api";
import { Header } from '../components/Header/Header.jsx';
import { Hero } from '../components/Hero/Hero.jsx';
import { Features } from "../components/Features/Features.jsx";
import { HowItWorks } from "../components/HowItWorks.jsx"
import { CTA } from "../components/CallToAction/CTA.jsx";
import { Footer } from '../components/Footer/Footer.jsx';
import { SwearList } from '../components/SwearList/swearList.jsx';

export const App = () => {
  const [swears, setSwears] = useState([]);
  const [loading, setLoading] = useState(true);
  const addSwear = async (newGoal) => {
    const response = await fetch ('https://technigo-project-final-2bxx.onrender.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGoal)
    });
    }

  useEffect(() => {
    getSwears()
      .then(data => {
        setSwears(data)
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <div>Loading...</div>

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
        <section className="p-10">
          <SwearList swears={swears} />
        </section>
      </main>

      <Footer />
    </div>
  )
}
