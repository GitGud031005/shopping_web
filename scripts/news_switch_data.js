export const newsData = [{
    image: '/icon/news_1.webp',
    title: 'Tất Tần Tật Mọi Thông Tin Về Nintendo Switch 2 Bạn Cần Biết'
},{
    image: '/icon/news_2.webp',
    title: 'Cách Tạo Tài Khoản Switch 2: Hướng Dẫn Chi Tiết Từ HALO Shop'
},{
    image: '/icon/news_3.webp',
    title: 'Hướng Dẫn Setup Máy Switch 2 Ban Đầu Dễ Dàng Từng Bước Từ HALO Shop!'
},{
    image: '/icon/news_4.webp',
    title: 'Trên Tay Nintendo Switch 2 Đầu Tiên Tại Việt Nam'
},{
    image: '/icon/news_5.webp',
    title: 'Danh Sách Game Được Miễn Phí Nâng Cấp Trên Nintendo Switch 2'
},{
    image: '/icon/news_6.webp',
    title: 'Nintendo Switch 2 Hỗ Trợ Game Gì? Danh Sách Game Tương Thích Đáng Chú Ý'
},{
    image: '/icon/news_7.webp',
    title: 'Nintendo Switch 2 – Thông số kỹ thuật, tính năng mới và những điều game thủ cần biết'
},{
    image: '/icon/news_8.webp',
    title: 'Thu Cũ Đổi Mới Nintendo Switch'
},{
    image: '/icon/news_9.webp',
    title: 'Vì Sao Nên Mua Switch 2 Mario Kart World Bundle?'
},{
    image: '/icon/news_10.webp',
    title: 'Switch 2 Cháy Hàng: Một Số Đơn Hàng Có Thể Đến Muộn Sau Ngày Phát Hành'
}]

export function RenderNews(){
  newsData.forEach(news => {
    const newsDiv = document.querySelector('.news-swiper.swiper-wrapper');
    let html = `
      <div class="news-frame swiper-slide">
        <img class="news-figure" src="${news.image}">
        <p class"news-title">${news.title}</p>
      </div>
    `;
    newsDiv.innerHTML += html;
  })
}
RenderNews()
