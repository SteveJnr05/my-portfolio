import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // handle change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send: " + data.message);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error sending message");
    }
  };

  return (
    <section className="min-h-screen bg-white pt-28 pb-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <div className="border rounded-xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Get In Touch</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Have a project in mind or want to discuss Web3 opportunities? I’d love to hear from you.
            Let’s build the future of the internet together.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="block w-full border border-gray-300 rounded-md shadow-sm p-3 text-sm sm:text-base focus:ring-black focus:border-black transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="block w-full border border-gray-300 rounded-md shadow-sm p-3 text-sm sm:text-base focus:ring-black focus:border-black transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="block w-full border border-gray-300 rounded-md shadow-sm p-3 text-sm sm:text-base focus:ring-black focus:border-black transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or how I can help..."
                className="block w-full border border-gray-300 rounded-md shadow-sm p-3 text-sm sm:text-base focus:ring-black focus:border-black transition"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors w-full sm:w-auto"
            >
              Send Message
            </button>

            {status && <p className="mt-3 text-sm text-gray-700">{status}</p>}
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-6">
          <div className="border rounded-xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              Here are the best ways to reach me:
            </p>

            <ul className="space-y-3 text-gray-800 text-sm sm:text-base">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:swantastephen@gmail.com"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  swantastephen@gmail.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong> +234 901 078 4720
              </li>
              <li>
                <strong>Location:</strong> Kaduna, Nigeria
              </li>
              <li>
                <strong>Schedule a Call:</strong>{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-800 underline">
                  Book 30min meeting
                </a>
              </li>
            </ul>
          </div>

          <div className="border rounded-xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Follow Me</h3>
            <ul className="space-y-2 text-indigo-600 text-sm sm:text-base">
              <li>
                <a
                  href="https://github.com/SteveJnr05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-indigo-800"
                >
                  GitHub: @SteveJnr05
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/swanta-stephen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-indigo-800"
                >
                  LinkedIn: in/swanta-stephen
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/yourbwoysteve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-indigo-800"
                >
                  Twitter: yourbwoysteve
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;