const data = [

];

export default function dashboard() {
    return(
        <div className="flex h-screen bg-gray-50">
            <div className="w-[20%] bg-white shadow-xl p-6">
              <div className="text-center">
                <img src="https://nhs.edu.mn/favicon.ico" className="w-32 h-32 mx-auto mb-6 rounded-full"></img>
                <h2 className="text-purple-700 text-xl font-semibold">NEST EDECUATION IT SCHOOL</h2>
                <h1 className="text-gray-800 mt-2 text-lg font-semibold">Дамдинсүрэн Ханбилэг</h1>
                <h1 className="text-gray-800 mt-1 text-lg">Анги: 11А</h1>
              </div>
              <div className="mt-8 space-y-4">
                <button className="w-full py-3 bg-purple-700 text-white rounded-lg text-lg font-medium transition duration-300 hover:bg-puprle-500 hover:shadow-lg focus:outline-none">Go to dashboard</button>
                <button className="w-full py-3 bg-purple-700 text-white rounded-lg text-lg font-medium transition duration-300 hover:bg-puprle-500 hover:shadow-lg focus:outline-none">Go to toki</button>
              </div>
            </div>
            <div className="w-[80%] h-screen bg-gray-200 shadow-xl p-6">
             <div className="flex justify-between items-center mb-6">
               <div className="flex items-center space-x-4">
                <div className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold text-lg">харилцагчид</div>
                <input placeholder="Search..." className="h-12 px-4 py-2 w-96 rounded-lg border border-gray-300 outline-none" type="text"></input>
                <div className="bg-yellow-500 text-white py-3 px-6 rounded-lg text-lg font-medium cursor-pointer">Барааг бүртгэх</div>
               </div>
             </div>
            </div>
        </div>
    )
}