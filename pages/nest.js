import { useState } from "react";

export default function School() {
    return (
        <div className="h-screen w-full bg-gray-300 px-4 pt-24">
            <div className="h-16 w-full bg-blue-700 flex items-center justify-center">
                <h1 className="text-xl font-semibold tracking-wide">Nest high school</h1>
            </div>
            <div className="h-36 w-full bg-gray-300 flex items-center flex-col pt-8">
             <h1 className="text-black text-3xl font-bold ">Welcome to Nest school</h1>
             <p className="text-gray-600 text-lg pt-2 text-center px-80 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>
            <div className="h-24 w-full bg-gray-300 flex items-center justify-center">
                <button className="w-24 h-12 bg-blue-700 rounded-lg transform hover:scale-105 transition-transform">
                 <p className="text-white text-md font-semibold">Click me</p>
                </button>
            </div>
        </div>
    )
}