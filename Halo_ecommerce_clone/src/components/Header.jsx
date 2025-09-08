import './header.css';
import { useRef, useEffect } from 'react';
const Header = () => {
    const headerRef = useRef(null);
    const threshold = 30;

    useEffect(() => {
        const onScroll = () => {
            const shrink = window.scrollY > threshold;
            const header = headerRef.current;
            if (!header) return;
            header.classList.toggle('h-[80px]', shrink);
            header.classList.toggle('h-[102px]', !shrink);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        // run once in case user loads mid-page:
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="w-full h-[160px] fixed top-0 right-0 left-[60px] border-none z-100">
            <div ref={headerRef} className="bg-secondary h-[102px] flex items-center transition-[height] duration-[0.3s] ease-in-out will-change-[height]">
                <div className="flex-1 mr-[10px] flex justify-end items-center">
                    <img className="w-[215px] mr-[20px] cursor-pointer" src="/icon/halo-logo-250x46-1.webp" />
                </div>
                <div className="flex-2 flex justify-start items-center relative">
                    <input className="bg-white w-95/100 h-[45px] border-none rounded-full pl-[20px] text-[15px]" type="text" placeholder="Search" />
                    <button className="absolute w-[40px] h-[40px] bg-primary border-none rounded-full right-[20px] transition-[background-color] duration-200 ease-in-out cursor-pointer hover:bg-secondary" type="submit">
                        <img className='w-65/100' src="/icon/search-interface-symbol.png" />
                    </button>
                </div>
                <div className="upper-header-right">
                    <div className="contact">
                        <img className="icon-phone" src="/icon/phone-icon-35x35.webp" />
                        <div className="hotline">
                            <strong>HOTLINE</strong>
                            <strong className='text-primary'>028 7306 8666</strong>
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
                        <span className='text-[13.5px] absolute left-[44px] top-[12px]'><strong>DANH MUC SAN PHAM</strong></span>
                    </div>
                </div>
                <div className="lower-header-mid">
                    <div className="menu-item">
                        <img src="/icon/trang_chu.png" />
                        <strong>TRANG CHU</strong>
                    </div>
                    <div className="menu-item">
                        <img src="/icon/san_pham.png" />
                        <strong>SAN PHAM</strong>
                    </div>
                    <div className="menu-item">
                        <img src="/icon/images-6-150x150.webp" />
                        <strong>CHUONG TRINH</strong>
                    </div>
                    <div className="menu-item">
                        <img src="/icon/cua_hang.png" />
                        <strong>CUA HANG</strong>
                    </div>
                    <div className="menu-item">
                        <img src="/icon/ban_tin.png" />
                        <strong>BAN TIN</strong>
                    </div>
                </div>
                <div className="lower-header-right">
                    <div className="cart-button">
                        <img className='w-60/100' src="/icon/online-shopping.png" />
                    </div>
                </div>
            </div>
            <script type='module' src='./header.js'></script>
        </div>
    )
}

export default Header