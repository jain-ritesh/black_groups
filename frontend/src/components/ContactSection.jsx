import { useState } from "react";
import * as emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ContactSection = () => {
  const [Name, setname] = useState("");
  const [Email, setmail] = useState("");
  const [Message, setmessage] = useState("");
  const [Project, setProject] = useState("");

  function Sendmail() {
    const Data = {
      to_name: "Arpit Jain",
      from_name: Name,
      from_email: Email,
      to_mail: "blackgrapesgroups@gmail.com", 
      project: Project,
      message: Message,
    };

    const Service_id = "service_jyirh0o";
    const Template_id = "template_wr3k85w";
    const User_id = "6LV_eXUDAXf2xEFCq";

    emailjs.send(Service_id, Template_id, Data, User_id).then(
      () => {
        toast.success("Message sent successfully!");
        setname("");
        setmail("");
        setmessage("");
        setProject("");
      },
      (error) => {
        toast.error("Failed to send the message.");
        console.error(error);
      }
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-100 via-green-100 to-indigo-100 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">
          Get in Touch
        </h2>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Address */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700 text-center mb-4">Address</h3>
            <div className="space-y-2 text-center text-gray-700 font-medium">
              <a href="https://maps.app.goo.gl/qJcKNw9DMo4JVWrv8" target="_blank" className="block hover:text-blue-600">
                <span className="font-bold text-blue-500">Address 1: </span>  252-F/H, Scheme No 54, Vijay Nagar, Indore-452010, Madhya Pradesh.
              </a>
              <hr />
              <a href="https://maps.app.goo.gl/yahxDsm7BLK652mA8" target="_blank" className="block hover:text-blue-600">
                <span className="font-bold text-blue-500">Address 1: </span> Office No.1141,Scheme No.114,Part-1, Vijay Nagar,Indore-452010, Madhya Pradesh.
              </a>
            </div>
          </div>

          {/* Call Us */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700 text-center mb-4">Call Us</h3>
            <div className="space-y-2">

              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Arpit Jain:</span>
                <a href="tel:+919039397884" className=" hover:text-blue-600 font-medium">+91 9039397884</a>
                <a href="tel:+917470997884" className=" hover:text-blue-600 font-medium">+91 7470997884</a>
              </div>
              <hr />
        
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Deepika Jain:</span>
                <a href="tel:+916262414463" className=" hover:text-blue-600 font-medium">+91 6262414463</a>
              </div>
            </div>
          </div>

          {/* Emails */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700 text-center mb-4">Email Us</h3>
            <div className="space-y-2 text-center text-gray-700 font-medium">
              <a href="mailto:blackgrapesgroups@gmail.com" className="block hover:text-indigo-600">blackgrapesgroups@gmail.com</a>
              <hr />
              <a href="mailto:blackgrapes.arpitjain@gmail.com" className="block hover:text-indigo-600">blackgrapes.arpitjain@gmail.com</a>
              <hr />
              <a href="mailto:blackgrapes.deepikajain@gmail.com" className="block hover:text-indigo-600">blackgrapes.deepikajain@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="text-center space-y-3">
            <p className="text-blue-500 font-bold text-[1.2rem] text-center">Address 1</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3068694610433!2d75.88491091113343!3d22.753990279276895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630310c76a0dc5%3A0xf446e40a939f4b1d!2sBlack%20Grapes%20Softech!5e0!3m2!1sen!2sin!4v1746083224583!5m2!1sen!2sin"
              className="w-full h-[300px] border-2 border-gray-400 rounded-xl"
              loading="lazy"
            ></iframe>
          </div>

          <div className="space-y-3">
            <p className="text-blue-500 font-bold text-[1.2rem] text-center">Address 2</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.976510611648!2d75.8924314!3d22.7687402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303eb56ed3fd1%3A0x9af6cadec6743e07!2sScheme%20No%20114!5e0!3m2!1sen!2sin!4v1687599921907!5m2!1sen!2sin"
              className="w-full h-[300px] border-2 border-gray-400 rounded-xl"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-orange-600 mb-2">Leave a Message</h1>
            <h2 className="text-xl font-bold mb-4">Feel free to contact us for any questions or doubts.</h2>
            <img
              src="https://blackgrapessoftech.com/wp-content/uploads/2023/11/4849052-1.png"
              alt="contact"
              className="w-full max-w-sm"
            />
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-lg shadow-xl p-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={Name}
              onChange={(e) => setname(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={Email}
              onChange={(e) => setmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Project"
              value={Project}
              onChange={(e) => setProject(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              placeholder="Message"
              value={Message}
              onChange={(e) => setmessage(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-400"
              rows="4"
            ></textarea>
            <button
              type="submit"
              onClick={Sendmail}
              className="w-full bg-gradient-to-r from-orange-600 to-black text-white py-3 rounded-md font-bold hover:from-orange-500 hover:to-gray-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Your JSX content */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactSection;
