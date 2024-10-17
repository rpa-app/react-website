import React from 'react';

function RefundCancellationPolicy() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg">
          Cancellation and Refund Policy
        </h1>
        <div className="bg-white bg-opacity-10 rounded-lg p-10 backdrop-filter backdrop-blur-lg shadow-2xl">
          
          {/* Premium Services Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-200 drop-shadow-md">Premium Services</h2>
            <p className="text-lg mb-6 font-light text-white">
              Our Bharat Posters app offers premium features that allow you to create and share personalized posters with your photos and name.
              Access to these exclusive services is available through a recurring subscription fee.
            </p>
          </section>

          {/* Cancellation Process Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-200 drop-shadow-md">Cancellation Process</h2>
            <ul className="list-disc list-inside space-y-3 text-white text-lg font-light">
              <li>To cancel your subscription, email us at rpaventures3@gmail.com with your registered mobile number or email ID.</li>
              <li>We will process your cancellation request within 24 hours of receipt.</li>
              <li>You will continue to enjoy premium benefits until the end of your current billing cycle.</li>
            </ul>
          </section>

          {/* Refund Policy Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-200 drop-shadow-md">Refund Policy</h2>
            <p className="text-lg font-light text-white">
              Please note that any payments made before cancellation are non-refundable. We appreciate your understanding in this matter.
            </p>
          </section>

          {/* Account Deletion Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-200 drop-shadow-md">Account Deletion</h2>
            <p className="text-lg mb-4 font-light text-white">
              If you wish to delete your account and all associated data, please use the form provided below:
            </p>
            <a
              href="#"
              className="inline-block bg-yellow-500 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Account Deletion Form
            </a>
          </section>

          {/* Additional Information Section */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-yellow-200 drop-shadow-md">Additional Information</h2>
            <ul className="list-disc list-inside space-y-3 text-white text-lg font-light">
              <li>We reserve the right to use arbitration for dispute resolution related to cancellations or refunds.</li>
              <li>By submitting the cancellation or deletion form, you acknowledge and agree to the terms outlined in this policy.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RefundCancellationPolicy;
