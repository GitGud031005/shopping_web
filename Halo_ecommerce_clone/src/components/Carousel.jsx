import './Carousel.css'

const Carousel = () => {
  return (
      <div id="default-carousel" className="relative w-full" data-carousel="static">
          <div className="relative h-120 overflow-hidden rounded-lg">    
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/Games/HollowKnight/HOLLOW-KNIGHT-US.webp" className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/Games/HollowKnight/HOLLOW-KNIGHT-US-41-01.webp" className="absolute block w-90/100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/Games/HollowKnight/HOLLOW-KNIGHT-US-41-02.webp" className="absolute block w-90/100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/Games/HollowKnight/HOLLOW-KNIGHT-US-41-03.webp" className="absolute block w-90/100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
          </div>
          <div className="absolute h-40 z-30 flex -translate-x-1/2 -bottom-50 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          </div>
          <button type="button" className="absolute top-0 -left-6 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent group-hover:opacity-50">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 1 1 5l4 4" />
                  </svg>
                  <span className="sr-only">Previous</span>
              </span>
          </button>
          <button type="button" className="absolute top-0 -right-6 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent group-hover:opacity-50">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="sr-only">Next</span>
              </span>
          </button>
      </div>
  )
}

export default Carousel