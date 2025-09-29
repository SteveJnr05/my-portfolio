import thumbnail from "../assets/hero2.png";

export default function Projects() {
const projects =[
  {title: "Project 1", desc: "Short description of the Project"},
  {title: "Project 2", desc: "Short description of the Project"},
  {title: "Project 3", desc: "Short description of the Project"},
  {title: "Project 4", desc: "Short description of the Project"},
  {title: "Project 5", desc: "Short description of the Project"},
  {title: "Project 6", desc: "Short description of the Project"},
  {title: "Project 7", desc: "Short description of the Project"},
  ];
  
return (
    <div className="pt-36 px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">My Web3 Projects</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          A collection of my work building decentralized applications and tools.
          Each project is designed to improve Web3 user experience and explore
          new ideas on-chain.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02] ${
              index === projects.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""
            }`}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



