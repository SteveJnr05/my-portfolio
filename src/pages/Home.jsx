import { Link } from "react-router-dom";
import heroImage from "../assets/hero2.png";
import reactLogo from "../assets/react-logo.png";
import tailwindLogo from "../assets/tailwind-logo.png";
import nodeLogo from "../assets/node-logo.png";
import suiLogo from "../assets/sui-logo.png";
import figmaLogo from "../assets/figma-logo.png";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left Text Section */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
              Building the Decentralized Future
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              I create modern, fast, and secure decentralized applications using React, TailwindCSS, 
              and Blockchain technologies. Let’s bring your ideas to life!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-black transition"
              >
                View My Projects
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-black rounded-lg text-gray-900 hover:bg-black hover:text-white transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center items-center">
            <img
              src={heroImage}
              alt="Hero Illustration"
              className="rounded-xl shadow-lg w-4/5 sm:w-3/4 md:w-2/3 lg:w-3/4"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full">
        <hr className="border-t border-gray-300 mt-20 mb-10" />
      </div>

      {/* Technologies Section */}
      <section className="text-center px-6 sm:px-10 lg:px-20 pb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Technologies I Work With
        </h3>

        <div className="flex flex-wrap justify-center gap-10 sm:gap-16 lg:gap-24">
          {/* Tech Icon */}
          {[
            { src: reactLogo, name: "React" },
            { src: tailwindLogo, name: "TailwindCSS" },
            { src: nodeLogo, name: "Node.js" },
            { src: suiLogo, name: "Sui Move" },
            { src: figmaLogo, name: "Figma" },
          ].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="h-10 w-10 mb-2 transition-shadow duration-300 hover:shadow-lg"
              />
              <p className="text-gray-700 font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
