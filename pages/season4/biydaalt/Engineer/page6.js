import React from "react";
import { useRouter } from "next/navigation";

export default function Science() {
  const router = useRouter();
  return (
    <div className="h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md h-full bg-[#F9BC5D] relative rounded-3xl overflow-hidden shadow-lg">
        <div className="w-full flex justify-center mt-12">
          <img
            src="/image 3.png"
            alt="Science Illustration Above"
            className="object-contain"
          />
        </div>

        <div className="text-white text-5xl font-bold text-center mt-4">
          Engineer
        </div>

        <button onClick={() => router.push("/season4/biydaalt//Engineer/page5")} className="absolute top-8 left-4 flex items-center justify-center">
          <img src="/Group 28.png" alt="Back" className="w-10 h-10" />
        </button>

        <div className="bg-white absolute bottom-0 w-full h-[70%] rounded-t-[40px] p-6 pt-8">
          <div className="w-full mb-10">
            <img
              src="/image 26.png"
              alt="Science illustration"
              className=" h-[390px] object-contain mx-auto"
            />
          </div>

          <p className="text-[23px] text-black mb-8 text-center leading-relaxed">
          Step 5: Test Stability 🤔
          </p>

          <div className="w-full flex justify-center">
            <button
              onClick={() => router.push("/season4/biydaalt/Engineer/page1")}
              className="bg-[#feb40d] w-[90%] py-6 rounded-full text-white text-4xl font-bold shadow-md hover:brightness-110 transition"
            >
              End
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

