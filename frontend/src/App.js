import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import Footer from "./components/Footer.js";
import Dashboard from "./pages/Dashboard.js";
import ContactUs from "./pages/ContactUs.js";
import AboutUs from "./pages/AboutUs.js";
import GetStarted from "./pages/GetStarted.js";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div class="main h-full overflow-x-hidden w-full bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 justify-center gap-4 flex-col min-h-screen">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/getstarted" element={<GetStarted/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
