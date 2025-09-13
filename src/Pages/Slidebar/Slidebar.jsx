import { useEffect } from 'react';
import './Slidebar.css'

export function Slidebar() {

  useEffect(() =>{
    document.querySelectorAll('.sidebar-link.has-submenu').forEach((link) => {
      const submenu = link.querySelector('.submenu');

        link.addEventListener('mouseenter', () =>{
          submenu.style.top = '0px';
          submenu.style.bottom = 'auto';

          const rect = submenu.getBoundingClientRect();
          const viewportH = window.innerHeight;

          if (rect.bottom > viewportH) {
            const overshoot = rect.bottom - viewportH + 10;
            submenu.style.top = `-${overshoot}px`;
          }
        });

      link.addEventListener('mouseleave', () => {
        submenu.style.top = '';
      });
    });
  }, []);


  return (
    <div className="sidebar">
      <div className="sidebar-link">
        <div className="hamburger">
          <div className="icon">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <a href='#' className='danhmuc-label'>Danh mục</a>
        </div>
      </div>
      <div className="sidebar-link has-submenu">
        <a>
          <img src="icon/may_game.png" alt="Máy Game Mới" />
            <span className="label">MÁY GAME</span>
            <span className="arrow">›</span>
        </a>
        <div className="submenu">
          <a href="#">Máy PS5</a>
          <a href="#">Máy PS4</a>
          <a href="#">Máy Nintendo Switch 2</a>
          <a href="#">Máy PS5</a>
          <a href="#">Máy PS4</a>
          <a href="#">Máy Nintendo Switch 2</a>
          <a href="#">Máy PS5</a>
          <a href="#">Máy PS4</a>
          <a href="#">Máy Nintendo Switch 2</a>
          <a href="#">Máy PS5</a>
        </div>
      </div>
      <div className="sidebar-link has-submenu">
        <a>
          <img src="icon/may_game.png" alt="Máy Cũ" />
            <span className="label">MÁY CŨ</span>
            <span className="arrow">›</span>
        </a>
        <div className="submenu">
          <a href="#">Máy PS5</a>
          <a href="#">Máy PS4</a>
          <a href="#">Máy Nintendo</a>
          <a href="#">Máy Xbox</a>
          <a href="#">Máy PS3</a>
          <a href="#">Máy Handheld</a>
          <a href="#">Máy PSP/PS Vita</a>
          <a href="#">Nintendo 3DS / 2DS / DS</a>
          <a href="#">Máy Nintendo Switch 2</a>
          <a href="#">Iphone</a>
          <a href="#">Macbook</a>
          <a href="#">Surface</a>
        </div>
      </div>
      <div className="sidebar-link has-submenu">
        <a>
          <img src="icon/phu_kien_game.png" alt="Phụ Kiện Game" />
            <span className="label">PHỤ KIỆN GAME</span>
            <span className="arrow">›</span>
        </a>
        <div className="submenu">
          <a href="#">PS5</a>
          <a href="#">Máy PS4</a>
          <a href="#">Nintendo Switch 2</a>
          <a href="#">Máy PS5</a>
          <a href="#">Máy PS4</a>
          <a href="#">Máy Nintendo Switch 2</a>
          <a href="#">Máy PS5</a>

        </div>
      </div>
      <div className="sidebar-link has-submenu">
        <a>
          <img src="icon/apple-2.png" alt="Apple" />
            <span className="label">APPLE</span>
            <span className="arrow">›</span>
        </a>
        <div className="submenu">
          <a href="#">Máy PS5</a>
          <a href="#">Máy PS4</a>
          <a href="#">Máy Nintendo Switch 2</a>
          <a href="#">Máy PS5</a>
          <a href="#">Máy PS4</a>
          <a href="#">Máy Nintendo Switch 2</a>
          <a href="#">Máy PS5</a>
        </div>
      </div>
      <div className="sidebar-link has-submenu">
        <a>
          <img src="icon/game-2.png" alt="Digital Cards" />
            <span className="label">GAME</span>
            <span className="arrow">›</span>
        </a>
        <div className="submenu">
          <a href="#">Máy PS5</a>
          <a href="#">Máy PS4</a>
          <a href="#">Máy Nintendo Switch 2</a>
        </div>
      </div>

      <div className="sidebar-link">
        <a>
          <img src="icon/digital_cards.png" alt="Phụ Kiện Game" />
            <span className="label">DIGITAL CARDS</span>
            <span className="arrow">›</span>
        </a>
      </div>
      <div className="sidebar-link has-submenu">
        <a>
          <img src="icon/do_choi_qua_tang.png" alt="Apple" />
            <span className="label">ĐỒ CHƠI & QUÀ TẶNG</span>
            <span className="arrow">›</span>
        </a>
        <div className="submenu">
          <a href="#">Máy PS5</a>
          <a href="#">Máy PS4</a>
          <a href="#">Máy Nintendo Switch 2</a>
          <a href="#">Máy PS5</a>
        </div>
      </div>
      <div className="sidebar-link has-submenu">
        <a>
          <img src="icon/surface-1.png" alt="Digital Cards" />
            <span className="label">PHU KIEN</span>
            <span className="arrow">›</span>
        </a>
        <div className="submenu">
          <a href="#">Máy PS5</a>
          <a href="#">Máy PS4</a>
          <a href="#">Máy Nintendo Switch 2</a>
          <a href="#">Máy PS5</a>
          <a href="#">Máy PS4</a>
          <a href="#">Máy Nintendo Switch 2</a>
          <a href="#">Máy PS5</a>
          <a href="#">Máy PS5</a>
          <a href="#">Máy PS4</a>
          <a href="#">Máy Nintendo Switch 2</a>
          <a href="#">Máy PS5</a>
        </div>
      </div>
    </div>
  );
}