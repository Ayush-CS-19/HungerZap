const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          Contact Us
        </h1>

        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center gap-2">
                  <span className="text-orange-500">📧</span>
                  <span>Email: ayush19@hungerzap.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-orange-500">📞</span>
                  <span>Phone: +91 700052054</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-orange-500">📍</span>
                  <span>Address: Bhopal,India</span>
                </p>
              </div>
              {/* Social Links (Optional) */}
              <div className="pt-4">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#" // Replace with your LinkedIn URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* LinkedIn Icon */}
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-2.73-2.3-2.73-1.79 0-2.13 1.42-2.13 2.73V19H8V10h3v1.14c.71-1 1.86-1.14 2.78-1.14 2.88 0 3.22 1.89 3.22 4.36V19z" />
                    </svg>
                  </a>
                  <a
                    href="#" // Replace with your GitHub URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* GitHub Icon */}
                      <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03 1.47 2.52 3.85 1.79 4.78 1.37.15-1.07.56-1.79 1.03-2.2-3.6-.41-7.38-1.8-7.38-8 0-1.76.62-3.2 1.64-4.33-.16-.41-.71-2.06.16-4.28 0 0 1.34-.43 4.4 1.64a15.4 15.4 0 014-.54c1.36 0 2.72.18 4 .54 3.05-2.07 4.39-1.64 4.39-1.64.87 2.22.32 3.87.16 4.28 1.02 1.13 1.64 2.57 1.64 4.33 0 6.22-3.79 7.58-7.4 8 .58.5 1.1 1.5 1.1 3.03v4.5c0 .27.16.59.66.5A10 10 0 0022 12 10 10 0 0012 2z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* Facebook Icon (simplified) */}
                      <path d="M24 12a12 12 0 10-13.9 11.9v-8.4h-3.1V12h3.1V9.8c0-3.1 1.9-4.8 4.7-4.8 1.3 0 2.5.2 2.5.2v2.7h-1.4c-1.4 0-1.7.7-1.7 1.6V12h3.4l-.5 3.4h-2.9v8.4A12 12 0 0024 12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
