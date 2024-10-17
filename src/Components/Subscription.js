import React from 'react';
import { CreditCard, RefreshCw, XCircle } from 'lucide-react';

function Subscription() {
  return (
    <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 min-h-screen text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg">Manage Your Subscription</h1>
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <ProcessCard
            icon={<CreditCard className="h-12 w-12 text-yellow-400" />}
            title="Start Your Subscription"
            steps={[
              "Choose your favorite poster design",
              "Select your preferred subscription plan",
              "Choose UPI as your payment method",
              "Confirm the plan details and set up auto-pay",
              "Enjoy instant access to premium features!"
            ]}
          />
          
          <ProcessCard
            icon={<RefreshCw className="h-12 w-12 text-pink-400" />}
            title="Modify Your Subscription"
            steps={[
              "Access your UPI app's Auto-Pay section",
              "Locate and cancel the current Poster App mandate",
              "Return to our app and select a new subscription",
              "Choose a new payment method or UPI app",
              "Set up a fresh mandate for continued access"
            ]}
          />
          
          <ProcessCard
            icon={<XCircle className="h-12 w-12 text-red-400" />}
            title="Cancel Your Subscription"
            steps={[
              "Visit your UPI app or banking portal",
              "Find the Auto-Pay/Mandates section",
              "Locate the Poster App subscription",
              "Follow the prompts to cancel the mandate",
              "Subscription will end at the current billing cycle"
            ]}
          />
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-yellow-200 drop-shadow-md">Need More Help?</h2>
          <p className="mb-6">Watch our step-by-step video guide on managing your subscription:</p>
          <a
            href="https://youtu.be/ZkpwDqHAbeY?si=2xdmUZKpYwh_pFgJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-150 ease-in-out"
          >
            Watch Video Guide
          </a>
        </div>
      </div>
    </div>
  );
}

function ProcessCard({ icon, title, steps }) {
  return (
    <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg shadow-lg">
      <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white text-blue-900 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center mb-4 text-yellow-200 drop-shadow-md">{title}</h3>
      <ol className="list-decimal list-inside space-y-2">
        {steps.map((step, index) => (
          <li key={index} className="text-sm text-white">{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default Subscription;
