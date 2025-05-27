
import { Link } from "react-router-dom";


const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
  };

const cardData = [
  {
    id: 1,
    title: "Black Grapes Associates",
    description:
      " Associate is a leading firm dedicated to providing innovative and customized solutions",
    image:
      "https://blackgrapesassociates.com/wp-content/webp-express/webp-images/uploads/2022/12/2Black-Grapes-Associates.png.webp",
    url: "http://www.blackgrapesassociates.com",
  },
  {
    id: 2,
    title: "Black Grapes Softech",
    description:
      "Softech is a dynamic IT solutions company dedicated to transforming businesses",
    image:
      "https://blackgrapessoftech.com/wp-content/uploads/2023/12/bgst-logo.png",
    url: "https://blackgrapessoftech.com/",
  },
  {
    id: 3,
    title: "Black Grapes Real Estate",
    description: "Black Grapes Real Estate is a trusted name in the real estate industry, dedicated to providing exceptional property",
    image:
      "https://blackgrapesrealestate.com/storage/photo-2024-06-29-03-24-08-1.jpg",
    url: "https://blackgrapesrealestate.com/",
  },
  {
    id: 4,
    title:
      "Black Grapes Investment & Securities",
    description: "Black Grapes Investment Pvt. Ltd. is a trusted and reliable financial services company specializing in investment managemen.",
    image:
      "https://blackgrapesinvestments.com/static/media/logo-invest.edaad81845c941fb8f3d.jpeg",
    url: "https://blackgrapesinvestments.com/",
  },
  {
    id: 5,
    title: "Black Grapes Valuers & Engineers",
    description:
      "Black Grapes Valuers and Engineers is a reputed firm specializing in property valuation, structural engineering, and technical consultancy",
    image:
      "https://www.blackgrapesvaluers.com/wp-content/uploads/2023/12/LOGO.webp",
    url: "https://www.blackgrapesvaluers.com/",
  },
  
  {
    id: 6,
    title:
    "Black Grapes Insurance Surveyors & Loss Assessors",
    description: "This is a trusted name in the insurance industry, specializing in providing accurate, unbiased, and professional survey and loss assessment services.",
    image: "https://blackgrapesinvestments.com/static/media/logo-invest.edaad81845c941fb8f3d.jpeg",
    Link: "/aso",
  }
];

const Services = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 ">
      {/* Section Title */}
      <div className="py-16 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Services Built Specifically
          <span className="block text-orange-500">For Your Business</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Empowering businesses with tailored solutions to meet your unique
          needs.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 px-4 pb-16 ">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="max-w-sm w-full bg-white shadow-lg rounded-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl "
          >
            {/* Card Image */}
            <div className="bg-black p-4">
              <img
                src={card.image}
                alt={card.title}
                className="w-24 h-24 object-cover mx-auto rounded-full shadow-md"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {card.description}
              </p>
              {/* Conditional Link Rendering */}
              {card.url ? (
                // External link
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-6 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full hover:bg-orange-600 transition">
                    Read More
                  </button>
                </a>
              ) : (
                // Internal Link
                <Link to={card.Link || "#"}>
                  <button className="px-6 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full hover:bg-orange-600 transition" onClick={scrollToTop}>
                    Read More
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
