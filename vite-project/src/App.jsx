import "./App.css";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import MemeCoin from "./components/MemeCoin/MemeCoin";
import { Navbar } from "./components/Navbar/Navbar";
import Roadmap from "./components/Roadmap/Roadmap";
import Tokenomics31 from "./components/Tokenomic/Tokenomics";
import { createRoot } from "react-dom/client";

import WelcomeCard from "./components/WelcomeCard/WelcomeCard";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="m-auto pt-4 w-fit sticky -top-4 z-40">
        <Navbar />
      </div>
      <div className="m-auto w-[50%] pt-4">
        <WelcomeCard />
      </div>
      <div className="w-[70%] m-auto mt-60">
        <MemeCoin />
      </div>
      <div id="roadmap" className="mt-4 pt-36 m-auto w-[60%]">
        <Roadmap />
      </div>

      <div id="HowToBuy" className="w-[60%] pt-36">
        <HowToBuy />
      </div>

      <div id="Tokenomics" className="w-full mt-4 m-auto pt-48">
        <Tokenomics31 />
      </div>

      <div id="gallery" className="mt-12 pt-36 m-auto w-[60%]">
        <Gallery />
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App;
