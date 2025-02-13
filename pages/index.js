import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full px-4">

        <button 
          onClick={() => router.push("/cv")} 
          className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-200 transition-colors"
          aria-label="Go to Portfolio"
        >
          <h2 className="text-xl font-bold mb-4 text-center text-black">Portfolio</h2>
          <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
            <img src="/cv.jpeg" alt="Portfolio Thumbnail"/>
          </div>
        </button>

        <button 
          onClick={() => router.push("/weather")} 
          className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-200 transition-colors"
          aria-label="Go to Weather"
        >
          <h2 className="text-xl font-bold mb-4 text-center text-black">Weather</h2>
          <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
            <img src="/weather.jpeg" alt="Weather Thumbnail"/>
          </div>
        </button>

        <button 
          onClick={() => router.push("/grid")} 
          className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-200 transition-colors"
          aria-label="Go to Grid"
        >
          <h2 className="text-xl font-bold mb-4 text-center text-black">Grid</h2>
          <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
            <img src="/grid.jpeg" alt="Grid Thumbnail"/>
          </div>
        </button>

        <button 
          onClick={() => router.push("/search")} 
          className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-200 transition-colors">
          <h2 className="text-xl font-bold mb-4 text-center text-black">Search</h2>
          <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
            <img src="/search.jpeg" alt="Search Thumbnail"/>
          </div>
        </button>

        <button 
        onClick={() => router.push("/biedaalt")} 
        className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-200 transition-colors">
          <h2 className="text-xl font-bold mb-4 text-center text-black">Project</h2>
          <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
            <img src="/project.png" alt=""/>
          </div>
        </button>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="bg-gray-200 w-full h-40 flex items-center justify-center rounded-lg">
            <p className="text-gray-500">Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
