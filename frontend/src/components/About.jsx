import { Link } from 'react-router-dom';
import ram from '../assets/about-2.jpg';
import { motion } from 'framer-motion';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const About = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-10 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={ram}
            alt="Black Grapes Team"
            className="rounded-xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.h1
            className="text-xl sm:text-2xl font-bold text-orange-600"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>

          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-800"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to Black Grapes Group
          </motion.h2>

          <motion.p
            className="text-gray-600 text-[17px] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            At <span className="font-semibold text-gray-800">Black Grapes Group</span>, we are committed to delivering
            excellence across a diverse portfolio of services including technology, real estate,insurance and loss assessment services, investment, valuation, and insurance. Our brands include:
            <ul className="list-disc pl-6 mt-2">
              <li>Black Grapes Associates</li>
              <li>Black Grapes Softech</li>
              <li>Black Grapes Real Estate</li>
              <li>Black Grapes Investment & Securities</li>
              <li>Black Grapes Valuers & Engineers</li>
              <li>Black Grapes Insurance Surveyors & Loss Assessors</li>
            </ul>
          </motion.p>

          <motion.p
            className="text-gray-600 text-[17px] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            With years of experience and a client-first mindset, we have built a reputation for trust, innovation, and
            customer satisfaction. Whether it’s helping you discover your dream property, delivering cutting-edge tech
            solutions, or providing expert evaluations, we are here to make every interaction seamless and reliable.
          </motion.p>

          <motion.div
            className="bg-gray-100 p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <h3 className="text-lg font-bold text-green-600 mb-2">
              Why Choose Black Grapes Group?
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-[16px]">
              <li><span className="font-semibold">Expertise Across Industries:</span> From real estate to IT and insurance, we offer comprehensive solutions tailored to your needs.</li>
              <li><span className="font-semibold">Client-Centric Approach:</span> Personalized service designed around your goals and growth.</li>
              <li><span className="font-semibold">Reliability & Trust:</span> We operate with transparency, integrity, and professionalism in everything we do.</li>
              <li><span className="font-semibold">Innovation & Excellence:</span> We continuously adopt new technologies and best practices to stay ahead.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/aboutt"
              onClick={scrollToTop}
              className="inline-block mt-4 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-black transition duration-300"
            >
              More Details
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
