import { useState } from "react";

const ServiceCard = ({ title, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-2xl transition transform duration-500 hover:scale-105">
      <h3 className="text-xl font-bold text-gray-800 mb-4 hover:text-orange-600 transition">
        {title}
      </h3>
      <p className="text-gray-600">
        {isExpanded ? details : `${details.slice(0, 100)}...`}
      </p>
      <div className="mt-4 flex items-center gap-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-cyan-500 transition"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

const AccountingServices = () => {
  const services = [
    {
      title: "Internal Accounting (Zoho Books)",
      details:
        "Streamline your business finances with Zoho Books, offering robust solutions for internal accounting and bookkeeping.",
    },
    {
      title: "Audit & Assurance",
      details:
        "Comprehensive auditing and assurance services to ensure transparency, compliance, and accuracy in financial reporting.",
    },
    {
      title: "GST, Income Tax, Statutory Compliances",
      details:
        "Expert services for GST filing, income tax compliance, and adherence to statutory regulations.",
    },
    {
      title: "Consulting CFO & Startup Mentoring",
      details:
        "Guidance for startups with financial strategies and CFO-level consulting for sustainable growth.",
    },
    {
      title: "Accounts Outsourcing",
      details:
        "Efficient outsourcing solutions for all accounting needs, from bookkeeping to financial management.",
    },
    {
      title: "Tech-Based Outsourcing",
      details:
        "Leverage technology for optimized accounting processes, including cloud-based and AI-driven solutions.",
    },
    {
      title: "IPO & Capital Market Advisory",
      details:
        "Expert advisory services for IPO preparation and navigating the capital market with confidence.",
    },
    {
      title: "Debt Syndication",
      details:
        "Structured solutions for debt syndication, catering to diverse business requirements.",
    },
    {
      title: "Equity and Structured Financing",
      details:
        "Innovative financing solutions through equity and new-age financial products.",
    },
    {
      title: "GIFT City Offerings",
      details:
        "Specialized services aligned with GIFT City regulations and opportunities.",
    },
    {
      title: "Merger & Acquisition",
      details:
        "Strategic support for mergers, acquisitions, and integration processes.",
    },
    {
      title: "Due Diligence",
      details:
        "In-depth due diligence services to identify risks and opportunities in transactions.",
    },
    {
      title: "Business Valuation",
      details:
        "Precise valuation services to determine the true worth of your business.",
    },
    {
      title: "Forensic Audit",
      details:
        "Detect and prevent fraud with our detailed forensic auditing solutions.",
    },
    {
      title: "ROC Compliances",
      details:
        "Complete assistance with Registrar of Company (ROC) compliances, formation, filing, and statutory upkeep.",
    },
    {
      title: "System & Process Review",
      details:
        "Review and enhancement of business systems, processes, and procedures for optimization.",
    },
    {
      title: "Risk Management",
      details:
        "Comprehensive risk management solutions to optimize and safeguard business operations.",
    },
    {
      title: "Trade Financing",
      details:
        "Support for export-import synergies with efficient trade financing solutions.",
    },
    {
      title: "Human Resource Management",
      details:
        "Professional HR management services, including recruitment and manpower outsourcing.",
    },
    {
      title: "Cost Reduction Strategies",
      details:
        "Strategic cost control and reduction methods to enhance profitability.",
    },
    {
      title: "HNI & Ultra HNI Offerings",
      details:
        "Specialized financial offerings for HNI clients through AIF and fractional ownership opportunities.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 via-cyan-100 to-blue-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-orange-600 text-center mb-12">
          Accounting Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              details={service.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountingServices;
