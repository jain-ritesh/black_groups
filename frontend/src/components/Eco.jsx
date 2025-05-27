import { useState } from "react";


const PlatformCard = ({ platform, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
      <img src={image} alt={platform} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{platform}</h3>
        <p className="text-gray-600">
          {isExpanded
            ? description
            : `${description.slice(0, 100)}...`}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-cyan-500 transition"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

const EcommerceServices = () => {
  const platforms = [
    {
      platform: "Amazon",
      description:
        "We provide end-to-end account management for Amazon sellers, including product listings, keyword optimization, pricing strategies, ad campaigns, and sales performance analysis. Our team ensures seamless operations and growth.",
      image: "https://mms.businesswire.com/media/20180417005209/en/3799/23/logo_white_.jpg",
    },
    {
      platform: "Flipkart",
      description:
        "Our services for Flipkart include account setup, product cataloging, order management, and promotional campaigns. We help you boost visibility and maximize sales.",
      image: "https://images.yourstory.com/cs/wordpress/2017/07/Flipkart.jpg",
    },
    {
      platform: "Myntra",
      description:
        "Specialized in fashion and lifestyle, Myntra services include catalog management, seasonal promotion strategies, and analytics-driven growth planning.",
      image: "https://blog.expertrec.com/wp-content/uploads/2019/06/Myntra-logo.png",
    },
    {
      platform: "Meesho",
      description:
        "Our Meesho support services help you scale as a seller by simplifying onboarding, product uploads, and order processing. Ideal for small businesses.",
      image: "https://images.moneycontrol.com/static-mcnews/2023/06/Meesho-682x435.jpg",
    },
    {
      platform: "eBay",
      description:
        "For global sellers, we provide expertise in eBay account setup, international shipping, and cross-border sales strategies.",
      image: "https://tse2.mm.bing.net/th?id=OIP.xBe3mUXU0MrY4I1LPly-TQHaEE&pid=Api&P=0&h=220",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 via-cyan-100 to-blue-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-orange-600 text-center mb-12">
          E-commerce Services
        </h1>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <PlatformCard
              key={index}
              platform={platform.platform}
              description={platform.description}
              image={platform.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcommerceServices;
