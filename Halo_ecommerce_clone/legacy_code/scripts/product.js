// scripts/product.js
import { cart } from '../data/product.js';

function formatVND(amount) {
  return amount.toLocaleString('vi-VN') + 'đ';
}

function renderProducts(arr) {
  const container = document.querySelector('.product-list');
  if (!container) return;
  const itemsToShow = arr.slice(0, 16);
  container.innerHTML = itemsToShow.map(item => `
    <div class="product-card">
      <div class="card-image">
        <div class="game-item">
          <img class="game1" src="${item.link1}" alt="${item.name}">
          <img class="game2" src="${item.link2}" alt="${item.name} hover">
        </div>
      </div>
      <div class="card-info">
        <span class="badge">PRE-ORDER</span>
        <h3 class="card-title">${item.name}</h3>
        <p class="card-price">${formatVND(item.maxPrice)}</p>
      </div>
    </div>
  `).join('');
}

function sortAndRender() {
  const mode = document.getElementById('sort').value;
  const sorted = [...cart].sort((a, b) => {
    if (mode==='price-asc') return a.maxPrice - b.maxPrice;
    if (mode==='price-desc') return b.maxPrice - a.maxPrice;
    return 0;
  });
  renderProducts(sorted);
}

document.addEventListener('DOMContentLoaded', () => {
  // 1) render sản phẩm + sort
  renderProducts(cart);
  document.getElementById('sort').addEventListener('change', sortAndRender);

  // 2) pagination
  const numbersBar = document.querySelector('.numbers-bar');
  const circle     = document.querySelector('.circle');
  const btnLeft    = document.querySelector('.fa-chevron-left');
  const btnRight   = document.querySelector('.fa-chevron-right');

  const totalPages = 10;   
  const step       = 50;   
  const showCnt    = 5;    
  let currentPage  = 1;
  let offset       = 0;    

  for (let i = 1; i <= totalPages; i++) {
    const span = document.createElement('span');
    span.textContent = i;
    span.style.cursor = 'pointer';
    span.addEventListener('click', () => {
      goTo(i)
    });
    numbersBar.appendChild(span);
  }
  numbersBar.querySelector('span').classList.add('active');

  function goTo(page) {
    currentPage = page;
    circle.style.marginLeft = `${(page - 1) * step}px`;
    const maxOffset = (totalPages - showCnt) * step;
    offset = Math.min(
      Math.max((page - Math.ceil(showCnt/2)) * step, 0),
      maxOffset
    );
    numbersBar.style.marginLeft = `-${offset}px`;

    numbersBar.querySelectorAll('span')
      .forEach(s => s.classList.remove('active'));
      numbersBar.children[page].classList.add('active');
  }

  btnLeft .addEventListener('click', () => currentPage>1 && goTo(currentPage - 1));
  btnRight.addEventListener('click', () => currentPage<totalPages && goTo(currentPage + 1));

  goTo(1);
});
