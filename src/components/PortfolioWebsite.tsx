

type PortfolioProps = {
  title: string;
  website: string;
};

const Portfolio = ({ title, website }: PortfolioProps) => {
  return (
    <div className="pt-20 mb-10 min-h-screen bg-gradient-to-br flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
      

        {/* Display Screen Container */}
        <div className="flex justify-center">
          {/* Screen Frame */}
          <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl w-full max-w-6xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-gray-800 rounded-lg px-4 py-2 text-gray-400 text-sm font-mono">
                  {website}
                </div>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
            </div>

            {/* Website Display */}
            <div
              className="relative bg-white rounded-xl overflow-hidden shadow-lg w-full"
              style={{ height: "70vh" }}
            >
              <iframe
                src={website}
                className="w-full h-full border-none"
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              />

              {/* Loading overlay */}
              <div
                className="absolute inset-0 bg-gray-100 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300"
                id="loading-overlay"
              >
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading website...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        {/* <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Interactive portfolio showcase • Click and explore the embedded website
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
