import Image from "next/image";
import React from 'react';

export default function CV() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden p-8 md:p-12">
        
        
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://cdn.pfps.gg/pfps/5124-silly-cat-pfp.png" 
            alt="Khanbileg's Profile Picture"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-300 shadow-lg mb-4"
          />
          <h1 className="text-5xl font-extrabold text-blue-800">Khanbileg</h1>
          <p className="text-lg text-gray-500">high school student</p>
        </div>Z
        
       
        <section className="bg-blue-50 rounded-lg p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Contact</h2>
          <p className="text-gray-600"><strong>Email:</strong> khanbileg7@gmail.com</p>
          <p className="text-gray-600"><strong>Phone:</strong> 89420515</p>
          <p className="text-gray-600"><strong>Location:</strong> Ulaanbaatar, Mongolia</p>
        </section>

        
        <section className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-blue-300">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Education</h2>
          <p className="text-gray-600">School: Nest Education It school</p>
        </section>

        
        <section className="bg-blue-50 rounded-lg p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Skills</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Programming Languages: C++, java</li>
            <li>Web Development: HTML, CSS, React, Next.js</li>
            <li>Version Control: Git</li>
          </ul>
        </section>

        
        <section className="bg-white rounded-lg p-6 mb-8 shadow-sm border-l-4 border-blue-300">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Experience</h2>
          <p className="text-gray-600">Responsibilities: baihguee</p>
        </section>

       
        <section className="bg-blue-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Projects</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Project Name:</strong> 9-r angid: dog feeding machine</li>
          </ul>
        </section>
      </div>
    </div>
  );
}