import './IPhone17.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { formatVND } from '../../../../utils/utils'

const iPhoneAirData = [
  { id: 1, name: "IPhone Air - Space Black VN/A", mainImage: "icon/IPHONE-AIR-CLOUD-WHITE-00.webp", hoverImage: "icon/iPhone_Air_Cloud_White_PDP_Image_Position_7_Colors__VN-VI.jpg", price: 31999000 },
  { id: 2, name: "IPhone Air - Space Black VN/A", mainImage: "icon/IPHONE-AIR-CLOUD-WHITE-00.webp", hoverImage: "icon/iPhone_Air_Cloud_White_PDP_Image_Position_7_Colors__VN-VI.jpg", price: 31999000 },
  { id: 3, name: "IPhone Air - Space Black VN/A", mainImage: "icon/IPHONE-AIR-CLOUD-WHITE-00.webp", hoverImage: "icon/iPhone_Air_Cloud_White_PDP_Image_Position_7_Colors__VN-VI.jpg", price: 31999000 },
  { id: 4, name: "IPhone Air - Space Black VN/A", mainImage: "icon/IPHONE-AIR-CLOUD-WHITE-00.webp", hoverImage: "icon/iPhone_Air_Cloud_White_PDP_Image_Position_7_Colors__VN-VI.jpg", price: 31999000 },
  { id: 5, name: "IPhone Air - Space Black VN/A", mainImage: "icon/IPHONE-AIR-CLOUD-WHITE-00.webp", hoverImage: "icon/iPhone_Air_Cloud_White_PDP_Image_Position_7_Colors__VN-VI.jpg", price: 31999000 },
];

const iPhone17ProData = [
  { id: 1, name: "IPhone 17 Pro - Cosmic Orange VN/A", mainImage: "icon/IPHONE-17-PRO-COSMIC-ORANGE-00.webp", hoverImage: "icon/images.jpeg", price: 31999000 },
  { id: 2, name: "IPhone 17 Pro - Cosmic Orange VN/A", mainImage: "icon/IPHONE-17-PRO-COSMIC-ORANGE-00.webp", hoverImage: "icon/images.jpeg", price: 31999000 },
  { id: 3, name: "IPhone 17 Pro - Cosmic Orange VN/A", mainImage: "icon/IPHONE-17-PRO-COSMIC-ORANGE-00.webp", hoverImage: "icon/images.jpeg", price: 31999000 },
  { id: 4, name: "IPhone 17 Pro - Cosmic Orange VN/A", mainImage: "icon/IPHONE-17-PRO-COSMIC-ORANGE-00.webp", hoverImage: "icon/images.jpeg", price: 31999000 },
  { id: 5, name: "IPhone 17 Pro - Cosmic Orange VN/A", mainImage: "icon/IPHONE-17-PRO-COSMIC-ORANGE-00.webp", hoverImage: "icon/images.jpeg", price: 31999000 },
  { id: 6, name: "IPhone 17 Pro - Cosmic Orange VN/A", mainImage: "icon/IPHONE-17-PRO-COSMIC-ORANGE-00.webp", hoverImage: "icon/images.jpeg", price: 31999000 },
  { id: 7, name: "IPhone 17 Pro - Cosmic Orange VN/A", mainImage: "icon/IPHONE-17-PRO-COSMIC-ORANGE-00.webp", hoverImage: "icon/images.jpeg", price: 31999000 },
];

export function IPhone17() {
  return (
    <div className='bg-gray-100 m-2 mt-5'>
      <div className='m-2 overflow-hidden justify-center'>
        <img src="icon/iphone-17-3.webp" className='rounded-[1rem] m-4 w-24/25 justify-center' />
      </div>

      <nav>
        <ul className='flex mt-6 border-b-2 border-gray-300 rounded-2xl m-5 h-10'>
          <li>
            <a className='ml-[3rem] pb-2 text-red-600 text-base'>IPhone Air</a>
            <a className='ml-[3rem] pb-2 text-black hover:text-yellow-300 text-base'>IPhone 17</a>
          </li>
        </ul>
      </nav>

      <div className='m-5'>
        <Swiper
          loop={false}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
          spaceBetween={20}
          className="flex swip"
        >
          {iPhoneAirData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='flex-1 bg-white rounded-2xl'>
                <div className="relative rounded-xl group overflow-hidden">
                  <img src={item.mainImage} alt={item.name} />
                  <div className="absolute top-0 right-0 m-2 opacity-0 h-full invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className='relative group/icon h-full bg-white flex justify-center items-center'>
                      <img className='w-full object-center transform transition-transform duration-1000 group-hover:scale-110 group-hover:-translate-y-1' src={item.hoverImage} />
                    </div>
                  </div>
                    <div className="absolute top-0 right-0 m-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="relative group/icon">
                      <button className="p-3 bg-white rounded-t-[4px] shadow relative overflow-hidden">
                        <img className='w-6' src='icon/online-shopping.png'></img>
                      </button>

                      <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                        Pre-Order
                      </span>
                      
                    </div>
                    <div className="relative group/icon">
                      <button className="p-3 bg-white rounded-b-[4px] overflow-hidden shadow relative">
                        <img className='w-6' src='icon/search-interface-symbol.png'></img>
                      </button>

                      <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                        Quick View
                      </span>
                      
                    </div>
                  </div>
                </div>
                <div className='mt-6 p-3'>
                  <h1 className='text-xl m-1'>{item.name}</h1>
                  <p className='text-sm'>{formatVND(item.price)}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <nav>
        <ul className='flex mt-6 border-b-2 border-gray-300 rounded-2xl m-5 h-10 mt-10'>
          <li>
            <a className='ml-[3rem] pb-2 text-red-600 text-base'>IPhone 17 Pro Max</a>
            <a className='ml-[3rem] pb-2 text-black hover:text-yellow-300 text-base'>IPhone 17 Pro</a>
          </li>
        </ul>
      </nav>

      <div className='m-5'>
        <Swiper
          loop={false}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
          spaceBetween={20}
          className="flex swip"
        >
          {iPhone17ProData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='flex-1 bg-white rounded-2xl'>
                <div className="relative rounded-xl group overflow-hidden">
                  <img src={item.mainImage} alt={item.name} />
                  <div className="absolute top-0 right-0 m-2 opacity-0 w-full h-full invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className='relative group/icon w-full h-full flex justify-center items-center bg-white'>
                      <img className='object-cover transform transition-transform duration-1000 group-hover:scale-110 group-hover:-translate-y-1' src={item.hoverImage} />
                    </div>
                  </div>
                </div>
                <div className='mt-6 p-3'>
                  <h1 className='text-xl m-1'>{item.name}</h1>
                  <p className='text-sm'>{formatVND(item.price)}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}