import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export function Labubu(){
  return(
    <>
      <div className='bg-gray-100 m-2 mt-5'>
        <div  className='m-2 w-full overflow-hidden justify-center' >
          <img src="icon/labubu.webp" className='rounded-[1rem] m-4 w-24/25 justify-center' />
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
            640: { slidesPerView: 2, slidesPerGroup :2 },
            768: { slidesPerView: 3 , slidesPerGroup :3 },
            1024: { slidesPerView: 5, slidesPerGroup :5 },
          }}
          spaceBetween={20}
          className="flex items-stretch swip"
        >
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='w-full' src='icon/download (2).jpeg'></img>
                </div>
              </div>
              <div className=' p-3'>
                <h1 className='text-xl font-semibold m-1 text-center'>
                  THE MONSTER
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='w-full' src='icon/download (2).jpeg'></img>
                </div>
              </div>
              <div className=' p-3'>
                <h1 className='text-xl font-semibold m-1 text-center'>
                  THE MONSTER
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='w-full' src='icon/download (2).jpeg'></img>
                </div>
              </div>
              <div className=' p-3'>
                <h1 className='text-xl font-semibold m-1 text-center'>
                  THE MONSTER
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='w-full' src='icon/download (2).jpeg'></img>
                </div>
              </div>
              <div className=' p-3'>
                <h1 className='text-xl font-semibold m-1 text-center'>
                  THE MONSTER
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex-1 bg-white rounded-2xl'>
              <div className="relative group overflow-hidden ">
                <div className='object-center flex justify-center items-center'>
                  <img className='w-full' src='icon/download (2).jpeg'></img>
                </div>
              </div>
              <div className=' p-3'>
                <h1 className='text-xl font-semibold m-1 text-center'>
                  THE MONSTER
                </h1>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
        </div>
      
			</div>
    </>
  )
}
