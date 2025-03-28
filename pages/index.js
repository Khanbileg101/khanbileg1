import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 flex items-center justify-center py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        <button
<<<<<<< HEAD
          onClick={() => router.push("/season1/cv")}
=======
          onClick={() => router.push("/cv")}
>>>>>>> 82c9652db52192215c506750da1647ae88bbda69
          className="bg-gray-800 shadow-md rounded-2xl p-6 transition-shadow duration-300 group relative hover:ring-2 hover:ring-gray-500 hover:ring-offset-2 hover:ring-offset-gray-900"
          aria-label="Go to Portfolio"
        >
          <div className="absolute inset-0 rounded-2xl bg-gray-500 opacity-20 blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>
          <h2 className="relative text-2xl font-semibold mb-4 text-center text-gray-300 group-hover:text-gray-100 transition-colors">
            Portfolio
          </h2>
          <div className="relative bg-gray-700 w-full h-48 flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img src="/cv.jpeg" alt="Portfolio Thumbnail" className="object-cover w-full h-full" />
          </div>
        </button>

        <button
<<<<<<< HEAD
          onClick={() => router.push("/season1/biedaalt")}
=======
          onClick={() => router.push("/biedaalt")}
>>>>>>> 82c9652db52192215c506750da1647ae88bbda69
          className="bg-gray-800 shadow-md rounded-2xl p-6 transition-shadow duration-300 group relative hover:ring-2 hover:ring-gray-500 hover:ring-offset-2 hover:ring-offset-gray-900"
          aria-label="Go to Project"
        >
          <div className="absolute inset-0 rounded-2xl bg-gray-500 opacity-20 blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>
          <h2 className="relative text-2xl font-semibold mb-4 text-center text-gray-300 group-hover:text-gray-100 transition-colors">
            Project
          </h2>
          <div className="relative bg-gray-700 w-full h-48 flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img src="/project.png" alt="Project Thumbnail" className="object-cover w-full h-full" />
          </div>
        </button>

        <button
          onClick={() => router.push("/detail")}
          className="bg-gray-800 shadow-md rounded-2xl p-6 transition-shadow duration-300 group relative hover:ring-2 hover:ring-gray-500 hover:ring-offset-2 hover:ring-offset-gray-900"
          aria-label="Go to Season 2"
        >
          <div className="absolute inset-0 rounded-2xl bg-gray-500 opacity-20 blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>
          <h2 className="relative text-2xl font-semibold mb-4 text-center text-gray-300 group-hover:text-gray-100 transition-colors">
            Season 2
          </h2>
          <div className="relative bg-gray-700 w-full h-48 flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img src="/khanbu.png" alt="Season 2 Thumbnail" className="object-cover w-full h-full" />
          </div>
        </button>
      </div>
    </div>
  );
}