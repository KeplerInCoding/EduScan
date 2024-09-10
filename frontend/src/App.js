import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import Footer from "./components/Footer.js";
import ContactUs from "./pages/ContactUs.js";
import About from "./pages/About.js";
import GettingStarted from "./pages/GettingStarted.js";
import HowToUse from "./pages/HowToUse.js";
import Team from "./pages/Team.js";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div class="main h-full overflow-x-hidden w-full bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 justify-center gap-4 flex-col min-h-screen">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
