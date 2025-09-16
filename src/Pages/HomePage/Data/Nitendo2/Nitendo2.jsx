import { formatVND } from "../../../../utils/utils"

const data=[
  {id: 1, content: "Máy Switch 2", img: "icon/Nintendo-Switch-2-New-Gaming-Console-768x568-removebg-preview.png"},
  {id: 2, content: "Game Switch 2", img: "icon/Donkey-kong.webp"},
  {id: 3, content: "Phụ kiện Switch 2", img: "icon/tay_cam_joy-con_2_nintendo_switch_2_6_92fd8647c7eb4a4bb791d65134ca8bcf_1024x1024-removebg-preview.png"}
]

export function Nitendo2(){
  return(
    <>
    <div className='bg-gray-100 m-2 mt-5 overflow-hidden'>
      <div className='m-2 overflow-hidden justify-center mb-0'>
        <img src="icon/nintendo-sw2 (1).webp" className='rounded-[1rem] m-4 w-24/25 justify-center' />
      </div>
      <div className="bg-white rounded-3xl m-6 mt-0 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className="lg:col-span-2">
          <h1 className="lg:text-5xl md:text-4xl text-2xl p-15 pl-5 pb-3"> NINTENDO SWITCH 2</h1>
          <p className="lg:text-lg md:text-[14px] text-[10px] text-gray-800 p-5">Là thế hệ máy chơi game cầm tay lai (hybrid) mới nhất của Nintendo, vừa ra mắt toàn cầu vào <span className="font-bold">ngày 5 tháng 6 năm 2025</span></p>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 p-8">
            {data.map(data => (
              <div key={data.id} className="bg-red-600 cursor-pointer flex shadow shadow-gray-600 rounded-[6px]">
                <div className="flex-2 z-10 flex flex-col justify-center relative">
                  <p className='m-3 font-semibold text-center text-white text-[18px] mb-25'>{data.content}</p>
                  <button className="absolute bottom-3 left-2 cursor-pointer bg-white hover:bg-gray-100 m-5 p-2 rounded-[4px]"> Xem Thêm </button>
                </div>
                <div className="flex-1 overflow-visible">
                  <img className=" h-full z-1 object-cover overflow-visible ml-[-27px]" src={data.img} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center p-6">
          <div className="border-2 border-red-500 rounded-[7px] h-full w-full flex justify-center items-center p-2">
            <div className="flex-1 shadow shadow-gray-200 rounded-[7px]">
              <div className='flex-1 bg-white rounded-2xl'>
                <div className="relative rounded-xl group overflow-hidden">
                  <div className='flex justify-center items-center'>
                    <img src="icon/download (3).jpeg"/>
                  </div>

                  <div className="absolute top-0 right-0 m-2 opacity-0 w-full h-full invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className='relative w-full h-full group/icon bg-white flex justify-center items-center'>
                      <img className='h-full transform transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-y-1' src="icon/nintendo-switch-2-gray-13-1.jpg" />
                    </div>
                  </div>

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

                <div className='mt-6 p-3'>
                  <h1 className='text-lg m-1 text-gray-600'>Nintendo Switch 2</h1>
                  <p className='text-sm'>{formatVND(12350000 )}</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
    </>
  )
}