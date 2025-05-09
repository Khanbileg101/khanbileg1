import { useRouter } from "next/router";
import { useState } from "react";


const products = [
  {
    id: 1,
    name: "Iphone 14 pro",
    price: "2,000,000₮",
    color: "purple",
    image: "https://m.media-amazon.com/images/I/51TaXvzHHqL.jpg",
    accessories: [
      {
        name: "Case",
        price: "35000₮"
      },
      {
        name: "Camera",
        price: "20000₮" 
      }
    ]
  },
  {
    id: 2,
    name: "Macbook Pro",
    price: "4,500,000₮", 
    color: "silver",
    image: "/mac.png",
    accessories: [
      {
        name: "Case",
        price: "45000₮"
      },
      {
        name: "Charger",
        price: "65000₮"
      }
    ]
  },
  {
    id: 3,
    name: "Travel laptop backpack",
    price: "40,000₮",
    color: "grey",
    image: "https://www.jibalzone.com/media/7445/conversions/671a4abc5cd76_Travel-Laptop-Backpack-Business-Slim-Durable-Laptops-Backpack-USB-Charging-Port-College-School-Computer-Bag-Gifts-Men-Women-Fits-15-6-Inch-Notebook-G_62d567bf-8dd7-49c2-bef7-f4f595fc4b93.023a1e19768f49b508fdca-slider.jpg",
    accessories: [
      {
        name: "pockets",
        price: "5"
      },
      {
        name: "materials",
        price: "fabric"
      }
    ]
  },
  {
    id: 4,
    name: "Leather Wallet",
    price: "85,000₮",
    color: "brown",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMHdhbGxldHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    accessories: [
      {
        name: "Card Slots",
        price: "6"
      },
      {
        name: "Material",
        price: "Genuine Leather"
      }
    ]
  }
];


export default function dashboard() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    
    const filteredProducts = products.filter((product) => {
        const searchLower = searchQuery.toLowerCase();
        return (
            product.name.toLowerCase().includes(searchLower) ||
            product.color.toLowerCase().includes(searchLower) ||
            product.price.toLowerCase().includes(searchLower) ||
            product.accessories.some(accessory => 
                accessory.name.toLowerCase().includes(searchLower) ||
                accessory.price.toLowerCase().includes(searchLower)
            )
        );
    });

    return(
        <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="w-[20%] bg-white shadow-xl p-6 border-r border-gray-100">
              <div className="text-center">
                <img src="https://nhs.edu.mn/favicon.ico" className="w-32 h-32 mx-auto mb-6 rounded-full shadow-lg"></img>
                <h2 className="text-purple-700 text-xl font-bold">NEST EDECUATION IT SCHOOL</h2>
                <h1 className="text-gray-800 mt-2 text-lg font-semibold">Дамдинсүрэн Ханбилэг</h1>
                <h1 className="text-gray-600 mt-1 text-lg">Анги: 11А</h1>
              </div>
              <div className="mt-8 space-y-4">
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg text-lg font-medium transition duration-300 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg focus:outline-none">Go to dashboard</button>
                <button onClick={() => router.push("/toki")} className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg text-lg font-medium transition duration-300 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg focus:outline-none">Go to toki</button>
              </div>
            </div>
            <div className="w-[80%] bg-gray-50 shadow-xl p-6">
             <div className="flex justify-between items-center mb-6"> 
               <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-2 rounded-lg font-semibold text-lg shadow-md">харилцагчид</div>
                <input 
                    placeholder="Search products..." 
                    className="h-12 px-4 py-2 w-96 rounded-lg border border-gray-200 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-200 text-gray-700 placeholder-gray-400" 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                ></input>
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg text-lg font-medium cursor-pointer shadow-md hover:from-purple-700 hover:to-purple-800 transition duration-300">Барааг бүртгэх</div>
               </div>
             </div>
             <div className="h-[80vh] bg-white rounded-xl p-4 overflow-auto shadow-inner">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-5"></div>
                    <div className="w-16"></div>
                    <div className="w-[120px] text-gray-700 font-semibold">Product Name</div>
                    <div className="w-[100px] text-gray-700 font-semibold">Price</div>
                    <div className="w-[100px] text-gray-700 font-semibold">Color</div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-[120px] text-gray-700 font-semibold">Accessory Name</div>
                    <div className="w-[120px] text-gray-700 font-semibold">Accessory Price</div>
                  </div>
                </div>
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        No products found matching your search
                    </div>
                ) : (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white p-4 rounded-lg flex justify-between items-center shadow-sm hover:shadow-md transition duration-200 border border-gray-100">
                            <div className="flex items-center space-x-4">
                                <div className="h-5 w-5 border border-purple-300 rounded-sm hover:border-purple-500 transition duration-200"></div>
                                <img src={product.image} className="w-16 h-16 object-cover rounded-lg shadow-sm" alt={product.name}></img>
                                <div className="w-[120px] text-gray-700 truncate font-medium">{product.name}</div>
                                <div className="w-[100px] text-gray-700 truncate">{product.price}</div>
                                <div className="w-[100px] text-gray-700 truncate">{product.color}</div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="w-[120px]">
                                    {product.accessories.map((accessory, index) => (
                                        <div key={index} className="text-gray-600 truncate">{accessory.name}</div>
                                    ))}
                                </div>
                                <div className="w-[120px]">
                                    {product.accessories.map((accessory, index) => (
                                        <div key={index} className="text-gray-600 truncate">{accessory.price}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                )}
              </div>
             </div>
            </div>
        </div>
    )
}