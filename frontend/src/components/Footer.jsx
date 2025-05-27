import { FaFacebook, FaTwitter, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import companyLogo from '../assets/WhatsApp Image 2025-01-02 at 18.39.03_ec76f169.jpg';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 px-5 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-3">
            <img src={companyLogo} alt="Company Logo" className="w-16 h-16 mr-2 rounded-full" />
            <h2 className="text-2xl font-semibold text-orange-500">
              BLACK <span className="text-green-500 ml-1">GRAPES</span> GROUP
            </h2>
          </div>
          <p className="mt-3 text-sm">
            With years of expertise and a client-first approach, Black Grapes has become a trusted name in various industries.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-5 mt-5 text-2xl">
            <a href="https://www.facebook.com/blackgrapessoftech.fb" className="text-blue-500 hover:scale-110 transition">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/grapessoftech" className="text-blue-300 hover:scale-110 transition">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/blackgrapessoftech/" className="text-pink-500 hover:scale-110 transition">
              <FaInstagramSquare />
            </a>
            <a href="https://www.linkedin.com/in/black-grapes-softech/" className="text-blue-700 hover:scale-110 transition">
              <CiLinkedin />
            </a>
            <a href="https://www.youtube.com/channel/UC3gJA06Uxb0D82-PVJl0SbQ" className="text-red-600 hover:scale-110 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Short Links */}
        <div>
          <h3 className="text-2xl font-bold mb-3 text-teal-400">Short Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-teal-400" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400" onClick={scrollToTop}>Contact Us</Link></li>
            <li><Link to="/services" className="hover:text-teal-400" onClick={scrollToTop}>Our Services</Link></li>
            <li><Link to="/phonepe" className="hover:text-teal-400" onClick={scrollToTop}>Online Payment</Link></li>
            {/* <li><a href="#" className="hover:text-teal-400">Our Projects</a></li>
            <li><a href="#" className="hover:text-teal-400">Latest Blog</a></li> */}
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-2xl font-bold mb-3 text-teal-400">Help Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="terms-of-use" className="hover:text-teal-400" onClick={scrollToTop} >Terms of Use</Link></li>
            <li><Link to="privacy-policy" className="hover:text-teal-400" onClick={scrollToTop} >Privacy Policy</Link></li>
            <li><Link to="help" className="hover:text-teal-400" onClick={scrollToTop} >Helps</Link></li>
            <li><Link to="faqs" className="hover:text-teal-400" onClick={scrollToTop} >FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400" onClick={scrollToTop}>Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-3 text-teal-400">Contact Us</h3>
          <div className="space-y-2 text-sm">
            <div>
              <p>Phone (Arpit Jain):</p>
              <div className="flex flex-col text-teal-400">
                <a href="tel:+917470997884">+91 7470997884</a>
                <a href="tel:+916262414463">+91 6262414463</a>
                <a href="tel:+919039397884">+91 9039397884</a>
              </div>
            </div>
            <div>
              <p>Email:</p>
              <div className="flex flex-col text-teal-400">
                <a href="mailto:blackgrapesgroups@gmail.com">blackgrapesgroups@gmail.com</a>
                <a href="mailto:blackgrapes.arpitjain@gmail.com">blackgrapes.arpitjain@gmail.com</a>
                <a href="mailto:blackgrapes.deepikajain@gmail.com">blackgrapes.deepikajain@gmail.com</a>
              </div>
            </div>
            <div>
              <p>Address 1:</p>
              <a href="https://www.google.com/maps?q=252-F/H,+Scheme+No+54,+Vijay+Nagar,+Indore,+Madhya+Pradesh+452010,+India" className="text-teal-400" target="_blank" rel="noopener noreferrer">
                252-F/H, Scheme No 54, Vijay Nagar, Indore, MP 452010
              </a>
            </div>
            <div>
              <p>Address 2:</p>
              <a href="https://www.google.com/maps?q=Office+Number+1141,+in+front+of+Union+Bank,+Vijay+Nagar,+Part+I,+Scheme+No+114,+Indore,+MP+452010" className="text-teal-400" target="_blank" rel="noopener noreferrer">
                Office 1141, in front of Union Bank, Scheme No 114, Indore, MP 452010
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="mt-10 flex flex-col items-center">
        <p className="text-sm mb-2">We accept</p>
        <div className="flex gap-4">
          <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-8" />
          <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="Mastercard" className="h-8" />
          <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" className="h-8" />
          <img src="https://img.icons8.com/color/48/google-pay-india.png" alt="GPay" className="h-8" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center pb-8">
        <p className="text-sm">
          © Black Grapes Group, All rights reserved.
          <br />
          Designed by <a href="#" className="text-teal-400">Black Grapes Softech</a> — Distributed by <a href="#" className="text-teal-400">ARPIT JAIN</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
