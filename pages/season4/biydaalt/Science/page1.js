import React from "react";
import { useRouter } from "next/navigation";

export default function Science() {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-[390px] h-[100vh] sm:h-[844px] bg-[#4ac3cf] relative rounded-3xl overflow-hidden shadow-lg">
        <div className="text-white text-4xl sm:text-5xl font-bold text-center mt-12 sm:mt-24">
          Science
        </div>

        <button 
          onClick={() => router.push("/season4/biydaalt/biydaalt")}
          className="absolute top-6 sm:top-8 left-4 w-10 h-10 flex items-center justify-center"
        >
          <img src="/Group 28.png" alt="Back" className="w-8 sm:w-10 h-8 sm:h-10" />
        </button>

        <div className="bg-white absolute bottom-0 w-full h-[75%] sm:h-[77%] rounded-t-[40px] p-4 sm:p-6 pt-6 sm:pt-8">
          <div className="w-full mb-6 sm:mb-10">
            <img
              src="/Group 52.png"
              alt="Plant illustration"
              className="w-[90%] h-[280px] sm:h-[340px] object-contain mx-auto"
            />
          </div>

          <p className="text-[28px] sm:text-[36px] text-black mb-6 sm:mb-8 text-center">
            🌱 What is a Plant?
          </p>

          <div className="w-full flex justify-center">
            <button 
              onClick={() => router.push("/season4/biydaalt/Science/page2")}
              className="bg-[#feb40d] w-[90%] py-4 sm:py-6 rounded-full text-white text-3xl sm:text-4xl font-bold shadow-md hover:brightness-110 transition"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
