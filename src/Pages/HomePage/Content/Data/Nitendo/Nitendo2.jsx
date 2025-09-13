import './Nitendo2.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const gameNitendo2 = [
  {
    image: '/icon/Game.png',
    preorder: true,
    name: 'Game Monkey Kong Bonanza – Nintendo Switch 2',
    price: { from: 18000000, to: 0 },
  },
  {
    image: '/icon/Game.png',
    preorder: true,
    name: 'Game Monkey Kong Bonanza – Nintendo Switch 2',
    price: { from: 18000000, to: 0 },
  },
  {
    image: '/icon/Game.png',
    preorder: true,
    name: 'Game Monkey Kong Bonanza – Nintendo Switch 2',
    price: { from: 18000000, to: 20000000 },
  },
  {
    image: '/icon/Game.png',
    preorder: false,
    name: 'Game Monkey Kong Bonanza – Nintendo Switch 2',
    price: { from: 18000000, to: 0 },
  },
  {
    image: '/icon/Game.png',
    preorder: false,
    name: 'Game Monkey Kong Bonanza – Nintendo Switch 2',
    price: { from: 18000000, to: 20000000 },
  },
];

const formatVND = (n) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(n);

export function Nitendo2() {
  return (
    <>
      <div className='bg-gray-100 m-2 mt-5'>
        <div  className='m-2 w-full overflow-hidden justify-center' >
          <img src="public/icon/iphone-17-3.webp " className='rounded-[1rem] m-4 w-24/25 justify-center' />
        </div>
        <nav>
          <ul className='flex mt-6 border-b-2 border-gray-300 rounded-2xl m-5 h-10'>
            <li>
              <a href='' className='ml-[3rem] pb-2 text-red-600 text-base'>
                IPhone Air
              </a>
              <a href='' className='ml-[3rem] pb-2 text-black hover:text-yellow-300 text-base'>
                IPhone 17
              </a>
            </li>
          </ul>
        </nav>
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          spaceBetween={20}
          className="flex"
        >
          <SwiperSlide>
            <div className='m-2 flex-1 bg-white rounded-2xl'>
              <div className="relative w-64 h-64 rounded-xl group">

                <div className="absolute top-0 right-0 m-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="relative group/icon">
                    <button className="p-3 bg-white rounded-t-[4px] shadow relative overflow-hidden">
                      <img className='w-6' src='public/icon/online-shopping.png'></img>
                    </button>

                    <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                      Pre-Order
                    </span>
                    
                  </div>
                  <div className="relative group/icon">
                    <button className="p-3 bg-white rounded-b-[4px] overflow-hidden shadow relative">
                      <img className='w-6' src='public/icon/search-interface-symbol.png'></img>
                    </button>

                    <span className="absolute mr-2 right-full top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300">
                      Quick View
                    </span>
                    
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1'>
              <img className="" src="" alt="Banner 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1'>
              <img className="" src="" alt="Banner 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1'>
              <img className="" src="" alt="Banner 1" />
            </div>
          </SwiperSlide>
        </Swiper>
			</div>
    </>
  );
}
