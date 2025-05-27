
const HRPage = () => {
  const sections = [
    {
      title: "Internal Hiring",
      description:
        "Optimize your workforce by identifying and promoting internal talent. Our tools simplify the process to match employees with suitable roles.",
      image: "https://images.squarespace-cdn.com/content/v1/5ed54b8712824d33607048a7/1633557296314-M49ALZKBEFHG6A6WXWXI/Internal-hiring-tips-4-Lynne-Palmer.jpg", // Replace with actual image URL
    },
    {
      title: "Admission Process",
      description:
        "We assist in managing smooth and efficient admission processes for both national and international candidates.",
      image: "https://i.ytimg.com/vi/MCK4WuZmKvs/maxresdefault.jpg", // Replace with actual image URL
    },
    {
      title: "Government Training Programs",
      description:
        "Empowering individuals through government-certified training programs, designed to enhance skills and open new opportunities.",
      image: "https://i.ytimg.com/vi/JdtQAMij5us/maxresdefault.jpg", // Replace with actual image URL
    },
    {
      title: "Recruitment for Clients",
      description:
        "We help organizations find top-tier talent by understanding their unique requirements and delivering tailored recruitment solutions.",
      image: "https://www.4cornerresources.com/wp-content/uploads/2023/04/Hiring-and-selection-scaled.jpeg", // Replace with actual image URL
    },
    {
      title: "Employee Engagement Programs",
      description:
        "Boost productivity and morale with our expert-designed employee engagement programs tailored to meet your company’s culture.",
      image: "https://mantra.care/wp-content/uploads/2023/04/wjat-is-Employee-Engagement-Program_11zon-1-1024x640.jpg", // Replace with actual image URL
    },
    {
      title: "HR Analytics and Insights",
      description:
        "Leverage data-driven insights for better workforce management and strategic decision-making.",
      image: "https://blog.vantagecircle.com/content/images/2023/07/Process-of-HR-analytics---1---2.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-orange-600">HR Solutions</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Empowering businesses with innovative HR solutions. From hiring to training, we ensure a seamless experience for all your HR needs.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-orange-600">
                  {section.title}
                </h2>
                <p className="text-gray-600 mt-4">{section.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Us Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-700 to-blue-500 text-white py-12 px-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-6">
            Let’s Work Together!
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-8">
            Contact us to learn more about how our HR solutions can benefit your organization. We are here to help!
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:blackgrapesgroups@gmail.com"
              className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRPage;
