




import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navvar from "./components/Navvar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Oservices from "./components/Oservices";
import ClientSlider from "./components/ClintSlider";
import ContactSection from './components/ContactSection';
import Footer from "./components/Footer";
import Applayout from "./components/Applayout";
import Aabout from "./components/Aabout";
import Aso from "./components/Aso"
import Hr from "./components/Hr"
import Ac from "./components/Ac"
import Ed from "./components/Ed"
import Eco from "./components/Eco"
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Helps from "./components/Helps";
import FAQs from "./components/FAQs";
import PhonePay from "./components/PhonePay";
function App() {
  return (
    <>
      <Router>
        <Navvar />
        <div className={location.pathname === "/" ? "" : "pt-20"}>

          <Routes>
            <Route path="/" element={<Applayout />} className={''} />

            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/aboutt" element={<Aabout />} />

            <Route path="/oservices" element={<Oservices />} />
            <Route path="/clients" element={<ClientSlider />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/aso" element={<Aso />} />
            <Route path="/hr" element={<Hr />} />
            <Route path="/ac" element={<Ac />} />
            <Route path="/ed" element={<Ed />} />
            <Route path="/eco" element={<Eco />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/help" element={<Helps />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/phonepe" element={<PhonePay />} />

          </Routes>
        </div>
        <Footer />


      </Router>


      <div className="fixed bottom-4 right-4 p-3">
        <a
          href="https://wa.me/918878416954?text=Hello, how can I help you?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://up.yimg.com/ib/th?id=OIP.TwESrblIhpd2D8XG5VDz5QHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121"
            alt="WhatsApp"
            className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform"
          />
        </a>
      </div>

    </>

  );
}

export default App;

