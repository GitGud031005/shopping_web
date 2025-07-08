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

  document.querySelectorAll('.nitendo2-game-product-img')
    .forEach(productImg => {
      productImg.addEventListener('mouseenter', () => {
        const frame = productImg.closest('.nitendo2-game-product-img-frame');

        if (!frame.querySelector('.nitendo2-game-product-img-frame-order')) {
          const buttonDiv = document.createElement('div');
          buttonDiv.className = 'nitendo2-game-product-img-frame-order';
          buttonDiv.innerHTML = `
            <button>h</button>
            <button>h</button>
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