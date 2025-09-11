const Footer = () => {
  return (
      <footer className="bg-black text-white px-10 py-5 w-full">
              <div className="flex w-full mx-0 my-auto flex-wrap gap-6 justify-between">
                  <div className="flex-1 min-w-50">
                      <img src="icon/halo-logo-250x46-1-200x34.webp" className="mb-4"/>
                      <p className="text-base">HALO Shop là một cửa hàng chuyên cung cấp các sản phẩm và dịch vụ về game…</p>
                  </div>
                  <div className="mt-2 flex-1">
                      <h4 className="mb-3 text-lg font-semibold">Địa chỉ</h4>
                      <ul className="list-none p-0">
                          <li className="text-base">92 Pasteur, P.Bến Nghé, Q.1, TP.HCM</li>
                          <li className="text-base">11 Nguyễn Hữu Cảnh, P.19, Q.Bình Thạnh, TP.HCM</li>
                      </ul>
                  </div>
                  <div className="mt-2 flex-1">
                  <h4 className="mb-3 text-lg font-semibold">Theo dõi Halo tại</h4>
                      <ul className="list-none p-0">
                          <li className="text-base"><a href="#">HALO.VN</a></li>
                          <li className="text-base"><a href="#">Hội PS5 Việt Nam</a></li>
                          <li className="text-base"><a href="#">Zalo Halo Shop</a></li>
                          <li className="text-base"><a href="#">YouTube HALOSHOP.VN</a></li>
                      </ul>
                  </div>
                  <div className="mt-2 flex-1">
                  <h4 className="mb-3 text-lg font-semibold">Thông tin</h4>
                      <ul className="list-none p-0">
                          <li className="text-base"><a href="#">Quy định chung</a></li>
                          <li className="text-base"><a href="#">Mua hàng trả góp</a></li>
                          <li className="text-base"><a href="#">Chính sách đổi/ trả hàng</a></li>
                          <li className="text-base"><a href="#">Tuyển dụng</a></li>
                      </ul>
                  </div>
              </div>
          <div className="border-t-1 border-solid border-[#333] mt-6 pt-4 text-center text-[#bbb] text-sm">
              © 2025 HALO Shop. All Rights Reserved.
          </div>
      </footer>
  )
}

export default Footer