import thumbnail from "../assets/hero2.png";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.API_BASE_URL}/project`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="pt-36 text-center text-gray-600">Loading projects...</div>;
  }
  return (
    <div className="pt-32 px-6 sm:px-10 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          My Web3 Projects
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          A collection of my work building decentralized applications and tools.
          Each project is designed to improve Web3 user experience and explore
          new ideas on-chain.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={thumbnail}
                alt={project.title}
                className="w-full h-44 sm:h-48 md:h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Project Info */}
            <div className="p-5 sm:p-6 text-center sm:text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                {project.desc}
              </p>
              <a
                href="#"
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Spacing */}
      <div className="mt-20" />
    </div>
  );
}
