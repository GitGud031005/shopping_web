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
        <>
            <div className="max-xl:hidden w-full h-[160px] fixed top-0 right-0 left-[60px] border-none z-1000 font-Montserrat">
                <div ref={headerRef} className="bg-secondary h-[102px] flex items-center transition-[height] duration-300 ease-in-out will-change-[height]">
                    <div className="flex-1 mr-[10px] flex justify-end items-center">
                        <img className="w-[215px] max-w-none h-auto ml-5 mr-[20px] cursor-pointer" src="/icon/halo-logo-250x46-1.webp" />
                    </div>
                    <div className="flex-2 relative flex flex-row justify-center items-center">
                        <input className="bg-white inline w-full h-[45px] border-none rounded-full pl-[20px] text-[15px]" type="text" placeholder="Search"></input>
                        <button className="flex items-center justify-center absolute right-1 w-[40px] h-[40px] bg-primary border-none rounded-full transition-[background-color] duration-200 ease-in-out cursor-pointer hover:bg-secondary" type="submit">
                            <img className='w-6' src="/icon/search-interface-symbol.png" />
                        </button>
                    </div>
                    <div className="flex-1 min-w-3xs flex-row ml-[20px] flex justify-start items-center text-white text-[10px]">
                        <img className="w-10" src="/icon/phone-icon-35x35.webp" />
                        <div className="ml-[10px] grid grid-rows-2 text-base leading-5">
                            <strong>HOTLINE</strong>
                            <strong className='text-primary'>028 7306 8666</strong>
                        </div>
                    </div>
                </div>
                <div className="relative flex h-[58px] flex-row bg-white border-b-2 border-b-gray-200 shadow-lg z-1000">
                    <div className="flex-4 flex flex-row ml-10 mr-[10px] items-center justify-end">
                        <div className="bg-primary flex items-center justify-around h-[40px] w-[210px] border-none rounded-full mr-[15px] relative cursor-pointer">
                            <div className="w-[35px] h-[35px] bg-white border-none rounded-full left-[3.5px] t-[3px] flex flex-col items-center justify-center gap-y-[5px]">
                                <span className="block w-[17px] h-[1.5px] bg-black ml-[-1px] rounded-sm p-0"></span>
                                <span className="block w-[17px] h-[1.5px] bg-black ml-[-1px] rounded-sm p-0"></span>
                                <span className="block w-[17px] h-[1.5px] bg-black ml-[-1px] rounded-sm p-0"></span>
                            </div>
                            <span className='text-[13.5px] pr-0.5'><strong>DANH MUC SAN PHAM</strong></span>
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
                        <div className="flex w-[150px] h-full text-[13.5px] justify-center items-center m-0 p-0">
                            <img className='inline w-[19px] h-auto mr-[5px] transition-[width] duration-1000 ease-in-out' src="/icon/images-6-150x150.webp" />
                            <strong className='relative inline-block transition-opacity duration-200 ease-out cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-[-1.5px] after:h-[2px] after:w-0 after:bg-primary after:transition-[width] after:duration-300 after:ease-in-out after:origin-left hover:after:w-full hover:opacity-60'
                            >CHUONG TRINH</strong>
                        </div>
                        <div className="flex w-[150px] h-full text-[13.5px] justify-center items-center m-0 p-0">
                            <img className='inline w-[19px] h-auto mr-[5px] transition-[width] duration-1000 ease-in-out' src="/icon/cua_hang.png" />
                            <strong className='relative inline-block transition-opacity duration-200 ease-out cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-[-1.5px] after:h-[2px] after:w-0 after:bg-primary after:transition-[width] after:duration-300 after:ease-in-out after:origin-left hover:after:w-full hover:opacity-60'
                            >CUA HANG</strong>
                        </div>
                        <div className="flex w-[150px] h-full text-[13.5px] justify-center items-center m-0 p-0">
                            <img className='inline w-[19px] h-auto mr-[5px] transition-[width] duration-1000 ease-in-out' src="/icon/ban_tin.png" />
                            <strong className='relative inline-block transition-opacity duration-200 ease-out cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-[-1.5px] after:h-[2px] after:w-0 after:bg-primary after:transition-[width] after:duration-300 after:ease-in-out after:origin-left hover:after:w-full hover:opacity-60'
                            >BAN TIN</strong>
                        </div>
                    </div>
                    <div className="flex-4 ml-[10px] mr-20 relative flex items-center">
                        <div className="absolute w-[43px] h-[43px] bg-primary border-none rounded-full left-4 flex flex-col justify-center items-center cursor-pointer">
                            <img className='w-50/100' src="/icon/online-shopping.png" />
                            <div className='absolute -right-1 -top-0.5 w-4 h-4 border-none bg-white shadow-sm/20 rounded-full flex items-center justify-center text-xs text-primary'>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="xl:hidden w-full h-[160px] fixed border-none z-100 font-Montserrat">
                <div className="bg-secondary h-[80px] flex items-center justify-center">
                    <div className="ml-4 flex-4 flex flex-col items-start justify-center gap-y-3">
                        <span className="block w-12 h-1 bg-white ml-[-1px] rounded-sm p-0"></span>
                        <span className="block w-12 h-1 bg-white ml-[-1px] rounded-sm p-0"></span>
                        <span className="block w-12 h-1 bg-white ml-[-1px] rounded-sm p-0"></span>
                    </div>
                    <div className="flex-2 flex justify-center items-center">
                        <img className="w-[215px] max-w-none h-auto ml-5 mr-[20px] cursor-pointer" src="/icon/halo-logo-250x46-1.webp" />
                    </div>
                    <div className="mr-2 flex-4 relative flex items-center">
                        <div className="absolute w-12 h-12 bg-primary border-none rounded-full right-4 flex flex-col justify-center items-center cursor-pointer">
                            <img className='w-50/100 invert' src="/icon/online-shopping.png" />
                            <div className='absolute -right-2 -top-1.5 w-5.5 h-5.5 border-none bg-white shadow-sm/20 rounded-full flex items-center justify-center text-sm text-primary'>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex h-20 flex-row bg-white border-b-2 border-b-gray-200 shadow-lg z-1000">
                    <div className="flex-2 relative flex flex-row justify-center items-center">
                        <input className="bg-white inline w-95/100 h-14 border border-gray-200 rounded-full pl-[20px] text-lg" type="text" placeholder="Search"></input>
                        <button className="flex items-center justify-center absolute right-8.5 w-12 h-12 bg-primary border-none rounded-full transition-[background-color] duration-200 ease-in-out cursor-pointer hover:bg-secondary" type="submit">
                            <img className='w-6' src="/icon/search-interface-symbol.png" />
                        </button>
                    </div>
                </div>
                <script type='module' src='./header.js'></script>
            </div>
        </>
    )
}

export default Header