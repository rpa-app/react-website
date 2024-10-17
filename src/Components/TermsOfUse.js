import React from 'react';

function TermsOfUse() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg">Terms of Use</h1>
        <div className="bg-white bg-opacity-10 rounded-lg p-10 backdrop-filter backdrop-blur-lg shadow-2xl">

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-200 drop-shadow-md">1. Introduction</h2>
            <p className="text-lg font-light text-white">
              Welcome to Bharat Posters App! These Terms govern the use of our Platform provided by RPA Ventures. By accessing and using our Platform, you agree to comply with these terms. Please read them carefully. If you do not agree, kindly discontinue your use of the Platform.
            </p>
          </section>

          {/* Modifications to Terms and Services Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-200 drop-shadow-md">2. Modifications to Terms and Services</h2>
            <p className="text-lg font-light text-white">
              Bharat Posters App may update its services and features over time without notice. We encourage you to review these terms periodically, as continued use of the Platform constitutes your acceptance of any changes.
            </p>
          </section>

          {/* User Eligibility Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-200 drop-shadow-md">3. User Eligibility</h2>
            <p className="text-lg font-light text-white">
              To use our services, you must be able to form a binding agreement and meet the legal requirements in your jurisdiction. If you represent a company, you confirm that you have the authority to bind it to these Terms.
            </p>
          </section>

          {/* Usage Guidelines Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-200 drop-shadow-md">4. Usage Guidelines</h2>
            <p className="text-lg font-light text-white">
              Bharat Posters App is designed to enable users to connect and share content within their community. Registration requires providing a name and phone number. We respect your privacy and won’t access your device without consent.
            </p>
          </section>

          {/* Subscription and Cancellation Policy Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-200 drop-shadow-md">5. Subscription and Cancellation Policy</h2>
            <p className="text-lg font-light text-white">
              Our app offers premium services through subscriptions. Users can cancel their subscriptions by contacting us at rpaventure3@gmail.com, and cancellations will be processed within 24 hours. Note that payments made prior to cancellation are non-refundable.
            </p>
          </section>

          {/* Privacy Protection Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-200 drop-shadow-md">6. Privacy Protection</h2>
            <p className="text-lg font-light text-white">
              Bharat Posters App respects your privacy and collects user information as per our Privacy Policy, including your name and phone number, stored securely on AWS and Google Cloud servers.
            </p>
          </section>

          {/* Your Responsibilities Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-200 drop-shadow-md">7. Your Responsibilities</h2>
            <ul className="list-disc list-inside space-y-3 text-lg font-light text-white">
              <li>Provide accurate information on the Platform.</li>
              <li>Secure your device with appropriate software.</li>
              <li>Comply with Indian laws and Bharat Posters App's policies regarding content and platform use.</li>
            </ul>
          </section>

          {/* Content Ownership and Responsibility Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-200 drop-shadow-md">8. Content Ownership and Responsibility</h2>
            <p className="text-lg font-light text-white">
              You retain ownership of the content you share, and Bharat Posters App does not claim intellectual property rights over user-generated content.
            </p>
          </section>

          {/* Limitation of Liability Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-200 drop-shadow-md">11. Limitation of Liability</h2>
            <p className="text-lg font-light text-white">
              We are not responsible for any damages or losses that arise from using the Platform, and our liability is limited to the fees paid for services.
            </p>
          </section>

          {/* Additional Sections */}
          {/* Repeat the same structure for additional sections of the Terms of Use */}

        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
