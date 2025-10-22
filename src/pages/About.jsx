import React from 'react';
import download from "../assets/download.png";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800">
            About Me
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            I'm a passionate Web3 developer starting out my journey in this space; building decentralized applications and smart contracts. My journey started with traditional web development, but I found my calling in the revolutionary world of blockchain technology.
          </p>

          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            My expertise spans from smart contract development to building intuitive frontend interfaces that make Web3 accessible to everyone.
            When I'm not coding, you can find me contributing to open-source projects, writing technical articles about blockchain technology, or exploring the latest innovations in the Web3 ecosystem.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <a 
              href="/resume.pdf"
              download="Swanta-Stephen-Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-black transition">
              <img src={download} alt="download" className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          <h2 className="text-3xl sm:text-4xl mt-10 font-bold text-gray-800">
            Technical Skills
          </h2>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={about}
            alt="About"
            className="rounded-xl shadow-lg w-4/5 sm:w-3/4 md:w-2/3 lg:w-3/4"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
