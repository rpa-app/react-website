import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-5xl font-extrabold mb-8 text-white">Contact Us</h1>
      <p className="mb-6 text-lg text-white">
        Reach out to us through the following contact details. We’d love to hear from you!
      </p>

      {/* Contact Details */}
      <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-md inline-block">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-2">Email Us</h2>
          <a
            href="mailto:rpasoftware.services@gmail.com"
            className="text-xl text-white hover:text-yellow-400 transition duration-300"
          >
            rpasoftware.services@gmail.com
          </a>
        </div>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-2">Call Us</h2>
          <a
            href="tel:+917059777333"
            className="text-xl text-white hover:text-yellow-400 transition duration-300"
          >
            +91 7059777333
          </a>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-yellow-400 mb-2">Visit Us</h2>
          <p className="text-xl text-white">
            202, Sharda Garden, New Panvel Sector - 9, <br />
            Navi Mumbai, Pincode-410206
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
