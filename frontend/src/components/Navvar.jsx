import { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import group from "../assets/WhatsApp Image 2025-01-02 at 18.39.03_ec76f169.jpg";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For mobile dropdown

  const handleToggle = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const navItems = [
    // { label: "Home", path: "/" },
    { label: "Other Services", path: "/oservices" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  const serviceLinks = [
    {
      label: "Black Grapes Associates",
      path: "http://www.blackgrapesassociates.com",
    },
    {
      label: "Black Grapes Softech",
      path: "https://blackgrapessoftech.com/",
    },
    {
      label: "Black Grapes Real Estate",
      path: "https://blackgrapesrealestate.com/",
    },
    {
      label: "Black Grapes Investment & Securities",
      path: "https://blackgrapesinvestments.com/",
    },
    {
      label: "Black Grapes Valuers & Engineers",
      path: "https://www.blackgrapesvaluers.com/",
    },
    {
      label: "Black Grapes Insurance Surveyors & Loss Assessors",
      path: "/aso",
    },
  ];

  return (
    <nav className="bg-black text-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src={group}
              alt="Logo"
              className="w-14 h-14 object-cover rounded-full"
            />
            <h1 className="text-orange-500 text-2xl font-semibold">
              BLACK <span className="text-green-500">GRAPES</span> GROUP
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-cyan-200 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 hover:bg-gray-800"
            >
              Home
            </Link>

            {/* Services Dropdown (Desktop) */}
            <div className="relative group pt-2">
              <Link
                to="/services"
                className="text-cyan-200 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 hover:bg-gray-800"
              >
                Services
              </Link>
              <div className="absolute top-full mt-0 bg-gray-800 rounded-md shadow-lg hidden group-hover:block transition-transform transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 z-10 w-64">
                {serviceLinks.map((service, idx) => (
                  <a
                    key={idx}
                    href={service.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-2 py-2 hover:bg-green-500 transition duration-300"
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            </div>

            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="text-cyan-200 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 hover:bg-gray-800"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className="text-white text-3xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <IoMdClose /> : <CiMenuBurger />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Services Dropdown */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-800 p-4 rounded-b-lg`}
      >
        <Link
          to="/"
          className="block text-red-500 hover:text-white mb-2 text-lg font-medium"
          onClick={handleToggle}
        >
          Home
        </Link>

        {/* Mobile Services Dropdown Toggle */}
        <button
          className="w-full text-left text-red-500 hover:text-white mb-2 text-lg font-medium"
          onClick={() => setIsServicesOpen(!isServicesOpen)}
        >
          Services {isServicesOpen ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
        </button>
        {isServicesOpen && (
          <div className="ml-4">
            {serviceLinks.map((service, idx) => (
              <a
                key={idx}
                href={service.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cyan-200 hover:text-white mb-2 text-base"
                onClick={handleToggle}
              >
                {service.label}
              </a>
            ))}
          </div>
        )}

        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="block text-red-500 hover:text-white mb-2 text-lg font-medium"
            onClick={handleToggle}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
