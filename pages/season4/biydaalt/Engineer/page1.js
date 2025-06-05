import React from "react";
import { useRouter } from "next/navigation";


export default function Science() {
  const router = useRouter();
  return (
    <div className="h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md h-full bg-[#F9BC5D] relative rounded-3xl overflow-hidden shadow-lg">
        <div className="text-white text-5xl font-bold text-center mt-24">
          Engineer
        </div>

        <button className="absolute top-8 left-4 w-10 h-10 flex items-center justify-center">
          <img src="/Group 28.png" alt="Back" className="w-10 h-10" />
        </button>

        <div className="bg-white absolute bottom-0 w-full h-[77%] rounded-t-[40px] p-6 pt-8">
          <div className="w-full mb-10">
            <img
              src="/image 21.png"
              alt="Plant illustration"
              className="w-[90%] h-[340px] object-contain mx-auto"
            />
          </div>

          <p className="text-[36px] text-black mb-8 text-center ">
            🗼 Build a Tower
          </p>

          <div className="w-full flex justify-center">
            <button onClick={() => router.push("/season4/biydaalt/Engineer/page2")} className="bg-[#feb40d] w-[90%] py-6 rounded-full text-white text-4xl font-bold shadow-md hover:brightness-110 transition">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
