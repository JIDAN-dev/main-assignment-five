import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  return (
    <>
      <Navbar />

      <Hero />


      <main className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">

          <TechnologySection
            stack={stack}
            setStack={setStack}
          />

          <YourStack
            stack={stack}
            setStack={setStack}
          />

        </div>

      </main> 
      
      < Footer/>

        <ToastContainer
      position="top-right"
      autoClose={2000}
    />
    </>
  );
}

export default App;