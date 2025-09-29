import React from 'react'
import download from "../assets/download.png";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-36 px-16 items-start">
      <div className="flex flex-col justify-center">
          <h1 className="text-7xl md:text-5x1 font-extrabold text-gray-800 ">
            About Me
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            I'm a passionate Web3 developer starting out my journey in this space; building decentralized applications and smart contracts. My journey started with traditional web development, but I found my calling in the revolutionary world of blockchain technology.
          </p>
          <p className="mt-6 text-lg text-gray-600">  
            My expertise spans from smart contract development to building intuitive frontend interfaces that make Web3 accessible to everyone.
When I'm not coding, you can find me contributing to open-source projects, writing technical articles about blockchain technology, or exploring the latest innovations in the Web3 ecosystem.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-black transition">
              <img src={download} alt="download" className='w-5 h-5'/>
              Download Resume
             </div>
          </div>
           <h1 className="text-4xl md:text-5x1 mt-8 font-bold text-gray-800 ">
            Technical Skills
          </h1>    
      </div>

      <div className="flex justify-center items-center">
                <img
                src={about}
                alt="About"
                className="rounded-xl shadow-lg w-3/4 md:w-2/3 lg:w-3/4"
                />
              </div>
    </div>
  );
};

export default About