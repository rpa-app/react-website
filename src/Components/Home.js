import React from 'react';
import { Upload, Share, UserPlus, UserCheck } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <h1 className="text-6xl font-extrabold text-center mb-8 drop-shadow-lg">
          Welcome to Bharat Posters App
        </h1>
        
        {/* Card Container */}
        <div className="bg-white bg-opacity-10 rounded-lg p-10 backdrop-filter backdrop-blur-lg shadow-2xl">
          
          {/* Intro Section */}
          <section className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 drop-shadow-md text-yellow-200">
              What We Offer
            </h2>
            <p className="text-lg mb-8 font-light text-white">
              Empowering users to create and share personalized political posters with ease and creativity.
            </p>
          </section>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <FeatureCard
              icon={<UserPlus className="h-16 w-16 text-yellow-400" />}
              title="Quick Registration"
              description="Easy and fast registration to unlock exciting features."
              bgColor="bg-blue-500"
            />
            <FeatureCard
              icon={<Upload className="h-16 w-16 text-pink-400" />}
              title="Create Posters"
              description="Upload your image and design political posters effortlessly."
              bgColor="bg-green-500"
            />
            <FeatureCard
              icon={<UserCheck className="h-16 w-16 text-green-400" />}
              title="Choose Your Party"
              description="Select your state and political party to showcase your support."
              bgColor="bg-orange-500"
            />
            <FeatureCard
              icon={<Share className="h-16 w-16 text-blue-400" />}
              title="Seamless Sharing"
              description="Share your posters across multiple platforms with ease."
              bgColor="bg-red-500"
            />
          </div>

          {/* Call to Action Section */}
          <section className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-yellow-200 drop-shadow-md">
              Join Us Today!
            </h2>
            <p className="mb-6 text-lg text-white font-light">
              Become part of our vibrant community and amplify your voice through creative political posters.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Download the App
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, bgColor }) {
  return (
    <div
      className={`${bgColor} bg-opacity-90 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105`}
    >
      <div className="flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white text-lg font-light">{description}</p>
    </div>
  );
}

export default Home;
