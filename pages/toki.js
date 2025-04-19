import { useEffect } from "react"
import { useRouter } from "next/router";

export default function Toki() {
  const router = useRouter();

    useEffect(() => {
        document.querySelectorAll('[data-scroll-to]').forEach((item) => {
          item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-scroll-to');
            const targetElement = document.querySelector(targetId);
      
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
              console.error(`Element with ID ${targetId} not found`);
            }
          });
        });
      }, []);
      
    return(
        <div id="appbar" className="w-full">
            <div className="bg-white h-[80px] w-full flex items-center justify-between px-4 sm:px-10 md:px-20 pl-4 sm:pl-10 md:pl-20 sticky top-0 shadow-md z-50 ">
             <img 
               src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
               className="w-[120px] hover:scale-105 transition duration-300  "
               onClick={() => router.push("/")}
             ></img>
            <div className="hidden sm:flex space-x-5 flex-wrap justify-end text-sm pr-4 sm:pr-10 md:pr-20 ">
                <a href="#section1" className="text-black hover:text-yellow-500 cursor-pointer text-base">Үйлчилгээ</a>
                <a href="#section2" className="text-black hover:text-yellow-500 cursor-pointer text-base">Давуу тал</a>
                <a href="#section3" className="text-black hover:text-yellow-500 cursor-pointer text-base">Мэдээ</a>
                <a href="#section4" className="text-black hover:text-yellow-500 cursor-pointer text-base">Хамтран ажиллах</a>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-orange-100 w-full py-10 px-4 text-center">
                <p className="font-light text-black text-lg sm:text-xl mb-6">ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭ НЭГ ДООРООС...</p>
                <img 
                   src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png"
                   className="w-full max-w-[300px] sm:max-w-[500px] mb-6"
                ></img>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <img 
                      src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                      className="h-[100px] w-[180px] hover:scale-105 transition duration-300"
                    ></img>
                    <img
                      src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                      className="h=[50px] w-[110px] hover:scale-105 transition duration-300"
                    ></img>
                </div>
            </div>
            <div id="section1" className="bg-gray-100 w-full py-16 px-6 md:px-10 flex flex-col md:flex-row justify-center items-center gap-8 ">
                <img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-2.png" className="w-full max-w-[500px] rounded-lg shadow-lg"></img>
                <div className="text-left max-w-md">
                    <h2 className="text-[#FBBF24] text-2xl font-semibold md-4">Toki Service</h2>
                    <p className="text-gray-700 text-sm leading-relaxed ">"Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой."</p>
                </div>
            </div>
            <div id="section2" className="bg-orange-100 w-full py-16 px-6 md:px-20 flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="text-left md:text-right max-w-md ">
                    <h2 className="text-orange-300 text-2xl font-semibold mb-4">Toki Pay</h2>
                    <p className="text-gray-700 text-sm leading-relaxed ">"Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг баримтуудаа нэг дор хадгалаарай."</p>
                </div>
                <img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-3.png" className="w-full max-w-[500px] rounded-lg shadow-lg"></img>
            </div>
            <div id="section3" className="bg-gray-100 w-full py-16 px-6 md:px-10 flex flex-col md:flex-row justify-center items-center gap-8">
                <img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-4.png" className="w-full max-w-[500px] rounded-lg shadow-md"></img>
                <div className="text-left md:text-right max-w-md">
                  <h2 className="text-orange-300 text-2xl font-semibold mb-4">Toki Shop</h2>
                  <p className="text-gray-700 text-sm leading-relaxed">"Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос шууд захиалах боломжтой."</p>
                </div>
            </div>
            <div id="section4" className="bg-white w-full py-16 px-4 flex flex-col justify-center items-center space-y-4 text-center">
              <p className="text-orange-300 text-xl sm:text-2xl font-semibold">Toki апп өдөр бүр танд тусална</p>
              <p className="text-gray-700 max-w-xl text-sm">"Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг хэмнэх хялбар, хэрэгтэй аппликейшн юм."</p>
            </div>
            <div className="bg-orange-100 w-full py-8 flex flex-col justify-center items-center">
              <div className="bg-amber-400 rounded-full px-8 py-2 font-bold cursor-pointer hover:bg-amber-300 transition duration-300 text-sm">ДАВУУ ТАЛ</div>
            </div>
            <div className="bg-black w-full py-8 px-6 sm:px-12 md:px-20 flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0 text-center md:text-left">
              <img src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png" className="w-[80px] hover:scale-105 transition duration-300"></img>
              <div className="text-gray-400 space-y-1">
                <p className="hover:text-orange-200 cursor-pointer">Түгээмэл асуулт</p>
                <p>Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар</p>
                <p>77074477, 4477 info@toki.mn</p>
                <p>Copyright © 2022 | Toki.mn</p>
              </div>
              <p className="text-gray-400 hover:text-orange-200 cursor-pointer">Нууцлал</p>
            </div>
        </div>
    )
}