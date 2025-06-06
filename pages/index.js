import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 flex items-center justify-center py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        <button
          onClick={() => router.push("/season1/cv")}
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

        <button
          onClick={() => router.push("/toki")}
          className="bg-gray-800 shadow-md rounded-2xl p-6 transition-shadow duration-300 group relative hover:ring-2 hover:ring-gray-500 hover:ring-offset-2 hover:ring-offset-gray-900"
          aria-label="Go to toki"
        >
          <div className="absolute inset-0 rounded-2xl bg-gray-500 opacity-20 blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>
          <h2 className="relative text-2xl font-semibold mb-4 text-center text-gray-300 group-hover:text-gray-100 transition-colors">
            Toki
          </h2>
          <div className="relative bg-gray-700 w-full h-48 flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img src="/toki.png" alt="Season 2 Thumbnail" className="object-cover w-full h-full" />
          </div>
        </button>
        <button
          onClick={() => router.push("/season4/dashboard")}
          className="bg-gray-800 shadow-md rounded-2xl p-6 transition-shadow duration-300 group relative hover:ring-2 hover:ring-gray-500 hover:ring-offset-2 hover:ring-offset-gray-900"
          aria-label="Go to Season 2"
        >
          <div className="absolute inset-0 rounded-2xl bg-gray-500 opacity-20 blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>
          <h2 className="relative text-2xl font-semibold mb-4 text-center text-gray-300 group-hover:text-gray-100 transition-colors">
            Season 4: dashboard
          </h2>
          <div className="relative bg-gray-700 w-full h-48 flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img src="/dashboard.png" alt="Season 2 Thumbnail" className="object-cover w-full h-full" />
          </div>
        </button>
        <button
          onClick={() => router.push("/season4/post")}
          className="bg-gray-800 shadow-md rounded-2xl p-6 transition-shadow duration-300 group relative hover:ring-2 hover:ring-gray-500 hover:ring-offset-2 hover:ring-offset-gray-900"
          aria-label="Go to Season 2"
        >
          <div className="absolute inset-0 rounded-2xl bg-gray-500 opacity-20 blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>
          <h2 className="relative text-2xl font-semibold mb-4 text-center text-gray-300 group-hover:text-gray-100 transition-colors">
            Season 4: post
          </h2>
          <div className="relative bg-gray-700 w-full h-48 flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img src="/post.png" alt="Season 2 Thumbnail" className="object-cover w-full h-full" />
          </div>
        </button>
        <button
          onClick={() => router.push("/season4/biydaalt/Science/page1")}
          className="bg-gray-800 shadow-md rounded-2xl p-6 transition-shadow duration-300 group relative hover:ring-2 hover:ring-gray-500 hover:ring-offset-2 hover:ring-offset-gray-900"
          aria-label="Go to Season 2"
        >
          <div className="absolute inset-0 rounded-2xl bg-gray-500 opacity-20 blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>
          <h2 className="relative text-2xl font-semibold mb-4 text-center text-gray-300 group-hover:text-gray-100 transition-colors">
            Season 4: post
          </h2>
          <div className="relative bg-gray-700 w-full h-48 flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img src="/post.png" alt="Season 2 Thumbnail" className="object-cover w-full h-full" />
          </div>
        </button>
      </div>
    </div>
  );
}