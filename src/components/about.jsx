import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            About HungerZap
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our story and passion for delivering delicious meals to
            your doorstep.
          </p>
        </header>

        {/* Main Content */}
        <section className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          {/* Our Mission */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 relative">
              Our Mission
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-orange-400 rounded-full"></span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At HungerZap, we’re dedicated to connecting food lovers with the
              best restaurants in town. Our mission is to make every meal a
              delightful experience, offering convenience, quality, and a dash
              of joy with every order.
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 relative">
              Our Story
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-orange-400 rounded-full"></span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2025, HungerZap started with a simple idea: bring great
              food to people, fast. What began as a small team of food
              enthusiasts has grown into a platform that serves thousands,
              fueled by a love for cuisine and cutting-edge technology.
            </p>
          </div>

          {/* Our Values */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 relative">
              Our Values
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-orange-400 rounded-full"></span>
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-2xl">•</span>
                <span>
                  <strong>Quality:</strong> Partnering with top restaurants to
                  ensure every bite is exceptional.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-2xl">•</span>
                <span>
                  <strong>Speed:</strong> Fast, reliable delivery to satisfy
                  your hunger ASAP.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-2xl">•</span>
                <span>
                  <strong>Community:</strong> Supporting local businesses and
                  food lovers alike.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-2xl">•</span>
                <span>
                  <strong>Innovation:</strong> Using tech to make food ordering
                  seamless and fun.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
