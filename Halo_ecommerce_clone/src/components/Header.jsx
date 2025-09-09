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
                <div className="flex-1 flex-col ml-[20px] flex justify-center items-start text-white text-[10px]">
                    <div className="w-[200px] h-[70px] p-0 ml-[10px] flex-row justify-start items-center">
                        <img className="w-[35px]" src="/icon/phone-icon-35x35.webp" />
                        <div className="ml-[10px] grid grid-rows-2 text-[20px]">
                            <strong>HOTLINE</strong>
                            <strong className='text-primary'>028 7306 8666</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-[58px] flex-row bg-white border-b-2 border-b-gray-200 shadow-lg z-1000">
                <div className="flex-4 flex flex-row mr-[10px] items-center justify-end">
                    <div className="bg-primary h-[40px] w-[210px] border-none rounded-full mr-[15px] relative cursor-pointer">
                        <div className="absolute w-[35px] h-[35px] bg-white border-none rounded-full left-[3.5px] t-[3px] flex flex-col items-center justify-center gap-y-[5px]">
                            <span className="block w-[17px] h-[1.5px] bg-black ml-[-1px] rounded-sm p-0"></span>
                            <span className="block w-[17px] h-[1.5px] bg-black ml-[-1px] rounded-sm p-0"></span>
                            <span className="block w-[17px] h-[1.5px] bg-black ml-[-1px] rounded-sm p-0"></span>
                        </div>
                        <span className='text-[13.5px] absolute left-[44px] top-[12px]'><strong>DANH MUC SAN PHAM</strong></span>
                    </div>
                </div>
                <div className="flex-1 flex justify-between items-center pr-[30px]">
                    <div className="flex w-[150px] h-full text-[13.5px] justify-center items-center m-0 p-0">
                        <img className='inline w-[19px] h-auto mr-[5px] transition-[width] duration-1000 ease-in-out' src="/icon/trang_chu.png" />
                        <strong className='relative inline-block transition-opacity duration-200 ease-out cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-[-1.5px] after:h-[2px] after:w-0 after:bg-primary after:transition-[width] after:duration-300 after:ease-in-out after:origin-left hover:after:w-full hover:opacity-60'
                        >TRANG CHU</strong>
                    </div>
                    <div className="flex w-[150px] h-full text-[13.5px] justify-center items-center m-0 p-0">
                        <img className='inline w-[19px] h-auto mr-[5px] transition-[width] duration-1000 ease-in-out' src="/icon/san_pham.png" />
                        <strong className='relative inline-block transition-opacity duration-200 ease-out cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-[-1.5px] after:h-[2px] after:w-0 after:bg-primary after:transition-[width] after:duration-300 after:ease-in-out after:origin-left hover:after:w-full hover:opacity-60'
                        >SAN PHAM</strong>
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