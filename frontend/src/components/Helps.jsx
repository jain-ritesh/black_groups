const Helps = () => {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10 text-gray-800">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">Help & Support</h1>
  
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">What services does Black Grapes Group provide?</h3>
              <p className="text-gray-700">
                We provide services in IT solutions, real estate, investment & securities, insurance surveying, property valuation, and more.
              </p>
            </div>
  
            <div>
              <h3 className="font-semibold text-lg">How can I contact customer support?</h3>
              <p className="text-gray-700">
                You can email us at <a href="mailto:blackgrapesgroups@gmail.com" className="text-blue-600 underline">blackgrapesgroups@gmail.com</a> or use the contact form on our <a href="/contact" className="text-blue-600 underline">Contact Us</a> page.
              </p>
            </div>
  
            <div>
              <h3 className="font-semibold text-lg">Do you offer customized IT solutions?</h3>
              <p className="text-gray-700">
                Yes, our Black Grapes Softech division specializes in tailored digital solutions based on your business needs.
              </p>
            </div>
  
            <div>
              <h3 className="font-semibold text-lg">Where are you located?</h3>
              <p className="text-gray-700">
                Our headquarters are located in Indore, Madhya Pradesh, India. Visit our <a href="/contact" className="text-blue-600 underline">Contact page</a> for full address and directions.
              </p>
            </div>
          </div>
        </section>
  
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><a href="/contact" className="text-blue-600 underline">Send us a message through the contact form</a></li>
            <li><a href="mailto:blackgrapesgroups@gmail.com" className="text-blue-600 underline">Email: blackgrapesgroups@gmail.com</a></li>
            <li><a href="/services" className="text-blue-600 underline">Explore all our services</a></li>
          </ul>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/privacy-policy" className="p-4 bg-blue-200 border rounded-lg hover:bg-gray-300">Privacy Policy</a>
            <a href="/terms-of-use" className="p-4 bg-blue-200 border rounded-lg hover:bg-gray-300">Terms of Use</a>
            <a href="/services" className="p-4 bg-blue-200 border rounded-lg hover:bg-gray-300">Our Services</a>
          </div>
        </section>
      </div>
    );
  };
  
  export default Helps;
  