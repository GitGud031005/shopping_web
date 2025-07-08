import { gameNitendo2, Price2Str } from "./game_data.js";

export function RenderNitendo2Game(){
  let nitendo2GamePRoduct = document.querySelector('.nitendo2-game-product-list');
  gameNitendo2.forEach((game) =>{
    let html =`
      <div class="nitendo2-game-product">
        <div class="nitendo2-game-product-frame">
          <div class="nitendo2-game-product-img-frame">
            <img class="nitendo2-game-product-img" src="${game.image}">
          </div>
    `;
    if(game.prorder === 1){
      html += `
      <div class="nitendo2-game-product-discription">
        <img class="nitendo2-game-product-preorder" src="icon/Preorder.png">`;
    }else{
      html += `
      <div class="nitendo2-game-product-discription">`
    }
    html += `
      <p class="nitendo2-game-product-name">
        ${game.name}
      </p>
      <p class="nitendo2-game-product-price">
        ${Price2Str(game.price.from)}
    `;
    if(game.price.to === 0){
      html += `</p></div></div>`;
    }else{
      html += ` - ${Price2Str(game.price.to)}</p></div></div>`;
    }

    nitendo2GamePRoduct.innerHTML += html;
  })
}

RenderNitendo2Game();

  document.querySelectorAll('.nitendo2-game-product-img-frame')
    .forEach(productImg => {
      productImg.addEventListener('mouseenter', () => {
        const frame = productImg.closest('.nitendo2-game-product-img-frame');

        if (!frame.querySelector('.nitendo2-game-product-img-frame-order')) {
          const buttonDiv = document.createElement('div');
          buttonDiv.className = 'nitendo2-game-product-img-frame-order';
          buttonDiv.innerHTML = `
          <div class="icon-nitendo2">
            <button class="nitendo2-game-product-img-frame-button shopping">
              <img style="width: 30px" class="nitendo2-game-product-img-frame-button-icon" src="icon/online-shopping.png">
            </button>
          </div>
          <div class="icon-nitendo2">
            <button class="nitendo2-game-product-img-frame-button search">
              <img class="nitendo2-game-product-img-frame-button-icon" src="icon/search-512.webp">
            </button>
            </div>
          `;
          frame.appendChild(buttonDiv);
        }
      });

      productImg.addEventListener('mouseleave', () => {
        const frame = productImg.closest('.nitendo2-game-product-img-frame');
        const existing = frame.querySelector('.nitendo2-game-product-img-frame-order');
        if (existing) existing.remove();
      });
    });

    document.querySelectorAll('.nitendo2-game-product-img-frame-button.search')
      .forEach(button => {
        button.addEventListener('mouseenter', () => {
          const bigDiv = button.closest('.icon-nitendo2');

          if (!bigDiv.querySelector(".noti-shopping")) {
            const notiDiv = document.createElement('div');
            notiDiv.className = 'nitendo2-game-noti-shopping';
            notiDiv.innerHTML = `
              <p class="noti-shopping">Lựa chọn tuỳ chọn</p>
            `;
            bigDiv.prepend(notiDiv);
          }
        });
      });