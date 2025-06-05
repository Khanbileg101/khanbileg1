import React from "react";
import { useRouter } from "next/navigation";

export default function Science() {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-[390px] h-[100vh] sm:h-[844px] bg-[#4ac3cf] relative rounded-3xl overflow-hidden shadow-lg">
        <div className="w-full flex justify-center mt-8 sm:mt-12">
          <img
            src="/Group 40.png"
            alt="Science Illustration Above"
            className="object-contain"
          />
        </div>

        <div className="text-white text-5xl font-bold text-center mt-4">
          Science
        </div>

        <button onClick={() => router.push("/season4/biydaalt/Science/page1")} className="absolute top-8 left-4 flex items-center justify-center">
          <img src="/Group 28.png" alt="Back" className="w-10 h-10" />
        </button>

        <div className="bg-white absolute bottom-0 w-full h-[70%] rounded-t-[40px] p-6 pt-8">
          <div className="w-full mb-10">
            <img
              src="/image 17.png"
              alt="Science illustration"
              className="object-contain mx-auto"
            />
          </div>

          <p className="text-[20px] text-black mb-8 text-center leading-relaxed">
            A plant is a living thing that grows in the ground. It doesn’t walk or talk, but it eats sunlight with its green leaves and drinks water through its roots.
          </p>

          <div className="w-full flex justify-center">
            <button
              onClick={() => router.push("/season4/biydaalt/Science/page3")}
              className="bg-[#feb40d] w-[90%] py-6 rounded-full text-white text-4xl font-bold shadow-md hover:brightness-110 transition"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
