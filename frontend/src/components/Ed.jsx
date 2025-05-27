import { useState } from "react";


const ServiceCard = ({ title, description, image, additionalDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition transform duration-500 hover:scale-105">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">
          {isExpanded
            ? description
            : `${description.slice(0, 100)}...`}
        </p>

        {isExpanded && (
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            {additionalDetails.map((detail, index) => (
              <li key={index} className="mb-1">{detail}</li>
            ))}
          </ul>
        )}

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

const EducationServices = () => {
  const services = [
    {
      title: "Online and Offline School Services",
      description:
        "We provide complete management services for schools, including digital and traditional models. Our focus is on empowering schools with modern infrastructure, seamless administration, and enhanced student outcomes.",
      image: "https://scholarshipshall.com/wp-content/uploads/2022/11/Online-Classes-vs-Offline-Classes-768x432.jpg",
      additionalDetails: [
        "Curriculum design tailored to educational boards.",
        "Teacher training and professional development.",
        "Student performance tracking and analysis.",
        "Integration of e-learning platforms and tools.",
      ],
    },
    {
      title: "Online and Offline University Services",
      description:
        "Comprehensive services for universities, focusing on modern course design, faculty support, and hybrid learning models. We integrate the best practices for achieving excellence in higher education.",
      image: "https://tse1.mm.bing.net/th?id=OIP.0Zw7uqN1JQzL7Vj3gJuZAgHaD5&pid=Api&P=0&h=220",
      additionalDetails: [
        "Course development aligned with global standards.",
        "Faculty training programs for research and teaching.",
        "Digital platforms for online assessments and lectures.",
        "Collaboration tools for students and faculty.",
      ],
    },
    {
      title: "Online and Offline Training Services",
      description:
        "Customized training programs for individuals and organizations. We offer both online and offline solutions, focusing on skill enhancement, vocational training, and corporate learning.",
      image: "https://static.vecteezy.com/system/resources/previews/009/669/230/non_2x/online-and-offline-training-people-flat-illustration-concept-vector.jpg",
      additionalDetails: [
        "Technical and vocational training programs.",
        "Corporate learning solutions for employee growth.",
        "Workshops for soft skills and communication.",
        "Customized programs for industry-specific needs.",
      ],
    },
    {
      title: "Modern Learning Solutions",
      description:
        "Our modern learning services leverage technology to transform education, ensuring accessibility and quality for all learners. We empower institutions with the latest tools and techniques.",
      image: "https://tse3.mm.bing.net/th?id=OIP.WLLU974znh6udzG6AZLRPAHaE8&pid=Api&P=0&h=220",
      additionalDetails: [
        "Learning Management Systems (LMS) integration.",
        "AI-based learning analytics for personalized education.",
        "Virtual and augmented reality (VR/AR) tools.",
        "Gamified learning solutions for engagement.",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 via-cyan-100 to-blue-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-orange-600 text-center mb-12">
          Education Services
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              additionalDetails={service.additionalDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationServices;
