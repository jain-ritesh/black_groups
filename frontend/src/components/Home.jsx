import { useState } from "react";
import img1 from "../assets/carousel-1.jpg";
import img2 from "../assets/carousel-2.jpg";
import img3 from '../assets/tech.jpg';
import img4 from '../assets/tread.jpg';
import img5 from '../assets/estate.jpg';
import img6 from '../assets/busn.jpg';
import img7 from '../assets/values.jpg';

const images = [ 
  {
    src: img3,
    text: "Empowering Innovation Through Technology",
    desc: "We craft scalable software solutions, intuitive websites, and digital systems that drive business transformation.",
  },
  {
    src: img4,
    text: "Smarter Investing for a Brighter Future",
    desc: "Tailored financial strategies and secure investment planning to help you grow and protect your wealth.",
  },
  {
    src: img5,
    text: "Your Trusted Real Estate Partner",
    desc: "Offering property solutions from buying to investment — with expertise that maximizes every opportunity.",
  },
  {
    src: img1,
    text: "Precision in Insurance Survey & Loss Assessment",
    desc: "Delivering reliable, detailed claim evaluations with full compliance and technical accuracy.",
  },
  // value
  {
    src: img7,
    text: "Expert Valuation & Engineering Insights",
    desc: "Certified valuation services and technical assessments that support accurate decision-making in real estate, infrastructure, and machinery.",
  }
,  
  {
    src: img2,
    text: "Insight-Driven Risk & Compliance Solutions",
    desc: "Proactive risk assessments and strategic compliance support to safeguard your operations.",
  },
  {
    src: img6,
    text: "Comprehensive Business Solutions Under One Roof",
    desc: "Integrated expertise in tech, real estate, finance, and consulting — tailored for your growth.",
  },
];



const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handleNext = () => { 
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsSliding(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsSliding(false);
    }, 500);
  };

  return (
    // <div className="relative w-full md:h-screen sm:h-48 overflow-hidden bg-gray-900">
    <div className="relative w-full md:h-screen sm:h-48 overflow-hidden bg-gray-900 pt-20">

      {/* Image Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full"
          >
            {/* Background Image */}
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute bottom-20 inset-0 lg:h-[100%] flex flex-col justify-center items-center text-center bg-black bg-opacity-30">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg animate-fade">
                {image.text}
              </h2>
              <p className="text-sm md:text-lg lg:text-2xl text-gray-300 max-w-2xl">
                {image.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2  md:bg-gray-500 text-white p-3  rounded-full shadow-md transition duration-300 md:hover:bg-cyan-200 md:left-3"
      >
        &#9664;
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2  md:bg-gray-500 text-white p-3 rounded-full shadow-md transition duration-300 md:hover:bg-cyan-200 md:right-3"
      >
        &#9654;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 text-1xl left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 xm:w-1 xm:h-1 h-4 rounded-full cursor-pointer ${
              currentIndex === index
                ? "bg-blue-500 scale-125"
                : "bg-gray-400"
            } transition transform duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;







































