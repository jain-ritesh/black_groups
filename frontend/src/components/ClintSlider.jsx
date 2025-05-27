import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import client1 from '../assets/client1.jpg'
import client2 from '../assets/client2.jpg'
import client3 from '../assets/client3.jpg'
import client4 from '../assets/client4.jpg'
import client5 from '../assets/client5.jpg'
import client6 from '../assets/client6.jpg'
import client7 from '../assets/client7.jpg'
import client8 from '../assets/client8.jpg'
import client9 from '../assets/client9.jpg'
import armay from '../assets/armay1.jpg'
import women from '../assets/women1.jpg'
import women2 from '../assets/women2.jpg'

const testimonials = [
    {
      "name": "Rikin Patel",
      "profession": "Entrepreneur, Ahmedabad",
      "image": "https://randomuser.me/api/portraits/men/65.jpg",
      "feedback": "Black Grapes Softech provided utmost support and timely updates throughout our web development process. Highly reliable."
    },
    {
      "name": "Mr. Jeevan Ram",
      "profession": "Investor, Jodhpur",
      "image": "https://randomuser.me/api/portraits/men/35.jpg",
      "feedback": "Everything by Black Grapes Real Estate is perfect and well-maintained. The ROI has been encouraging—eight of my friends have booked here."
    },
    {
      "name": "Brigadier H P S Bedi, VSM",
      "profession": "Indian Army Veteran",
      "image": `${armay}`,
      "feedback": "As an Army man, I trust Black Grapes Investment & Securities with my financial safety. They’ve never let me down."
    },
    {
      "name": "Shivani Singh",
      "profession": "Homebuyer, Gurgaon",
      "image": "https://randomuser.me/api/portraits/women/50.jpg",
      "feedback": "Truly exceptional service by Black Grapes Softech! They ensured everything was smooth and transparent during the development journey."
    },
    {
      "name": "Rajeev Jain",
      "profession": "Managing Director, Bajaj Finance",
      "image": `${client4}`,
      "feedback": "The Black Grapes Insurance Surveyors team did an impressive job with our QIP of ₹1,400 crore. Their effort is highly commendable."
    },
    {
      "name": "Devadas Prayaga",
      "profession": "Investor, India",
      "image": `${client5}`,
      "feedback": "I've been with Black Grapes Investment & Securities for 7 years. The service quality is top-notch and returns are impressive."
    },
    {
      "name": "Mr. Vikram Swaminath",
      "profession": "Investor, Bangalore",
      "image": `${client9}`,
      "feedback": "My investment was safe and secure with Black Grapes Valuers & Engineers. Everything was delivered hassle-free."
    },
    {
      "name": "Ravi Kumar",
      "profession": "Villa Owner, Chennai",
      "image": `${client2}`,
      "feedback": "Black Grapes Real Estate were honest and transparent throughout the buying process. I never felt pressured and ended up with the perfect villa."
    },
    {
      "name": "Sunil Kakar",
      "profession": "Group CFO, IDFC Ltd.",
      "image": `${client1}`,
      "feedback": "Black Grapes Insurance Surveyors showed true commitment and advised us timely throughout a crucial QIP transaction."
    },
    {
      "name": "Amit Kukreja",
      "profession": "Financial Planner, Delhi NCR",
      "image": "https://randomuser.me/api/portraits/men/95.jpg",
      "feedback": "Black Grapes Valuers & Engineers ensured smooth property evaluation, deposits, tax compliance, and overall support."
    },
    {
      "name": "Dr. Amit Mehtani",
      "profession": "CMO (Ophthalmologist), D.D.U Hospital",
      "image": `${client7}`,
      "feedback": "Black Grapes Investment & Securities team is respectful and responsive. Their advice has made my investment experience amazing."
    },
    {
      "name": "Susheela P",
      "profession": "Director, Vishwa Vidyapeeth Schools, Bangalore",
      "image": `${women}`,
      "feedback": "The flat by Black Grapes Real Estate is vaastu compliant, spacious, and well-built. The team was prompt in addressing our needs."
    }
    , {
      "name": "Gopal Datt Rikhari",
      "profession": "Assistant Commandant, ITBP",
      "image": `${client3}`,
      "feedback": "Black Grapes Investment & Securities has given me confidence over time with their reliable investment guidance. Highly trustworthy."
    },
    {
      "name": "Mr. Ganesan Arumugam",
      "profession": "Investor, Bangalore",
      "image": "https://randomuser.me/api/portraits/men/87.jpg",
      "feedback": "Black Grapes Valuers & Engineers understood my needs well and ensured smooth and efficient handling of my property transaction."
    },
    {
      "name": "Kedar Vaze",
      "profession": "Promoter & CEO, S H Kelkar",
      "image": `${client6}`,
      "feedback": "I'm highly satisfied with Black Grapes Insurance Surveyors & Loss Assessors. Their professionalism stood out throughout the process."
    },
    {
      "name": "Ramesh Pillai",
      "profession": "Startup Founder, Pune",
      "image": "https://randomuser.me/api/portraits/men/34.jpg",
      "feedback": "Black Grapes Softech delivered our startup’s website with precision. The UI/UX was spot on and their backend team was responsive."
    }
];


// Custom arrows
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 cursor-pointer bg-teal-500 text-white p-2 rounded-full shadow-lg hover:bg-teal-600"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer bg-teal-500 text-white p-2 rounded-full shadow-lg hover:bg-teal-600"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);
const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // For screens smaller than 1024px
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768, // For screens smaller than 768px
      settings: { slidesToShow: 1, dots: false }, // Hide dots on mobile
    },
  ],
};

const ClientSlider = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 sm:px-12 md:px-16 lg:px-24 relative">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
          What Our Clients Say
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
          Hear from our satisfied customers who trusted us to build their dream
          applications and websites.
        </p>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="px-2 sm:px-3"
          >
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 h-full flex flex-col items-center justify-between transition-transform duration-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-teal-500 mb-4 object-cover shadow-md"
              />
              <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h4>
              <p className="text-xs sm:text-sm text-teal-600 font-medium mb-3">
                {testimonial.profession}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center">
                "{testimonial.feedback}"
              </p>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};
export default ClientSlider;