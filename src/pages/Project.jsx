const Projects = () => {
  return (
      <div className="h-[calc(100vh-5rem)] bg-gray-900 text-white flex flex-col items-center justify-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-500 mb-10">
              Projects
          </h1>
          <div className="bg-gray-800 text-white px-16 py-20 rounded-2xl shadow-lg flex flex-col items-center justify-center border border-gray-700 w-[90%] md:w-[60%]">
              <p className="text-4xl md:text-5xl font-bold text-gray-200 tracking-wide">
                  🚀 Coming Soon...
              </p>
              <span className="text-lg md:text-xl text-gray-400 mt-3">
                  Stay tuned for amazing projects!
              </span>
          </div>
      </div>
  );
};

export default Projects;
