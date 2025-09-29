import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-white px-4 pt-32 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <div className='border rounded-xl p-8'>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Have a project in mind or want to discuss Web3 opportunities? I’d love to hear from you. Let’s build the future of the internet together.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name *</label>
              <input
                type="text"
                placeholder="Your full name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="What's this about?"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message *</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project or how I can help..."
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      <div className='space-y-6'>
        {/* Right: Contact Info */}
        <div className="border rounded-xl p-8 h-[300px] overflow-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Contact Information</h3>
          <p className="text-gray-600 mb-2">Here are the best ways to reach me</p>

          <ul className="space-y-4 text-gray-800">
            <li>
              <strong>Email:</strong> <a href="mailto:hello@web3dev.com" className="text-indigo-600">swantastephen@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong> +234 901 078 4720
            </li>
            <li>
              <strong>Location:</strong> Kaduna, Nigeria
            </li>
            <li>
              <strong>Schedule a Call:</strong> <a href="#" className="text-indigo-600">Book 30min meeting</a>
            </li>
          </ul>

          
        </div>
        <div className="border rounded-xl p-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mt-2">Follow Me</h3>
            <ul className="mt-4 space-y-2 text-indigo-600">
              <li><a href="#">GitHub: @SteveJnr05</a></li>
              <li><a href="#">LinkedIn: in/swanta-stephen</a></li>
              <li><a href="#">Twitter: yourbwoysteve</a></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Contact