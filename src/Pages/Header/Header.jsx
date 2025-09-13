import './Header.css'

export function Header() {
  return (
    <div className="header">
      <div className="upper-header">
        <div className="upper-header-left">
          <img className="halo-logo" src="icon/halo-logo-250x46-1.webp" />
        </div>
        <div className="upper-header-mid">
          <input className="search-bar search-bar-js" type="text"
            placeholder="Bấm để tìm sản phẩm" />
            <button className="search-button-delete-js"></button>
            <div className="search-button-background"><button className="search-button" type="submit">
              <img style={{width: '65%'}} src="icon/search-interface-symbol.png" />
            </button></div>
        </div>
        <div className="upper-header-right">
          <div className="contact">
            <img className="icon-phone" src="icon/phone-icon-35x35.webp" />
              <div className="hotline">
                <p className='hotline-name'>HOTLINE</p>
                <p className='hotline-num'>028 7306 8666</p>
              </div>
          </div>
        </div>
      </div>
      <div className="lower-header">
        <div className="lower-header-left">
          <div className="prodlist">
            <div className="menu">
              <span className="ham"></span>
              <span className="ham"></span>
              <span className="ham"></span>
            </div>
            <span className='menu-name'><strong>DANH MỤC SẢN PHẨM</strong></span>
          </div>
        </div>
        <div className="lower-header-mid">
          <div className="menu-item">
            <img className='menu-item-img' src="icon/trang_chu.png" />
              <strong>TRANG CHỦ</strong>
          </div>
          <div className="menu-item">
            <img src="icon/san_pham.png" />
              <strong>SẢN PHẨM</strong>
          </div>
          <div className="menu-item">
            <img src="icon/images-6-150x150.webp" />
              <strong>CHƯƠNG TRÌNH</strong>
          </div>
          <div className="menu-item">
            <img src="icon/cua_hang.png" />
              <strong>CỬA HÀNG</strong>
          </div>
          <div className="menu-item">
            <img src="icon/ban_tin.png" />
              <strong>BẢN TIN</strong>
          </div>
        </div>
        <div className="lower-header-right">
          <div className="cart-button">
            <img className='cart-button-img' src="icon/online-shopping.png" />
          </div>
        </div>
      </div>

    </div>
  );
}