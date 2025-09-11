import Carousel from '../../components/Carousel.jsx'

const GameReview = () => {
  return (
    <div>
      <div className='ml-10 flex flex-row justify-between mb-4'>
        <span className='text-xl font-light inline'>Trang chủ /
          SẢN PHẨM /
          GAME /
          Game Nintendo Switch / <span className='font-semibold'>Game Hollow Knight – Nintendo Switch</span>
        </span>
        <div className='flex items-center w-20 justify-between '>
          <img src='/icon/left-arrow.png' className='w-4'></img>
          <img src='/icon/category.png' className='w-5'></img>
          <img src='/icon/right-arrow.png' className='w-4'></img>
        </div>
      </div>
      <div className='h-full grid md:grid-cols-2 grid-cols-1'>
        <div className='mr-4'>
          <Carousel></Carousel>
        </div>
        <div>
          <span className='text-4xl font-medium block mb-8 leading-12'>
            Game Hollow Knight – Nintendo Switch
          </span>
          <span className='block text-xl mb-8'>
            <strong className='font-semibold'>SKU:</strong> Không áp dụng
          </span>
          <span className='block text-5xl font-semibold mb-8'>
            950.000 ₫
          </span>
          <div className='flex flex-row justify-between w-70 mb-8'>
            <span className='text-xl font-semibold leading-8'>PHIÊN BẢN:</span>
            <button className='w-auto h-auto px-1.5 py-0.5 border-solid border-[1.5px] border-gray-200 rounded-md text-lg font-semibold hover:text-white hover:border-black hover:bg-secondary transition-colors duration-300'>EURO</button>
            <button className='w-auto h-auto px-1.5 py-0.5 border-solid border-[1.5px] border-gray-200 rounded-md text-lg font-semibold hover:text-white hover:border-black hover:bg-secondary transition-colors duration-300'>USA</button>
          </div>
          <div className='w-full h-14 flex justify-between items-center text-md font-semibold mb-8'>
            <div className='w-26 h-full flex flex-row'>
              <button className=' border-gray-200 border-1 h-full flex-2 rounded-bl-lg rounded-tl-lg hover:text-white hover:border-primary hover:bg-primary transition-colors duration-300'>
                -
              </button>
              <input className='w-10 border-gray-200 font-normal text-lg border-1 border-l-0 border-r-0 outline-none focus:outline-none ring-0 focus:ring-0 text-center' defaultValue={1}></input>
              <button className=' border-gray-200 border-1 h-full flex-2 rounded-br-lg rounded-tr-lg hover:text-white hover:border-primary hover:bg-primary transition-colors duration-300'>
                +
              </button>
            </div>
            <button className='bg-primary flex-1 h-full ml-4 text-lg font-semibold rounded-md hover:text-primary hover:border-black hover:bg-secondary transition-colors duration-300'>
              Mua Ngay
            </button>
          </div>
          <div className='w-full bg-gray-200 h-[1px] rounded-full mb-8'>

          </div>
          <div className='w-full h-auto border-gray-200 border-1 rounded-xl px-6'>
            <span className='block text-xl font-semibold mt-8 mb-4'>THANH TOÁN</span>
            <ul className='list-disc text-lg font-normal ml-16 leading-10'>
              <li>
                Thanh toán Tiền mặt/Chuyển khoản
              </li>
              <li>
                Thanh toán thẻ ATM/Napas +1%
              </li>
              <li>
                Thanh toán thẻ Visa/Master/JCB (tại Việt Nam) +2%
              </li>
              <li>
                Thanh toán thẻ Visa/Master/JCB/CUP (tại Nước ngoài) +3.5%
              </li>
              <li>
                Thanh toán thẻ Amex +3.5%
              </li>
            </ul>
            <span className='block text-xl font-semibold mt-8 mb-4'>TRẢ GÓP</span>
            <ul className='list-disc text-lg font-normal ml-16 leading-10'>
              <li>
                Trả Góp: Trả trước 10% + CCCD / Bằng lái (Xem chi tiết)
              </li>
              <li>
                Trả Góp: Dùng thẻ tín dụng lãi suất 0% ( Xem chi tiết )
              </li>
            </ul>
            <span className='block text-xl font-semibold mt-8 mb-4'>HÓA ĐƠN VAT</span>
            <ul className='list-disc text-xl font-normal ml-16 mb-10'>
              <li>
                Giá niêm yết đã bao gồm hóa đơn VAT.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameReview