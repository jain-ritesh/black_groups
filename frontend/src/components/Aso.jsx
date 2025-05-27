import React, { useState } from "react";

const services = [
  {
    title: "Survey and Loss Assessment",
    description:
      "We provide detailed inspections and unbiased loss assessments across motor, fire, marine, and miscellaneous insurance domains—ensuring transparency and fair claim settlements.",
    more: "Our licensed surveyors follow IRDAI norms and deliver comprehensive reports that hold up in both technical and legal assessments. We also provide real-time updates during the assessment process.",
  },
  {
    title: "Motor and Non-Motor Valuation",
    description:
      "From cars to commercial equipment, our certified valuations deliver accurate market-aligned reports to help insurers and clients ensure correct coverage and claims.",
    more: "Our experts perform site visits, image-based inspections, and market research to provide realistic, unbiased valuations that prevent disputes and speed up claim settlement.",
  },
  {
    title: "Catastrophe Management",
    description:
      "Rapid-response loss assessment in the aftermath of natural disasters. Our team ensures mass claims are managed efficiently, empathetically, and with precision.",
    more: "We deploy field-ready mobile units and specialized teams trained to operate under crisis situations like floods, cyclones, or earthquakes, ensuring timely documentation and coordination.",
  },
  {
    title: "Desktop Claims Management",
    description:
      "We handle minor claims remotely using digital tools, reducing turnaround time and enabling faster resolution without compromising on quality or accuracy.",
    more: "Using photos, video evidence, and digital signatures, we complete evaluations remotely and issue verified assessment reports that are cost-efficient and time-saving.",
  },
  {
    title: "Risk Inspections",
    description:
      "Our inspections identify potential hazards in commercial, industrial, and residential environments to help underwriters assess risk and reduce future losses.",
    more: "We analyze safety protocols, structural conditions, environmental risks, and compliance gaps to offer risk mitigation strategies alongside detailed inspection reports.",
  },
  {
    title: "Pre-Inspections",
    description:
      "Before issuing or renewing policies, we provide thorough pre-inspections to document asset conditions and eliminate ambiguity in future claims.",
    more: "Our reports include visual documentation, usage condition analysis, and expert notes to support policy underwriting and customer confidence.",
  },
  {
    title: "ODC Supervision",
    description:
      "We monitor over-dimensional consignments (ODC) to ensure secure, compliant transportation with documentation and safety protocols fully in place.",
    more: "Our supervision includes route planning, escort services, compliance checks, and damage monitoring — critical for high-value or complex logistic operations.",
  },
  {
    title: "Policy Audits",
    description:
      "Comprehensive audits of existing policies to identify risks, rectify inaccuracies, and ensure stronger underwriting and fraud prevention.",
    more: "We evaluate claim trends, asset valuations, and coverage terms to highlight gaps or redundancies, making policies more efficient and fraud-resistant.",
  },
];

const InsuranceServices = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleMore = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-gray-50 text-gray-800 pt-20 pb-16 px-6 md:px-20">
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Insurance Surveyors & Loss Assessors
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Trusted insurance assessment services tailored to ensure fairness,
          compliance, and speed — supporting both insurers and policyholders.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-blue-600 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>

            {/* Learn More Button */}
            <button
              onClick={() => toggleMore(index)}
              className="mt-4 text-blue-600 font-semibold hover:underline focus:outline-none"
            >
              {expandedIndex === index ? "Show Less" : "Learn More"}
            </button>

            {/* Extended Content */}
            {expandedIndex === index && (
              <div className="mt-3 text-gray-500 text-sm transition-all duration-300">
                {service.more}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Ready to Partner With Us?
        </h2>
        <p className="text-gray-600 mb-4">
          Contact our expert team for reliable, professional assessment services.
        </p>
        <a
          href="mailto:blackgrapesgroups@gmail.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default InsuranceServices;
