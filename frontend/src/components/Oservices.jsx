import { useState } from "react";
import { Link } from "react-router-dom";

const Section = ({ title, summary, details, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group bg-white shadow-xl rounded-xl p-6 mb-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-black">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 transition duration-500 group-hover:text-orange-600">
        {title}
      </h2>
      <p className="text-gray-600 transition duration-500 group-hover:text-white">
        {isExpanded ? details : summary}
      </p>
      <div className="mt-4 flex items-center gap-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-orange-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-cyan-500 transition duration-500 hover:scale-110"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
        {link && (
          <Link
            to={link}
            className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-400 transition duration-500 hover:scale-110"
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
};

const Oservice = () => {
  const sections = [
    {
      title: "Human Resources (HR)",
      summary:
        "Internal hiring, admission process, training programs, and recruitment.",
      details: `Comprehensive HR services include:
- Internal hiring and admission processes for both national and international domains.
- Government training programs for skill enhancement.
- Recruitment services tailored for various industries and clients.`,
      link: "/hr",
    },
    {
      title: "Accounting & Finance",
      summary:
        "Audit, GST, income tax, compliance, and financial advisory services.",
      details: `Our accounting services cover:
- Internal and external accounting solutions (e.g., Zoho Books).
- Audit and assurance, GST, income tax filing, and statutory compliance.
- Financial consulting, equity, IPO, and merger/acquisition services.`,
      link: "/ac",
    },
    {
      title: "Education Services",
      summary: "Modern online and offline educational and training solutions.",
      details: `We provide:
- Online and offline school management services.
- University-level course integration and support.
- Specialized training programs for skill development.`,
      link: "/ed",
    },
    {
      title: "E-commerce Solutions",
      summary:
        "Comprehensive account management for Amazon, Flipkart, and more.",
      details: `E-commerce management services include:
- Account setup and management for platforms like Amazon, Flipkart, Myntra, Meesho, and eBay.
- Product catalog management with high-quality images and SEO-optimized descriptions.`,
      link: "/eco",
    },
    {
      title: "Social Media Marketing",
      summary: "Maximize revenue with tailored strategies for social platforms.",
      details: `Expand your social media presence:
- Facebook: Page monetization, ad campaigns, and audience engagement.
- Instagram: Influencer marketing, Reels/Stories creation, and shop integration.`,
      link: "/dd",
    },
    {
      title: "Government Training Programs",
      summary:
        "Specialized skill development and vocational training initiatives.",
      details: `We offer:
- Skill development and vocational training for employability.
- Industry-specific certifications aligned with government initiatives.`,
      link: "/training",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 via-cyan-100 to-blue-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title with Animation */}
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12 animate-fade-in-up">
          Other Services
        </h1>

        {/* Sections with Staggered Animations */}
        {sections.map((section, index) => (
          <div
            key={index}
            className={`animate-slide-in-up delay-${index * 100}`}
          >
            <Section
              title={section.title}
              summary={section.summary}
              details={section.details}
              link={section.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Oservice;
