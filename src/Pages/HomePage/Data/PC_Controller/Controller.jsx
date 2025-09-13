import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import'./Controller.css'
import { formatVND } from '../../../../utils/utils'


export function Controller(){
  return(
    <>
      <div className='bg-gray-100 m-2 mt-5'>
        <div  className='m-2 w-full overflow-hidden justify-center' >
          <img src="icon/pc-controller.webp " className='rounded-[1rem] m-4 w-24/25 justify-center' />
        </div>
        <div className='m-5'> 
          <Swiper
          loop={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1, slidesPerGroup :1 },
            768: { slidesPerView: 3 , slidesPerGroup :3 },
            1024: { slidesPerView: 4, slidesPerGroup :5 },
          }}
          spaceBetween={20}
          className="flex items-stretch swip"
        >
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative rounded-xl group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='' src='icon/download (1).jpeg'></img>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 w-full h-full invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className='relative w-full h-full group/icon bg-white flex justify-center items-center'>
                    <img className='w-[90%] object-center transform transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-y-1' src='icon/download.jpeg'></img>
                  </div>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="relative group/icon">
                    <button className="p-3 bg-white rounded-t-[4px] shadow relative overflow-hidden">
                      <img className='w-6' src='icon/online-shopping.png'></img>
                    </button>

                    <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                      Order
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
                <h1 className='text-lg m-1 text-gray-600'>
                  Turtle Beach – Xbox Stealth Pivot Wireless Smart Controller
                </h1>
                <p className='text-sm'>
                  {formatVND(4200000)}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative rounded-xl group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='' src='icon/download (1).jpeg'></img>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 w-full h-full invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className='relative w-full h-full group/icon bg-white flex justify-center items-center'>
                    <img className='w-[90%] object-center transform transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-y-1' src='icon/download.jpeg'></img>
                  </div>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="relative group/icon">
                    <button className="p-3 bg-white rounded-t-[4px] shadow relative overflow-hidden">
                      <img className='w-6' src='icon/online-shopping.png'></img>
                    </button>

                    <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                      Order
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
                <h1 className='text-lg m-1 text-gray-600'>
                  Turtle Beach – Xbox Stealth Pivot Wireless Smart Controller
                </h1>
                <p className='text-sm'>
                  {formatVND(4200000)}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative rounded-xl group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='' src='icon/download (1).jpeg'></img>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 w-full h-full invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className='relative w-full h-full group/icon bg-white flex justify-center items-center'>
                    <img className='w-[90%] object-center transform transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-y-1' src='icon/download.jpeg'></img>
                  </div>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="relative group/icon">
                    <button className="p-3 bg-white rounded-t-[4px] shadow relative overflow-hidden">
                      <img className='w-6' src='icon/online-shopping.png'></img>
                    </button>

                    <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                      Order
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
                <h1 className='text-lg m-1 text-gray-600'>
                  Turtle Beach – Xbox Stealth Pivot Wireless Smart Controller
                </h1>
                <p className='text-sm'>
                  {formatVND(4200000)}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative rounded-xl group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='' src='icon/download (1).jpeg'></img>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 w-full h-full invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className='relative w-full h-full group/icon bg-white flex justify-center items-center'>
                    <img className='w-[90%] object-center transform transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-y-1' src='icon/download.jpeg'></img>
                  </div>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="relative group/icon">
                    <button className="p-3 bg-white rounded-t-[4px] shadow relative overflow-hidden">
                      <img className='w-6' src='icon/online-shopping.png'></img>
                    </button>

                    <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                      Order
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
                <h1 className='text-lg m-1 text-gray-600'>
                  Turtle Beach – Xbox Stealth Pivot Wireless Smart Controller
                </h1>
                <p className='text-sm'>
                  {formatVND(4200000)}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative rounded-xl group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='' src='icon/download (1).jpeg'></img>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 w-full h-full invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className='relative w-full h-full group/icon bg-white flex justify-center items-center'>
                    <img className='w-[90%] object-center transform transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-y-1' src='icon/download.jpeg'></img>
                  </div>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="relative group/icon">
                    <button className="p-3 bg-white rounded-t-[4px] shadow relative overflow-hidden">
                      <img className='w-6' src='icon/online-shopping.png'></img>
                    </button>

                    <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                      Order
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
                <h1 className='text-lg m-1 text-gray-600'>
                  Turtle Beach – Xbox Stealth Pivot Wireless Smart Controller
                </h1>
                <p className='text-sm'>
                  {formatVND(4200000)}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative rounded-xl group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='' src='icon/download (1).jpeg'></img>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 w-full h-full invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className='relative w-full h-full group/icon bg-white flex justify-center items-center'>
                    <img className='w-[90%] object-center transform transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-y-1' src='icon/download.jpeg'></img>
                  </div>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="relative group/icon">
                    <button className="p-3 bg-white rounded-t-[4px] shadow relative overflow-hidden">
                      <img className='w-6' src='icon/online-shopping.png'></img>
                    </button>

                    <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                      Order
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
                <h1 className='text-lg m-1 text-gray-600'>
                  Turtle Beach – Xbox Stealth Pivot Wireless Smart Controller
                </h1>
                <p className='text-sm'>
                  {formatVND(4200000)}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative rounded-xl group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='' src='icon/download (1).jpeg'></img>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 w-full h-full invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className='relative w-full h-full group/icon bg-white flex justify-center items-center'>
                    <img className='w-[90%] object-center transform transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-y-1' src='icon/download.jpeg'></img>
                  </div>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="relative group/icon">
                    <button className="p-3 bg-white rounded-t-[4px] shadow relative overflow-hidden">
                      <img className='w-6' src='icon/online-shopping.png'></img>
                    </button>

                    <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                      Order
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
                <h1 className='text-lg m-1 text-gray-600'>
                  Turtle Beach – Xbox Stealth Pivot Wireless Smart Controller
                </h1>
                <p className='text-sm'>
                  {formatVND(4200000)}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative rounded-xl group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='' src='icon/download (1).jpeg'></img>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 w-full h-full invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className='relative w-full h-full group/icon bg-white flex justify-center items-center'>
                    <img className='w-[90%] object-center transform transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-y-1' src='icon/download.jpeg'></img>
                  </div>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="relative group/icon">
                    <button className="p-3 bg-white rounded-t-[4px] shadow relative overflow-hidden">
                      <img className='w-6' src='icon/online-shopping.png'></img>
                    </button>

                    <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                      Order
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
                <h1 className='text-lg m-1 text-gray-600'>
                  Turtle Beach – Xbox Stealth Pivot Wireless Smart Controller
                </h1>
                <p className='text-sm'>
                  {formatVND(4200000)}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative rounded-xl group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='' src='icon/download (1).jpeg'></img>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 w-full h-full invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className='relative w-full h-full group/icon bg-white flex justify-center items-center'>
                    <img className='w-[90%] object-center transform transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-y-1' src='icon/download.jpeg'></img>
                  </div>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="relative group/icon">
                    <button className="p-3 bg-white rounded-t-[4px] shadow relative overflow-hidden">
                      <img className='w-6' src='icon/online-shopping.png'></img>
                    </button>

                    <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                      Order
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
                <h1 className='text-lg m-1 text-gray-600'>
                  Turtle Beach – Xbox Stealth Pivot Wireless Smart Controller
                </h1>
                <p className='text-sm'>
                  {formatVND(4200000)}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative rounded-xl group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='' src='icon/download (1).jpeg'></img>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 w-full h-full invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className='relative w-full h-full group/icon bg-white flex justify-center items-center'>
                    <img className='w-[90%] object-center transform transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-y-1' src='icon/download.jpeg'></img>
                  </div>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="relative group/icon">
                    <button className="p-3 bg-white rounded-t-[4px] shadow relative overflow-hidden">
                      <img className='w-6' src='icon/online-shopping.png'></img>
                    </button>

                    <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                      Order
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
                <h1 className='text-lg m-1 text-gray-600'>
                  Turtle Beach – Xbox Stealth Pivot Wireless Smart Controller
                </h1>
                <p className='text-sm'>
                  {formatVND(4200000)}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative rounded-xl group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='' src='icon/download (1).jpeg'></img>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 w-full h-full invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className='relative w-full h-full group/icon bg-white flex justify-center items-center'>
                    <img className='w-[90%] object-center transform transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-y-1' src='icon/download.jpeg'></img>
                  </div>
                </div>
                <div className="absolute top-0 right-0 m-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="relative group/icon">
                    <button className="p-3 bg-white rounded-t-[4px] shadow relative overflow-hidden">
                      <img className='w-6' src='icon/online-shopping.png'></img>
                    </button>

                    <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                      Order
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
                <h1 className='text-lg m-1 text-gray-600'>
                  Turtle Beach – Xbox Stealth Pivot Wireless Smart Controller
                </h1>
                <p className='text-sm'>
                  {formatVND(4200000)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
      
			</div>
    </>
  )
}