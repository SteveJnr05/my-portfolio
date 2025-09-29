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
    {/* <div className="max-w-5x1 mx-auto px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-36 px-16">

        <div className="flex flex-col justify-center">
          <h1 className="text-7xl md:text-5x1 font-extrabold text-gray-800 ">
            Building the Decentralized Future
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            I create modern, fast and secure decentralized application using React, TailwindCSS and Blockchain Technologies. Let's bring your ideas to life!
          </p>
          <div className="mt-8 flex gap-4">
            
            <Link
              to="/projects"
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-black transition"
            >
              View My Projects
            </Link>

            <Link
              to="/projects"
              className="px-6 py-3 border-2 border-black rounded-lg text-gray-950 hover:bg-black hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
          src={heroImage}
          alt="Hero Illustration"
          className="rounded-xl shadow-lg w-3/4 md:w-2/3 lg:w-3/4"
          />
        </div>
      </div>

    <div className="w-full">
      <hr className="border-t-1 border-gray-400 mt-32 mb-16"/>
    </div>

    <div className="text-center px-8 py-12">
      <h3 className="text-2xl font-bold text-black mb-5">
        Technologies I Work With
      </h3>
    </div>

    <div className="flex flex-wrap justify-center gap-32 md:gap-30 ">
      <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:drop-shadow-x1">
        <img src={reactLogo} alt="React" className="h-8 w-8 mb-2 transition-shadow duration-300 hover: shadow-lg hover: shadow-blue-400/50"/>
        <p className="text-gray-700 font-medium">React</p>
      </div>

      <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:drop-shadow-x1">
        <img src={tailwindLogo} alt="TailwindCSS" className="h-8 w-8 mb-2 transition-shadow duration-300 hover: shadow-lg hover: shadow-cyan-400/50"/>
        <p className="text-gray-700 font-medium">TailwindCSS</p>
      </div>

      <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:drop-shadow-x1">
        <img src={nodeLogo} alt="Node.js" className="h-8 w-8 mb-2 transition-shadow duration-300 hover: shadow-lg hover: shadow-green-400/50"/>
        <p className="text-gray-700 font-medium">Node.js</p>
      </div>

      <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:drop-shadow-x1">
        <img src={suiLogo} alt="Sui Move" className="h-8 w-8 mb-2 transition-shadow duration-300 hover: shadow-lg hover: shadow-blue-500/50"/>
        <p className="text-gray-700 font-medium">Sui Move</p>
      </div>

      <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:drop-shadow-x1">
        <img src={figmaLogo} alt="Figma" className="h-8 w-8 mb-2 transition-shadow duration-300 hover: shadow-lg hover: shadow-pink-400/50"/>
        <p className="text-gray-700 font-medium">Figma</p>
      </div>
    </div>
    </>
  );
};

export default Home