const Aabout = () => {
  return (
    <div className="bg-white text-gray-800 scroll-smooth">
      {/* About Us Section */}
      <div id="about" className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-16 scroll-mt-20">
        <h1 className="text-4xl font-bold text-center mb-10 text-teal-600">About Us</h1>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <img
              src="https://blackgrapessoftech.com/wp-content/uploads/2023/11/about-3.png"
              alt="Office Environment"
              className="rounded-xl shadow-xl w-full"
            />
          </div>
          <div>
            <div className="mb-10">
              <h2 id="vision" className="text-2xl font-semibold mb-3 text-orange-600">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be a leading diversified group recognized for excellence, innovation, and trust across real estate, technology, investments, insurance, and engineering—empowering individuals and businesses to thrive through tailored, high-quality solutions.
              </p>
            </div>
            <div>
              <h2 id="mission" className="text-2xl font-semibold mb-3 text-orange-600">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission at Black Grapes Group is to deliver integrated, transparent, and professional services across our six verticals—Associates, Softech, Real Estate, Investment & Securities, Valuers & Engineers, and Insurance Surveyors. We are committed to excellence and innovation in every step we take.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div id="who" className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24 scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
          Black Grapes Group is a multifaceted organization driven by innovation, integrity, and trust. With a strong footprint across multiple industries, we aim to deliver solutions that go beyond expectations. Whether it’s building intuitive digital systems, real estate solutions, insurance and loss assessment services, or smart investment services—our verticals are designed to support the modern needs of individuals, businesses, and communities alike.
          </p>
        </div>
      </div>

      {/* Meet the Founders Section */}
      <div id="founders" className="py-16 px-6 sm:px-12 lg:px-24 bg-white scroll-mt-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Founders Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://blackgrapessoftech.com/wp-content/uploads/2023/12/the-founders.jpeg"
              alt="Founders"
              className="rounded-xl shadow-lg w-[350px] object-cover"
            />
          </div>

          {/* Founder Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-teal-600">Meet the Founders</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At the heart of Black Grapes Group are visionaries who lead with clarity and compassion. Their mission is to drive sustainable success and create a legacy of innovation, professionalism, and community impact.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Mr. Arpit Jain – Founder & Group CEO</h3>
              <p className="text-gray-600 mt-2">
                An innovator with entrepreneurial spirit, Mr. Jain brings together deep industry insight and a relentless drive to elevate standards across all our service verticals. His leadership fuels continuous growth and client success across Black Grapes Group.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Mrs. Deepika Jain – Co-Founder & Creative Head</h3>
              <p className="text-gray-600 mt-2">
                A creative visionary with strong leadership values, Mrs. Jain infuses originality and strategic thinking into the organization’s culture. Her focus on innovation and design thinking has positioned Black Grapes Group as a people-first enterprise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aabout;
